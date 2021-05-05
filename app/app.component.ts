import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mytable';

  addUser = [
    {fname:'Vishwa',lname:'Patel',email:'v@gmail.com'},
    {fname:'Nidhi',lname:'Thakkar',email:'m@gmail.com'},
    {fname:'Jesica',lname:'lohra',email:'j@gmail.com'},
    {fname:'alabama',lname:'olabo',email:'a@gmail.com'},
    {fname:'Arizona',lname:'json',email:'a@gmail.com'},
  ];
}
