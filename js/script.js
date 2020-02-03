/*****************************************
Treehouse Full Stack JavaScript Techdegree
Project 5 - Public API Requests
*****************************************/

let thumbnail
const ajaxParam = '?results=12&inc=picture,name,email,cell,location,dob'


//
$.ajax({
  url: `https://randomuser.me/api/${ajaxParam}`,
  dataType: 'json',
  success: function(data) {
    const result = data.results
    console.log(result);
    $.each(result, function(index) {
      //const thumbnail = $(this).picture.thumbnail
      //console.log(result[index].name);
      const picture = result[index].picture.medium
      const firstName = result[index].name.first
      const lastName = result[index].name.last
      const email = result[index].email
      const city = result[index].location.city
      const state = result[index].location.state
      const galleryHTML =
      `<div class="card">
      <div class="card-img-container">
          <img class="card-img" src=${picture} alt="profile picture">
      </div>
      <div class="card-info-container">
          <h3 id="name" class="card-name cap">${firstName} ${lastName}</h3>
          <p class="card-text">${email}</p>
          <p class="card-text cap">${city}, ${state}</p>
      </div>
      </div>`;
      $('.gallery').append(galleryHTML);
    })    
  }
});




