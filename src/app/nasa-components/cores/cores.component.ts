import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-cores',
  templateUrl: './cores.component.html',
  styleUrls: ['./cores.component.css'],
})
export class CoresComponent implements OnInit {
  cores: any[];
  isLoading = false;

  constructor(private api: HttpService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.api.getCores().subscribe((res) => {
      this.isLoading = false;
      this.cores = res;
    });
  }
}
