import { Component } from '@angular/core';
import { CxTemplateDirective } from './cx/cx-template.directive';
import { XCxTemplateComponent } from './cx/cx-template.component';

@Component({
  selector: 'app-temp',
  templateUrl: 'template.component.html'
})
export class TemplateComponent
  // CxTemplateComponent
  extends XCxTemplateComponent {

}
