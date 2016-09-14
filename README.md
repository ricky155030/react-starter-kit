# React Starter Kit
A fast dev env which combines redux, react-router, build tools (webpack, gulp...) and backend node-express

### Settings
`config.js`
Modify your environment setting here.
```js
const config = {
  ENV_TYPE: 'DEV',
  PORT: 3000,
}

config.HOSTNAME = 'localhost'
```

### Install required node modules and build
```sh
npm install
gulp build
```

### Create your workspace
_Tmux is required_

Use `create_workspace.sh`

### Check starter page here
[http://localhost:3000/](http://localhost:3000/)
