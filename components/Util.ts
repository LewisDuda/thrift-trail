// 計算金額加總
function Amounts(arr: []) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]['money']
    }
    return sum
}

export { Amounts }