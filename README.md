# Pokemon-a-Day
An exercise in conditionally rendering things in React. \
Using the [PokeAPI](https://pokeapi.co/docs/v2) we will display the 'mon with the ID equal to days since 1. Jan. \
From Bulbasaur to Walrein (Clamperl on leap years.) \
\
For testing purposes we will use [json-server](https://github.com/typicode/json-server) to serve JSON data fetched from the PokeAPI. \
Run the command ```node fetch.js``` in the src/service to directory to generate the db.json used. \
Then run ```npx json-server --watch db.json``` this will run your database on port 3000 by default, check the json-server docs for details. \
\
Now the app can make api calls and render the response data... This is, in a nutshell, all that this does
