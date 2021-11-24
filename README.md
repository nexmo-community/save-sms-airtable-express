# Save Received SMS Messages with Airtable and Node.js

Express.js application to log incoming SMS messages via the Vonage Messages API to an Airtable base.

<!--For more detail see the accompanying blog post at: <https://learn.vonage.com/blog/2020/03/05/save-received-sms-messages-with-airtable-and-node-js-dr/>-->

## Prerequisites

* A Vonage account. If you're new to Vonage, you can [sign up for a Vonage account](https://dashboard.nexmo.com/sign-up?utm_source=DEV_REL&utm_medium=github&utm_campaign=airtable-sms-logging-express) and get some free credit to get you started.
* An [Airtable account](https://airtable.com/signup)
* [Node.js](https://nodejs.org/en/download/) installed on your machine
* [Ngrok](https://ngrok.com/) to make the code on our local machine accessible to the outside world
* The [Vonage CLI]: `npm install @vonage/cli -g`

## Setup ngrok

Download and run ngrok from the terminal targetting port 3000 with `ngrok http 3000`. Take note of the ngrok URL.

## Setup Airtable

Copy [this pre-made Airtable base](https://airtable.com/universe/expN0Cf1sBrXAExLx/save-incoming-sms-with-nexmo) into your account. Take note of the base ID (If 'https://airtable.com/tblAuZ8qFuP2I8mDh/viwVyLmBMW772S9sd' is the URL of your Airtable webpage then `tblAuZ8qFuP2I8mDh` is the base ID).

## Setup Vonage

```
# Search numbers that can send/receive SMS (replace GB for other regions)
$ vonage number:search GB

# Buy a number from the list
$ vonage numbers:buy NUMBER_FROM_LIST

# Create a new Vonage messages application
$ vonage apps:create "Application Name" --messages_inbound_url=https://7YOUR_NGROK_URL/inbound --messages_status_url=YOUR_NGROK_URL.ngrok.io/status

# Link your number to your application
$ vonage link:app --number=VONAGE_NUMBER APPLICATION_ID
```

## Setup Express Application

1. Rename `config.json.example` to `config.json` and populate with appropriate keys
2. Install dependencies with `npm install`
3. Run the application uing `node index.js`

## Getting Help

We love to hear from you so if you have questions, comments or find a bug in the project, let us know! You can either:

* Open an issue on this repository
* Tweet at us! We're [@VonageDev on Twitter](https://twitter.com/VonageDev)
* Or [join the Vonage Community Slack](https://developer.vonage.com/community/slack)

## Further Reading

* Check out the Developer Documentation at <https://developer.vonage.com>

## Code of Conduct

In the interest of fostering an open and welcoming environment, we strive to make participation in our project and our community a harassment-free experience for everyone. Please check out our [Code of Conduct][coc] in full.

## Contributing 
We :heart: contributions from everyone! Check out the [Contributing Guidelines][contributing] for more information.

[![contributions welcome][contribadge]][issues]

## License

This project is subject to the [MIT License][license]

[contribadge]: https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat "Contributions Welcome"

[coc]: CODE_OF_CONDUCT.md "Code of Conduct"
[contributing]: CONTRIBUTING.md "Contributing"
[license]: LICENSE "MIT License"

[issues]: ./../../issues "Issues"
