import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item.model';

@Component({
    moduleId: module.id,
    selector: 'item-detail-edit',
    templateUrl: "detail.edit.component.html"
})
export class DetailEditComponent implements OnInit {

    private item: Item;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private itemService: ItemService
    ){

    }

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
        this.itemService.get(id)
            .subscribe(i => this.item = i)
    }

    submit(){

    }

    back(){
        this.router.navigateByUrl("list")
    }
}