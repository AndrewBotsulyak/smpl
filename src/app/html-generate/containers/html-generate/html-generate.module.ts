import {NgModule} from '@angular/core';
import {HtmlGenerateFormModule} from '../../components/html-generate-form/html-generate-form.module';
import {HtmlGenerateComponent} from './html-generate.component';


@NgModule({
  imports: [
    HtmlGenerateFormModule
  ],
  exports: [
    HtmlGenerateComponent
  ],
  declarations: [
    HtmlGenerateComponent
  ]
})
export class HtmlGenerateModule {}

