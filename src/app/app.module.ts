import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContactComponent } from './components/examples/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { SkillsComponent } from './components/examples/skills/skills.component';
import { WeatherComponent } from './components/examples/weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { KtoCPipe } from './pipes/kelvinToCelsjusz';
import { PressurePipe } from './pipes/pressure.pipe';
import { WindPipe } from './pipes/wind.pipe';
import { CloudsPipe } from './pipes/clouds.pipe';
import { HumidityPipe } from './pipes/humidity.pipe';
import { NameCityPipe } from './pipes/name-city.pipe';

@NgModule({
	declarations: [
		AppComponent,
		ProfileComponent,
		ExamplesComponent,
		NavigationComponent,
		SkillsComponent,
		ContactComponent,
		WeatherComponent,
		KtoCPipe,
		PressurePipe,
		WindPipe,
		CloudsPipe,
		HumidityPipe,
		NameCityPipe
	],
	imports: [ BrowserModule, AppRoutingModule, HttpClientModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
