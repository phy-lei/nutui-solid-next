/* eslint-disable */
const glob = require('glob')
const { parse } = require('svg-parser')
const { optimize } = require('svgo')
const fsExtra = require('fs-extra')
const consola = require('consola')
const camelCase = require('./camelCase.cjs')
const path = require('path')


const getSvg = (componentName, viewBox, d) => {
  const template = `import { mergeProps } from 'solid-js'
import { type Component } from 'solid-js'
import Icon, { SVG_IconProps, defaultProps } from '../IconTemplate'

const ${componentName}: Component<SVG_IconProps> = (props) => {
  const realProps = mergeProps(defaultProps, props)
  return (
    <Icon {...realProps} name={realProps.name || '${componentName}'} viewBox="${viewBox}">
      ${d.map(d => {
      return `<path
        d="${d}"
        fill="currentColor"
      />`
    })}
    </Icon>
  )
}

export default ${componentName}
`
  return template
}

let entryEs = `/** 此文件由 script generate 脚本生成 */
export { config as IconFontConfig } from "./icons/IconFontConfig.js";
export { default as IconFont } from "./icons/IconFont.js";
export { configure } from "./icons/configure.js";
\n`;

let entryLib = `/** 此文件由 script generate 脚本生成 */
    export { default as IconFont } from "../IconFont";
    export { configure } from "../configure";
    export { config } from "./iconFontConfig";
\n`;
let entryLibDTS = `/** 此文件由 script generate 脚本生成 */
    export { default as IconFont } from "../IconFont";
    export { configure } from "../configure";
\n`;

const projectID = process.env.PROJECT_ID
let pattern = path.join(__dirname, '../../icons-svg/*.svg').replace(/\\/g, '/');
let iconsSolidDir = `icons-solid`;
let iconsReactTaroDir = `icons-solid-taro`;

// 暂未使用
if (projectID) {
  entryLib = `/** 此文件由 script generate 脚本生成 */
  eexport { default as IconFont } from "../IconFont";
  export { config } from "./${projectID}-iconFontConfig";
  export { IconFont, config };
\n`;

  pattern = `${process.cwd()}/packages/${projectID}-icons-svg/*.svg`;
  iconsSolidDir = `${projectID}-icons-solid`;
  iconsReactTaroDir = `${projectID}-icons-solid-taro`;
}

let svgConfig = {}
fsExtra.readFile(path.join(__dirname, '../../icons-svg/config.json')).then(res=>{
    svgConfig = JSON.parse(res.toString())
})

new glob.Glob(pattern, {},(err, files) => {
  const entryArray = []
  files.forEach(file => {
      const basename = path.basename(file)
      const iconFontName = basename.replace('.svg', '')
      const componentName = camelCase(iconFontName, {
          pascalCase: true
      })

      entryArray.push(componentName)
      entryLib += `export { default as ${componentName} } from '../components/${componentName}'\n`
      entryEs += `export { default as ${componentName} } from "./icons/${componentName}.js";\n`;
      entryLibDTS += `export { default as ${componentName} } from "../components/${componentName}";\n`;

      fsExtra.readFile(file, {encoding: 'utf8'}).then((res) => {
          let svg = optimize(res).data;
          const svgAST = parse(svg).children[0];
          let pathds = (svgAST).children?.map((item) => {
              return item.properties.d;
          })
          let viewBox = (svgAST).properties.viewBox;
          fsExtra.outputFile(`${process.cwd()}/src/components/${componentName}.tsx`, getSvg(componentName, viewBox, pathds), 'utf8', (error) => {
              consola.success(`${iconsSolidDir} ${componentName} 文件写入成功`);
          });
    
      })
   
  })
  fsExtra.outputFile(`${process.cwd()}/src/components/iconsConfig.ts`, `export const iconsConfig = ${JSON.stringify(entryArray)}`, 'utf8', (error) => {
      consola.success(`${iconsSolidDir} 文件列表配置写入成功`);
  });

  fsExtra.outputFile(`${process.cwd()}/dist/es/index.es.js`, entryEs + 'import "../style_icon.css";', 'utf8', (error) => {
      consola.success(`${iconsSolidDir} ES 入口文件文件写入成功`);
  });

  fsExtra.outputFile(`${process.cwd()}/src/buildEntry/lib-new.ts`, entryLib, 'utf8', (error) => {
      consola.success(`${iconsSolidDir} buildEntry 文件写入成功`);
  });

  fsExtra.outputFile(`${process.cwd()}/src/buildEntry/lib-new-dts.ts`, entryLibDTS, 'utf8', (error) => {
      consola.success(`${iconsSolidDir} buildEntry dts 文件写入成功`);
  });

})
