import {Injectable} from '@angular/core';
import {ItemCard} from '../shared/item-card.model';

@Injectable({providedIn: 'root'})
export class ItemService {
  constructor() {
  }
  items: ItemCard[] = [
    {title: 'chair1', desc: 'some descriptions', img: 'http://fuck.off', price: 21000 },
    {title: 'chair2', desc: 'some descriptions', img: 'http://fuck.off', price: 20000 },
    {title: 'chair3', desc: 'some descriptions', img: 'http://fuck.off', price: 20000 },
    {title: 'chair4', desc: 'some descriptions', img: 'http://fuck.off', price: 20000 },
    {title: 'chair5', desc: 'some descriptions', img: 'http://fuck.off', price: 20000 },
    {title: 'chair6', desc: 'some descriptions', img: 'http://fuck.off', price: 20000 },
    {title: 'chair7', desc: 'some descriptions', img: 'http://fuck.off', price: 20000 },
  ];
}
