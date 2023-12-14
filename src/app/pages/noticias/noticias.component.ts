import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderService } from 'src/app/core/services/header.service';
import { HeaderComponent } from "../../core/components/header/header.component";
import { Location } from '@angular/common';

@Component({
    selector: 'app-noticias',
    templateUrl: './noticias.component.html',
    styleUrls: ['./noticias.component.scss'],
    standalone: true,
    imports: [RouterLink, HeaderComponent]
})
export class NoticiasComponent implements OnInit {

    constructor(private location: Location) {}

    goBack(): void {
      this.location.back();
    }
    

   headerService = inject(HeaderService);
  
    ngOnInit(): void {
     this.headerService.titulo.set("Noticias");
    }

}
