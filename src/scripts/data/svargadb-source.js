import API_ENDPOINT from '../globals/api-endpoint';

class TheSvargaDbSource {
  static async nowPlayingSvarga() {
    const response = await fetch(API_ENDPOINT.SVARGA);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailSvarga(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}
export default TheSvargaDbSource;
