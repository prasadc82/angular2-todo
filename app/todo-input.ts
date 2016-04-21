import {Component} from 'angular2/core';
import {TodoService} from './todo-service'; 

@Component({
    selector: 'todo-input',
    template: `<div>
               <input type="text" #myValue>
               <button (click)="onClick(myValue.value)">Click</button>
               </div>`
})
export class TodoInput {
    constructor(public todoService:TodoService){}
    
    onClick(value) {
        this.todoService.todos.push(value);
    }
}