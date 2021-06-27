const isEven = (num: number): Boolean => {
    return num % 2 === 0
}

const isOdd = (num: number): Boolean => {
    return num % 2 === 1
}

module.exports = {
    isEven,
    isOdd
}