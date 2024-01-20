// @ts-check
const { test, expect } = require('@playwright/test');


function removeExtraSpacesAndNewlines(inputString) {
  const cleanedString = inputString.replace(/[\s\n]+/g, ' ').trim();
  return cleanedString;
}


let count = 0

const functions = ["changeHeading", "headingSizeChange", "changeSubHeading", "subHeadingSizeChange", "changeButtonText", "btnSizeChange"]

test('has title', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Document/);
});


for (const fun of functions) {
  test(`is function available ${fun}`, async ({ page }) => {
    // Navigate to the desired page
    await page.goto('http://127.0.0.1:5500/');
  
    // Get the HTML content of the page
    const htmlContent = await page.content();

  
    // Check if the function named 'changeHeading' is defined in the HTML content
    const isFunctionPresent = htmlContent.includes(`function ${fun}`);
  
    // Assert whether the function is available or not
    expect(isFunctionPresent).toBe(true);
  });
  
}

test("Check if iframe values change", async({page}) => {
  


})

// function checkIframe() {

// }
test("iframe is available", async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/');

  await page.goto('http://127.0.0.1:5500/');

  const heading = await page.locator("#heading")

  await heading.fill("")
  await heading.pressSequentially("Swayam")


 console.log(await page.inputValue("#heading")); 

  // Locate the iframe using the provided selector
  const iframeHandle = await page.frameLocator("#iframe").getByRole("heading").allTextContents()
  const iframeBtn = await page.frameLocator("#iframe").getByRole("button").textContent()


  console.log(iframeHandle);
  console.log(removeExtraSpacesAndNewlines(iframeHandle[1]));

  console.log(iframeBtn);
  
});


