import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-capsule',
  templateUrl: './capsule.component.html',
  styleUrls: ['./capsule.component.css'],
})
export class CapsuleComponent implements OnInit {
  planets: any[];
  isLoading = false;

  constructor(private api: HttpService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.api.getNasa().subscribe((res) => {
      this.isLoading = false;
      this.planets = res;
    });
  }
}
