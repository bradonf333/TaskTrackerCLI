import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  pageTitle = 'Create a new Task';
  languages: string[];
  errorMessage: string;

  constructor(
    private _router: Router,
    private _taskService: TaskService
  ) { }

  ngOnInit() {

    /** Calls the service to return a list of products */
    this._taskService.getLanguages()
      .subscribe(languages => {
        this.languages = languages;
        // this.tasks.forEach(element => {
        //     this.setImageUrl(element);
        // });
      },
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/tasks']);
  }

}
