import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares:string[]=[];
  turn : string='X';
  gameover:boolean=false;
  winner=null;
  myVar:boolean=false;

  ngOnInit(): void {
    for(let i=0;i<9;i++)
    {
      this.squares[i]=null;
    }
  }

 clickHandler(id:number)
 {
   console.log(id);
   if(!this.gameover){
     if(this.squares[id]=== null){
       this.squares[id]=this.turn;
       this.changeTurn();
      this.checkWinner();
     }
   }
 }
 startGame(){
  window.location.reload(true);
   this.turn='X';
   this.gameover=false;
 }
  
changeTurn(){
  if(this.turn==='X'){
    this.turn='O';
  } else{
    this.turn='X';
  }
}
checkWinner(){
  let lines =[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for(let line of lines)
  {
    if(this.squares[line[0]]===this.squares[line[1]] && this.squares[line[1]]===this.squares[line[2]] &&
    this.squares[line[0]] !== null){
      this.gameover=true;
      this.winner=this.squares[line[0]];
      this.myVar=true;
      return;
    }
  }
  let cell =0;
  this.squares.forEach((e) => {cell += (e !== null ? 1 :0)});
  if(cell ===9){
    this.gameover=true;
    this.winner='tie';
  }
}
}
