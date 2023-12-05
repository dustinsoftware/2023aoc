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

test("test case 1", async ({ page }) => {
    await page.route("*/**/assets/day1.txt", async (route) => {
        await route.fulfill({
            body: `1abc2`,
        });
    });

    await page.goto("http://localhost:3000/day1");
    await expect(page.locator('[data-testid="results"]')).toContainText(
        "Result: 12"
    );
});

test("test case 2", async ({ page }) => {
    await page.route("*/**/assets/day1.txt", async (route) => {
        await route.fulfill({
            body: `pqr3stu8vwx`,
        });
    });

    await page.goto("http://localhost:3000/day1");
    await expect(page.locator('[data-testid="results"]')).toContainText(
        "Result: 38"
    );
});

test("test case 3", async ({ page }) => {
    await page.route("*/**/assets/day1.txt", async (route) => {
        await route.fulfill({
            body: `a1b2c3d4e5f`,
        });
    });

    await page.goto("http://localhost:3000/day1");
    await expect(page.locator('[data-testid="results"]')).toContainText(
        "Result: 15"
    );
});

test("test case 4", async ({ page }) => {
    await page.route("*/**/assets/day1.txt", async (route) => {
        await route.fulfill({
            body: `treb7uchet`,
        });
    });

    await page.goto("http://localhost:3000/day1");
    await expect(page.locator('[data-testid="results"]')).toContainText(
        "Result: 77"
    );
});

test("test case 5", async ({ page }) => {
    await page.route("*/**/assets/day1.txt", async (route) => {
        await route.fulfill({
            body: `1abc2
          pqr3stu8vwx
          a1b2c3d4e5f
          treb7uchet`,
        });
    });

    await page.goto("http://localhost:3000/day1");
    await expect(page.locator('[data-testid="results"]')).toContainText(
        "Result: 142"
    );
});
