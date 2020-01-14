import {Component} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: 'banner.component.html',
  styleUrls: ['banner.component.css']
})
export class BannerComponent {
  slides = [
    {img: 'assets/furniture1.jpg'},
    {img: 'assets/furniture2.jpg'},
    {img: 'assets/furniture3.jpg'},
    {img: 'assets/furniture4.jpg'}
  ];
  slideConfig = {
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    cssEase: 'linear',
  };
}
