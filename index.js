const PORT = 8000;
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const fetch = require('node-fetch')
require('dotenv').config()
morgan('tiny')

const app = express()
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

//1.54
//get all the restaurant data
app.get('/burgers', (req, res) => {
    const url = 'https://74e73271-ea3c-4d12-8ea1-cfe4efd9666a-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/burgers/collections/burger_info?page-size=20'

    const options = {
        method: 'Get',
        headers: {
            Accept: 'application/json',
            'X-Cassandra-Token': 'AstraCS:gLZNhnZhCJDszgBQWhEDRLja:232cd4bfcf20e3d6d0dcf82094e0f14825be9b83f9218da9e2b1f0f9e26ff763'

        }
    }
    fetch(url, options)
        .then(response => response.json())
        .then(json => res.json(json))
        .catch(err => console.log('error' + err))
})

app.listen(PORT, () => console.log(`server is running on port${PORT}`))