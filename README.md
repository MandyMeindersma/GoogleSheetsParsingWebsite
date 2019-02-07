# Simple Google Sheets reading website

## Requirements:
* Python 2.6 or higher

## To run:
- manually run the python script `python quickstart.py` (This will be fixed in a later TODO so you do not have to run it manually). This scrapes the data from the google sheet.
- Get a local python server running in this directory. Its the only way to bypass CORS.
    * Go to your terminal: `cd thisDirectory`
    * if you have python2: `python -m SimpleHTTPServer`<br> if you have python3: `python -m http.server 8000`
- Open `localhost:8000` in the browser.
- Click on the html file. Your website should be displayed there. It may take a second for the data to populate

## TODO
* get the python script to be run every second
* get the website looking better with css

<br><br>
Help taken from this tutorial:
* https://developers.google.com/sheets/api/quickstart/python
