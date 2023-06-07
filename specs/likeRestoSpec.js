import FavoriteSvargaIdb from '../src/scripts/data/favorite-svarga-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A svarga', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the svarga has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithSvarga({ id: 1 });

    expect(document.querySelector('[aria-label="like this svarga"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the svarga has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithSvarga({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this svarga"]')).toBeFalsy();
  });

  it('should be able to like the svarga', async () => {
    await TestFactories.createLikeButtonPresenterWithSvarga({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const svarga = await FavoriteSvargaIdb.getSvarga(1);

    expect(svarga).toEqual({ id: 1 });
    FavoriteSvargaIdb.deleteSvarga(1);
  });

  it('should not add a svarga again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithSvarga({ id: 1 });

    // Tambahkan svarga dengan ID 1 ke daftar svarga yang disukai
    await FavoriteSvargaIdb.putSvarga({ id: 1 });

    // Simulasikan pengguna menekan tombol suka svarga
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // tidak ada svarga yang ganda
    expect(await FavoriteSvargaIdb.getAllSvarga()).toEqual([{ id: 1 }]);

    FavoriteSvargaIdb.deleteSvarga(1);
  });
  it('should not add a svarga when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithSvarga({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteSvargaIdb.getAllSvarga()).toEqual([]);
  });
});
