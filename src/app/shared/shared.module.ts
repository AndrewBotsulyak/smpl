import {NgModule} from '@angular/core';
import {MaterialModule} from './material.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class SharedModule {}

