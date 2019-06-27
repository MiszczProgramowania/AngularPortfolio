import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';
import { Skill } from 'src/app/models/skill';
@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: [ './skills.component.scss' ]
})
export class SkillsComponent implements OnInit {
	skills: Skill[];
	constructor(public skillsService: SkillsService) {}
	ngOnInit() {
		this.skills = this.skillsService.getSkills();
		console.log(this.skills);
	}
}
