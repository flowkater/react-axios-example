# Axios 예제 테스트 코드
Express 로 간단한 API 만들고 그걸로 API get/post 예제 만드는 프로젝트.

# Base React-Express-HMR-Example

## About
This is an example project that uses React.js on Express.js server. In development environment, webpack-dev-server will be launched together with Express.js server that has Hot Module Replacement enabled using react-hot-loader.   
Both of client-side and server-side codes are written in ES6 syntax.
    
The port of Express.js server is 3000 and port of webpack-dev-server is 3001.
  
## Installation
```
npm install -g webpack babel
npm install
```
  
## Scripts
### clean
```bash
# removes build directory and bundle.js
npm run clean
```
### build
```bash
# transpiles ES6 codes of both client-side and server-side
npm run build
```
### start
```bash
# starts the server with production environment
npm run start
```
### development
```bash
# starts the server with development environment
npm run development
```
