export default class MyPromise {
    private state = ""

    constructor(asyncFactory: (resolve: () => void, reject?: () => void) => void) {
        asyncFactory(this.resolve.bind(this), this.reject.bind(this))
    }

    resolve(){
        this.state = "RESOLVED"
    }

    reject(){
        this.state = "REJECTED"
    }

    getState(){
        return this.state
    }

    then(onSuccess: () => void) {
        return "ok"
    }
}