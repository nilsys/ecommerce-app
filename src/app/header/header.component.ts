import {Component} from '@angular/core';
import {BsDropdownConfig} from 'ngx-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class HeaderComponent {
  isCollapsed = false;
}
