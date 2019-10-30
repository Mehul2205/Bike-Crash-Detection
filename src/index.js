const path = require('path')
const express = require('express')
const hbs = require('hbs')
const request = require('request')
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const app = express()
const port = process.env.PORT || 3000

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res)=> {
    res.render('index',{
        title:'Weather Forecast',
        name: 'Mehul Patni'
    })
})
app.listen(port, () => {
    console.log('Server is up on port '+port)
})