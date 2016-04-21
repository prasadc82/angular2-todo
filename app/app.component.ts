import {Component} from 'angular2/core';
import {TodoInput} from './todo-input';
import {TodoList} from './todo-list';

@Component({
  selector: 'my-component',
  directives: [TodoInput, TodoList],
  template: `<div>
              <todo-input></todo-input>
              <todo-list></todo-list>
            </div>`
})

export class AppComponent{   
}