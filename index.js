const config = require('./config.json')
const Vonage = require('@vonage/server-sdk')
const Airtable = require('airtable')
const base = new Airtable({ apiKey: config.AIRTABLE_KEY }).base('YOUR_AIRTABLE_BASE_ID');
const app = require('express')();
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const vonage = new Vonage({
    apiKey: config.VONAGE_KEY,
    apiSecret: config.VONAGE_SECRET,
    applicationId: config.VONAGE_APPLICATION_ID,
    privateKey: './private.key'
})

app.post('/inbound', (req, res) => {
    const { from, text } = req.body;
    console.log(JSON.stringify(req.body));

    base('Messages').select({
        filterByFormula: `Number=${from}`
    }).eachPage(records => {
        if (records.length == 0) {
            createUser(text, req.body.from)
        } else {
            createMessage(text, records[0].fields.Number[0])
        }
    });

    function createUser(message, from) {
        base('Numbers').create({
            Number: from
        }, (err, record) => {
            if (err) { console.error(err); return; }
            createMessage(message, record.getId())
        })
    }

    function createMessage(message, numberId) {
        base('Messages').create({
            Message: message,
            Number: [numberId]
        }, err => {
            if (err) { console.error(err); return; }
            vonage.channel.send(
                { "type": "sms", "number": req.body.from },
                { "type": "sms", "number": 12013401003 },
                { "content": { "type": "text", "text": "Thank you for getting in touch. We will ring you back as soon as possible." } },
                vonageErr => {
                    if(vonageErr) { console.error(err); return; }
                }
            ), 
            res.status(200).end();
        })
    }
})

app.listen(3000);