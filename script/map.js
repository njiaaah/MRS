document.addEventListener('DOMContentLoaded', ()=>{
    if (document.querySelector('#map')) {

let center = [55.76610106894367,37.58251100000001];
let mark_home = [55.76610106894367,37.58251100000001];

function init() {
  let map = new ymaps.Map('map', {
    center: center,
    zoom: 18,
    controls: ['zoomControl']
  }, {
    zoomControlSize: 'auto'
  });
	
	


    let placemark_home = new ymaps.Placemark(mark_home, {
      hintContent: 'ЖК МОСРЕАЛСТРОЙ',
      balloonContent: 'ЖК МОСРЕАЛСТРОЙ'
    }, {
      iconLayout: "default#image",
      iconImageHref: "../img/icons/mrs-marker.svg",
      iconImageSize: [40, 40],
      iconImageOffset: [0, -35]
    });
		

    map.geoObjects
    .add(placemark_home);
}




ymaps.ready(init);

    }
})