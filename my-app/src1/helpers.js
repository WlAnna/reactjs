function choice(items) {
    let num = Math.floor(Math.random() * items.length)
    return items[num]
}

function remove(items, item) {
    return items.find(element => element === item)
}

export { choice, remove }