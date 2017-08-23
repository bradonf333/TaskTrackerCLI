import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
    , RouterModule.forChild([
      { path: 'tasks', component: TasksComponent }
      // { path: 'create', component: TaskCreateComponent }
  ])
  ],
  declarations: [TasksComponent]
})
export class TasksModule { }
