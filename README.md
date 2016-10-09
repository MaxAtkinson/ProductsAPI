# Products API

## Install

- Run `npm install` to install node modules.
- Edit `settings.js` and update it with your local MySQL credentials.
- Run `node migrations.js` to create the database schema and insert data.
- Run `node app.js` to start the API on port 5000.


## Send requests

### Products

- Get products:
`curl http://localhost:5000/products`

- Post product:
`curl -H 'application/json' -X POST -d '{"name": "product_name", "description": "product_description", "category": "product_category"}' http://localhost:5000/products`

- Delete product:
`curl -H 'application/json' -X DELETE http://localhost:5000/products/<ID>`


### Categories

- Get categories:
`curl http://localhost:5000/categories`

- Post category:
`curl -H 'application/json' -X POST -d '{"name", "category_name"}' http://localhost:5000/categories`

- Get products for a specific category:
`curl http://localhost:5000/categories/<ID>/products`

