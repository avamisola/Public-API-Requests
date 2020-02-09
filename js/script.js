/*****************************************
Treehouse Full Stack JavaScript Techdegree
Project 5 - Public API Requests
*****************************************/

//setting global variables
const ajaxParam = '?results=12&inc=picture,name,email,cell,location,dob&nat=us';
let result = [];
let picture = [];
let firstName = [];
let lastName = [];
let email = [];
let city = [];
let state = [];

//api request to pull random user data and assign data to variables
$.ajax({
  url: `https://randomuser.me/api/${ajaxParam}`,
  dataType: 'json',
  success: function(data) {
    result = data.results;
    $.each(result, function(index) {
      picture = result[index].picture.large;
      firstName = result[index].name.first;
      lastName = result[index].name.last;
      email = result[index].email;
      city = result[index].location.city;
      state = result[index].location.state;
      //constructing html for each user card and appending to gallery
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
      </div>
      `;
      $('.gallery').append(cardHTML);
    });
    //create click event on each user card to create modal window
    $('.card').each(function(index) {
      $(this).on('click', function() {
        createModal(result[index]);
      });
    });
  }
});

//create modal window for the clicked user card
function createModal(employee) {
  picture = employee.picture.large;
  firstName = employee.name.first;
  lastName = employee.name.last;
  email = employee.email;
  city = employee.location.city;
  state = employee.location.state;
  const cell = employee.cell;
  const streetNum = employee.location.street.number;
  const streetName = employee.location.street.name;
  const postcode = employee.location.postcode;
  const dob = employee.dob.date;
  const dobFormatted = `${dob.slice(5,7)}/${dob.slice(8,10)}/${dob.slice(0,4)}`;
  //constructing html for modal window inserted after gallery div
  const modalHTML = `
  <div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="${picture}" alt="profile picture">
            <h3 id="name" class="modal-name cap">${firstName} ${lastName}</h3>
            <p class="modal-text">${email}</p>
            <p class="modal-text cap">${city}</p>
            <hr>
            <p class="modal-text">${cell}</p>
            <p class="modal-text">${streetNum} ${streetName}, ${city}, ${state} ${postcode}</p>
            <p class="modal-text">Birthday: ${dobFormatted}</p>
        </div>
    </div>
  </div>
  `;
  $('.gallery').after(modalHTML);
  //remove modal div when close button clicked
  $('.modal-close-btn').on('click', function() {
    $('.modal-container').remove();
  });
}
