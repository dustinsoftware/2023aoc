import { test, expect } from "@playwright/test";

test("day 1 loads", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("http://localhost:3000/");
  // Find an element with the text 'About Page' and click on it
  await page.click("text=Day 1");
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL("http://localhost:3000/day1");
  // The new page should contain an h1 with "About Page"
  await expect(page.locator("text=Day 1")).toContainText("Day 1");
});

test("loads from mock", async ({ page }) => {
  await page.route("**/assets/day1.txt", async (route) => {
    await route.fulfill({ body: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10" });
  });

  await page.goto("http://localhost:3000/day1");
  await expect(page.locator("text=Result: 11")).toBeVisible();
});
