## Intro to Styling Libraries

### Overview
- Each of these libraries has a different style and a wide range of features and components.
- In order to properly use each library, you need to review their docs. The docs will give you instructions on how to properly set up your app to use the library and will also show examples of how each feature/component is implemented.

### Bootstrap - Class Based
[Bootstrap - Class based docs](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
- Not strictly a react library, but rather uses a common stylesheet and you just add special classes defined in the docs to your code
- Can also be used with plain HTML
- When using React apps, referencing the bootstrap JS code including Jquery is highly discouraged because it doesn't play nice with React and will likely introduce strange bugs into your app

### React-Boostrap
[React-Bootstrap Docs](https://react-bootstrap.github.io/getting-started/introduction)
- Installed using `npm install react-bootstrap`
- You also need to include a `<link>` tag to the bootstrap stylesheet in your index.html as instructed in the react-bootstrap docs
- Component based - uses imported components from 'react-bootstrap'
- Implements bootstrap's elements using React components

### Ant-Design
[Ant Design (antd) Docs](https://ant.design/docs/react/introduce)
- Installed using `npm install antd`
- You also need to include a `<link>` tag to the antd stylesheet in your index.html as instructed in the Ant Design docs
- Component based - uses imported components from 'antd'

### Semantic UI
[Semantic UI](https://react.semantic-ui.com/introduction)
- Installed using `npm install semantic-ui-react`
- You also need to include a `<link>` tag to the antd stylesheet in your index.html as instructed in the Semantic UI React docs
- Component based - uses imported components from 'semantic-ui-react'


### Material-UI
[Material UI Docs](https://v0.material-ui.com/#/get-started/installation)
- Installed using `npm install material-ui`
- The docs recommend installing the roboto font, instructions are in the docs
- The docs also require that you wrap your App component in a theme provider (see src/index.js)
- Component based - using imported components from 'material-ui'
