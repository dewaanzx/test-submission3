import CONFIG from '../../globals/config';

const createSvargaItemTemplate = (svarga) => `
  <div class="svarga-item">
    <div class="svarga-item__header">
    <img class="svarga-item__header__poster" crossorigin="anonymous" src="${
  CONFIG.BASE_IMAGE_URL + svarga.pictureId
}" alt="Gambar ${svarga.name}" tabindex="0"/>
      <div class="svarga-item__header__rating">
        <p>⭐️<span class="svarga-item__header__rating__score">${svarga.rating}</span></p>
      </div>
    </div>
    <div class="svarga-item__content">
    <h3><a href="/#/detail/${svarga.id}">${svarga.name}</a></h3>
      <p>City: ${svarga.city}</p>
      <p>Deskription: ${svarga.description}</p>
    </div>
  </div>
`;

const createSvargaDetailTemplate = (svarga) => `
  <h2 class="svarga__title">${svarga.name}</h2>
  <img class="svarga__poster" crossorigin="anonymous" src="${CONFIG.BASE_IMAGE_URL + svarga.pictureId}" alt="${svarga.name}" />
  <div class="svarga__info">
    <h3>Information</h3>
    <h4>City: ${svarga.city}</h4>
    <h4>Address: ${svarga.address}</h4>
    <h4>Rating: ${svarga.rating}</h4>
    <h4>Description: ${svarga.description}</h4>
  </div>
  <div class="svarga__overview">
    <h4 tabindex="0" id="svarga-detail-form-review-title"><span>List Menu</span></h4>
    <div class="restaurant-detail__menu-list">
      <div class="foods">
      <h4>Food</h4>
      </hr>
        <ul class="restaurant-detail__foods">
          ${svarga.menus.foods
    .map(
      (food) => `
          <li><i class="fa fa-cutlery font-decoration"></i> ${food.name}</li>`,
    )
    .join('')}
        </ul>
      </div>
      <div class="drinks">
      <h4>Drink</h4>
      </hr>
        <ul class="restaurant-detail__drinks">
          ${svarga.menus.drinks
    .map(
      (drink) => `
          <li><i class="fa fa-coffee font-decoration"></i> ${drink.name}</li>`,
    )
    .join('')}
        </ul>
      </div>
    </div>
  <h4 tabindex="0" id="svarga-detail-form-review-title"><span>Reviews</span></htabindex=>
    <div tabindex="0" class="detail-review">
      ${svarga.customerReviews
    .map(
      (review) => `
      <div class="detail-review-item">
        <div class="header-review">
          <p class="name-review"><i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em; padding-right:10px;"></i>${review.name}</p>
          <p class="date-review">${review.date}</p>
        </div>
        <div class="body-review">
          ${review.review}
        </div>
      </div>
      `,
    )
    .join('')}
    </div>

  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this svarga" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this svarga" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createSvargaDetailTemplate, createSvargaItemTemplate, createLikeButtonTemplate,
  createLikedButtonTemplate,
};
