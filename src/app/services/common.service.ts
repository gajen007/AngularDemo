import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  apiEndPoint='http://localhost:3000/';

  constructor() {
  }

}
