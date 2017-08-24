import { Component, OnInit } from '@angular/core';
import { ITask } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  pageTitle = 'Programming Task List';
  imageWidth = 35;
  imageMargin = 2;
  imageUrl: string;
  errorMessage: string;
  tasks: ITask[];
  filteredTasks: ITask[];

  _listFilter: string;
  get listFilter(): string {
      return this._listFilter;
  }
  set listFilter(value: string) {
      this._listFilter = value;
      this.filteredTasks = this.listFilter ? this.performFilter(this.listFilter) : this.tasks;
  }

  constructor(private _taskService: TaskService) { }

  ngOnInit() {

    /** Calls the service to return a list of tasks */
    this._taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
        this.filteredTasks = this.tasks;
        this.tasks.forEach(element => {
          this.setImageUrl(element);
        });
      },
      error => this.errorMessage = <any>error);
  }

  /**
   * Search tasks array by the string passed in.
   * Compares the value passed in with the task language.
   * @param filterBy
   */
    performFilter(filterBy: string): ITask[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.tasks.filter((task: ITask) =>
      task.language.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  /**
   * Sets the imageUrl of the given task based on the programming language
   * @param task
   */
  setImageUrl(task: ITask): void {

    switch (task.language) {
      case 'Angular 2':
        task.imageUrl = './assets/images/angular.png';
        break;

      case 'C#':
        task.imageUrl = './assets/images/c_sharp.png';
        break;

      case 'JavaScript':
        task.imageUrl = './assets/images/javascript.png';
        break;

      case 'CSS':
        task.imageUrl = './assets/images/css.png';
        break;

      case 'HTML':
        task.imageUrl = './assets/images/html.png';
        break;

      default:
        task.imageUrl = './assets/images/questionIcon.png';
        break;
    }
  }

}
