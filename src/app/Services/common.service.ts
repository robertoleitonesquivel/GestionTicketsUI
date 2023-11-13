import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  public readonly loader$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  public show(): void {
    this.loader$.next(true);
  }

  public hide(): void {
    this.loader$.next(false);
  }

  public setStorage<T>(_data: T, _key: string): void {
    localStorage.setItem(_key, JSON.stringify(_data));
  }

  public getStorage<T>(_key: string): T {
    let data = localStorage.getItem(_key);
    if (data) {
      return JSON.parse(data) as T;
    } else {
      return {} as T;
    }

  }

  public clearStorage(): void {
    localStorage.clear();
  }
}
