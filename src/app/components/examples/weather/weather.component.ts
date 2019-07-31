import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: [ './weather.component.scss' ]
})
export class WeatherComponent implements OnInit {
	constructor(private weatherService: WeatherService) {}
	weather: any;
	ngOnInit() {
		this.weatherService.getWeather().then(
			(data) => {
				this.weather = data;
			},
			(error) => {
				console.log(error);
			}
		);
	}
}
