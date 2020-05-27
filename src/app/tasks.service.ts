import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  public disparrayList:any;
  public arrayList:Array<any> = [
    {name:'Task1', isSelected:false},
    {name:'Task2', isSelected:false},
    {name:'Task3', isSelected:false},
    {name:'Task4', isSelected:false},
    {name:'Task5', isSelected:false}
  ];
  

  constructor() { }

  getTasksList(){
    return of(this.arrayList)
  }

  displayTasksList(){
    return of(this.disparrayList)
  }

  setTasksList(arr:any){
    this.disparrayList = [...arr];
  }
}
