import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TasksComponent } from './tasks.component';
import { TaskService } from './task.service';


@NgModule({
  imports: [
    CommonModule
    , FormsModule
    , HttpClientModule
    , RouterModule.forChild([
      { path: 'tasks', component: TasksComponent }
      // { path: 'create', component: TaskCreateComponent }
  ])
  ],
  declarations: [TasksComponent],
  providers: [TaskService]
})
export class TaskModule { }
