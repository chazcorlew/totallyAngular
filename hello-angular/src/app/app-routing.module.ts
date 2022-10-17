import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';

//in this Routes Array, we can specify components, and the url that makes them render
//THIS IS HOW WE CAN GET COMPONENTS MOVING IN AND OUT OF THE WEBPAGE
const routes: Routes = [
// each route is an object
{
path: "welcome", //path is URL you must navigate to in order to render this component
component: WelcomepageComponent // component is the class name of the component in question


}


];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
