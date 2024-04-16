import { Component } from '@angular/core';
import { CxTemplateDirective } from './cx/cx-template.directive';

@Component({
  selector: 'app-temp',
  templateUrl: 'template.component.html'
})
export class TemplateComponent
  // CxTemplateComponent
  extends CxTemplateDirective {

}
