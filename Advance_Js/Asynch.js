function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("data fetched")
            }
            else {
                reject("error in data fetching")
            }
        }, 1000)
    })
}

fetchData().then((data) => console.log(data))
    .catch((error) => console.log(error))