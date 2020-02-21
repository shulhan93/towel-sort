module.exports = function towelSort(matrix = []) {
    if (matrix.length == 0) {
        return []
    };

    let mas = matrix.reduce((sum, current, i) => {
        if (i % 2 != 0) {
            let sort = current.sort((a, b) => b - a);
            sum.push(sort)
        } else {
            sum.push(current)
        }
        return sum
    }, [])
     
    return mas.join(',').split(',').map(el => +el)
}
