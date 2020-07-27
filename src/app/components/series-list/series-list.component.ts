import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ISeries} from '../../models/series.model';
import * as moment from 'moment';
import {BehaviorSubject, Subject} from 'rxjs';
import {GenreEnum} from '../../models/genre.enum';


@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class SeriesListComponent implements OnInit, OnChanges {

  @Input() private _searchNameInput: string;
  @Input() searchGenre: string;
  @Input() searchYear: string;

  page: number = 1;

  seriesListData: ISeries[];

  constructor(private ref: ChangeDetectorRef) {
  }

  currentSeries: ISeries;
  private _seriesListContent: ISeries[] = [];

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
    this._seriesListContent.push(this.currentSeries, secondSeries, thirdSeries, forthSeries, fivthSeries, sixSeries, sevenSeries,
      nineSeries, tenSeries);
    this.seriesListData = this.seriesListContent;
  }

  genreColor(genre: string): string {
    switch (genre.toLowerCase()) {
      case GenreEnum.horror:
        return '#535353';
      case GenreEnum.tragedy:
        return '#ec5c5e';
      case GenreEnum.drama:
        return '#c06edd';
      case GenreEnum.crime:
        return '#a057e4';
      case GenreEnum.darkComedy:
        return '#888888';
      case GenreEnum.fantasy:
        return '#3b99c5';
      case GenreEnum.detective:
        return '#efe826';
      default:
        return 'gray';
    }
  }

  seriesNameSort(directionSort: string | null) {
    this.seriesListData.sort((firstSeries, secondSeries) => {
      let firstSeriesName = firstSeries.name.toLowerCase();
      let secondSeriesName = secondSeries.name.toLowerCase();
      if (firstSeriesName < secondSeriesName) {
        return -1;
      }
      if (firstSeriesName > secondSeriesName) {
        return 1;
      }
      return 0;
    });
    if (directionSort) {
      this.seriesListData.reverse();
    }
  }

  dateSort(direction: string | null) {
    this.seriesListData.sort((firstSeries, secondSeries) => {
      return moment(secondSeries.premiereYear, 'DD.MM.YYYY').valueOf() - moment(firstSeries.premiereYear, 'DD.MM.YYYY').valueOf();
    });
    if (direction) {
      this.seriesListData.reverse();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.searchNameInput) {
      this.seriesListData = this.seriesListContent.filter(value => value.name.toLowerCase().includes(this.searchNameInput.toLowerCase()));
      if (this.searchGenre && this.searchGenre.toLowerCase() !== 'all') {
        this.seriesListData = this.seriesListData.filter(value => value.genre.includes(this.searchGenre))
      }
      if (this.searchYear && this.searchYear.toLowerCase() !== 'all') {
        this.seriesListData = this.seriesListData.filter(value => moment(value.premiereYear, 'DD.MM.YYYY').year().toString().toLowerCase() == moment(this.searchYear).format('YYYY').toLowerCase())
      }
      return
    }
    if (this.searchGenre && this.searchGenre.toLowerCase() !== 'all') {
      this.seriesListData = this.seriesListContent.filter(value => value.genre.includes(this.searchGenre));
      if (this.searchNameInput) {
        this.seriesListData = this.seriesListData.filter(value => value.name.toLowerCase().includes(this.searchNameInput.toLowerCase()));
      }
      if (this.searchYear && this.searchYear.toLowerCase() !== 'all' ) {
        this.seriesListData = this.seriesListData.filter(value => moment(value.premiereYear, 'DD.MM.YYYY').year().toString().toLowerCase() == moment(this.searchYear).format('YYYY').toLowerCase())
      }
      return;
    }
    if (this.searchYear && this.searchYear.toLowerCase() !== 'all') {
      this.seriesListData = this.seriesListContent.filter(value => moment(value.premiereYear, 'DD.MM.YYYY').year().toString().toLowerCase() == moment(this.searchYear).format('YYYY').toLowerCase())
      if (this.searchNameInput) {
        this.seriesListData = this.seriesListData.filter(value => value.name.toLowerCase().includes(this.searchNameInput.toLowerCase()));
      }
      if (this.searchGenre && this.searchGenre.toLowerCase() !== 'all') {
        this.seriesListData = this.seriesListData.filter(value => value.genre.includes(this.searchGenre))
      }
      return;
    }
    if (!this.searchNameInput && (!this.searchGenre || this.searchGenre.toLowerCase() == 'all') && (!this.searchYear || this.searchYear.toLowerCase() == 'all')) {
      this.seriesListData = this.seriesListContent
    }
  }

  get seriesListContent(): ISeries[] {
    return this._seriesListContent;
  }

  set seriesListContent(value: ISeries[]) {
    this._seriesListContent = value;
  }

  get searchNameInput(): string {
    return this._searchNameInput;
  }

  set searchNameInput(value: string) {
    this._searchNameInput = value;
  }
}
