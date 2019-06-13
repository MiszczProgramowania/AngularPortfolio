import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProjectsComponent } from './components/examples/projects/projects.component';
import { ContactComponent } from './components/examples/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { SkillsComponent } from './components/examples/skills/skills.component';
import { WeatherComponent } from './components/examples/weather/weather.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		ProfileComponent,
		ExamplesComponent,
		NavigationComponent,
		SkillsComponent,
		ProjectsComponent,
		ContactComponent,
		WeatherComponent
	],
	imports: [ BrowserModule, AppRoutingModule, HttpClientModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
