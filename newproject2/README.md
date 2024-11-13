# Zhixuan-Liu-CS5610-project2-writeup

## What were some challenges you faced while making this app?  
One of the main challenges I faced was managing the state across different components. Initially, I only used useState at the component level, which worked fine for individual parts but made it difficult to coordinate shared data across the app. Once I completed the project, I realized it would be more efficient to use a Context provider for global state management for shared data, while keeping useState for data that was only relevant at the component level. Transitioning to this combined approach was challenging, as it required rewriting significant portions of the code and carefully moving each piece of state to either the Context or component level. This took a lot of time and careful debugging, but ultimately it streamlined data flow and made the app much more organized. 

## Given more time, what additional features, functional or design changes would you make？ 
Given more time, I would implement an "Auto Clear" feature. In traditional Minesweeper, if users click on a tile that’s empty (meaning it has no bombs adjacent to it), all neighboring empty tiles are automatically cleared out. This continues recursively until all connected empty cells are revealed. Adding this functionality would make the game feel much smoother and more authentic to the classic Minesweeper experience, saving players from manually clearing each cell one by one. I believe it would significantly enhance the user experience, making gameplay faster and more enjoyable, especially for fans of the original game.

## What assumptions did you make while working on this assignment? 
First, I assumed that players would be familiar with basic Minesweeper mechanics, so I focused on functionality and layout without adding extensive instructions or tutorials. I also assumed that the player’s actions would follow expected patterns, such as revealing cells and resetting the game as intended, and therefore did not build extensive error handling for unexpected interactions.

## How long did this assignment take to complete? 
4 Days. 
