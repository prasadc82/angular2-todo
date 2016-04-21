import {Component} from 'angular2/core';
import {TodoService} from './todo-service';
import {TodoModel} from './todo-model';

@Component({
    selector: 'todo-input',
    template: `<div>
               <form (submit)="onSubmit()">
                 <input type="text" [(ngModel)]="todoModel.title">
               </form>
               </div>`
})
export class TodoInput {
    todoModel:TodoModel = new TodoModel();
    constructor(public todoService:TodoService){}
    
    onSubmit() {
        console.log(this.todoService.todos);
        this.todoService.todos.push(this.todoModel);
        this.todoModel = new TodoModel();
    }
}