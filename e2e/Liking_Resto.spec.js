const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/like');
  I.wait(3);
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#svargas');
  I.see('Belum ada Restoran yang kamu sukai!', '#svargas');
});

Scenario('liking one restaurants', async ({ I }) => {
  I.wait(3);
  I.see('Belum ada Restoran yang kamu sukai!', '#svargas');

  I.amOnPage('/');
  I.waitForElement('.svarga-item', 10);
  I.seeElement('.svarga-item');

  const firstRestaurant = locate('.svarga-item').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);

  I.amOnPage('/#/like');
  I.wait(3);
  I.seeElement('.svarga-item');
  const likedRestaurantName = await I.grabTextFrom('.svarga-item');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});