import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CxTemplateComponent } from './cx-template.directive';

@NgModule({
  declarations: [CxTemplateComponent],
  imports: [
    DatePipe
  ],
  exports: [CxTemplateComponent]
})
export class CxTemplateModule {

}
