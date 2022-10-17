import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {
//variable that determines wether todo cards are hidden or not
hiddenToggle:boolean = true;
// a variable that determines what the button says
buttonMessage:string = "Show Fighter Info"
//variable that determines if greeter div renders
greeterDivToggle:boolean = true;
//a variable that holds the user inputted name
name:string = "";
// this variable gets updated once user submits their name
finalName:string = "";

todo = {
  name: "Ryu",
  placeOfOrigin: "Japan",
  bloodType: "B",
  likes: "training, dumplings"

}


//todo objects that will render to HTML using string interpolation(one way binding!!)
todo2 = {
  difficulty: "1 out of 5",
  classification: "Shotos",
  specialMoves: "Hadoken, Shoryuken, Tatsumaki Senpukyaku",
  criticalArt: "Shin Shoryuken"


}

todo3 = {

  characterStrengths: "mid range, strong normal attacks, comeback ability",
  characterWeaknesses: "grapplers, slow recovery on fierce attacks, slow walk speed",
  frameData:"",
}

// make an array to hold my todo objects in order to use in the *ngFor directive



  constructor() { }

  ngOnInit(): void {

  }

//function to toggle fighter info visibility

showFighterInfo(){
this.hiddenToggle = !this.hiddenToggle
// setting boolean to opposite of its current value

if(this.hiddenToggle){
  this.buttonMessage = "Show Fighter Info"
}else{
  this.buttonMessage = "Hide Fighter Info"
}
}


//function will toggle freeter div functionality after user submits name
//will also set final name variable to whatever is in the "name" variable
submitName(){
  this.greeterDivToggle = false;
  this.finalName = this.name;
}
}
