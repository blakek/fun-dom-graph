# fun-dom-graph

> An exploration in using DOM elements to create a hacky function graph

Just a fun project to see how difficult it is to create a "graphing calculator" using DOM elements.

**Example:**

![Demo](https://raw.githubusercontent.com/blakek/fun-dom-graph/master/demo.png)

## Usage

Start the development server:

```
npm start
```

Edit the function in `src/index.js`

```jsx
const f = (x) => x ** 2

render((
  <Example fn={f} showSource />
), document.querySelector('#app-root'))
```

## Install

Either [clone this repo](https://help.github.com/articles/cloning-a-repository/) or [download the zip file](https://github.com/blakek/fun-dom-graph/archive/master.zip)

## License

MIT
