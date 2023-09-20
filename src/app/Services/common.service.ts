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
    return JSON.parse(localStorage.getItem(_key,) ?? '') as T;
  }

  public clearStorage(): void {
    localStorage.clear();
  }
}
