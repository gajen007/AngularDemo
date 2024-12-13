import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor() { }
  private source = new Subject<string>();
  public serviceData$ = this.source.asObservable()
  update(val: string) { this.source.next(val) }
}