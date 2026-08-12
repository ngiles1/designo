import { test, expect } from "@playwright/test";

test("desktop nav links are visible and navigate", async ({ page }) => {
  await page.goto("./");

  const header = page.getByRole("banner");
  await expect(header.getByRole("link", { name: "Our company" })).toBeVisible();

  await header.getByRole("link", { name: "Locations" }).click();
  await expect(page).toHaveURL(/\/locations$/);
});

test.describe("mobile", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("hamburger menu opens and closes", async ({ page }) => {
    await page.goto("./");

    const toggle = page.getByRole("button", { name: "Toggle navigation menu" });
    await expect(toggle).toHaveAttribute("aria-expanded", "false");

    const mobileNav = page.getByTestId("mobile-nav");
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");

    const locationsLink = mobileNav.getByRole("link", { name: "Locations" });
    await expect(locationsLink).toBeInViewport();

    await locationsLink.click();
    await expect(page).toHaveURL(/\/locations$/);
  });
});
