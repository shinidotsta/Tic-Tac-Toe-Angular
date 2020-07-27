import { Component, Input, Output,EventEmitter, HostListener } from '@angular/core';


@Component({
  selector: 'square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {

  constructor() { }

  @Input() value: string;
  @Output('playerClick') click =new EventEmitter<string>();
  @HostListener('click')
  clickHandler(){
    this.click.emit('');
  }
  


}
