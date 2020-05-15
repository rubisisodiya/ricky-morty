### Description of the assignment:

>Create an overview of all the characters of the TV show Rick & Morty that shows the following details:

- Image
- Name
- Status
- Species 
- Last location
- Last dimension
- Last episode (number and name)

>You can use the following API: https://rickandmortyapi.com/

>Bonus points (optional):

- README.md => **YES**
- Scalability => **Not entirely**
- Click on elements / text for info on episodes, dimensions, etc. => **YES**

### Run Project

```sh
$ git clone git@github.com:Marfru/ricky-morty.git
$ cd ricky-morty
$ npm i
$ npm start
```

### Packages used

| Package | Url |
| ------ | ------ |
| normalize.css | https://www.npmjs.com/package/normalize.css |
| react-social-icons | https://www.npmjs.com/package/react-social-icons |
| axios | https://www.npmjs.com/package/axios |
| react-router-dom | https://www.npmjs.com/package/react-router-dom |
| sass-loader | https://www.npmjs.com/package/sass-loader |

### Approach

What the user would see once entered the application, would be an ordered list of characters from Rick and Morty. It only loads the 20 first characters.

I have added a **Load More** button at the end to load the next page, which will load the next 20 characters.

Each character is a list **(ul li)**, and inside each character block I render the name, status, species, last known location and the last episode where they appeared, which is a clickable button that will take you to a new page where it will render the information of that episode (Title, Air Date, Season and Episode).

The plan for the episode details was to make it a modal.

At the left side of the screen, there's a fixed menu, which takes you to the main screen (Characters), but also to Locations page (information about locations) and Episodes screen (information about all episodes).

I have used Router and Links from react-router-dom to determine these pages. Locations and Episodes aren't styled.

### Helper:

- **Fetcher.js** => Using axios, I fetched the data from the API using endpoints, to be able to render on single components data from /characters, /locations or /episodes. Also to load the next 20 characters (character/?page=2).

### Components:

- **Main.jsx** => This is the main template. Here I render the header and all the rest. It includes the Route paths and links to the pages as well.
- **Characters.jsx** => Rendering the the characters and it's information such as: 

```bash
{character.image}
{character.name}
{character.status}
{character.species}
{character.location.name}
```

In the last episode, I added the component **< ListEpisodes >** which will take you to a new screen where the data from that single episode will load.

Also the "Load More" button component is stated here, which will render the next page of characters.

- **loadPages.jsx** => The famous 'Load More' used on the **Characters.jsx** component.
- **Episode.jsx** => Information of single episodes (Last episodes of characters)
- **Episodes.jsx** => This renders all the episodes. Didnt add the pages though. (Load More). Fetched data thanks to the imported helper (axios).
- **Locations.jsx** => This renders the locations, fetched data thanks to the helper.

### Common Components:

- **Social.jsx** => basically just renders social media icons using the NPM package from react-social-icons.
- **Header.jsx** => The menu and Links are located in here. Also the "logo" and the non-working (just a placeholder) search bar.
- **Modal.jsx** => Ready to use but not implemented.

### Styling & SaSS

- Located in the /Stylesheets/ folder, not very organized though. All the .scss files are imported in the **import.scss**, which later is imported in the index.js.

- Also a small .scss file which contains variables **(_vars.scss)**.

But in general, the syling needs a lot more work.

### Design

Lack of time, but I did what I could. The main page is pretty user-friendly in my opinion.

### Responsiveness

Not worked on this much, just a bit but I added some media queries.


