import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateModule } from './template/template.module';
import { CxTemplateModule } from './template/cx/cx-template.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateModule, CxTemplateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'template-duplication';
}
