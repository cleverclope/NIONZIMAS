export class ResoponseDto<T>{
    data?:T
    status?:boolean
    message?:string

    constructor(_data:T , _status:boolean , _message:string){
        this.data = _data
        this.status = _status
        this.message = _message
    }

}