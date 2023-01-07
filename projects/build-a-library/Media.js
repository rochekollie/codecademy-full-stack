export class Media {
  constructor (title) {
    this._title = title;
    this._isCheckOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get checkOutStatus() {
    return this._isCheckOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckOut(newStatus) {
    this._isCheckOut = newStatus;
  }

  toggleCheckOutStatus() {
    this._isCheckOut = !this._isCheckOut;
  }

  get averageRating() {
    if (this._ratings.length === 0) {
      return 'Not yet rated';
    }
    const totalRatings = this._ratings.reduce((curr, accum) => curr + accum, 0);
    const averageRating = totalRatings / this._ratings.length;
    return averageRating.toFixed(1);
  }

  addRating(newRating) {
    this._ratings.push(newRating);
  }

}
