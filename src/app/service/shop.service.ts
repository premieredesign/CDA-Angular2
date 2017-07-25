import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';
import { Apparel } from './shop.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class ShopService {

    

    constructor() {}
 
}

interface Items {
    key?: string,
    title?: string,
    image?: string,
    type?: string
}