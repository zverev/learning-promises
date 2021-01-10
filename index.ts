interface IPromise {
    then: (onSuccess: () => void, onFailure?: () => void) => IPromise
}

const createPromiseThatFulfillsInATimeout = (timeoutSeconds: number) => (
    new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(timeoutSeconds)
        }, timeoutSeconds * 1000)
    })
)

const myPromise = createPromiseThatFulfillsInATimeout(1);

const myPromise2 = myPromise.then((timeoutSeconds: number) => {
    console.log(`previous promise was fulfilled in ${timeoutSeconds} seconds`)
    return createPromiseThatFulfillsInATimeout(2)
})

setTimeout(() => {
    myPromise.then((timeoutSeconds: number) => {
        console.log(`previous promise was fulfilled in ${timeoutSeconds} seconds`)
    })
    myPromise.then((timeoutSeconds: number) => {
        console.log(`previous promise was fulfilled in ${timeoutSeconds} seconds`)
    })
}, 10000);

const myPromise3 = myPromise2.then(() => {
    console.log("should be called right after that")
})