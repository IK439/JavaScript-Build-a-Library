# JavaScript-Build-a-Library

## Description
This project implements a simple media library system using object-oriented programming principles in JavaScript. It models different types of media—books, movies, and CDs—using inheritance, allowing shared behavior such as checkouts and ratings while supporting media-specific properties like authors, directors, and playlists.

The system also includes a catalog that can store and manage multiple media items, making it easy to organize and display a collection.

## Features
- Base `Media` class with shared functionality
- Specialised subclasses:
  - `Book`
  - `Movie`
  - `CD`
- Checkout status toggling
- Rating system with average rating calculation
- Song shuffling for CDs
- Central `Catalog` for managing all media types

## Coding Concepts Demonstrated
- Class inheritance and method overriding
- Encapsulation using getters and setters
- Array manipulation (`reduce`, `sort`)
- Defensive logic for rating validation
- Polymorphism via shared base class
- Clean separation of responsibilities between classes

## Example Output
```
📘 BOOK INFO
Title: A Short History of Nearly Everything
Checked out: true
Average rating: 5

🎬 MOVIE INFO
Title: Speed
Checked out: true
Cast: Keanu Reeves, Sandra Bullock
Average rating: 2

💿 CD INFO
Title: Discovery
Artist: Daft Punk
Shuffled playlist:
[
  'Harder Better Faster Stronger',
  'Aerodynamic',
  'One More Time',
  'Digital Love'
]

📚 CATALOG CONTENTS
1. A Short History of Nearly Everything
2. Speed
3. Discovery
```
