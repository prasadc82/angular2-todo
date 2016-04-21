import {Injectable} from 'angular2/core'
import {TodoModel} from './todo-model'

@Injectable()
export class TodoService {
    todos:TodoModel[] = [
        new TodoModel("eat"),
        new TodoModel("play"),
        new TodoModel("sleep")
    ];
    
    addTodo(todo) {
        this.todos = [...this.todos, todo];
    }
    
    toggleTodo(todo){
        console.log(todo);
        todo.toggle();
        
        const i = this.todos.indexOf(todo);
        this.todos = [
          ...this.todos.slice(0, i),
          todo,
          ...this.todos.slice(i+1)  
        ];
    }

}