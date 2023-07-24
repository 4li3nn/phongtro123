import puppeteer from "puppeteer";

const startBrowser = async () => {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--disable-setuid-sandbox"],
      ignoreHTTPSErrors: true,
    });
  } catch (error) {
    console.log("Can't start browser: ", error);
  }
  return browser;
};

export default startBrowser;
