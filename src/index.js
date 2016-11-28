import React from 'react'
import { render } from 'react-dom'
import Example from 'components/Example'

const f = (x) => 100 * Math.sin(x) + 100

render((
  <Example fn={f} showSource />
), document.querySelector('#app-root'))
