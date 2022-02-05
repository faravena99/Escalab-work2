import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HarrypoterService } from '../services/harrypoter.service';

@Component({
  selector: 'app-harrypoter',
  templateUrl: './harrypoter.component.html',
  styleUrls: ['./harrypoter.component.css']
})
export class HarrypoterComponent implements OnInit {
  house:any;

  constructor(private hpService: HarrypoterService,
    private rutaActiva: ActivatedRoute) { 
  }

  ngOnInit(): void {
  }

  getcharacters(element: string) {
      this.hpService.getCharacter(element).subscribe( res => {
        this.house = res;
      })
  }
}
