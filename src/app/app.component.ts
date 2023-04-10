import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculator';
  selector = 1;
  operator1 = '';
  operator2: number = 0;
  reset = true;

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

  addDigit(caracter: string)
  {
    if(this.operator1 === '0')
    {
      if(caracter === '0') return;
      if(caracter === '.')
        this.operator1 += caracter;
      else
        this.operator1 = caracter;
      return;
    }
    if(caracter === '.' && this.operator1.includes('.')) return;
     
    this.operator1 += caracter;
    this.reset = false;
  }
  Reset()
  {
    this.reset = true;
    this.operator1 = '';
    this.operator2 = 0;
  }
}
