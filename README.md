# todo component list
- [x] Button
- [x] Cell [@yisumay](https://github.com/yisumay)
- [x] CellGroup [@yisumay](https://github.com/yisumay)
- [ ] Icon
- [ ] Overlay
- [ ] Popup
- [ ] ConfigProvider
- [x] Image  [@yisumay](https://github.com/yisumay)
- [x] Layout [@yisumay](https://github.com/yisumay)
- [x] Col  [@yisumay](https://github.com/yisumay)
- [x] Row  [@yisumay](https://github.com/yisumay)
- [ ] Sticky
- [x] Divider [@yisumay](https://github.com/yisumay)
- [ ] Grid
- [ ] GridItem
- [x] Space  [@yisumay](https://github.com/yisumay)
- [ ] Navbar
- [ ] FixedNav
- [ ] Menu
- [ ] MenuItem
- [ ] Tabbar
- [ ] TabbarItem
- [ ] Elevator
- [ ] Pagination
- [ ] Tabs
- [ ] TabPane
- [ ] Indicator
- [ ] SideNavbar
- [ ] SideNavbarItem
- [ ] SubSideNavbar
- [ ] Range
- [ ] Searchbar
- [ ] Cascader
- [ ] Calendar
- [ ] CalendarCard
- [ ] Checkbox
- [ ] CheckboxGroup
- [ ] DatePicker
- [ ] InputNumber
- [ ] Input
- [ ] Radio
- [ ] RadioGroup
- [ ] Rate
- [ ] Picker
- [ ] ShortPassword
- [ ] Textarea
- [ ] Uploader
- [ ] NumberKeyboard
- [ ] Form
- [ ] FormItem
- [ ] Swipe
- [ ] SwipeGroup
- [ ] ActionSheet
- [ ] Backtop
- [ ] Drag
- [ ] Dialog
- [ ] InfiniteLoading
- [ ] PullRefresh
- [ ] Notify
- [ ] Switch
- [ ] Toast
- [ ] Audio
- [ ] AudioOperate
- [ ] Avatar
- [ ] AvatarGroup
- [ ] List
- [ ] Progress
- [ ] CircleProgress
- [ ] Noticebar
- [ ] Empty
- [ ] Video
- [ ] Steps
- [ ] Step
- [ ] Swiper
- [ ] SwiperItem
- [ ] Price
- [ ] ImagePreview
- [ ] Countup
- [ ] Countdown
- [ ] Badge
- [ ] Tag
- [ ] Popover
- [ ] Skeleton
- [ ] Collapse
- [ ] CollapseItem
- [ ] Table
- [ ] Animate
- [ ] Ellipsis
- [ ] Watermark
- [ ] TrendArrow
- [ ] Tour
- [ ] Address
- [ ] Barrage
- [ ] Signature
- [ ] TimeSelect
- [ ] TimePannel
- [ ] TimeDetail
- [ ] Sku
- [ ] Card
- [ ] Ecard
- [ ] AddressList
- [ ] Category
- [ ] CategoryPane
- [ ] Comment
- [ ] Invoice
- [ ] AvatarCropper

# 开发调试
```bash
pnpm i
pnpm run dev
```
> 即使修改了组件的代码，也会热更运行，不用手动build components

# 开发流程
本地页面文档调试地址示例：http://localhost:4321/h5/zh-cn/button
zh-cn为多语言，可根据需要切换，目前支持'en' | 'zh-cn' | 'zh-tw'
需要对照[nutui组件库3.x](https://nutui.jd.com/3x/#/zh-CN/component/button)版本实现翻译对照，对应的翻译代码仓库为[nutui-vue版本](https://github.com/jd-opensource/nutui/tree/v4/src/packages/__VUE)，vue版本的代码比起react版本有更新的实现方式，当然也可以对照react版本。在写完组件代码后，还需要额外补充单元测试用例

# 开发目录结构
## 文档官网目录结构
```text
├── nutui-solid-site
│   ├── content
│   │   ├── config.ts
│   │   ├── en // 组件英文文档位置
│   │   │   └── button.mdx
│   │   ├── taro // 组件taro文档位置 重要
│   │   │   └── button.mdx
│   │   ├── zh-cn // 组件中文文档位置 重要
│   │   │   ├── button.mdx
│   │   └── zh-tw // 组件台湾文档位置
│   │       └── button.mdx
│   ├── pages
│   │   ├── demo // 组件demo位置
│   │   │   ├── button.astro
│   │   ├── h5
│   │   │   └── [lang]
│   │   ├── index.astro
│   │   └── taro
│   │       └── [...title].astro
└── tsconfig.json
```
## 组件库目录结构
```text
nutui-solid
├── src
│   ├── components // 开发的组件目录
│   │   ├── button
│   │   │   ├── __test__ // 单元测试目录
│   │   │   ├── button.taro.tsx
│   │   │   ├── button.tsx
│   │   │   ├── demos
│   │   │   ├── index.scss
│   │   │   ├── index.taro.ts
│   │   │   └── index.ts
│   │   ├── nutui.solid.build.ts 全局组件编译入口文件 每次新增组件时，重新编译会自动生成入口文件
│   ├── hooks
│   │   └── create-context.tsx
├── tsconfig.json
├── vite.config.build.css.ts
└── vite.config.ts
```

根目录下的config.json，是组件库的配置文件，用于配置组件库的一些信息，如组件库名称、版本号、作者等信息。在新增组件的时候，这里也需要同步一下。
