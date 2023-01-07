import {Media} from "./Media.js";

export class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author(){
    return this._author;
  }

  get pages(){
    return this._pages;
  }
}
