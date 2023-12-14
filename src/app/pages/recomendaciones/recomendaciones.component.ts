import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderService } from 'src/app/core/services/header.service';
import { HeaderComponent } from "../../core/components/header/header.component";
import { Location } from '@angular/common';

@Component({
    selector: 'app-recomendaciones',
    templateUrl: './recomendaciones.component.html',
    styleUrls: ['./recomendaciones.component.scss'],
    standalone: true,
    imports: [RouterLink, HeaderComponent]
})
export class RecomendacionesComponent implements OnInit{

    
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
  

  headerService = inject(HeaderService);
  
  ngOnInit(): void {
   this.headerService.titulo.set("Recomendaciones");
  }



}
