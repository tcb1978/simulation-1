require('dotenv').config();
import React from 'react';
//simulation - 1 74C Invoke Express
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// massive(process.env.CONNECTION_STRING).then(db => {
//     app.set('db', db);

    // db.new_planes().then(planes => { 
    //     console.log(planes) 
    // }).catch(err => console.error(err))

    // db.get_planes().then(planes => {
    //     console.log(planes)
    // }).catch(err => console.error(err))

// }).catch(err => console.error(err))

app.get('', )

app.use(bodyParser.json());
app.use(cors());


app.listen(port, () => { console.log(`Server listening on port ${port}`); });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
