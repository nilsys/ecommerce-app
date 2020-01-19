import {Injectable} from '@angular/core';
import {ItemCard} from '../shared/item-card.model';

@Injectable({providedIn: 'root'})
export class ItemService {
  constructor() {
  }
  chairs: ItemCard[] = [
    {title: 'chair1', desc: 'some descriptions', img: 'http://fuck.off', price: 21000 },
    {title: 'chair2', desc: 'some descriptions', img: 'http://fuck.off', price: 20000 },
    {title: 'chair3', desc: 'some descriptions', img: 'http://fuck.off', price: 20000 },
    {title: 'chair4', desc: 'some descriptions', img: 'http://fuck.off', price: 20000 },
    {title: 'chair5', desc: 'some descriptions', img: 'http://fuck.off', price: 20000 },
    {title: 'chair6', desc: 'some descriptions', img: 'http://fuck.off', price: 20000 },
    {title: 'chair7', desc: 'some descriptions', img: 'http://fuck.off', price: 20000 },
  ];
  beds: ItemCard[] = [
    {title: 'bed1', desc: 'some descriptions', img: 'http://fuck.off', price: 21000 },
    {title: 'bed2', desc: 'some descriptions', img: 'http://fuck.off', price: 20000 },
    {title: 'bed3', desc: 'some descriptions', img: 'http://fuck.off', price: 20000 },
    {title: 'bed4', desc: 'some descriptions', img: 'http://fuck.off', price: 20000 },
    {title: 'bed5', desc: 'some descriptions', img: 'http://fuck.off', price: 20000 },
    {title: 'bed6', desc: 'some descriptions', img: 'http://fuck.off', price: 20000 },
    {title: 'bed7', desc: 'some descriptions', img: 'http://fuck.off', price: 20000 },
  ];
  sofas: ItemCard[] = [
    {title: 'sofa1', desc: 'some descriptions', img: 'http://fuck.off', price: 21000 },
    {title: 'sofa2', desc: 'some descriptions', img: 'http://fuck.off', price: 20000 },
    {title: 'sofa3', desc: 'some descriptions', img: 'http://fuck.off', price: 20000 },
    {title: 'sofa4', desc: 'some descriptions', img: 'http://fuck.off', price: 20000 },
    {title: 'sofa5', desc: 'some descriptions', img: 'http://fuck.off', price: 20000 },
    {title: 'sofa6', desc: 'some descriptions', img: 'http://fuck.off', price: 20000 },
    {title: 'sofa7', desc: 'some descriptions', img: 'http://fuck.off', price: 20000 },
  ];
}
