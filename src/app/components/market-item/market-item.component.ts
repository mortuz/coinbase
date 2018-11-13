import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-market-item',
  templateUrl: './market-item.component.html',
  styleUrls: ['./market-item.component.scss']
})
export class MarketItemComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
    // console.log('data', this.data);
  }

}
