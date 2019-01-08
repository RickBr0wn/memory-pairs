import React from 'react'
import PropTypes from 'prop-types'

export const Card = ({ height, width, front, back, index, handleClick, isFlipped, cards }) => {
    return (
      <div>
        <div className="card">
          <img
            src={cards[index].isFlipped ? front : null}
            alt=""
            index={index}
            style={{ width, height }}
            onClick={() => handleClick(index)}
          />
        </div>
        <p>{isFlipped}</p>
      </div>
    )
  }

// Card.propTypes = {
//   height: PropTypes.string.isRequired,
//   width: PropTypes.string.isRequired,
//   front: PropTypes.string.isRequired,
//   back: PropTypes.string.isRequired,
// }

export default Card
