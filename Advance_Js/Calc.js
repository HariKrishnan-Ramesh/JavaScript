function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = Math.random()
            if (num > 0.5) {
                resolve("Calculation is true, num is " + num)
            }
            else {
                reject("data:Calculation is error " + num)
            }
        }, 500)
    })
}

fetchData().then((data) => console.log(data))
    .catch((error) => console.log(error))