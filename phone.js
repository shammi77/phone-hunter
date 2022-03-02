const phoneSearch = () => {
    const searchPhone = document.
        getElementById('phone-search').value;
    document.getElementById('phone-search').value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => showPhoneDetails(data.data));

};
const showPhoneDetails = (phones) => {
    const main = document.getElementById('main');
    main.textContent = '';
    const twentyPhones = phones.slice(0, 20)
    for (const phone of twentyPhones) {
        // console.log(phone.image);
        const div = document.createElement('div');
        div.classList.add('col-md-4', 'col-sm-12')
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src=" ${phone.image}" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">Name: ${phone.phone_name} </h5>
            <h5 class="card-title">Brand name: ${phone.brand} </h5>
            
            <button onclick="loadDetails('${phone.slug}')" class="btn btn-danger">Details</button>
  </div>
</div>
        `;
        main.appendChild(div);
    }
};
const loadDetails = (slug) => {
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
    fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.data));
};
const setDetails = (info) => {
    console.log(info);
    const error2 = document.getElementById('error2');
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${info.image}"
    <div class="card-body">
        <h5 class="card-title"><u>Name :</u> ${info.name}</h5>

    <h5 class="card-title"><u>Relase Date :</u> ${info.releaseDate ? info.releaseDate : 'No Date'}</h5>

     <h5 class="card-title"><u>Sensor :</u><br> ${info.mainFeatures.sensors[0]}</h5>
        <h5 class="card-title">${info.mainFeatures.sensors[1]}</h5>
        <h5 class="card-title"> ${info.mainFeatures.sensors[2]}</h5>
        <h5 class="card-title"> ${info.mainFeatures.sensors[3]}</h5>
        <h5 class="card-title"> ${info.mainFeatures.sensors[4]}</h5>
        <h5 class="card-title"> ${info.mainFeatures.sensors[5]}</h5>

        <h5 class="card-title"><u>Main Features :</u> <br> Chipset: ${info.mainFeatures.chipSet}</h5>
        <h5 class="card-title">Display size: ${info.mainFeatures.displaySize}</h5>
        <h5 class="card-title">Memory: ${info.mainFeatures.memory}</h5>

        <h5 class="card-title"><u>Other :</u><br>
        Blutooth: ${info.others.Bluetooth}</h5>
        <h5 class="card-title">GPS: ${info.others.GPS}</h5>
        <h5 class="card-title">NFC: ${info.others.NFC}</h5>
        <h5 class="card-title">Radio: ${info.others.Radio}</h5>
        <h5 class="card-title">USB: ${info.others.USB}</h5>
        <h5 class="card-title">WLAN: ${info.others.WLAN}</h5>

    </div>
    `;
    phoneDetails.appendChild(div);
}
