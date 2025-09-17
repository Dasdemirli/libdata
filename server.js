const jsonServer = require('json-server')
const fs = require('fs')

const server = jsonServer.create()

// Read the JSON file and wrap the array in an object
const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
const data = { books: jsonData }

const router = jsonServer.router(data)
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use('/api', router)
server.listen(process.env.PORT || 5000, () => {
    console.log('JSON Server is running')
})