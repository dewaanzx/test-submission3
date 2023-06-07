import TheSvargaDbSource from '../../data/svargadb-source';
import { createSvargaItemTemplate } from '../templates/template-creator';

const Restaurant = {
  async render() {
    return `
    <div class="content">
    <div id="svargas" class="svargas">
    </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurant = await TheSvargaDbSource.nowPlayingSvarga();
    const svargaContainer = document.querySelector('#svargas');
    restaurant.forEach((svarga) => {
      svargaContainer.innerHTML += createSvargaItemTemplate(svarga);
    });
  },
};

export default Restaurant;
