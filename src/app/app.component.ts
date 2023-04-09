import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculator';
  selector = 1;

  isButtonPressed = false;
  isMouseInside = false;

  onButtonDown() {
    this.isButtonPressed = true;
  }

  onButtonUp() {
    this.isButtonPressed = false;
  }

  onMouseEnter() {
    this.isMouseInside = true;
  }

  onMouseLeave() {
    this.isMouseInside = false;
    if (this.isButtonPressed) {
      this.isButtonPressed = false;
    }
  }

  switch(position: number)
  {
    this.selector = position;
    document.documentElement.setAttribute("theme", position.toString());
  }
}
