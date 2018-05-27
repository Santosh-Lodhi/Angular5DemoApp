import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  data = [];
  constructor() { }

  ngOnInit() {
    this.data = this.getData();
  }

  public register():void{

  }

  private getData(): any{
    return [{'fName':'shravya', 'lName':'Lodhi', 'email':'shravya.lodhi@gmail.com'},
    {'fName':'santosh', 'lName':'Lodhi', 'email':'santosh.lodhi@gmail.com'},
    {'fName':'suman', 'lName':'Lodhi', 'email':'suman.lodhi@gmail.com'},
    {'fName':'roshan', 'lName':'Lodhi', 'email':'roshan.lodhi@gmail.com'}

    ];
  }

}
