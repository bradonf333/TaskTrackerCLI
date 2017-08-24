import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ITask } from './task';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class TaskService {

  // Represents a web api url that would have access to the list of tasks
  private _taskUrl = './api/tasks/tasks.json';

  // Represents a web api url that would have access to the list of languages
  private _languageUrl = './api/tasks/task-languages.json';

  /**
   * Constructor to inject the Http Service from Angular
   */
  constructor(private _http: HttpClient) {
  }

  /**
   * Returns a list of ITask by sending an http request to the
   * given url and casting the json response into an ITask[]
   */
  getTasks(): Observable<ITask[]> {
    return this._http.get<ITask[]>(this._taskUrl)
      .do(data => console.log('Tasks: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  /**
   * Returns a list of languages by sending an http request to the
   * given url and casting the json response into a string
   */
  getLanguages(): Observable<string[]> {
    return this._http.get<string>(this._languageUrl)
      .do(data => console.log('Languages: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  /**
    * Takes an error, logs it to the console and throws it to the calling code.
    * @param error
    */
  private handleError(error: HttpErrorResponse) {
    console.error(error.message);
    return Observable.throw(error.message);
  }

}
