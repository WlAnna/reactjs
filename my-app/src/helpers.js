function choice(num) {
    return Math.floor(Math.random() * num);
}

function getLocalStorageData(points, resultNum) {
    console.log(localStorage.getItem('points'))
    const point = JSON.parse(localStorage.getItem('points'))
    const currentPoints = points
    let arrWithPoints = []
    if (point === null) {
        arrWithPoints = [currentPoints]
            //Keep up tp 5 elements in local storage
    } else if ((point.length + 1) > resultNum) {
        arrWithPoints = [...point, currentPoints]
        arrWithPoints.shift()
    } else {
        arrWithPoints = [...point, currentPoints]
    }

    return arrWithPoints
}

export { choice, getLocalStorageData };