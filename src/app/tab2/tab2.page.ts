import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hiragana } from '../models/Hiragana';
import { GuessService } from '../services/guess.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(private guessService: GuessService) {}

  hiragana$!: Observable<Hiragana>;

  ngOnInit(): void {
    this.hiragana$ = this.guessService.getRandomHiragana();
  }

}
