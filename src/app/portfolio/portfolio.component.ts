import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, NgbCollapseModule, FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  isCollapsed = true;
  // Languages
  typescript = false;
  javascript = false;
  vue = false;
  laravel = false;
  livewire = false;
  // Frameworks
  angular = false;
  filament = false;
  aspnet = false;
  react = false;

  filtering = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Hicham Baallou - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.vue) {
      filterTags.push(Tag.VUE);
    }
    if (this.livewire) {
      filterTags.push(Tag.LIVEWIRE);
    }
    if (this.filament) {
      filterTags.push(Tag.FILAMENT);
    }
    if (this.laravel) {
      filterTags.push(Tag.LARAVEL);
    }
    if (this.aspnet) {
      filterTags.push(Tag.ASPNET);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.react) {
      filterTags.push(Tag.REACT);
    }

    if (this.vue || this.laravel || this.livewire || this.angular || this.typescript || this.filament || this.aspnet || this.javascript || this.react) {
      this.filtering = true;
    }

    this.projects = this.projectService.GetProjectByFilter(filterTags);
  }

  ResetFilters() {
    this.vue = false;
    this.laravel = false;
    this.livewire = false;
    this.angular = false;
    this.typescript = false;
    this.filament = false;
    this.aspnet = false;
    this.react = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}
