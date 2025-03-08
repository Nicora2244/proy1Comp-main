import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RickymortyServiceService } from 'src/app/services/rickymorty-service.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class Page2Page implements OnInit {
  episodio: any;
  personajes: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private api: RickymortyServiceService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id'); // Get episode ID from URL
      if (id) this.getEpisodioDetails(id);
    });
  }

  // Fetch episode details
  getEpisodioDetails(id: string) {
    this.api.getEpisodio(Number(id)).subscribe((data: any) => {
      this.episodio = data;
      this.cargarPersonajes(data.characters);
    });
  }

  // Fetch character details
  cargarPersonajes(urls: string[]) {
    Promise.all(urls.map(url => this.api.getPersonaje(url).toPromise()))
      .then(personajes => (this.personajes = personajes))
      .catch(err => console.error('Error fetching characters:', err));
  }
}
