import { NgModule } from '@angular/core';
import { TemplateComponent } from './template.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [TemplateComponent],
  imports: [
    DatePipe
  ],
  exports: [TemplateComponent]
})
export class TemplateModule {

}
