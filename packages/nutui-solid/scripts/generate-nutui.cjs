const packageConfig = require('../package.json')
const config = require('../../config.json')
const path = require('path')
const fs = require('fs-extra')
let importStr = ''
let importScssStr = `\n`
const packages = []
config.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name, show, exportEmpty, exclude } = element
    if (exclude) return
    if (show || exportEmpty) {
      importStr += `import ${name} from './${name.toLowerCase()}';\n`
      importStr += `export * from './${name.toLowerCase()}';\n`
      importScssStr += `import './${name.toLowerCase()}/index.scss';\n`
      packages.push(name)
    }
  })
})


let fileStrDev = `${importStr}
${importScssStr}
export { ${packages.join(', ')} };
`
fs.outputFile(path.resolve(__dirname, '../src/components/nutui.solid.build.ts'), fileStrDev, 'utf8')

