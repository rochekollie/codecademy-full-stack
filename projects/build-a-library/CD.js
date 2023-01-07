import {Media} from "./Media.js";

export class CD extends Media {
  constructor(artist, title, ratings, songs) {
    super(title, ratings);
    this.artist = artist;
    this.songs = songs;
  }

  getArtist(){
    return this.artist;
  }

  getSongs(){
    return this.songs;
  }
}
