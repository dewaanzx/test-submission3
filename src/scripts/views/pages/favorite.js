import FavoriteSvargaIdb from '../../data/favorite-svarga-idb';
import { createSvargaItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
          <div class="content">
            <h2 class="content__heading">Your Liked Restaurant</h2>
            <div id="svargas" class="svargas">
            </div>
          </div>
        `;
  },

  async afterRender() {
    const svargas = await FavoriteSvargaIdb.getAllSvarga();
    const svargasContainer = document.querySelector('#svargas');
    if (svargas.length === 0) {
      svargasContainer.innerHTML = '<h3 class="nothing">Belum ada Restoran yang kamu sukai!</h3>';
    } else {
      const totalRest = svargas.length;
    }

    svargas.forEach((svarga) => {
      svargasContainer.innerHTML += createSvargaItemTemplate(svarga);
    });
  },
};

export default Like;
