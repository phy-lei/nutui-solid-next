// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  // Enable stylistic formatting rules
  // stylistic: true,
  solid: true,
  // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
  ignores: [
    'packages/nutui-solid/src/components/**/__test__',
    'packages/nutui-solid/dist',
    'packages/nutui-solid-site/.astro',
    'packages/nutui-solid/scripts',
    'packages/icons-solid/scripts',
    'packages/icons-solid/dist',
  ],
})
