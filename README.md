# Project Name
DataProphet take home assessment
## Description

A simple web application for visualizing this time-series dataset.
Built using Flask API, Mongo and Reactjs.

## Installation

Run docker-compose up in the root directory

## Usage

1. Start the Application:
Run docker-compose up in the root directory

2. Check that the application is running.

To check the server: Go to check that flask server is up by going to `http://127.0.0.1:80` 

To filter add `/data?parameter={parameter}` . pick parameter from json data

Access the client in your browser at `http://127.0.0.1:3000`.

To fetch particular data by parameter 
add parameter name in the input box.
EG. parameter.foo

db is populated with data from the sample files on startup

## Testing
None

## Still to do
Add Backend and Front End Tests
Cater for Edge Cases( Eg null data......)
Improve UI
Fix proxy/cors issues