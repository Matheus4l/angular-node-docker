import { Directive, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[meuLoop]'
})
export class LoopDirective implements OnInit {

  @Input('meuLoopEm') numbers:number[]
  @Input('meuLoopUsando') texto:string
  constructor() { }
  
  ngOnInit():void{
    console.log(this.numbers)
    console.log(this.texto)
  }
}
