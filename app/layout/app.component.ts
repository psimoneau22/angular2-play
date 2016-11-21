import { Component, ViewContainerRef } from '@angular/core';
import { ItemService } from '../services/item.service';
import { ComponentsHelper } from 'ng2-bootstrap/ng2-bootstrap';

@Component({    
    moduleId: module.id,
    selector: 'app',
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"],
    providers: [
        ItemService
    ]
})
export class AppComponent {
    debug: string = 'app load success'

    public constructor(componentsHelper:ComponentsHelper, vcr:ViewContainerRef) {
        componentsHelper.setRootViewContainerRef(vcr);
    }
}