import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderService } from 'src/app/core/services/header.service';
import { HeaderComponent } from "../../core/components/header/header.component";
import { Location } from '@angular/common';

@Component({
    selector: 'app-promociones',
    templateUrl: './promociones.component.html',
    styleUrls: ['./promociones.component.scss'],
    standalone: true,
    imports: [RouterLink, HeaderComponent]
})
export class PromocionesComponent implements OnInit{

  
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
  

  headerService = inject(HeaderService);
  
  ngOnInit(): void {
   this.headerService.titulo.set("Promociones");
  }


}
