export class TodoModel {
    status:string = "started";
    
    constructor(public title:string = ""){}
    
    toggle() {
        this.status = (this.status == "started") ? "completed" : "started";
    }
}