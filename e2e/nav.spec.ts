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
    const mobileNav = page.getByTestId("mobile-nav");

    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(mobileNav).not.toBeInViewport();

    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(mobileNav).toBeInViewport();

    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    // The nav stays mounted and only slides off-screen (translate-x-full), and
    // the overlay merely fades to opacity-0 — which Playwright still counts as
    // visible — so assert on viewport position rather than visibility.
    await expect(mobileNav).not.toBeInViewport();
  });

  test("mobile nav link navigates and dismisses the menu", async ({ page }) => {
    await page.goto("./");

    const toggle = page.getByRole("button", { name: "Toggle navigation menu" });
    const mobileNav = page.getByTestId("mobile-nav");

    await toggle.click();

    const locationsLink = mobileNav.getByRole("link", { name: "Locations" });
    await expect(locationsLink).toBeInViewport();

    await locationsLink.click();
    await expect(page).toHaveURL(/\/locations$/);
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(mobileNav).not.toBeInViewport();
  });
});
