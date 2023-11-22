const paketSilver = document.querySelector('.paket-silver');
const paketPlatinum = document.querySelector('.paket-platinum');
const paketGold = document.querySelector('.paket-gold');

const modalPaket = e => {
    e.preventDefault();

    let id = e.target.getAttribute('data-info');
    switch (id) {
        case 'silver':
            // focus packet
            paketSilver.classList.remove('hide');
            paketSilver.classList.remove('mt-3');

            // packet
            paketPlatinum.classList.add('hide');
            paketGold.classList.add('hide');

            $('#staticBackdrop').modal('show');
            break;
        case 'platinum':
            // focus packet
            paketPlatinum.classList.remove('hide');
            paketPlatinum.classList.remove('mt-3');

            // packet
            paketSilver.classList.add('hide');
            paketGold.classList.add('hide');

            $('#staticBackdrop').modal('show');
            break;
        case 'gold':
            // focus packet
            paketGold.classList.remove('hide');
            paketGold.classList.remove('mt-3');

            // packet
            paketSilver.classList.add('hide');
            paketPlatinum.classList.add('hide');

            $('#staticBackdrop').modal('show');
            break;
        case 'trial':
            window.location.href = "https://lihost.labibweb.my.id?paket=trial";
            break;
        default:
            paketPlatinum.classList.add('mt-3');
            paketGold.classList.add('mt-3');


            paketGold.classList.remove('hide');
            paketSilver.classList.remove('hide');
            paketPlatinum.classList.remove('hide');

            $('#staticBackdrop').modal('show');
            break;
    }
}


loads("pages/login.ajax.html", "Login");

function loads(url, title) {
    $("#app").load(url);
    document.title = "liHospot | " + title;
}

AOS.init();

function showMap(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    map.setView([latitude, longitude], 16.5);

    const personIcon = L.icon({
        iconUrl: 'assets/img/mark.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    L.marker([latitude, longitude], {
        icon: personIcon
    }).addTo(map)
}