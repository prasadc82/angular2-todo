import {Component} from 'angular2/core';
import {TodoInput} from './todo-input';

@Component({
  selector: 'my-component',
  directives: [TodoInput],
  template: `<div><todo-input></todo-input></div>`
})

export class AppComponent{   
}