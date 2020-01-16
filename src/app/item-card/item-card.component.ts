import {Component, OnInit} from '@angular/core';
import {ItemService} from '../services/item.service';
import {ItemCard} from '../shared/item-card.model';

@Component({
  selector: 'app-item-card',
  templateUrl: 'item-card.component.html',
  styleUrls: ['item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  slideConfig = {
    slidesToScroll: 1,
    slidesToShow: 4,
    arrows: false,
    infinite: false
  };
  items: ItemCard[] = [];
  constructor(private item: ItemService) {
  }
  ngOnInit(): void {
    this.items = this.item.items;
  }
}
