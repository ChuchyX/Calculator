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
  operationSelected = false;
  operation = '';
  recentOperation = false;

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
    if(this.recentOperation)
    {
      this.recentOperation = false;
      this.operator1 = '0';
    }
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
    this.operationSelected = false;
    this.operation = '';
  }
  Del(){
    if(this.operator1 === '0' || this.operator1 === '') return;
    if(this.operator1.length == 1 )
    {
      this.operator1 = '0';
      return;
    }
    this.operator1 = this.operator1.slice(0, this.operator1.length - 1); 
  }
  AddOperation(o: string)
  {
    this.operation = o;
    this.operationSelected = true;
    this.operator2 = parseFloat(this.operator1);
    this.operator1 = '0';
  }
  Equal()
  {
    if(this.operation === '+')
    {
      let result = this.operator2 + parseFloat(this.operator1);
      this.operator1 = result.toString();
      this.recentOperation = true;
      this.operation = '';
    }
    if(this.operation === '-')
    {
      let result = this.operator2 - parseFloat(this.operator1);
      this.operator1 = result.toString();
      this.recentOperation = true;
      this.operation = '';
    }
    if(this.operation === '/')
    {
      if(this.operator1 === '0')
      {
        this.operator1 = 'ERROR';
        this.recentOperation = true;
        this.operation = '';
        return;
      }
      let result = this.operator2 / parseFloat(this.operator1);
      this.operator1 = result.toString();
      this.recentOperation = true;
      this.operation = '';
    }
    if(this.operation === '*')
    {
      let result = this.operator2 * parseFloat(this.operator1);
      this.operator1 = result.toString();
      this.recentOperation = true;
      this.operation = '';
    }
  }
}
