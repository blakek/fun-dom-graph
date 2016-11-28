import React, { PropTypes } from 'react'
import Point from './Point'
import styles from './style.css'

const coords = (domain, fn) => domain.map((x) => {
  return {
    x,
    y: fn(x)
  }
})

const pointFromCoords = ({ x, y }) => <Point key={x} x={x} y={y} width={1} />

const possibleDomain = ({ start = 0, limit = 100, precision = 1 }) => {
  let xValues = []

  for (let i = start; i < limit; i += precision) {
    xValues.push(i)
  }

  return xValues
}

export const Example = ({ fn, showSource }) => {
  const options = {
    limit: window.innerWidth,
    precision: .2
  }

  const plottablePoints = coords(possibleDomain(options), fn).map(pointFromCoords)

  return (
    <div className={styles.example}>
      {showSource &&
        <h1>
          {fn.toString()}
        </h1>
      }
      <div>
        {plottablePoints}
      </div>
    </div>
  )
}

Example.propTypes = {
  showSource: PropTypes.bool,
  fn: PropTypes.func.isRequired
}

export default Example
