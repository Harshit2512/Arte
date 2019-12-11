import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/albums';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-albumsearch',
  templateUrl: './albumsearch.component.html',
  styleUrls: ['./albumsearch.component.scss'],
  providers: [ClientService],
})
export class AlbumsearchComponent implements OnInit {

  searchStr: string;
  searchRes: Album[];

  constructor(private albumService: ClientService) { }

  ngOnInit() {
  }
  searchMusic() {
    this.albumService.getToken()
      .subscribe(res => {
        this.albumService.searchMusicAlbum(this.searchStr, 'album', res.access_token)
          .subscribe(res => {
            console.log("In Res");
            console.log(res);
            this.searchRes = res.albums.items;
          })
      })
  }
}
