import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { PipeTransform } from '@angular/core';
import { AsyncPipe, DecimalPipe, NgFor } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

interface Country {
	name: string;
	area: number;
	population: number;
  sector:string;
  company:string;
  sales:string;
  enterprise:string

	// flagg: string;
	// areaa: number;
	// populationn: number;
}

const COUNTRIES: Country[] = [
	{
		name: 'TSLA',
		area: 20.0,
		population: 6.0,
    company:"Tesla",
    sector:"Consumer Cyclical",
    sales:"44.80",
    enterprise:"543990.0",
	},
  {
		name: 'TSLA',
		area: 20.0,
		population: 6.0,
    company:"Tesla",
    sector:"Consumer Cyclical",
    sales:"44.80",
    enterprise:"543990.0",
	},
  {
		name: 'TSLA',
		area: 20.0,
		population: 6.0,
    company:"Tesla",
    sector:"Consumer Cyclical",
    sales:"44.80",
    enterprise:"543990.0",
	},
  {
		name: 'TSLA',
		area: 20.0,
		population: 6.0,
    company:"Tesla",
    sector:"Consumer Cyclical",
    sales:"44.80",
    enterprise:"543990.0",
	},
  {
		name: 'TSLA',
		area: 20.0,
		population: 6.0,
    company:"Tesla",
    sector:"Consumer Cyclical",
    sales:"44.80",
    enterprise:"543990.0",
	},
  {
		name: 'TSLA',
		area: 20.0,
		population: 6.0,
    company:"Tesla",
    sector:"Consumer Cyclical",
    sales:"44.80",
    enterprise:"543990.0",
	},
  {
		name: 'TSLA',
		area: 20.0,
		population: 6.0,
    company:"Tesla",
    sector:"Consumer Cyclical",
    sales:"44.80",
    enterprise:"543990.0",
	},
  {
		name: 'TSLA',
		area: 20.0,
		population: 6.0,
    company:"Tesla",
    sector:"Consumer Cyclical",
    sales:"44.80",
    enterprise:"543990.0",
	},
  {
		name: 'TSLA',
		area: 20.0,
		population: 6.0,
    company:"Tesla",
    sector:"Consumer Cyclical",
    sales:"44.80",
    enterprise:"543990.0",
	},
  {
		name: 'TSLA',
		area: 20.0,
		population: 6.0,
    company:"Tesla",
    sector:"Consumer Cyclical",
    sales:"44.80",
    enterprise:"543990.0",
	},
  {
		name: 'TSLA',
		area: 20.0,
		population: 6.0,
    company:"Tesla",
    sector:"Consumer Cyclical",
    sales:"44.80",
    enterprise:"543990.0",
	},
  {
		name: 'TSLA',
		area: 20.0,
		population: 6.0,
    company:"Tesla",
    sector:"Consumer Cyclical",
    sales:"44.80",
    enterprise:"543990.0",
	},
  {
		name: 'TSLA',
		area: 20.0,
		population: 6.0,
    company:"Tesla",
    sector:"Consumer Cyclical",
    sales:"44.80",
    enterprise:"543990.0",
	},
  {
		name: 'TSLA',
		area: 20.0,
		population: 6.0,
    company:"Tesla",
    sector:"Consumer Cyclical",
    sales:"44.80",
    enterprise:"543990.0",
	},
  {
		name: 'TSLA',
		area: 20.0,
		population: 6.0,
    company:"Tesla",
    sector:"Consumer Cyclical",
    sales:"44.80",
    enterprise:"543990.0",
	},
  {
		name: 'TSLA',
		area: 20.0,
		population: 6.0,
    company:"Tesla",
    sector:"Consumer Cyclical",
    sales:"44.80",
    enterprise:"543990.0",
	},
  {
		name: 'TSLA',
		area: 20.0,
		population: 6.0,
    company:"Tesla",
    sector:"Consumer Cyclical",
    sales:"44.80",
    enterprise:"543990.0",
	},
  {
		name: 'TSLA',
		area: 20.0,
		population: 6.0,
    company:"Tesla",
    sector:"Consumer Cyclical",
    sales:"44.80",
    enterprise:"543990.0",
	},
  {
		name: 'TSLA',
		area: 20.0,
		population: 6.0,
    company:"Tesla",
    sector:"Consumer Cyclical",
    sales:"44.80",
    enterprise:"543990.0",
	},
  {
		name: 'TSLA',
		area: 20.0,
		population: 6.0,
    company:"Tesla",
    sector:"Consumer Cyclical",
    sales:"44.80",
    enterprise:"543990.0",
	},
  {
		name: 'TSLA',
		area: 20.0,
		population: 6.0,
    company:"Tesla",
    sector:"Consumer Cyclical",
    sales:"44.80",
    enterprise:"543990.0",
	},
  {
		name: 'TSLA',
		area: 20.0,
		population: 6.0,
    company:"Tesla",
    sector:"Consumer Cyclical",
    sales:"44.80",
    enterprise:"543990.0",
	},
  {
		name: 'TSLA',
		area: 20.0,
		population: 6.0,
    company:"Tesla",
    sector:"Consumer Cyclical",
    sales:"44.80",
    enterprise:"543990.0",
	},
  {
		name: 'TSLA',
		area: 20.0,
		population: 6.0,
    company:"Tesla",
    sector:"Consumer Cyclical",
    sales:"44.80",
    enterprise:"543990.0",
	},
];

function search(text: string, pipe: PipeTransform): Country[] {
	return COUNTRIES.filter((country) => {
		const term = text.toLowerCase();
		return (
			country.name.toLowerCase().includes(term) ||
			pipe.transform(country.area).includes(term) ||
			pipe.transform(country.population).includes(term)
		);
	});
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
	providers: [DecimalPipe,NgFor, FormsModule, NgbTypeaheadModule, NgbPaginationModule],
  // imports: [DecimalPipe, NgFor, FormsModule, NgbTypeaheadModule, NgbPaginationModule],

})
export class DashboardComponent {
	countries$: Observable<Country[]>;
	filter = new FormControl('', { nonNullable: true });

	// constructor(pipe: DecimalPipe,config: NgbModalConfig,
  //   private modalService: NgbModal,) {
	// 	this.countries$ = this.filter.valueChanges.pipe(
	// 		startWith(''),
	// 		map((text) => search(text, pipe)),
	// 	);
	// }
  page = 1;
	pageSize = 4;
	collectionSize = COUNTRIES.length;
	countries: Country[] = [];

	constructor(pipe: DecimalPipe,config: NgbModalConfig,
      private modalService: NgbModal,) {
		this.refreshCountries();
    this.countries$ = this.filter.valueChanges.pipe(
      		startWith(''),
      		map((text) => search(text, pipe)),
      	);
	}

	refreshCountries() {
		this.countries = COUNTRIES.map((country, i) => ({ id: i + 1, ...country })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}
}
