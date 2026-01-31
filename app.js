// Base class for all media types
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  // Returns the average rating (rounded)
  get averageRating() {
    if (this._ratings.length === 0) return 0;

    const ratingsSum = this._ratings.reduce((acc, curr) => acc + curr, 0);
    return Math.round(ratingsSum / this._ratings.length);
  }

  set isCheckedOut(isCheckedOut) {
    this._isCheckedOut = isCheckedOut;
  }

  // Toggles checkout status
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  // Adds a rating if it is between 1 and 5
  addRating(rating) {
    if (rating >= 1 && rating <= 5) {
      this._ratings.push(rating);
    }
  }
}

// Book class
class Book extends Media {
  constructor(author, title, pages, chapters = []) {
    super(title);
    this._author = author;
    this._pages = pages;
    this._chapters = chapters;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }

  get chapters() {
    return this._chapters;
  }
}

// Movie class
class Movie extends Media {
  constructor(director, title, runTime, movieCast = []) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._movieCast = movieCast;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }

  get movieCast() {
    return this._movieCast;
  }
}

// CD class
class CD extends Media {
  constructor(artist, title, songs = []) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }

  // Returns a shuffled list of songs
  shuffle() {
    return [...this._songs].sort(() => Math.random() - 0.5);
  }
}

// Catalog class to store all media items
class Catalog {
  constructor() {
    this._mediaItems = [];
  }

  addMedia(media) {
    this._mediaItems.push(media);
  }

  get mediaItems() {
    return this._mediaItems;
  }
}

const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544,
  ["Introduction", "The Big Bang", "Life on Earth"]
);

historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log("📘 BOOK INFO");
console.log(`Title: ${historyOfEverything.title}`);
console.log(`Checked out: ${historyOfEverything.isCheckedOut}`);
console.log(`Average rating: ${historyOfEverything.averageRating}`);
console.log("");

const speed = new Movie("Jan de Bont", "Speed", 116, [
  "Keanu Reeves",
  "Sandra Bullock",
]);

speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log("🎬 MOVIE INFO");
console.log(`Title: ${speed.title}`);
console.log(`Checked out: ${speed.isCheckedOut}`);
console.log(`Cast: ${speed.movieCast.join(", ")}`);
console.log(`Average rating: ${speed.averageRating}`);
console.log("");

const cd = new CD("Daft Punk", "Discovery", [
  "One More Time",
  "Aerodynamic",
  "Digital Love",
  "Harder Better Faster Stronger",
]);

console.log("💿 CD INFO");
console.log(`Title: ${cd.title}`);
console.log(`Artist: ${cd.artist}`);
console.log("Shuffled playlist:");
console.log(cd.shuffle());
console.log("");

const catalog = new Catalog();
catalog.addMedia(historyOfEverything);
catalog.addMedia(speed);
catalog.addMedia(cd);

console.log("📚 CATALOG CONTENTS");
catalog.mediaItems.forEach((item, index) => {
  console.log(`${index + 1}. ${item.title}`);
});