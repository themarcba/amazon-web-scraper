const fetch = require('node-fetch')
const cheerio = require('cheerio')

const getPage = async url => {
    const res = await fetch(url, { timeout: 3000 })
    return await res.text()
}

const getAvailabiliy = async url => {
    const html = await getPage(url)
    const $ = cheerio.load(html)
    return $('#availability span')
}

const getAvailabiliyText = async url => {
    const availability = await getAvailabiliy(url)
    return availability.text().trim()
}

module.exports = { getAvailabiliyText }
