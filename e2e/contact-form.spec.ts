import { test, expect, type Page } from "@playwright/test";

// Each field's error is announced through its own aria-describedby target, so
// locate errors per field rather than by text — "Can't be empty" is shared copy.
const errorFor = (page: Page, field: "name" | "email" | "message") =>
  page.locator(`#${field}-error`);

test.describe("contact form validation", () => {
  test("shows required-field errors on empty submit", async ({ page }) => {
    await page.goto("contact");

    await page.getByRole("button", { name: "Submit" }).click();

    await expect(errorFor(page, "name")).toHaveText("Can't be empty");
    await expect(errorFor(page, "email")).toHaveText("Can't be empty");
    await expect(errorFor(page, "message")).toHaveText("Can't be empty");
  });

  test("shows an error for an invalid email address", async ({ page }) => {
    await page.goto("contact");

    await page.getByLabel("Name").fill("Ada Lovelace");
    await page.getByLabel("Email Address").fill("not-an-email");
    await page.getByLabel("Your Message").fill("Hello there");
    await page.getByRole("button", { name: "Submit" }).click();

    await expect(errorFor(page, "email")).toHaveText("Please use a valid email address");
  });

  test("clears a field's error as soon as it is corrected", async ({ page }) => {
    await page.goto("contact");

    await page.getByRole("button", { name: "Submit" }).click();
    await expect(errorFor(page, "name")).toBeVisible();

    await page.getByLabel("Name").fill("Ada Lovelace");
    await expect(errorFor(page, "name")).toHaveCount(0);
  });

  test("submits successfully and alerts when all fields are valid", async ({ page }) => {
    await page.goto("contact");

    let alertMessage = "";
    page.once("dialog", async (dialog) => {
      alertMessage = dialog.message();
      await dialog.accept();
    });

    await page.getByLabel("Name").fill("Ada Lovelace");
    await page.getByLabel("Email Address").fill("ada@example.com");
    await page.getByLabel("Your Message").fill("Hello there");
    await page.getByRole("button", { name: "Submit" }).click();

    await expect.poll(() => alertMessage).toBe("Form sent!");
    await expect(page.getByLabel("Name")).toHaveValue("");
  });
});
