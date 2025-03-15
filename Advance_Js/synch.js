function fetchData(callback) {
    setTimeout(() => {
        const success = true;
        if (success) {
            callback(null, "data fetched")
        }
        else {
            callback("Error:data fetch failed", null)
        }
    }, 2000)
}

fetchData((error, data) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log(data);
    }
})