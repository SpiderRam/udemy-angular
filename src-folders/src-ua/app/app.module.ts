import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { TaskTwoComponent } from './task-two/task-two.component';
import { TaskThreeComponent } from './task-three/task-three.component';
import { TaskFourComponent } from './task-four/task-four.component';
import { CockpitComponent } from './task-four/cockpit/cockpit.component';
import { ServerElementComponent } from './task-four/server-element/server-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    TaskTwoComponent,
    TaskThreeComponent,
    TaskFourComponent,
    CockpitComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
