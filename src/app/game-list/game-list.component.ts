import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {GamesService} from '../games.service';
import {Game} from '../game';
import {GAMES} from '../games-mock';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  //games=GAMES;
  games: Observable<any[]>;
  //gamesToPlay: Game[] = [];
  //gamesFinished: Game[] = [];
  private gamesCounter = 0;
/*
  public AddGame():void{
    let newGame = new Game(); //`My game #${this.bookCounter++}`
    newGame.id = 1;
    newGame.played = 'Y';
    newGame.title = 'Star Fox';
    //this.games. .push(newGame);
  }
*/
  constructor(db: AngularFirestore) {
    this.games = db.collection('games').valueChanges();
  }

  ngOnInit() {
  }

  /*old code without db
  moveToPlay(game:Game):void {
    //get position
    var index = this.games.indexOf(game);
    //add to next list and remove from current list
    this.gamesToPlay.push(this.games[index]);
    this.games.splice(index,1);
  }

  moveToFinished(game:Game){
    //get position
    var index = this.gamesToPlay.indexOf(game);
    //add to next list and remove from current list
    this.gamesFinished.push(this.gamesToPlay[index]);
    this.gamesToPlay.splice(index,1);
  }
  */
}
