import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of, tap } from 'rxjs';
import { ConfigService } from './config.service';

export interface ICollection {
  category: string;
  heading: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  _http = inject(HttpClient);
  _config = inject(ConfigService);

  $loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  $listing: BehaviorSubject<ICollection[] | null> = new BehaviorSubject<ICollection[] | null>([]); //always create an observable type variable with BehaviorSubject instead of Observable directly, 
                                      //gives more functions

  getCollections() {
    this._http
      .get<ICollection[]>(this._config.API_COLLECTIONS_URL)
      .pipe(
        //Pipe: Used to stitch together functional operators into a chain. Before we could just do observable.filter().map().scan(), 
        //but since every RxJS operator is a standalone function rather than an Observable's method, 
        //we need pipe() to make a chain of those operators (see example above).
        
        // tap((response: any) => {
        //   if (response.status !== 200) {
        //     console.log("API Error: Status not 200")
        //     throw new Error('status is not 200');
        //   }
        // }),

        //Tap: Can perform side effects with observed data but does not modify the stream in any way. 
        //You can think of it as if observable was an array over time, then tap() would be an equivalent to Array.forEach().
        catchError((error) => {
          console.log(`API Error: ${error.message || error}`);
          return of(null);
        })
      )
      .subscribe((data) => {
        this.$listing.next(data);
      });
  }

  createCollection(collection: ICollection) {
    this.$loading.next(true);
    this._http.post(this._config.API_COLLECTIONS_URL, collection).subscribe((data)=>{
      this.$loading.next(false);
      this.getCollections();
    })
  }
  
}
