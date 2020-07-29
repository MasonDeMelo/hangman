# Hangman

[Live version here!](https://hangman.demelo.dev)

Hangman is a barebones implementation of the classic guesssing game.

The backend of this project is a REST-like API written in Flask. It runs on a Docker container which can be brought up with the following commands:
```
make build
make run
```

The front-end is written in VUE.js, and only needs to be served statically by your web server of choice.


This is a very quick-and-dirty implementation, but it allowed me to get my feet wet with VUE. Hopefully I'll have the time to polish this up a bit, there are plenty of features I'd like to add and the UI could definitely use an overhaul.

Of particular note is that there's no database, and the 'secret' word is the same every time.
