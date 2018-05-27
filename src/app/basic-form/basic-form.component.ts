import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  data = {};
  dataList = [];
  constructor() { }

  ngOnInit() {
    this.dataList = JSON.parse(localStorage.getItem('dataList'));
  }

  public addData():void{
    if(!this.dataList){
      this.dataList = [];
    }
    console.log(this.data);
    this.dataList.push(this.data);
    localStorage.setItem('dataList', JSON.stringify(this.dataList));
  }

  public delete(index): void{
    console.log('delete record no. '+index);
    if (index !== -1) {
        this.dataList.splice(index, 1);
    }
    localStorage.setItem('dataList', JSON.stringify(this.dataList));
  }

}
