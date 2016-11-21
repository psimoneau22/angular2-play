import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Item } from '../models/item.model';
import { Observable } from 'rxjs/Observable';
let escapeRegExp = require('escape-string-regexp');
import "rxjs/add/operator/map"

@Injectable()
export class ItemService {

    constructor(private http: Http) {

    }

    list(search?: string): Observable<Item[]> {
        let result = this.http.get('/assets/data/items.json')
            .map(r => <Item[]>r.json())
            .map(data => data.map(i =>
                new Item(i.id, i.firstName, i.lastName)
            ));

        if (search) {
            let searchRegex = new RegExp(escapeRegExp(search));
            result = result.map(items => items.filter(i =>
                searchRegex.test(i.firstName) ||
                searchRegex.test(i.lastName) ||
                searchRegex.test(i.email)
            ))
        }

        return result;
    }

    get(id: number): Observable<Item> {
        return this.list()
            .map(items => items.find(i =>
                i.id === id
            ));
    }

    update(id: number, item: Item): Observable<boolean> {
        return Observable.create(observer => {
            setTimeout(function() {
                observer.next(true);
                observer.completed();
            }, 1000);            
        })
    }

    delete(id: number): Observable<boolean> {
        return Observable.create(observer => {
            observer.next(true);
            observer.onCompleted();
        })
    }
}
