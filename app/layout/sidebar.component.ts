import { Component } from '@angular/core';

@Component({    
    moduleId: module.id,
    selector: 'app-sidebar',
    templateUrl: "sidebar.component.html",
    styleUrls: ["sidebar.component.css"]
})
export class SidebarComponent {
    debug: string = 'component load success'
}