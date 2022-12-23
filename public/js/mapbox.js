/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZGFueWFrMTMiLCJhIjoiY2xicDQycnMxMTdwMTNvcHE5aDFuM2R6ZyJ9.dKRo8pFtUZmJfMG2nyvS5w';

  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/danyak13/clbp46qpy000k14mshyui6a6d', // style URL
    center: [37.622217676479636, 55.75285478307421], // starting position [lng, lat]
    zoom: 12, // starting zoom
  });
};
