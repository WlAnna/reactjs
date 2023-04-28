function randomNum() {
    return Math.floor(Math.random() * 3)
}

class Machine extends React.Component {
    render() {
        let values = ['x', 'y', 'z']
        console.log(values[randomNum()])
        let randomEl1 = values[randomNum()]
        let randomEl2 = values[randomNum()]
        let randomEl3 = values[randomNum()]
        let msg
        if (randomEl1 === randomEl2 && randomEl1 === randomEl3) {
            msg = 'You win!!'
        } else {
            msg = 'You loose!!'
        }
        return (
            <div>
                <p>{randomEl1} {randomEl2} {randomEl3}</p>
                <p>{msg}</p>

            </div>
        )
    }
}