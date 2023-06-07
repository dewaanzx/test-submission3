import FavoriteSvargaIdb from '../data/favorite-svarga-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, svarga }) {
    this._likeButtonContainer = likeButtonContainer;
    this._svarga = svarga;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._svarga;

    if (await this._isSvargaExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isSvargaExist(id) {
    const svarga = await FavoriteSvargaIdb.getSvarga(id);
    return !!svarga;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteSvargaIdb.putSvarga(this._svarga);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteSvargaIdb.deleteSvarga(this._svarga.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
