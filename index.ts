interface IPromise {
    then: (onSuccess: () => void, onFailure?: () => void) => IPromise;
    catch: (onFailure: () => void) => IPromise;
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
    throw new Error("404")
    return createPromiseThatFulfillsInATimeout(2)
})

const myPromise3 = myPromise2.then(() => {
    console.log("should be called right after that")
}).catch((err) => {
    console.error("An error occured, here we'll handle it")
    console.error(err.message)
})
