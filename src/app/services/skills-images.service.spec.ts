import { TestBed } from '@angular/core/testing';

import { SkillsImagesService } from './skills-images.service';

describe('SkillsImagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkillsImagesService = TestBed.get(SkillsImagesService);
    expect(service).toBeTruthy();
  });
});
