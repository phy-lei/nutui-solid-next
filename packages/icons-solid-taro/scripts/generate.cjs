/* eslint-disable */
const glob = require('glob')
const fsExtra = require('fs-extra')
const consola = require('consola')
const camelCase = require('./camelCase.cjs')
const path = require('path')


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

const getIconFont = (componentName, iconFontName) => {
  const template = `
import IconFont, {IconFontProps} from "../IconFont";
import { type Component } from 'solid-js'

const ${componentName}: Component<IconFontProps> = (props) => {
  return <IconFont {...props} name={props.name || '${iconFontName}'}/>
}
export default ${componentName}
`
  return template
}

new glob.Glob(pattern, {}, (err, files) => {
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

    fsExtra.outputFile(`${process.cwd()}/src/components/${componentName}.tsx`, getIconFont(componentName, iconFontName), 'utf8', (error) => {
      consola.success(`${componentName} 文件写入成功`);
    });

  })


  fsExtra.outputFile(`${process.cwd()}/src/components/iconsConfig.ts`, `export const iconsConfig = ${JSON.stringify(entryArray)}`, 'utf8', (error) => {
    consola.success(`icons-solid-taro 文件列表配置写入成功`);
  });



  fsExtra.outputFile(`${process.cwd()}/dist/es/index.es.js`, entryEs + 'import "../style_iconfont.css";', 'utf8', (error) => {
    consola.success(`icons-solid-taro ES 入口文件文件写入成功`);
  });

  fsExtra.outputFile(`${process.cwd()}/src/buildEntry/lib-new.ts`, entryLib, 'utf8', (error) => {
    consola.success(`${iconsSolidDir} icons-solid-taro buildEntry 文件写入成功`);
  });

  fsExtra.outputFile(`${process.cwd()}/src/buildEntry/lib-new-dts.ts`, entryLibDTS, 'utf8', (error) => {
    consola.success(`${iconsSolidDir} icons-solid-taro buildEntry dts 文件写入成功`);
  });


})
