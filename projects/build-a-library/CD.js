import {Media} from "./Media";

class CD extends Media {
  constructor(artist, title, isCheckOut, ratings, songs) {
    super(title, isCheckOut, ratings);
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

export {CD};
