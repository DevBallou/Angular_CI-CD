import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    { id: 0, name: 'Sample LARAVEL API SERVER Project', summary: 'LARAVEL API project that analyzes stock market data.', description: '', projectLink: '//www.github.com', tags: [Tag.VUE], pictures: ['assets/image1.png', 'assets/image2.png', 'assets/image3.png'] },
    { id: 1, name: 'Sample Angular App', summary: 'Fullstack web app developed using Angular and Node.JS', description: '', projectLink: '//www.github.com', tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.FILAMENT], pictures: ['assets/image1.png', 'assets/image2.png', 'assets/image3.png'] },
    { id: 2, name: 'Sample VueJS3 App', summary: 'Fullstack web app developed using React and ASP.NET', description: '', projectLink: '//www.github.com', tags: [Tag.REACT, Tag.LARAVEL, Tag.ASPNET], pictures: ['assets/image1.png', 'assets/image2.png', 'assets/image3.png'] },
    { id: 3, name: 'Sample ReactJS App', summary: 'Web API Project that was develped for a calss project.', description: '', projectLink: '//www.github.com', tags: [Tag.LARAVEL, Tag.ASPNET], pictures: ['assets/image1.png', 'assets/image2.png', 'assets/image3.png'] },
    { id: 4, name: 'Sample Filament App', summary: 'Develped a chrome extension that tracks the prices of furniture.', description: '', projectLink: '//www.github.com', tags: [Tag.JAVASCRIPT], pictures: ['assets/image1.png', 'assets/image2.png', 'assets/image3.png'] },
    { id: 5, name: 'Mobile App', summary: 'Mobile app developed in java that tracks the departure and arrival of trains.', description: '', projectLink: '//www.github.com', tags: [Tag.LIVEWIRE], pictures: ['assets/image1.png', 'assets/image2.png', 'assets/image3.png'] },
  ];

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }

    return project;
  }

  GetProjectByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
