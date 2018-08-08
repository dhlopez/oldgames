import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
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
  private gamesCollection: AngularFirestoreCollection<Game>;
  games: Observable<Game[]>;
  game:Game;
  //private gamesCounter = 0;

  constructor(private db: AngularFirestore) {
    //this.games = db.collection('games').valueChanges();
    this.gamesCollection = db.collection<Game>('games');
    this.games = this.gamesCollection.valueChanges();
    //this.game = new Game();
  }

  addGame(title:string, played:string) {
    this.game={
      id:0,
      title:title, 
      played:played
    }
    //this.game.title = title;
    //this.game.played = played;

    this.gamesCollection.add(this.game);
  }

  ngOnInit() {
  }
}
