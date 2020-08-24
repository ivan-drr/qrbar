import { Drink } from '../interfaces/drink';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private foodDB: AngularFireList<Drink>;

  constructor(private db: AngularFireDatabase) {
    this.foodDB = this.db.list('/menu', (ref) =>
      ref.orderByChild('food')
    );
  }

  getFoods(): Observable<Drink[]> {
    return this.foodDB.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((c) => ({
          $key: c.payload.key,
          ...c.payload.val(),
        }));
      })
    );
  }
}
