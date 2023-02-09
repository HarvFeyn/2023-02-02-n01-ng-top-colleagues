import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePage } from './welcome.page';
import {SharedModule} from "../../shared/shared.module";
import {RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [
    WelcomePage
  ],
  exports: [
    WelcomePage
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterOutlet
  ]
})
export class WelcomeModule { }
