import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';
import './Deck.css'

class Deck extends Component {
    constructor(props) {
        super()
        this.state = ({ cardInfo: 'new', drawn: [] })
        this.update = this.update.bind(this)
    }

    async componentDidMount() {
        const url = `https://deckofcardsapi.com/api/deck/${this.state.cardInfo}/shuffle`
        let response = await axios.get(url);
        this.setState({ cardInfo: response.data.deck_id })
    }

    async update() {
        try {
            const url = `https://deckofcardsapi.com/api/deck/${this.state.cardInfo}/draw/`
            let response = await axios.get(url);
            if (!response.data.success) {
                throw new Error('No card remaining')
            }
            let card = response.data.cards[0]
            this.setState(st => ({
                drawn: [...st.drawn,
                {
                    id: card.code,
                    image: card.image,
                    name: `${card.suit} of ${card.value}`
                }

                ]
            }))

        } catch (e) {
            alert(e)
        }

    }

    render() {
        const cards = this.state.drawn.map(c => (
            <Card key={c.id} image={c.image} name={c.name} />
        ))
        return (
            <div className='Deck'>
                {cards}
                <button onClick={this.update}>Get card</button>
            </div>
        )
    }
}

export default Deck