import { Component, OnInit } from '@angular/core';

import {TasksService} from '../../services/tasks.service';
import {Task} from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  //arreglo de tareas
  tasks: Task[];
  title: string;

  //el constructor es el primer metode que se executa quan la aplicacio es genera
  constructor(private taskService: TasksService) {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks
        console.log(tasks);
      })
  }

  ////////////***metodes que utilitzo en html*******/////
  ngOnInit() {
  }
  addTask(event){
    event.preventDefault(); //cancela evento de refrescar quan envia formularo
    console.log(this.title)
    const newTask: Task = {
      title: this.title,
      isDone: false
    };
    this.taskService.addTask(newTask)
      .subscribe(task => {
        this.tasks.push(task);
        this.title= '';
        console.log(this.tasks)
      });
  }

  //metode delete
  deleteTask(id) {
    const response = confirm('estas segur?')

    if (response) {
      //console.log(id);
      const tasks = this.tasks; //arreglo
      this.taskService.deleteTask(id)
        .subscribe(data => {
          //console.log(data)
          if (data.n == 1) {
            for (let i = 0; i < tasks.length; i++) {
              if (tasks[i]._id == id) {
                tasks.splice(i, 1)
              }
            }
          }
        })
    }
  }return;
}
