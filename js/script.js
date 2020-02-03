/*****************************************
Treehouse Full Stack JavaScript Techdegree
Project 5 - Public API Requests
*****************************************/

//
const ajaxParam = '?results=12&inc=picture,name,email,cell,location,dob&nat=us';

//
$.ajax({
  url: `https://randomuser.me/api/${ajaxParam}`,
  dataType: 'json',
  success: function(data) {
    const result = data.results;
    console.log(result);
    $.each(result, function(index) {
      const picture = result[index].picture.large;
      const firstName = result[index].name.first;
      const lastName = result[index].name.last;
      const email = result[index].email;
      const city = result[index].location.city;
      const state = result[index].location.state;
      const cardHTML = `
      <div class="card">
        <div class="card-img-container">
            <img class="card-img" src="${picture}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${firstName} ${lastName}</h3>
            <p class="card-text">${email}</p>
            <p class="card-text cap">${city}, ${state}</p>
        </div>
      </div>`;
      const modalHTML = `
      <div class="modal-container">
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${picture}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${firstName} ${lastName}</h3>
                <p class="modal-text">${email}</p>
                <p class="modal-text cap">city</p>
                <hr>
                <p class="modal-text">(555) 555-5555</p>
                <p class="modal-text">123 Portland Ave., ${city}, ${state} 97204</p>
                <p class="modal-text">Birthday: 10/21/2015</p>
            </div>
        </div>
      </div>`;
      $('.gallery').append(cardHTML);
    });
  }
});