import {Component, OnInit} from '@angular/core';
import {ISeries} from '../../models/series.model';
import * as moment from 'moment';


@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class SeriesListComponent implements OnInit {

  page: number = 1;

  constructor() {
  }

  currentSeries: ISeries;
  seriesListContent: ISeries[] = [];

  ngOnInit(): void {
    this.currentSeries = {
      name: 'The Terror',
      genre: ['horror', 'drama'],
      network: 'AMC',
      season: 3,
      premiereYear: '20.10.2019'
    };
    let secondSeries: ISeries = {
      name: 'ATestTime',
      genre: ['crime', 'tragedy'],
      network: 'AMC, Netflix',
      season: 4,
      premiereYear: '05.11.2019'
    };
    let thirdSeries: ISeries = {
      name: 'Preacher',
      genre: ['drama', 'dark comedy'],
      network: 'AMC',
      season: 5,
      premiereYear: '01.01.2019'
    };
    let forthSeries: ISeries = {
      name: 'The Terror',
      genre: ['horror', 'drama'],
      network: 'AMC',
      season: 2,
      premiereYear: '10.01.2018'
    };
    let fivthSeries: ISeries = {
      name: 'Better Call Saul',
      genre: ['crime', 'tragedy'],
      network: 'AMC, Netflix',
      season: 3,
      premiereYear: '02.04.2018'
    };
    let sixSeries: ISeries = {
      name: 'Supernatural',
      genre: ['horror', 'drama', 'fantasy', 'detective'],
      network: 'AMC',
      season: 1,
      premiereYear: '13.09.2005'
    };
    let sevenSeries: ISeries = {
      name: 'Money Heist',
      genre: ['crime', 'detective'],
      network: 'Antena 3, Netflix',
      season: 4,
      premiereYear: '03.04.2020'
    };
    let eightSeries: ISeries = {
      name: 'Preacher',
      genre: ['drama', 'dark comedy'],
      network: 'AMC',
      season: 5,
      premiereYear: '01.01.2019'
    };
    let nineSeries: ISeries = {
      name: 'The Terror',
      genre: ['horror', 'drama'],
      network: 'AMC',
      season: 2,
      premiereYear: '10.01.2018'
    };
    let tenSeries: ISeries = {
      name: 'Better Call Saul',
      genre: ['crime', 'tragedy'],
      network: 'AMC, Netflix',
      season: 3,
      premiereYear: '02.04.2018'
    };
    this.seriesListContent.push(this.currentSeries, secondSeries, thirdSeries, forthSeries, fivthSeries, sixSeries, sevenSeries, eightSeries,
      nineSeries, tenSeries);
  }

  genreColor(genre: string): string {
    switch (genre.toLowerCase()) {
      case 'horror':
        return '#535353';
      case 'tragedy':
        return '#ec5c5e';
      case 'drama':
        return '#c06edd';
      case 'crime':
        return '#a057e4';
      case 'dark comedy':
        return '#888888';
      case 'fantasy':
        return '#3b99c5';
      case 'detective':
        return '#efe826';
      default:
        return 'gray';
    }
  }

  seriesNameSort(directionSort: string | null) {
      this.seriesListContent.sort((firstSeries, secondSeries) => {
        let firstSeriesName = firstSeries.name.toLowerCase();
        let  secondSeriesName = secondSeries.name.toLowerCase();
        if (firstSeriesName < secondSeriesName) {
          return -1;
        }
        if (firstSeriesName > secondSeriesName) {
          return 1;
        }
        return 0;
      });
      if (directionSort) {
        this.seriesListContent.reverse()
      }
  }

  dateSort(direction: string | null) {
    this.seriesListContent.sort((firstSeries, secondSeries) => {
      return moment(secondSeries.premiereYear, 'DD.MM.YYYY').valueOf() - moment(firstSeries.premiereYear, 'DD.MM.YYYY').valueOf()
    });
    if (direction) {
      this.seriesListContent.reverse()
    }
  }
}
