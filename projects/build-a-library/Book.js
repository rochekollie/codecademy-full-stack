import {Media} from "./Media";

class Book extends Media {
  constructor(author, title, pages, isCheckOut, ratings) {
    super(title, isCheckOut, ratings);
    this.author = author;
    this.pages = pages;
  }

  getAuthor(){
    return this.author;
  }

  getPages(){
    return this.pages;
  }
}

export {Book};