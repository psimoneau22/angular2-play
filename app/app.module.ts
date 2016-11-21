import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ModalModule, ComponentsHelper } from 'ng2-bootstrap/ng2-bootstrap';
import { appRoutes } from './app.routes'
import * as Layout from './layout';
import * as Content from './content';
import * as Shared from './shared';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,        
        RouterModule.forRoot(appRoutes),
        ModalModule
    ],
    declarations: [
        Layout.AppComponent,
        Layout.HeaderComponent,
        Layout.FooterComponent,
        Layout.SidebarComponent,
        Content.DetailEditComponent,
        Content.DetailViewComponent,
        Content.ListingComponent,
        Content.StatisticsComponent,
        Content.HomeComponent,
        Shared.ModalComponent
    ],
    providers: [
        ComponentsHelper
    ],
    bootstrap: [
        Layout.AppComponent
    ]
})
export class AppModule { }
