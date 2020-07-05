import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HtmlGenerateComponent} from './html-generate/containers/html-generate/html-generate.component';

const routes: Routes = [
  {
    path: '',
    component: HtmlGenerateComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {}

