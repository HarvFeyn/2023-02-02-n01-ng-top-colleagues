import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {WelcomeModule} from "./pages/welcome/welcome.module";
import { HttpClientModule } from '@angular/common/http';
import {CreateColleagueModule} from "./pages/create-colleague/create-colleague.module";
import {RouterModule, Routes} from "@angular/router";
import {CreateColleaguePage} from "./pages/create-colleague/create-colleague.page";
import {WelcomePage} from "./pages/welcome/welcome.page";
import {MenuComponentPage} from "./pages/menu-component/menu-component.page";

const routes: Routes = [
  {path: 'accueil', component: WelcomePage},
  {path: 'formulaire', component: CreateColleaguePage}
];

@NgModule({
    declarations: [
        AppComponent,
        MenuComponentPage
    ],
    imports: [
        BrowserModule, SharedModule, NgbModule, WelcomeModule, HttpClientModule, CreateColleagueModule, RouterModule.forRoot(routes)
    ],
    providers: [],
    exports: [RouterModule],
    bootstrap: [AppComponent]
})
export class AppModule { }
