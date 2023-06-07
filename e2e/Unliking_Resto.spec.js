/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
  I.wait(5);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.see('Belum ada Restoran yang kamu sukai!');

  I.amOnPage('/');
  I.waitForElement('.svarga-item');
  I.seeElement('.svarga-item');

  const firstRestaurant = locate('.svarga-item').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.wait(5);
  I.seeElement('#svargas');
  const likedRestaurantName = await I.grabTextFrom('.svarga-item');

  // membandingkan apakah sama atau tidak
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click('.svarga-item');

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.wait(5);
  I.see('Belum ada Restoran yang kamu sukai!');
});