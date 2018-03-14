import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //para pedir datos
import "rxjs/Rx";
import {Task} from '../Task'; //clase que he creat previament, la importo per saber el tipus de resposta




@Injectable()
export class TasksService {
  domain: string = "http://localhost:3000" //Aqui es on esta el meu api

  //http client es la manera de poder pedir datos
  constructor(private http: HttpClient) {}

  ////////*************METODES*******************////////////

        getTasks(){
        //retorna arreglo de tareas
          return this.http.get<Task[]>(`${this.domain}/api/tasks`)
            .map(res => res);
        }

        //aqui dic que new ask es del tipus tarea per poder validar
        addTask(newTask: Task){
          return this.http.post<Task>(`${this.domain}/api/tasks`, newTask)
            .map(res => res); //el map es para obtener un observable
        }


        deleteTask(id){
          return this.http.delete<Task>(`${this.domain}/api/tasks/${id}`)
            .map(res => res);
        }
        updateTask(newTask) {
          return this.http.put(`${this.domain}/api/tasks/${newTask.id}`, newTask)
            .map(res => res);

    }


    /////////////////////// balance i tal

  getUserInfo(name: String){
    //info del usu
    return this.http.get<Task[]>(`${this.domain}/api/select/`+name)
      .map(res => res);
  }



}
