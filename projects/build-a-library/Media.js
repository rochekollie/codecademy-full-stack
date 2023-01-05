class Media {
  constructor (title, isCheckOut, ratings) {
    this.title = title;
    this.isCheckOut = isCheckOut;
    this.ratings = ratings;
  }

  getAverageRating() {
    const totalRatings = this.ratings.reduce((curr, accum) => curr + accum);
    const averageRating = totalRatings / this.ratings.length;
    return averageRating.toFixed(1);
  }

  toggleCheckOutStatus() {
    return 0;
  }

  addRating(newRating) {
    this.ratings.push(newRating);
  }

  getTitle() {
    return this.title;
  }

  getCheckOutStatus() {
    return this.isCheckOut;
  }

  getRatings() {
    return this.ratings;
  }
}

export {Media};
