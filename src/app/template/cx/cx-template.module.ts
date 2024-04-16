import { NgModule } from '@angular/core';
import { CxTemplateComponent } from './cx-template.component';
import { CxTemplateDirective } from './cx-template.directive';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [CxTemplateComponent, CxTemplateDirective],
  imports: [
    DatePipe
  ],
  exports: [CxTemplateComponent, CxTemplateDirective]
})
export class CxTemplateModule {

}
