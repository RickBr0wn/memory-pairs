import React, { Component } from 'react'
import Card from './Card'
import reactImage from '../Images/react.png'
import angularImage from '../Images/angular.png'
import back from '../Images/back.png'

export class CardContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flipLength: 1000,
      cards: [
        { picture: angularImage, isFlipped: false },
        { picture: angularImage, isFlipped: false },
        { picture: angularImage, isFlipped: false },
        { picture: reactImage, isFlipped: false },
        { picture: reactImage, isFlipped: false },
        { picture: reactImage, isFlipped: false },
        { picture: reactImage, isFlipped: false },
        { picture: reactImage, isFlipped: false },
        { picture: angularImage, isFlipped: false },
        { picture: reactImage, isFlipped: false },
        { picture: reactImage, isFlipped: false },
        { picture: reactImage, isFlipped: false },
        { picture: reactImage, isFlipped: false },
        { picture: angularImage, isFlipped: false },
        { picture: reactImage, isFlipped: false },
        { picture: angularImage, isFlipped: false },
        { picture: reactImage, isFlipped: false },
        { picture: reactImage, isFlipped: false },
        { picture: reactImage, isFlipped: false },
        { picture: reactImage, isFlipped: false },
        { picture: reactImage, isFlipped: false },
        { picture: reactImage, isFlipped: false },
        { picture: reactImage, isFlipped: false },
        { picture: angularImage, isFlipped: false },
        { picture: reactImage, isFlipped: false },
      ],
    }
  }

  handlePaired = (cards, index, secondIndex) => {
    let isPair = cards.filter(card => card.isFlipped === true)
    if (isPair.length == 2 && cards[index].picture === cards[secondIndex].picture) {
      console.log('win!!!!')
      isPair = []
      console.log(isPair)
    }
  }

  handleClick = indexToBeFlipped => {
    console.log('object')
    const { flipLength, cards } = this.state
    cards.map((card, index) => {
      if (index === indexToBeFlipped) {
        cards[index].isFlipped = !cards[index].isFlipped
        // this.handlePaired(cards, index, indexToBeFlipped)
        this.setState({ ...this.state, cards })
        console.log(cards)
        // let isPair = cards.filter(card => card.isFlipped === true)
        // if (isPair.length === 2) {
        //   console.log('win!')
        //   isPair = []
        //   console.log(isPair)
        // }
        // setTimeout(() => {
        //   cards[index].isFlipped = false
        //   this.setState({ ...this.state, cards })
        // }, flipLength)
      }
    })
  }

  render() {
    const { cards } = this.state
    return (
      <div className="card-container">
        {cards.map((card, index) => {
          return (
            <div key={index}>
              <Card
                height="15rem"
                width="15rem"
                front={cards[index].picture}
                back={back}
                index={index}
                handleClick={() => this.handleClick(index)}
                cards={this.state.cards}
              />
            </div>
          )
        })}
      </div>
    )
  }
}

export default CardContainer
