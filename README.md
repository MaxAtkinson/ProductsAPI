# Products API

## Install

- Run `npm install` to install node modules.
- Edit `settings.js` and update it with your local MySQL credentials.
- Run `node migrations.js` to create the database schema and insert data.
- Run `node app.js` to start the API on port 5000.


## Send requests

### Products

- Create product:
`curl -H 'Content-Type: application/json' -X POST -d '{"name": "Buckfast Tonic Wine", "description": "The finest of tonic wines", "categoryId": "3"}' http://localhost:5000/products`

- Get products:
`curl http://localhost:5000/products`

- Delete product:
`curl -H 'Content-Type: application/json' -X DELETE http://localhost:5000/products/11`


### Categories

- Create category:
`curl -H 'Content-Type: application/json' -X POST -d '{"name": "Whisky"}' http://localhost:5000/categories`

- Get categories:
`curl http://localhost:5000/categories`

- Get products for a specific category:
`curl http://localhost:5000/categories/3/products`

