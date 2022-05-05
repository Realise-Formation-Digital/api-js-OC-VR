let liste = document.getElementById("liste")

async () => {
  try {
     const response = await axios.get('https://api.punkapi.com/v2/beers/1')
//   //     // console.log(response.data[0].image_url)
//   //     // console.log(response.data[0].name)
insertText(response.data[0].name, response.data[0].tagline, response.data[0].image_url)
} catch (error) {
console.log(error.response.body);
}
 };

  (async () => {
      try {
        const response = await axios.get('https://api.punkapi.com/v2/beers')
      //   console.log(response)
        // console.log(response.data[0].name)
        //   insertText(response.data[0].name, response.data[0].tagline, response.data[0].image_url)
        for (const element of response) {
          console.log(data[element].name)}

      } catch (error) {
          console.log(error.response.body);
      }
    });

  function insertText(nameBeer, textBeer, imageBeer){
      document.getElementById("name-beer").innerText = nameBeer
      document.getElementById("beer-description").innerText = textBeer
      document.getElementById("image-beer").innerHTML = imageEl
      imageEl.innerHTML =   `<img src=${imageBeer}>
      `

  }

// async function getBeers() {
//   try {
//     const response = await axios.get('https://api.punkapi.com/v2/beers')
//     console.log(response)
//     // console.log(response.data[0].name)
//     //   insertText(response.data[0].name, response.data[0].tagline, response.data[0].image_url)
//     for (const element of response.data) {
//       console.log(element.name)
//       liste.innerHTML += "<li>"+element.name+"</li>"
//     }

//   } catch (error) {
//     console.log(error);
//   }
// }
let nameB = ""
let imageB = ""
let taglineB = ""
async function getBeers() {
  try {
    const response = await axios.get('https://api.punkapi.com/v2/beers')
    console.log(response.data[0].name)
    // console.log(response.data[0].name)
    //   insertText(response.data[0].name, response.data[0].tagline, response.data[0].image_url)
    for (const element of response.data) {
      nameB = element.name
      imageB = element.image_url
      taglineB = element.tagline
      liste.innerHTML += `
     
    
      <div  class="g-col-3 p-2 m-2">
  
 <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target=#`+nameB+`>
  `+nameB+`
</button>

<!-- Modal -->
<div class="modal fade img-background list-modal" id=`+nameB+` tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog ">
    <div class="modal-content backgroundGrey">
      <div class="modal-header ">
        <h5 class="modal-title" id="exampleModalLabel">`+nameB+`</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body position-relative ">
      <p>`+taglineB+`</p>
        <div class="position-absolute top-40 start-50">
          <img class="img-fluid monimage"src=`+imageB+`/>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
      </div>
   
    `
    }

  } catch (error) {
    console.log(error);
  }
}

await getBeers()
