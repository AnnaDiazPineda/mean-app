import { Component, OnInit } from '@angular/core';
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  userIt={username:'', password:'', wallet:''};

  constructor(private taskService: TasksService) {
  }

  ngOnInit() {
  }

  getInfo(username:String){
    this.taskService.getUserInfo(username)
      .subscribe(data => {
        this.userIt = data;
        console.log(data);
      })
  }

}
