import { Component, OnInit } from '@angular/core';
import { SkillsServiceService } from 'src/app/services/skills-service.service';
import { SkillsImagesService } from 'src/app/services/skills-images.service';
@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: [ './skills.component.scss' ]
})
export class SkillsComponent implements OnInit {
	constructor(public skillsServiceService: SkillsServiceService, public skillsImagesService: SkillsImagesService) {}
	ngOnInit() {}
}
