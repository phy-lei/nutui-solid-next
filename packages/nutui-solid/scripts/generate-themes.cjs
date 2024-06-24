/* eslint-disable @typescript-eslint/no-var-requires */
// const target = process.argv[2]
const path = require('node:path')
const fs = require('fs-extra')
const sass = require('sass')
const config = require('../../config.json')

let sassFileStr = ``
let tasks = []
// if (!target) {
//   sassFileStr += `@import '@nutui/icons-solid/dist/style_icon.css';\n`
// }
config.nav.map((item) => {
  item.packages.forEach((element) => {
    const folderName = element.name.toLowerCase()
    if (element.exclude != true) {
      sassFileStr += `@import '../src/components/${folderName}/index.scss';\n`
    }
    tasks.push(
      fs
        .copy(
          path.resolve(__dirname, `../src/components/${folderName}/index.scss`),
          path.resolve(__dirname, `../dist/packages/${folderName}/index.scss`),
        )
        .catch((error) => {
          console.error(error)
        }),
    )
  })
})

tasks.push(fs.copy(path.resolve(__dirname, '../src/styles'), path.resolve(__dirname, '../dist/styles')))

const themesEnum = {
  jdt: 'variables-jdt',
  jdb: 'variables-jdb',
  jddkh: 'variables-jddkh',
}

// 将scss文件额外转换一份css
function sassTocss() {
  const sassTocssTasks = []
  config.nav.map((item) => {
    item.packages.forEach((element) => {
      const folderName = element.name.toLowerCase()

      try {
        const filePath = path.resolve(__dirname, `../dist/packages/${folderName}/main.scss`)
        console.log('lujing', process.env.PWD, filePath)
        sassTocssTasks.push(
          // 写入main.scss，引入变量文件variables.scss和组件样式index.scss
          fs.outputFile(
            filePath,
            `@import '../../styles/variables.scss';\n@import './index.scss';\n`,
            'utf8',
            (error) => {
              if (error)
                return console.error(error)
              try {
                // 编译sass为css
                const result = sass.compile(filePath, { style: 'compressed' })
                // 删除main.scss
                fs.unlinkSync(filePath)
                // 写入index.css
                fs.outputFile(
                  path.resolve(__dirname, `../dist/packages/${folderName}/index.css`),
                  result.css,
                  'utf8',
                  (error) => {
                    if (error)
                      return console.log(error)
                  },
                )
              }
              catch (err) {
                console.error(err)
              }
            },
          ),
        )
      }
      catch (err) {
        console.error(err)
      }
    })
  })
  Promise.all(sassTocssTasks).then(() => {
    console.log(`css文件写入成功`)
  })
}

// 解析scss文件，生成css变量
function parseFile(filename, theme = 'default') {
  return fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) {
      console.error(`无法读取文件: ${err}`)
      return
    }

    const variables = {}
    const lines = data.split('\n')
    lines.forEach((line) => {
      if (line.startsWith('$')) {
        const trimmedLine = line.trim().replace(';', '')
        const [key, value] = trimmedLine.split(': ')
        variables[key] = value
      }
    })

    let fileContent = `@import './${themesEnum[theme]}.scss';\n:root {\n`
    for (const key in variables) {
      if (Object.prototype.hasOwnProperty.call(variables, key)) {
        const variableName = key.slice(1)
        fileContent += `  --nut-${variableName}: #{$${variableName}};\n`
      }
    }
    fileContent += `}`
    const base = theme === 'default' ? 'base' : `base-${theme}`
    const filePath = path.resolve(__dirname, `../dist/styles/${base}.scss`)
    fs.outputFile(filePath, fileContent, 'utf8', (error) => {
      if (error)
        return console.error(error)
      // 编译sass为css
      const result = sass.compile(filePath, { style: 'compressed' })
      // base.scss
      fs.unlinkSync(filePath)
      // 写入index.css
      fs.outputFile(path.resolve(__dirname, `../dist/styles/${base}.css`), result.css, 'utf8', (error) => {
        if (error)
          return console.log(error)
      })
    })
  })
}

// 循环themesEnum，生成不同的css变量主题
function variablesResolver() {
  const variablesResolverTasks = []
  Object.keys(themesEnum).forEach((theme) => {
    variablesResolverTasks.push(parseFile(path.resolve(__dirname, `../dist/styles/${themesEnum[theme]}.scss`), theme))
  })
  Promise.all(variablesResolverTasks).then(() => {
    console.log('base文件写入成功')
  })
}

Promise.all(tasks).then(() => {
  const themes = [
    { file: 'default.scss', sourcePath: `@import '../variables.scss';` },
    { file: 'jdt.scss', sourcePath: `@import '../variables-jdt.scss';` },
    { file: 'jdb.scss', sourcePath: `@import '../variables-jdb.scss';` },
    { file: 'jddkh.scss', sourcePath: `@import '../variables-jddkh.scss';` },
  ]
  tasks = []
  themes.forEach((item) => {
    tasks.push(
      fs.outputFile(
        path.resolve(__dirname, `../dist/styles/themes/${item.file}`),
        `${item.sourcePath}\n${sassFileStr}`,
        'utf8',
        (error) => {
          if (error)
            return console.error(error)
        },
      ),
    )
  })
  Promise.all(tasks).then(() => {
    console.log(`sass文件写入成功`)
    sassTocss()
    variablesResolver()
  })
})
