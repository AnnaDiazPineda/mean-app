import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {TasksService} from './services/tasks.service';
import {FormsModule} from '@angular/forms'; //per ngmodule del html
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { BalanceComponent } from './balance/balance.component';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    BalanceComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
