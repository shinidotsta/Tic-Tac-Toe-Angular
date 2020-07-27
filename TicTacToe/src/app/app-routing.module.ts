import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { InstructionComponentComponent } from './instruction-component/instruction-component.component';
import { GameComponent } from './game/game.component';



const routes:Routes=[
  {path:'',component:GameComponent},
{path:'instructions',component:InstructionComponentComponent},
{path:'game',component:GameComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }
