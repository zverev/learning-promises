export default class MyPromise {
    private state = ""
    private onSuccess: () => void
    private onReject: () => void

    constructor(asyncFactory: (resolve: () => void, reject?: () => void) => void) {
        asyncFactory(this.resolve.bind(this), this.reject.bind(this))

    }

    private resolve(){
        this.state = "RESOLVED"
        this.onSuccess()
    }

    private reject(){
        this.state = "REJECTED"
        this.onReject()
    }

    /*
     * @deprecated
     */
    getState(){
        return this.state
    }

    public then(onSuccess: () => void, onReject: () => void = () => null) {
        this.onSuccess = onSuccess
        this.onReject = onReject
       if(this.state === "RESOLVED") {
           this.onSuccess()
       } else if (this.state === "REJECTED") {
           this.onReject()
       } else {
           console.log("pending")
       }
        return "ok"
    }
}