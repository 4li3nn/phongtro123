import scrapers from "./scraper.js";

const scrapeController = async (browserInstance) => {
  const url = "https://phongtro123.com/";
  try {
    let browser = await browserInstance;
    let categories = scrapers.scrapeCategory(browser, url);
  } catch (error) {
    console.log("Error in scaperController: " + error);
  }
};

export default scrapeController;
