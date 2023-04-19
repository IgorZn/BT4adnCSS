const p = new Promise(((resolve, reject) => {
    console.log('Running server')
    setTimeout(() => {
        console.log('Start server')
        resolve({status: true})
    }, 1000)
}))

p
    .then(status => {

        if (status) {
            setTimeout(() => {
                console.log('Server is start listen')
                status.secondPromise = true
            })
        }
        return status
    })
    .then(newStatus => {
        console.log(newStatus)
    })

