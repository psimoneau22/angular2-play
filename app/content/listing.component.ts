import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from '../models/item.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ItemService } from '../services/item.service';
import { ModalComponent } from '../shared/modal.component'

@Component({
    moduleId: module.id,
    selector: 'app-listing',
    templateUrl: "listing.component.html"
})
export class ListingComponent implements OnInit {

    private items: Item[];
    private currentItem: Item;

    @ViewChild('viewDetailModal')
    private viewDetailModal: ModalComponent;
    @ViewChild('confirmDeleteModal')
    private confirmDeleteModal: ModalComponent;

    constructor(
        private itemService: ItemService,
        private router: Router,
        private route: ActivatedRoute
    ){
         
    }

    ngOnInit(): void {
        this.itemService
            .list()
            .subscribe(i => this.items = i)
    }

    search(filter: string) {

        return this.itemService.list(filter)
            .subscribe(data => this.items = data)
    }

    editItem(item: Item): void {
        this.router.navigate(['/list', item.id]);
    }

    viewItem(item: Item){
        this.currentItem = item;
        this.viewDetailModal.show();
    }

    deleteItem(item: Item){
        this.currentItem = item;
        this.confirmDeleteModal.show();
    }

    confirmDeleteItem(item: Item){
        this.itemService.delete(item.id)
            .subscribe(r => {
                alert('deleted');
                this.confirmDeleteModal.hide();
            });
    }
}