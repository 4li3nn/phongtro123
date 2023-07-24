const scrapeCategory = async (browser, url) =>
  new Promise(async (resolve, reject) => {
    try {
      let page = await browser.newPage();
      console.log("Open new tab...");
      await page.goto(url);
      console.log("Connecting to: ", url);
      await page.waitForSelector("#webpage");
      console.log("Loaded! ");

      const dataCategory = await page.$$eval(
        "#navbar-menu > ul > li",
        (elements) => {
          dataCategory = elements.map((element) => {
            return {
              category: element.querySelector("a").innerText,
              link: element.querySelector("a").href,
            };
          });
          return dataCategory;
        }
      );
      console.log(dataCategory);
      await page.close();
      resolve();
    } catch (error) {
      console.log("Error in scraper: " + error);
      reject(error);
    }
  });

export default { scrapeCategory };
