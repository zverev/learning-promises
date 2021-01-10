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

    // test("should call .then() synchronously if promise is resolved", () => {
    //     const spy = jest.fn();
    //     const myPromise = new MyPromise((resolve) => {
    //         resolve();
    //     })
    //     myPromise.then(() => {
    //         spy();
    //     })
    //     expect(spy).toBeCalled();
    // })
})