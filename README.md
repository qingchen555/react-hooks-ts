# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

you can use craco or react-app-rewired plugin to override the webpack configuration

## Related learn links

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Code specification config

### config eslint

1-install eslint plugin in vscode
2-install eslint
1.run "npm install eslint -D"
2.and also install the dependency package：
eslint@8.x, globals, @eslint/js, typescript-eslint, eslint-plugin-react

3-config eslint
1.run "npx eslint --init" // 将会生成一个.eslint.mjs文件
2.need manualy to create the .eslintrc.js file in root path：
2.1: why add react/jsx-runtime?
在React@17以后，是不需要再手动去引入React的。因为该版本之后加入了react/jsx-runtime，会自动对JSX进行解析。所以，需要在extends中加入：plugin:react/jsx-runtime

### add .editorconfig file

### config prettier

1-install vscode plugin: prettier-code formate
2-npm install prettier -D // dev dependency
3-manually create a file : .prettierrc
{
"printWidth": 100, // 一行的字符数，如果超过会进行换行
"tabWidth": 2, // 一个tab代表几个空格数，默认就是2
"useTabs": false, // 是否启用tab取代空格符缩进，.editorconfig设置空格缩进，所以设置为false
"semi": false, // 行尾是否使用分号，默认为true
"singleQuote": true, // 字符串是否使用单引号
"trailingComma": "none", // 对象或数组末尾是否添加逗号 none| es5| all
"jsxSingleQuote": true, // 在jsx里是否使用单引号，你看着办
"bracketSpacing": true, // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
"arrowParens": "avoid", // 箭头函数如果只有一个参数则省略括号
}

## config less

## 路由配置

## 创建项目结构

assets： 资源
base-ui： 多个项目中都使用的组件
components：
hooks：
router：
services
utils：

## css样式的重置

### normalize.css

都一些常见的元素的样式需要重置
作用：
与许多CSS重置不同，保留有用的默认值。
规范化各种元素的样式。
更正了错误和常见的浏览器不一致性。
通过一些小技巧提高可用性。
使用详细注释说明代码的作用。

### less config

     直接使用npm install craco-less@2.1.0-alpha.0进行安装
     然后在craco.config.js文件中配置对应的plugin

## 路由配置

1-首先安装 npm install react-router-dom
2-在routers文件夹下面创建对应的routes（path 和element）
3-同时要在App使用的地方包裹一层HashRouter或者BrowserRouter

## 类型约束

1- 对函数组件的类型
2-对props的类型约束
1）定义interface
2）react自带的一些类型
使用方式：
1-import type {ReactNode} from 'react'
2-范型 :Download:React.FC<Iprops> = (props)=>{}
note：props是父组件传递给子组件的所有属性
FC： functionComponent的缩写

## 快速生成模版片段

1-先设计一个代码模版
2-在snippet-generator.app中生成vscode使用的代码配置
3-在vs code 》设置中配置

## Navigate 重定向

## 一级路由的懒加载

其实就是分包处理，只有在需要该组件的时候再去imports对应的包， 具体实现方式：
1- routes中使用lazy
const Discover = lazy(() => import('@/views/discover/index'))
2- app组件中使用link
3-因为懒加载时，有的组件还没有下载下来，需要supense应急一下

## 二级路由懒加载

Parent组件中的Outlet将会渲染Child组件

### 点击nav时候出现闪烁的问题

在使用link的discover部分也适用suspense

## 状态管理

### 安装相关的库和工具

1-安装状态相关的库
npm install @reduxjs/toolkit react-redux
(1)创建一个store
通过@reduxjs/toolkit工具中的configureStore
(2)使用store

note: b站- react hooks 课程 > P12 > 关于state类型定义的问题是如何推倒出来问题做了很多解析
具体使用方式可以参考 redux官网
方式1: type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>
该方式的缺点： 每次使用IRootState需要import导入，会比较麻烦
进一步优化的方式：
也可以不导入该类型， 可以通过对use Selector进行封装来设计动态类型
此时，使用【函数调用签名】【函数签名】

### 更新状态的方式

useDispatch（）:对其使用方式进行类型的封装
type DispatchType = typeof store.dispatch
export const useAppDispatch: () => DispatchType = useDispatch

### TS知识：对于TypedUseSelectorHook的解释

是在b站- react hooks 课程 > P14 > 关于state类型定义的问题做了很多解析
去官方站去查，看下原理，做了什么事情，知道大概什么意思

## 内容回顾

react hooks 课程 > P15 > 课程笔记总结

## axios异步请求管理

1-npm install axios

### 对于state定义类型

1-在useState<stateType>:设置范型

### react中区分开发环境和生产环境

1-手动切换
2-依赖当前的环境
通过process.env.node_env
然后本地启动prod环境： npm run build > npm install -g serve > serve -s build
3-动态加载环境配置
设置env.development and env.prod文件

## 关于TS的知识

react hooks 课程 > P18 > 课程笔记总结
范型类： class Component extends PureComponent<Iprops， IState>
在该类中定义Iprops类型，可以对该类中的所有props属性进行设置

## redux中类型的补充

react hooks 课程 > P19 > 课程笔记总结

## 样式的设计和使用

1-使用Styled Components样式组件库
Styled Components 是一个使用CSS-in-JS技术实现的样式组件库，它是一个为React和React Native设计的库。它允许我们在应用中使用JavaScript和CSS混合起来编写样式级组件。并且它是支持Sass的，不需要添加任何库。
1.1 为什么需要为第三方库styled-components引入另外的声明文件？
1.2 styled-components 使用方式
1.3 theme的混入：使用mixin

### header布局的设计

1.1 首先设计布局： left 和 right
HeaderLeft and HeaderRight

1.2 样式的具体使用
对于 a 链接里面显示图片，可以通过class形式，利用以下代码来形成
background-position: 0 0; // 用于设计背景图像的起始位置， 可以是像素，也可以直接关键字（top， bottom， center）或者百分比
text-indent: -9999px; // 设计文本块中首行文本的缩进，为负值，表示悬挂缩进，首行文本超出容器左侧边界
background: url(../img/sprite_01.png) no-repeat 0 9999px;
//background-color background-image background-repeat background-position background-attachment background-size
背景图像： background-image
是否固定：background-attachment fixed | scroll | inherit

1.3 所有编程最终的目的都是处理数据
所有讲一些循环的数据放在json格式的文件中 src/assets/data/header_titles.json

1.4 选中每个title之后，鼠标离开也要显示选中的状态
react hooks 课程 > P23 >
方式1: 直接在a标签中加active
方式2: 设置一个index，点到哪一个，就选择哪个index
方式3:
NavLink比Link是有active属性的 ，就是当你的url path 和你点击的path匹配的时候

## 使用antd design P24 课程

npm install antd

需要引入 antd.less ?

npm install @ant-design/icons --save

## Discover detail part :

### 二级路由部分

<NavBar> + 具体的样式部分

### 具体轮播图展示部分

1-确定文件夹结构 ： 按照功能划分文件夹结构和按照业务划分文件夹结构
2-异步请求获取数据： createAsyncThunk
recommend > store > recommend.ts
3-将请求的数据在view中显示：

> > > > > > > > 3.1-render the view
> > > > > > > > 3.2-trigger the action: fetchBannerDataAction
> > > > > > > > 3.3-send the requesst to get the data
> > > > > > > > 3.4-dispatch the data to reducer to update the state value
> > > > > > > > 3.5-useAppSelector get the state value to show in view

4-轮播图实现步骤
------4.1高斯模糊imageView
通过在url部分增加http://p1.music.126.net/ca0HX7FBEuOZX86XtxiMMg==/109951169722246161.jpg?imageView&blur=40x20&quot;
------4.2 轮博效果： 淡入淡出同时有按钮
------4.3 先设置页面需要的模块
bannerLeft(设置css样式) + bannerRight + bannerControl(设置绝对定位)

------4.4 模块之间的数据联动--绑定一些事件
handlePrevClick： 需要调用Carousel的方法， 先拿到Carousel dom元素。需要绑定ref 【useRef】
const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
ElementRef：
------4.5 模块淡入淡出效果
effect='fade'
------4.6 模块背景图--动态展示
使用动态样式绑定style
目前有个问题：淡出之后才会显示背景图片，如何优化？
------4.7 实现自己的dots样式
问题：滚动到哪个图片，dot显示为红色
解决方式：动态添加class， 需要引入第三方库的classnames

问题： dot会先消失然后再出现的效果
解决方式：
beforeChange={handleBeforeChange}
afterChange={handleAfterChange}

5-内容回顾
一.额外类型的补充
1.1 类组件和TS结合
复习TS知识点
1.2 redux中类型补充
initialState
action
二。 网络请求封装
2.1 hyrequest
2.2 区分开发环境和生产环境

三。Appheader的搭建
3.1 header导航中的导航
3.2 默认的active=》Navlink

四。 Recommend页面
4.1 顶部导航
4.2 根据业务划分recommend的文件夹结构图
4.3获取轮播图的数据
4.4 设计具体的轮播图：背景图片，右侧二维码，两边按钮
