// 計算金額加總
function Amounts(arr: []) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]['money']
    }
    return sum
}

// 數字轉換月份
function Number_To_Month(number: number) {
    switch (number) {
        case 0:
            return "january";
        case 1:
            return "february";
        case 2:
            return "march";
        case 3:
            return "april";
        case 4:
            return "may";
        case 5:
            return "june";
        case 6:
            return "july";
        case 7:
            return "august";
        case 8:
            return "september";
        case 9:
            return "october";
        case 10:
            return "november";
        case 11:
            return "december";
        default:
            return "invalid month";
    }
}


// 月份轉換數字
function Month_To_Number(month: string) {
    switch (month) {
        case 'Jan':
            return "1";
        case "Feb":
            return "2";
        case "Mar":
            return "3";
        case "Apr":
            return "4";
        case "May":
            return "5";
        case "Jun":
            return "6";
        case "Jul":
            return "7";
        case "Aug":
            return "8";
        case "Sep":
            return "9";
        case "Oct":
            return "10";
        case "Nov":
            return "11";
        case "Dec":
            return "12";
        default:
            return "invalid month";
    }
}

// 月份格式轉換
function Month_To_Month(month: string) {
    switch (month) {
        case 'Jan':
            return "january";
        case "Feb":
            return "february";
        case "Mar":
            return "march";
        case "Apr":
            return "april";
        case "May":
            return "may";
        case "Jun":
            return "june";
        case "Jul":
            return "july";
        case "Aug":
            return "august";
        case "Sep":
            return "september";
        case "Oct":
            return "october";
        case "Nov":
            return "november";
        case "Dec":
            return "december";
        default:
            return "invalid month";
    }
}

export { Amounts, Number_To_Month, Month_To_Number, Month_To_Month }