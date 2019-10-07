import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  router: Router;
  count = 0;
  title = 'test';
  list = [
    'hello',
    'hi',
    'guc'
  ];
  usersArr = [
    {
      name: 'Andrew',
      age: 20,
    },
    {
      name: 'Nastia',
      age: 19,
    },
  ];
  testFunc(name) {
    if (name === 'Nastia') {
      console.clear();
      this.count = 0;
      return;
    }
    this.count++;
    console.log('test function invoked ', this.count, ' time!');
    // this.router.navigate([`/add-info`]);
  }
}
