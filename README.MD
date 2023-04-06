## react-ssr-boilerplate

* [React](https://reactjs.org)
* [Redux Toolkit](https://redux-toolkit.js.org)
* [Styled Components](https://www.styled-components.com/)

| Comand            | Description               |
| ---------------   |-------------              |
| `npm i`           | install packages          |
| `npm start`       | run developer mode        |
| `npm run build`   | run production mode       |


## Docker  
Image: `docker build -t ssr-container .`  
Container: `docker run -d -p 8000:8000 --rm --name ssr-container ssr-image`  
Stop: `docker stop ssr-container`
