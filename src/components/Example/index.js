import React, { PropTypes } from 'react'
import Point from './Point'
import styles from './style.css'

const getXValues = (fn, yValues) => yValues.map(fn)

const testXValues = (steps = 100, accuracy = 1) => {
  let xValues = []

  for (let i = 0; i < steps; i += 1 / accuracy) {
    xValues.push(i)
  }

  return xValues
}

const plottableYValues = (fn, steps = 100, accuracy = 1) => {
  let yValues = []

  for (var i = 0; i < steps; i += 1 / accuracy) {
    yValues.push(fn(i))
  }

  return yValues
}

const pointFromCoords = (x, y) => <Point key={x} x={y} y={x} width={1} />

export const Example = ({ fn, showSource }) => {
  const coords = plottableYValues(fn, window.innerWidth, 2)
  const yPoints = coords.map(pointFromCoords)

  console.log('coords', coords)
  console.log('yPoints', yPoints)

  return (
    <div className={styles.example}>
      {showSource &&
        <h1>
          {fn.toString()}
        </h1>
      }
      <div>
        {yPoints}
      </div>
    </div>
  )
}

Example.propTypes = {
  showSource: PropTypes.bool,
  fn: PropTypes.func.isRequired
}

export default Example
