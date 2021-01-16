import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[asmtHighlighter]'
})
export class HighlighterDirective {
  private isHighlightedEmail = false;
 

  @HostBinding("class.highlight-email")
  get shouldHighlight() {
    return this.isHighlightedEmail;
  }

  @HostListener("mouseover")
  onMouseOver() {
    this.isHighlightedEmail = true;
  }

  @HostListener("mouseout")
  onMouseOut() {
    this.isHighlightedEmail = false;
  }
  constructor() { }

}
