import { forEach } from '@angular/router/src/utils/collection';
import { Directive, Renderer, ElementRef,HostListener,EventEmitter,Output,Input,TemplateRef, ViewContainerRef, } from '@angular/core';
import { data } from './page.js';

export interface Page {
    label: string;
    value: any;
}


@Directive({
  selector: '[appPage]',
})
export class PageDirective {
    @Input() id: string;
    @Input() maxSize: number = 7;
    @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
    pages: Page[] = [];
private nativeElement : Node;

constructor( private renderer : Renderer, private element : ElementRef ) {

this.nativeElement = element.nativeElement;

element.nativeElement.style.backgroundColor = 'yellow';

//global event
this.renderer.listenGlobal("body", "click", () => console.log("Global event"));
// this.renderer.listen("button","click")
//first button
let btnFstElement=this.renderer.createElement(this.nativeElement,"button");
this.renderer.createText(btnFstElement, "First");

//last button
let btnPrevElement=this.renderer.createElement(this.nativeElement,"button");
this.renderer.createText(btnPrevElement, "<<Previous");

//listing element
for(var i=0;i<5;i++){
let liElement=this.renderer.createElement(this.nativeElement,"button");
this.renderer.createText(liElement,i.toString());
}

//next button
let btnNxtElement=this.renderer.createElement(this.nativeElement,"button");
this.renderer.createText(btnNxtElement, ">>Next");

//last button
let btnlstElement=this.renderer.createElement(this.nativeElement,"button");
this.renderer.createText(btnlstElement, "Last");


}
  ngOnInit() {
  }


}