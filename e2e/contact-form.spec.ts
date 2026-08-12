import { test, expect } from "@playwright/test";

test.describe("contact form validation", () => {
  test("shows required-field errors on empty submit", async ({ page }) => {
    await page.goto("contact");

    await page.getByRole("button", { name: "Submit" }).click();

    await expect(page.getByText("Name is required")).toBeVisible();
    await expect(page.getByText("Email is required")).toBeVisible();
    await expect(page.getByText("Message is required")).toBeVisible();
  });

  test("shows an error for an invalid email address", async ({ page }) => {
    await page.goto("contact");

    await page.getByLabel("Name").fill("Ada Lovelace");
    await page.getByLabel("Email Address").fill("not-an-email");
    await page.getByLabel("Your Message").fill("Hello there");
    await page.getByRole("button", { name: "Submit" }).click();

    await expect(page.getByText("Please enter a valid email address")).toBeVisible();
  });

  test("clears a field's error as soon as it is corrected", async ({ page }) => {
    await page.goto("contact");

    await page.getByRole("button", { name: "Submit" }).click();
    await expect(page.getByText("Name is required")).toBeVisible();

    await page.getByLabel("Name").fill("Ada Lovelace");
    await expect(page.getByText("Name is required")).toHaveCount(0);
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
