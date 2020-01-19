import {Component, OnInit} from '@angular/core';
import {ItemService} from '../services/item.service';
import {ItemCard} from '../shared/item-card.model';

@Component({
  selector: 'app-chairs-card',
  templateUrl: 'chairs-card.component.html',
  styleUrls: ['chairs-card.component.css']
})
export class ChairsCardComponent implements OnInit {
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
    this.items = this.item.chairs;
  }
}
