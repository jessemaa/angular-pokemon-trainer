# AngularPokemonTrainer

This application is a Pokemon catalogue web app and was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3. The app uses routing and components to create root elements and reusable pieces of UI. The router displays views selectively based on the URL's path. Angular guard pattern is present through out the app and restricts access to pages. Data is shared between components with services and HttpClient is used to consume PokeAPI data. (https://pokeapi.co)

## Views

There are multiple views: 

Login (landing page): User can enter their trainer name and it will be saved to local storage.
Pokemon Catalogue: Displays a grid of original 151 pokemons with clickable cards.
Pokemon Details: Displays detailed information on selected pokemon such as image, stats, moves and abilities. Also has a button to collect the pokemon. The trainer can collect multiple pokemons (even the same kind).
Trainer: Displays collected pokemons in a card style grid. Each card is clickable and goes to details page.
Error: Unmapped URL paths redirect here.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

##
