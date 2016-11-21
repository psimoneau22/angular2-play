import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item.model';

@Component({
    moduleId: module.id,
    selector: 'item-detail-view',
    templateUrl: 'detail.view.component.html'
})
export class DetailViewComponent implements OnInit, OnChanges {

    @Input() public item: Item

    constructor(
        private itemService: ItemService
    ) { }

    ngOnInit(): void {
        
    }

    ngOnChanges() {
        console.log('change', arguments)
    }
}