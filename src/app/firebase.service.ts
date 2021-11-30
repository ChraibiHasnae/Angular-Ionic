import { Injectable } from '@angular/core';
//import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  collectionName= 'taches';

  constructor(
    //private firestore: AngularFirestore
  ) { }

  get_transactions(){
    //return this.firestore.collection(this.collectionName).snapshotChanges();
  }
  add_transaction(data){
    //return this.firestore.collection(this.collectionName).add(data);
  }
  delete_transaction(id){
    //return this.firestore.doc(this.collectionName + '/' + id).delete();
  }
  update_transaction(id,data){
    //return this.firestore.doc(this.collectionName + '/' + id).update(data);
  }
}
