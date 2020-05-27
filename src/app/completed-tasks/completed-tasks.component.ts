import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit {

  completedTasksList: any;
  unsubscribe: any;
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.unsubscribe = this.tasksService.displayTasksList().subscribe((data: Array<any>) => {
      if (data) {
        this.completedTasksList = data.filter((d) => d.isSelected === true);
      }
    })

  }


  ngOnDestroy() {
    this.unsubscribe.unsubscribe();
  }

}
