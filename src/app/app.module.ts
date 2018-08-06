import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
//import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    GameListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase )//,'old-games'
    //AngularFireDatabaseModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
