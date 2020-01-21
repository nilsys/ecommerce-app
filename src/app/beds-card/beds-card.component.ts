import { Component, OnInit } from '@angular/core';
import {ItemCard} from '../shared/item-card.model';
import {ItemService} from '../services/item.service';

@Component({
  selector: 'app-beds-card',
  templateUrl: './beds-card.component.html',
  styleUrls: ['./beds-card.component.css'],
})
export class BedsCardComponent implements OnInit {
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
    this.items = this.item.beds;
  }
}
