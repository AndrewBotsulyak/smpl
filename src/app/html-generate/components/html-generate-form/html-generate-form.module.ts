import {NgModule} from '@angular/core';
import {HtmlGenerateFormComponent} from './html-generate-form.component';
import {SharedModule} from '../../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    HtmlGenerateFormComponent
  ],
  declarations: [
    HtmlGenerateFormComponent
  ]
})
export class HtmlGenerateFormModule {}

