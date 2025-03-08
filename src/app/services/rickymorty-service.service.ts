import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_RM } from '../config/url.servicios';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickymortyServiceService {
  constructor(private http: HttpClient) {}

  // Fetch all characters
  getAllPersonajes(): any {
    return this.http.get(`${URL_RM}/character`).pipe(
      map((res: any) => res)
    );
  }

  // Fetch additional characters from a given URL
  getMasPersonajes(url: string): any {
    return this.http.get(url).pipe(
      map((res: any) => res)
    );
  }

  // Fetch all episodes
  getEpisodios(): any {
    return this.http.get(`${URL_RM}/episode`).pipe(
      map((res: any) => res)
    );
  }

  // Fetch episode details by ID
  getEpisodio(id: number): any {
    return this.http.get(`${URL_RM}/episode/${id}`).pipe(
      map((res: any) => res)
    );
  }

  // Fetch character details by URL
  getPersonaje(url: string): any {
    return this.http.get(url).pipe(
      map((res: any) => res)
    );
  }
}

