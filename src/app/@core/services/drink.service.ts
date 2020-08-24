import { Drink } from '../interfaces/drink';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  private drinkDB: AngularFireList<Drink>;

  constructor(private db: AngularFireDatabase) {
    this.drinkDB = this.db.list('/menu', (ref) =>
      ref.orderByChild('drinks')
    );
  }

  getDrinks(): Observable<Drink[]> {
    return this.drinkDB.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((c) => ({
          $key: c.payload.key,
          ...c.payload.val(),
        }));
      })
    );
  }
}
