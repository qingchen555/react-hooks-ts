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
