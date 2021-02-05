const express = require('express')
const app = express()
const cors = require('cors')
const fetch = require('node-fetch');
//Route to get the data from extrenal API
app.get('/getdata', cors(), function (req, res) {
    let page_num = req.query.page
    let per_page = req.query.per_page
    let q = req.query.q
    let candidate_id = req.query.candidate_id
    let state = req.query.state
    let party = req.query.party
    let candidate_status = req.query.candidate_status
    let sortvalue = req.query.sortvalue
    let url = 'https://api.open.fec.gov/v1/candidates/?page=' + page_num + '&api_key=xCaVq5huyagUt5qBYDba7XOpW54UMqnYgoLb78ek&per_page=' + per_page
    if (q) {
        url += '&q=' + q
    }
    if (candidate_id) {
        url += '&candidate_id=' + candidate_id
    }
    if (party) {
        url += '&party=' + party
    }
    if (state) {
        url += '&state=' + state
    }
    if (candidate_status) {
        url += '&candidate_status=' + candidate_status
    }
    if (sortvalue) {
        url += '&sort=' + sortvalue
    }
    fetch(url)
        .then(res => res.json())
        .then(json => res.send(json))
})
//Listening on port 3000
app.listen(3000, err => {
    if (err) {
        console.log(err)
    }
    console.log('Listening on port 3000')
});
