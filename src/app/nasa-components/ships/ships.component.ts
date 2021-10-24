import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css'],
})
export class ShipsComponent implements OnInit {
  ships: any[];
  isLoading = false;
  constructor(private api: HttpService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.api.getShips().subscribe((res) => {
      this.isLoading = false;
      this.ships = res;
    });
  }
}
