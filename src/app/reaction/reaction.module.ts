import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactionWrapperComponent } from './reaction-wrapper/reaction-wrapper.component';

@NgModule({
  declarations: [ReactionWrapperComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ReactionWrapperComponent
  ]
})
export class ReactionModule { }
