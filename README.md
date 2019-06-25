# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions
## iOS 
### Build client
Install cordova `npm install cordova -g`

Build client bundle
`cd client && yarn build:cordova` 
may cause cra specific error, but that’s just for output.
`cd ..`
`cd cordova-felanmalan`

Prepare cordova build
`cordova prepare ios`

Run app in development
`cordova run ios`



