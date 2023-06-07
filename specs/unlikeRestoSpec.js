import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteSvargaIdb from '../src/scripts/data/favorite-svarga-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteSvargaIdb.putSvarga({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteSvargaIdb.deleteSvarga(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithSvarga({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this Restaurant"]'))
      .toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithSvarga({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeFalsy();
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithSvarga({ id: 1 });
    // hapus dulu film dari daftar film yang disukai
    await FavoriteSvargaIdb.deleteSvarga(1);
    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteSvargaIdb.getAllSvarga()).toEqual([]);
  });
  it('should be able to remove liked restaurant from the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      svarga: {
        id: 1,
      },
    });
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteSvargaIdb.getAllSvarga()).toEqual([]);
  });
});
