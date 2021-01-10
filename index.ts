interface IPromise {
    then: (onSuccess: () => void, onFailure?: () => void) => IPromise
}

const createPromiseThatFulfillsInATimeout = (timeoutSeconds: number) => (
    new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, timeoutSeconds * 1000)
    })
)

const myPromise = createPromiseThatFulfillsInATimeout(1);

const myPromise2 = myPromise.then(() => {
    console.log("should be called in a second")
    return createPromiseThatFulfillsInATimeout(2)
})

const myPromise3 = myPromise2.then(() => {
    console.log("should be called right after that")
})