import { Directive, OnInit, Renderer2, ElementRef } from "@angular/core";

@Directive({
  selector: "[better-highlighter]"
})
export class BetterHighlightDirective implements OnInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  ngOnInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      "green"
    );
  }
}
