import React, { Component } from 'react';
import Joke from './Joke'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './JokeList.css'


class JokeList extends Component {
    static defaultProps = {
        numJokesToGet: 10
    }
    constructor(props) {
        super()
        this.state = ({ loading: false, jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]") })
        this.handleVote = this.handleVote.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.seenJokes = new Set(this.state.jokes.map(j => j.text));
    }

    componentDidMount() {
        if (this.state.jokes.length === 0) this.getJokes();
    }

    async getJokes() {
        try {
            let arr = []
            while (arr.length < this.props.numJokesToGet) {
                const url = "https://icanhazdadjoke.com/"
                let response = await axios.get(url, { headers: { Accept: "application/json" } });
                // arr.push({ text: response.data.joke, votes: 0, id: uuidv4() })

                let newJoke = response.data.joke;
                if (!this.seenJokes.has(newJoke)) {
                    arr.push({ text: response.data.joke, votes: 0, id: uuidv4() })
                } else {
                    console.log("FOUND A DUPLICATE!");
                    console.log(newJoke);
                }
            }

            // this.setState({ jokes: arr })
            this.setState(
                st => ({
                    loading: false,
                    jokes: [...st.jokes, ...arr]
                }),
                () =>
                    window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
            );
            // we add joke text
            window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
        } catch (e) {
            alert(e);
            this.setState({ loading: false });
        }
    }

    handleVote(id, delta) {
        this.setState(
            st => ({
                jokes: st.jokes.map(j =>
                    j.id === id ? { ...j, votes: j.votes + delta } : j
                )
            }),// we add delta to the state
            () =>
                window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))

        )
    }

    handleClick() {
        this.setState({ loading: true }, this.getJokes);
    }

    handleClear() {
        window.localStorage.clear()
        this.setState(st => ({ jokes: [] }), this.getJokes)
    }

    render() {
        if (this.state.loading) {
            return (
                <div className='JokeList-spinner'>
                    <i className='far fa-8x fa-laugh fa-spin' />
                    <h1 className='JokeList-title'>Loading...</h1>
                </div>
            );
        }
        let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);
        let resp = jokes.map(joke => (
            <Joke
                key={joke.id}
                joke={joke.text}
                votes={joke.votes}
                upvote={() => this.handleVote(joke.id, 1)}
                devote={() => this.handleVote(joke.id, -1)}
            />
        ))

        return (
            <div>
                <div className='JokeList-buttons'>
                    <button onClick={this.handleClick}>New Jokes</button>
                    <button onClick={this.handleClear}>Clear</button>
                </div>
                {resp}
            </div>
        )
    }
}

export default JokeList