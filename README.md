# MARVEL BACK END API  🦸‍♀️ 🦸 🦸‍♂️

### Installation

1. Clone the repo

3. Install NPM packages
   ```sh
   yarn
   ```
   
4. Create a .env file with :
   ```JS
   PORT=YOUR_PORT
   API_SECRET_KEY=YOUR_API_KEY
   ```
   
5. Run the project
    ```JS
    npx nodemon index.js
    ```
   
### API

## Comics 

# Get a list of comics

Route : /comics

Method : `GET`


| Query       | Info                         | Required |
| ----------- | ---------------------------- | -------- |
| limit       | between 1 and 100         	 | Yes      |
| skip        | number of results to ignore	 | Yes      |
| title       | search a comic by title      | No       |

Ex : https://marvel-app-back.herokuapp.com/comics?skip=0&limit=100

<br>

# Get a list of comics containing a specific character

Route : /comics/:characterId

Method : `GET`

| Params      | Required |
| ----------- | -------- |
| characterId | Yes      |

Ex : https://marvel-app-back.herokuapp.com/comics/5fcf921ad8a2480017b914a3

<br>

## Characters

# Get a list of characters

Route : /characters

Method : `GET`

| Query       | Info                         | Required |
| ----------- | ---------------------------- | -------- |
| limit       | between 1 and 100         	 | Yes      |
| skip        | number of results to ignore	 | Yes      |
| title       | search a character by name   | No       |

Ex : https://marvel-app-back.herokuapp.com/characters?skip=0&limit=100


