import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FuturamaService } from '../../services/futurama.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
  standalone: false
})
export class CharacterDetailPage implements OnInit {
  character: any;

  constructor(
    private route: ActivatedRoute,
    private futuramaService: FuturamaService
  ) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('id');
    if (name) {
      this.futuramaService.getCharacterById(name).subscribe(data => {
        this.character = data[0];
      });
    }
  }
}
