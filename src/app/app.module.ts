import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicComponent } from './components/topic/topic.component';
import { EntryComponent } from './components/entry/entry.component';
import { NaviComponent } from './components/navi/navi.component';
import { StartPanelComponent } from './components/start-panel/start-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    TopicComponent,
    EntryComponent,
    NaviComponent,
    StartPanelComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
