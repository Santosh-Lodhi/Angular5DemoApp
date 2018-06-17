import { Component, OnInit, ViewChild } from '@angular/core';
import { HtmlParser } from '@angular/compiler';
import { ModalComponent } from '../directive/modal/modal.component';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
  @ViewChild("modal") modal: ModalComponent;
  data = {};
  dataList = [];
  private bodyText: string;

 constructor(
   private modalService:ModalService){

 }
 
 openModal(id: string) {
  this.modalService.open(id);
}

closeModal(id: string) {
  this.modalService.close(id);
}

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
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
