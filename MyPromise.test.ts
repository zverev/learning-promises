import MyPromise from "./MyPromise";

describe("MyPromise", () => {
    test("should create a promise with .then() method", () => {
        const asyncFactory = () => {}
        const myPromise = new MyPromise(asyncFactory)
        expect(myPromise.then).toBeInstanceOf(Function)
    })

    test("should be in RESOLVED state if resolve() was called", () => {
        const myPromise = new MyPromise((resolve) => {
            resolve();
        })
        expect(myPromise.getState()).toBe("RESOLVED")
    })

    test("should be in REJECTED state if reject() was called", () => {
        const myPromise = new MyPromise((resolve, reject) => {
            reject();
        })
        expect(myPromise.getState()).toBe("REJECTED")
    })

    test("should call onFulfilled callback synchronously on .then call if promise is resolved", () => {
        const spy = jest.fn();
        const myPromise = new MyPromise((resolve) => {
            resolve();
        })
        myPromise.then(() => {
            spy();
        })
        expect(spy).toBeCalled();
    })

    test("should call onRejected callback synchronously on .then call if promise was rejected", () => {
        const spy = jest.fn();
        const myPromise = new MyPromise((resolve, reject) => {
            reject();
        })
        myPromise.then(() => {
        }, () => {
            spy()
        })
        expect(spy).toBeCalledTimes(1);
    })
})