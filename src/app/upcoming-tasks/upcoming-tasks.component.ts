import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-upcoming-tasks',
  templateUrl: './upcoming-tasks.component.html',
  styleUrls: ['./upcoming-tasks.component.css']
})
export class UpcomingTasksComponent implements OnInit {

  addListArray:Array<any> = [];
  checkedList:Array<any> = [];
  unsubscribe:any;

  constructor(private tasksService:TasksService) { }

  ngOnInit() {

    this.unsubscribe = this.tasksService.getTasksList().subscribe((data:Array<any>)=>{
      this.addListArray = data;
    })
  }

  addToTasksList(e){
    if(e.value.listName !== '')
    this.addListArray.push({name:e.value.listName, isSelected:false});
  }
  

  submitCompletedTasks(){
    this.tasksService.setTasksList(this.addListArray.filter((d)=>d.isSelected === true));
  }

  ngOnDestroy(){
    this.unsubscribe.unsubscribe();
  }

}
