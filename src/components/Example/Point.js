import React, { PropTypes } from 'react'

export const Point = ({ color, width, x, y }) => (
  <div
    style={{
      position: 'absolute',
      bottom: y,
      left: x,
      backgroundColor: color,
      height: width,
      width
    }}
  />
)

Point.defaultProps = {
  color: '#000',
  width: 1
}

Point.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

export default Point
