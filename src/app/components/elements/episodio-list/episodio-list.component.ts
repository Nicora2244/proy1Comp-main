import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RickymortyServiceService } from 'src/app/services/rickymorty-service.service';

@Component({
  selector: 'app-episodio-list',
  templateUrl: './episodio-list.component.html',
  styleUrls: ['./episodio-list.component.scss'],
  standalone: false
})
export class EpisodioListComponent implements OnInit {
  episodios: any[] = [];

  constructor(private api: RickymortyServiceService, private router: Router) {}

  ngOnInit() {
    this.cargarEpisodios();
  }

  // Fetch episodes and assign a thumbnail from the first character
  async cargarEpisodios() {
    this.api.getEpisodios().subscribe({
      next: (resp: any) => {
        if (resp.results?.length > 0) {
          this.episodios = resp.results.map((episodio: any) => ({
            ...episodio,
            thumbnail: episodio.characters.length > 0 
              ? episodio.characters[0].replace('character', 'character/avatar') + '.jpeg' 
              : 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
          }));
        }
      },
      error: (err: any) => console.error("Error fetching episodes:", err)
    });
  }

  // Navigate to the episode details page
  verEpisodio(id: number) {
    this.router.navigate([`/tabs/tab5/${id}`]);
  }
}
