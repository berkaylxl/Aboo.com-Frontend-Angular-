import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './components/entry/entry.component';
import { StartPanelComponent } from './components/start-panel/start-panel.component';

const routes: Routes = [
   {path:"startpanel",pathMatch:"full",component:StartPanelComponent},
   {path:"",component:StartPanelComponent},
   {path:"entries/:topicId", component:EntryComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
