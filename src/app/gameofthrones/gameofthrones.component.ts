import { Component, OnInit } from '@angular/core';
import { GotService } from '../services/got.service';

@Component({
  selector: 'app-gameofthrones',
  templateUrl: './gameofthrones.component.html',
  styleUrls: ['./gameofthrones.component.css']
})
export class GameofthronesComponent implements OnInit {
characters: any;
  constructor(private gotService: GotService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.gotService.getCharacter().subscribe(resp => {
      this.characters = resp;
      console.log(this.characters)
    })
  }

}
