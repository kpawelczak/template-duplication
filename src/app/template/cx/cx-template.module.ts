import { NgModule } from '@angular/core';
import { CxTemplateComponent } from './cx-template.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [CxTemplateComponent],
  imports: [
    DatePipe
  ],
  exports: [CxTemplateComponent]
})
export class CxTemplateModule {

}
