import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { Hiragana } from "../models/Hiragana";

@Injectable({ providedIn: 'root' })
export class GuessService {
  constructor(private http: HttpClient) {}

  getRandomHiragana(): Observable<Hiragana> {
    // return this.http.get<Hiragana>('http://localhost:3000/hiragana');
    return of(new Hiragana());
  }
}