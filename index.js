

(async () => {
    try {
      const response = await axios.get('https://api.punkapi.com/v2/beers/1')
      // console.log(response.data[0].image_url)
      // console.log(response.data[0].name)
      insertText(response.data[0].name, response.data[0].tagline, response.data[0].image_url)
    } catch (error) {
      console.log(error.response.body);
    }
  })();
  
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
    })();
  
  function insertText(nameBeer, textBeer, imageBeer){
      document.getElementById("name-beer").innerText = nameBeer
      document.getElementById("beer-description").innerText = textBeer
      document.getElementById("image-beer").innerHTML = imageEl
      imageEl.innerHTML =   `<img src=${imageBeer}>
      `
     
  }
  