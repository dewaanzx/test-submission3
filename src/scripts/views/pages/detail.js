import UrlParser from '../../routes/url-parser';
import TheSvargaDbSource from '../../data/svargadb-source';
import { createSvargaDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="svarga" class="svarga"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const svarga = await TheSvargaDbSource.detailSvarga(url.id);
    const svargaContainer = document.querySelector('#svarga');

    svargaContainer.innerHTML = createSvargaDetailTemplate(svarga);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      svarga: {
        id: svarga.id,
        name: svarga.name,
        description: svarga.description,
        rating: svarga.rating,
        pictureId: svarga.pictureId,
        city: svarga.city,
      },
    });
  },
};
export default Detail;
