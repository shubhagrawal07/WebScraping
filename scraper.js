const axios = require("axios");
const cheerio = require("cheerio");

// We sometimes will need to add such headers in our request because some sites might restrict web scraping by restricting the requests coming from axios apis without headers.

// headers: {
//     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
//         }

async function scraping() {
  // API call to the site we will be scraping the data from.

  const axiosResponse = await axios.request({
    method: "GET",
    url: "https://en.wikipedia.org/wiki/Web_scraping",
  });

  // This will extract and store the all the data we are getting from the axios response including the source code and html page from where we can scrape the necessary data.
  const $ = cheerio.load(axiosResponse.data);

  // Selecting the html of the title via the class name.
  const siteHeading = $(".mw-page-title-main");
  console.log(siteHeading.html());
}

scraping();
