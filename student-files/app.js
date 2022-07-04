const searchContainer = document.querySelector('.search-container');
const gallery = document.querySelector('.gallery'); 




// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
function fetchData(url){
  return fetch(url)
         .then(checkStatus)
         .then(res => res.json())
         .catch(error => console.log("Looks like there was a problem", error))
}
//'https://randomuser.me/api/?results=12&inc=name, picture, email, location, phone, dob&noinfo &nat=US'

fetchData('https://randomuser.me/api/?results=12&inc=name, picture, email, location, phone, dob&noinfo &nat=US')
.then(data => generatProfile(data.results))
//.then(data => console.log(data.results))









// // ------------------------------------------
// //  HELPER FUNCTIONS
// // ------------------------------------------
function checkStatus(response){
  if(response.ok){
    return Promise.resolve(response);
  } else{
    return Promise.reject(new Error(response.statusText));
  }
}


function generatProfile(data){
    gallery.innerHTML = "";
  let html = ""
  data.forEach((user) => {
  html = `
    <div class="card">
                    <div class="card-img-container">
                        <img class="card-img" src= ${user.picture.large} alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>
                        <p class="card-text">${user.email}</p>
                        <p class="card-text cap">${user.location.city}, ${user.location.state}</p>
                    </div>
                </div>
`
gallery.insertAdjacentHTML('beforeend', html)

});

};


// ------------------------------------------
//  MODAL
// ------------------------------------------

const modalContainer = document.querySelector(".modal-container");

function generatModal(data){
    modalContainer.innerHTML = "";
    const newFormatPhone = user.phone.replace(/-/, " ");
    let date = new Date(dob.date);
    let htmlModal = ""
    data.forEach((user) => {
    htmlModal = `

    <div id="modal" class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src=${user.picture.large} alt="profile picture">
                        <h3 id="name" class="modal-name cap">${user.name.first} ${user.name.last}</h3>
                        <p class="modal-text">${user.email}</p>
                        <p class="modal-text cap">${user.location.city}</p>
                        <hr>
                        <p class="modal-text">${newFormatPhone}</p>
                        <p class="modal-text">${user.location.state}</p>
                        <p class="modal-text">${user.date.getMonth()}/${user.date.getDate()}/${user.date.getFullYear()}</p>
                    </div>
                </div>

                <div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
                </div>
            </div>
`
modalContainer.insertAdjacentHTML('beforeend', htmlModal)
modalContainer.classList.remove("hide");


});

};

// function generatList(data){
//   const list = data.map(item => `
//     <option value ='${item}'>${item}</option>
//  `).join("");
//   select.innerHTML = list;
// };

// function fetchBreedImage(){
//   const breed = select.value;
//   const img = card.querySelector("img");
//   const p =card.querySelector("p");
  
//   fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
//     .then(data => {
//       img.src = data.message;
//       img.alt = breed;
//       p.textContent = `Click to view more ${breed}s`;
//     })
// }
// // ------------------------------------------
// //  EVENT LISTENERS
// // ------------------------------------------
// select.addEventListener("change", fetchBreedImage);
// card.addEventListener("click", fetchBreedImage);
// form.addEventListener("submit", postData)





let modalBtn = document.getElementById("info-card")
let modal = document.getElementById("modal")
let closeBtn = document.getElementById("modal-close-btn")


closeBtn.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.classList.add("hide");
  });

// function windowOnClick(event) {
//     if (event.target === modal) {
//         toggleModal();
//     }
// }

// //modalBtn.addEventListener("click", toggleModal);
// closeBtn.addEventListener("click", toggleModal);
// window.addEventListener("click", windowOnClick);

