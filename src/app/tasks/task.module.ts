import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TaskListComponent } from './task-list.component';
import { TaskService } from './task.service';
import { TaskCreateComponent } from './task-create/task-create.component';


@NgModule({
  imports: [
    CommonModule
    , FormsModule
    , HttpClientModule
    , RouterModule.forChild([
      { path: 'tasks', component: TaskListComponent },
      { path: 'create', component: TaskCreateComponent }
  ])
  ],
  declarations: [TaskListComponent, TaskCreateComponent],
  providers: [TaskService]
})
export class TaskModule { }
