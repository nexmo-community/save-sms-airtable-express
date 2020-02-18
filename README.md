# Save Received SMS Messages with Airtable and Node.js

Express.js application to log incoming SMS messages via the Nexmo Messages API to an Airtable base.

<!--For more detail see the accompanying blog post at: <https://nexmo.com/blog/save-sms-airtable-node>-->

## Prerequisites

* A Nexmo account. If you're new to Nexmo, you can [sign up for a Nexmo account](https://dashboard.nexmo.com/sign-up?utm_source=DEV_REL&utm_medium=github&utm_campaign=airtable-sms-logging-express) and get some free credit to get you started.
* An [Airtable account](https://airtable.com/signup)
* [Node.js](https://nodejs.org/en/download/) installed on your machine
* [ngrok](https://ngrok.com/) to make the code on our local machine accessible to the outside world
* The [Nexmo CLI]: `npm install -g nexmo-cli`

## Setup ngrok

Download and run ngrok from the terminal targetting port 3000 with `ngrok http 3000`. Take note of the ngrok URL.

## Setup Airtable

Copy [this pre-made Airtable base](https://airtable.com/universe/expN0Cf1sBrXAExLx/save-incoming-sms-with-nexmo) into your account. Take note of the base ID (If 'https://airtable.com/tblAuZ8qFuP2I8mDh/viwVyLmBMW772S9sd' is the URL of your Airtable webpage then `tblAuZ8qFuP2I8mDh` is the base ID).

## Setup Nexmo

```
# Search numbers that can send/receive SMS (replace GB for other regions)
$ nexmo number:search GB --sms

# Buy a number from the list
$ nexmo number:buy NUMBER_FROM_LIST

# Create a new Nexmo messages application
$ nexmo app:create "Application Name" --capabilities=messages --messages-inbound-url=YOUR_NGROK_URL/inbound --messages-status-url=YOUR_NGROK_URL/status --keyfile=private.key

# Link your number to your application
$ nexmo link:app NEXMO_NUMBER APPLICATION_ID
```

## Setup Express Application

1. Rename `config.json.example` to `config.json` and populate with appropriate keys
2. Install dependencies with `npm install`
3. Run the application uing `node index.js`

## Getting Help

We love to hear from you so if you have questions, comments or find a bug in the project, let us know! You can either:

* Open an issue on this repository
* Tweet at us! We're [@NexmoDev on Twitter](https://twitter.com/NexmoDev)
* Or [join the Nexmo Community Slack](https://developer.nexmo.com/community/slack)

## Further Reading

* Check out the Developer Documentation at <https://developer.nexmo.com>

