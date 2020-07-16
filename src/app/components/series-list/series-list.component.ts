import { Component, OnInit } from '@angular/core';
import {ISeries} from '../../models/series.model';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class SeriesListComponent implements OnInit {

  constructor() { }

  currentSeries: ISeries;
  seriesListContent: ISeries[] = [];

  ngOnInit(): void {
    this.currentSeries = {
      name: 'name',
      genre: ['1', '2', '3'],
      network: 'network',
      season: 0,
      premiereYear: '2020'
    };
    let secondSeries: ISeries = {
      name: 'test',
      genre: ["1", '2', '3'],
      network: "testN",
      season: 5,
      premiereYear: '2019'
    };
    this.seriesListContent.push(this.currentSeries);
    this.seriesListContent.push(secondSeries);
  }

}
