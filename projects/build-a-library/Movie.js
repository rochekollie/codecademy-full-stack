import {Media} from "./Media";

class Movie extends Media {
  constructor (director, title, runTime, isCheckOut, ratings) {
    super(title, isCheckOut, ratings);
    this.director = director;
    this.runTime = runTime;
  }

  getDirector() {
    return this.director;
  }

  getRunTime() {
    return this.runTime;
  }

}

export {Movie};
