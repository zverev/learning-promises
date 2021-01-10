import axios from "axios";

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

async function run() {
    try {
        const myPromise = createPromiseThatFulfillsInATimeout(1);
        const { data } = await axios('https://jsonplaceholder.typicode.com/todos/1')
        const myPromiseTimeoutSeconds = await myPromise;
        console.log(`previous promise was fulfilled in ${myPromiseTimeoutSeconds} seconds`)
        const myPromise2 = createPromiseThatFulfillsInATimeout(2);
        const myPromise2TimeoutSeconds = await myPromise2
    } catch(err) {
        console.error("An error occured, here we'll handle it")
        console.error(err.message)
    }
}

run()