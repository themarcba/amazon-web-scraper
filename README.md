# Amazon Web Scraper

Library to web-scrape data from Amazon to find out the status of an item at Amazon

## Install

```bash
$ npm install @themarcba/amazon-web-scraper
```

## Use

```javascript
const { getAvailabiliyText } = require('@themarcba/amazon-web-scraper')
const url =
    'https://www.amazon.com/Funko-Pop-Movies-Suicide-Damaged/dp/B08P5XC9FL/ref=sr_1_2?dchild=1&keywords=harley+quinn+funko&qid=1627986255&sr=8-2'
const availability = await getAvailabiliyText(url)
console.log(availability)
```
