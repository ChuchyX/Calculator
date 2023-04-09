import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculator';
  selector = 1;

  switch(position: number)
  {
    this.selector = position;
    document.documentElement.setAttribute("theme", position.toString());
  }
}
