import { test, expect } from '@playwright/test';

/* test.beforeEach( async ({ page }) => {
  await page.goto('/');
  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle('Vektorprogrammet');
});

test('has title', async ({page}) => {
  await expect(page).toHaveTitle('Vektorprogrammet');
}) */

test.describe('Navbar', () => {
  test.beforeEach( async ({ page }) => {
    await page.goto('/');
    // Expect a title "to contain" a substring.
    //await expect(page).toHaveTitle('Vektorprogrammet');
  });

  test('can navigate to assistent page', async ({page}) => {
    await page.getByRole('link', { name: 'Assistenter' }).click();
    await expect(page.getByRole('heading', { name: 'Assistenter' })).toBeVisible();
  })

  test('can navigate to parent page', async ({page}) => {
    await page.getByRole('link', { name: 'Foreldre' }).click();
    await expect(page.getByRole('heading', { name: 'Informasjon for foreldre' })).toBeVisible();
  })

  test('can navigate to teams page', async ({page}) => {
    await page.getByRole('link', { name: 'Team' }).click();
    await expect(page.getByRole('heading', { name: 'Styre og team' })).toBeVisible();
  })

  test('can navigate to school page', async ({page}) => {
    await page.getByRole('link', { name: 'Skoler' }).click();
    await expect(page.getByRole('heading', { name: 'Vektorassistenter i skolen' })).toBeVisible();
  })
})

/* test.describe('Navbar', () => {
  test('can navigate to different pages through navbar', async ({page}) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Assistenter' }).click();
    await expect(page.getByRole('heading', { name: 'Assistenter' })).toBeVisible();

    await page.getByRole('link', { name: 'Foreldre' }).click();
    await expect(page.getByRole('heading', { name: 'Informasjon for foreldre' })).toBeVisible();

    await page.getByRole('link', { name: 'Team' }).click();
    await expect(page.getByRole('heading', { name: 'Styre og team' })).toBeVisible();
    
    await page.getByRole('link', { name: 'Skoler' }).click();
    await expect(page.getByRole('heading', { name: 'Vektorassistenter i skolen' })).toBeVisible();
  })
}) */

test.describe('Assistent page', () => {
  test.beforeEach( async ({ page }) => {
    await page.goto('/assistenter');
  });

  test('can choose city', async ({page}) => {
    //await expect(page.getByRole('tablist', { name: bergen/i/ })).toBeVisible();
    const button = await page.getByRole('button', { name: /bergen/i });
    //await expect(button).toBeVisible();
    await button.click();
  })

  test('can submit application', async ({page}) => {
    //await page.goto('/assistenter');

    await expect(page.getByRole('heading', { name: 'Trondheim' })).toBeVisible();
    const submit = page.getByRole('button', { name: /søk nå!/i });

    const firstname = page.getByPlaceholder('Fornavn');
    const surname = page.getByPlaceholder('Etternavn');
    const email = page.getByPlaceholder('E-post');
    const phone = page.getByPlaceholder('Telefon nr');
    const studyprogram = page.getByPlaceholder('Linje');

    await expect(firstname).toBeVisible();
    await expect(surname).toBeVisible();
    await expect(email).toBeVisible();
    await expect(phone).toBeVisible();
    await expect(studyprogram).toBeVisible();
    await expect(submit).toBeVisible();

    await firstname.fill('John');
    await surname.fill('Doe');
    await email.fill('johndoe@gmail.com');
    await phone.fill('00000000');
    await studyprogram.fill('mtdt');

    await submit.click();

  })
  

})
