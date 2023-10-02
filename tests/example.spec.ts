import { test } from "@playwright/test";

test.describe("Authentication", () => {
  test("As a user, I can login with valid credentials", async ({ page }) => {
    await test.step("Go to login page", async () => {});
    await test.step("Enter email", async () => {});
    await test.step("Enter password", async () => {});
    await test.step("Click Sign-in button", async () => {});
  });

  test("As a user, I cannot login with invalid credentials", async ({
    page,
  }) => {
    await test.step("Go to login page", async () => {});
    await test.step("Enter email", async () => {});
    await test.step("Enter password", async () => {});
    await test.step("Click Sign-in button", async () => {});
  });
});
