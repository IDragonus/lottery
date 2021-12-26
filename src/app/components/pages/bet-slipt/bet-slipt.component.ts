import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bet-slipt',
  templateUrl: './bet-slipt.component.html',
  styleUrls: ['./bet-slipt.component.scss'],
})
export class BetSliptComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  clear() {
    console.log('clear funciona');
  }
}
