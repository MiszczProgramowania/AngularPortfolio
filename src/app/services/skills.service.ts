import { Injectable } from '@angular/core';
import { SkillsComponent } from '../components/examples/skills/skills.component';
import { Skill } from '../models/skill';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class SkillsService {
	getSkills(): Skill[] {
		return environment.skills;
	}
	constructor() {}
}
