import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-series-view',
  templateUrl: './series-view.component.html',
  styleUrls: ['./series-view.component.scss']
})
export class SeriesViewComponent implements OnInit {
  searchName: string;
  genreOption: string;
  searchPremiereYear: string;

  constructor() { }

  ngOnInit(): void {
  }

}
