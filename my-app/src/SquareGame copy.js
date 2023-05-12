import React, { Component } from 'react'
import Square from './Square'
import './SquareGame.css'
import { choice } from "./helpers";


class SquareGame extends Component {
    static defaultProps = {
        num: 25
    }
    // in state there is current green num
    constructor(props) {
        super(props);
        this.state = {
            rolling: false,
            updatedColor: false,
            interval: null,
            endGame: true,
            isShowing: false,
            points: 0,
            fails: 0,
            lives: 3,
            timer: 10,
            history: JSON.parse(localStorage.getItem('points')) || []
        }

        // this.yourFunction = this.yourFunction.bind(this)
        this.startGame = this.startGame.bind(this)
        this.setTimeframe = this.setTimeframe.bind(this)
        this.getScore = this.getScore.bind(this)
        this.finishGame = this.finishGame.bind(this)
        this.reset = this.reset.bind(this)
        this.interval = ''
        this.timerInterval = ''
        this.timeframe = ''
    }

    // yourFunction() {
    //     // do whatever you like here
    //     this.setState({ updatedColor: !this.updatedColor })
    //     setTimeout(this.yourFunction, 2000);
    // }
    // setTimeframe() {
    //     console.log(localStorage.getItem('points'))
    //     let point = localStorage.getItem('points')
    //     let history = [2, 4]
    //     history = [...history, ...localStorage.getItem('points')]
    //     console.log(history)
    //     this.setState(st => ({ endGame: true }), () => window.localStorage.setItem("points", JSON.stringify(this.state.points)))
    //     console.log(localStorage.getItem('points'))
    // }


    // setTimeframe() {
    //     console.log(localStorage.getItem('points'))
    //     let point = localStorage.getItem('points')
    //     console.log(point)
    //     this.setState(st => ({ endGame: true }), () => window.localStorage.setItem("points", JSON.stringify(this.state.points)))
    //     console.log(localStorage.getItem('points'))
    // }


    setTimeframe() {
        console.log(localStorage.getItem('points'))
        let point = JSON.parse(localStorage.getItem('points'))

        let currentPoints = this.state.points

        let arrWithPoints = []
        if (point === null) {
            arrWithPoints = [currentPoints]
        } else if ((point.length + 1) > 5) {
            arrWithPoints = [...point, currentPoints]
            arrWithPoints.shift()
        } else {
            arrWithPoints = [...point, currentPoints]
        }




        console.log(arrWithPoints)
        this.setState(st => ({ endGame: true }), () => window.localStorage.setItem("points", JSON.stringify(arrWithPoints)))
        this.setState({
            history: JSON.parse(localStorage.getItem('points'))
        })
        console.log(localStorage.getItem('points'))
    }



    startGame() {
        // this.yourFunction()
        this.timeframe = setTimeout(this.setTimeframe, 10000)
        this.setState({
            endGame: false
        })


        this.interval = setInterval(() => {
            this.setState({
                interval: choice(this.props.num), isShowing: true
            })
            setTimeout(() => {
                this.setState({
                    interval: null, isShowing: false
                })
            }, 1000);
        }, 3000);


        this.timerInterval = setInterval(() => { this.setState(st => ({ timer: st.timer - 1 })) }, 1000)

        // let timer = 60;
        // while (timer > 0) {
        //     console.log(timer);
        //     timer--;
        // }
        // setInterval(function () {
        //     console.log("Hello World!");

        //     setTimeout(function () {
        //         console.clear();
        //     }, 1000);
        // }, 3000);

        // // Set a timer to call the function every 5 seconds
        // let timer = setInterval(function () {
        //     console.log("Hello Worldxxx!");
        // }, 3000);

        // // Set a timeout to stop the timer after 3 seconds
        // setTimeout(function () {
        //     console.clear();
        // }, 1000);

    }

    getScore(value) {
        console.log(typeof +value, typeof this.state.interval)

        if (+ value === this.state.interval) {
            this.setState(st => ({ points: st.points + 1 }))
        } else {
            alert('You lost life')
            this.setState(st => ({ fails: st.fails + 1, lives: st.lives - 1 }))
        }
    }

    finishGame() {
        console.log('Finish game')
        // clearInterval(this.timeframe);
        clearInterval(this.interval);
        clearInterval(this.timerInterval);



    }

    reset() {
        this.setState({
            rolling: false,
            updatedColor: false,
            interval: null,
            endGame: true,
            isShowing: false,
            points: 0,
            fails: 0,
            lives: 3,
            timer: 10,
            history: JSON.parse(localStorage.getItem('points')) || []
        })
    }

    //Bierze previous
    // Jak storowac in an array w local storage
    // componentDidMount() {
    //     const storedState = localStorage.getItem('points');
    //     if (this.state.endGame) {
    //         // this.setState(JSON.parse(storedState));
    //         console.log(storedState)
    //         console.log(this.state.points)
    //     }
    // }


    render() {
        const result = Array.from({ length: this.props.num }).map((x, index) => (
            <Square endGame={this.state.endGame} value={index} getScore={this.getScore} index={index} color={(index === this.state.interval) && !this.state.endGame} />
        ));

        if (this.state.timer === 0 || this.state.lives === 0) {
            this.finishGame()
            // window.localStorage.setItem("points", JSON.stringify(this.state.points))
        }




        return (

            <div className='SquareGame'>

                <div>Lives: {this.state.lives}</div>
                <div>Points: {this.state.points}</div>
                <div>Timer: {this.state.timer}</div>
                {(this.state.lives === 0 || this.state.timer === 0) && 'Koniec'}
                <div className='SquareGame-squares'>
                    {result}
                </div>
                <button onClick={this.startGame}>Start</button>
                <button onClick={this.reset}>Reset</button>
                <p>Your previous 5 scores: </p>

                {this.state.history !== [] && this.state.history.map(el => (
                    <li>{el}</li>
                ))}
            </div>

        )
    }
}

// {JSON.parse(window.localStorage.getItem("points"))}

export default SquareGame


// import React, { Component } from 'react'
// import Square from './Square'
// import './SquareGame.css'

// class SquareGame extends Component {
//     static defaultProps = {
//         num: 25
//     }
//     // in state there is current green num
//     constructor(props) {
//         super(props);
//         this.state = { updatedColor: false }
//         this.updateColor = this.updateColor.bind(this)

//     }

//     updateColor() {
//         this.setState({ updatedColor: true })
//         console.log(this.state.updatedColor)
//     }

//     // roll() {
//     //     this.setState({ rolling: true });
//     //     setTimeout(() => {
//     //         this.rollDice()
//     //         this.setState({ rolling: false });
//     //     }, 2000)
//     //     console.log(this.state.rolling)

//     // }


//     render() {
//         const result = Array.from({ length: this.props.num }).map(() => (
//             <Square updatedColor={this.state.updatedColor} />
//         ));
//         return (
//             <div className='SquareGame'>
//                 <div className='SquareGame-squares'>
//                     {result}
//                 </div>
//                 <button onClick={this.updateColor}>Start</button>
//             </div>

//         )
//     }
// }

// export default SquareGame

