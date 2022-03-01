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

    for (const phone of phones) {
        console.log(phone.image);
        const div = document.createElement('div');
        div.classList.add('col-md-4', 'col-sm-12')
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src=" ${phone.image}" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">Phone name: ${phone.phone_name} </h5>
            <h5 class="card-title">Brand name: ${phone.brand} </h5>
            
            <button class="btn btn-danger">Details</button>
  </div>
</div>
        `;
        main.appendChild(div);
    }
}

