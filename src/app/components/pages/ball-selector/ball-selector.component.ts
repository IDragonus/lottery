import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss'],
})
export class BallSelectorComponent implements OnInit {
  total: string = '';

  constructor() {}

  ngOnInit(): void {}

  calculate() {
    console.log('calculate funciona');
  }
}
