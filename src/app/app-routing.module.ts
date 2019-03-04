import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactionWrapperComponent } from './reaction/reaction-wrapper/reaction-wrapper.component';

const routes: Routes = [
  { path: 'reaction', component: ReactionWrapperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
