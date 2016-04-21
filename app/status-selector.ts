import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'status-selector',
    template: `<div>
                  <select #sel (change)="select.emit(sel.value)">
                    <option *ngFor="#status of statusses">
                        {{status}}
                    </option>
                  </select>
               </div>`
})
export class StatusSelector {
    statusses:string[] = ['started', 'completed'];
    @Output() select = new EventEmitter();
    
    ngOnInit() {
        this.select.emit(this.statusses[0]);
    }
}