import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './components/examples/contact/contact.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { SkillsComponent } from './components/examples/skills/skills.component';

const routes: Routes = [
	{
		path: '',
		component: ExamplesComponent
	},
	{
		path: 'skills',
		component: SkillsComponent
	},

	{
		path: 'contact',
		component: ContactComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
