//!async-await
// async function foo(){
//         const res =  await fetch("https://restcountries.com/v2/all")
//         const result = await res.json();
//         console.log(result)
//  }
//  foo();


//!async & await with error handling (try & catch Block)
// async function foo(){
// try {
//    const res =  await fetch("https://restcountries.com/v2/all")
//    const result = await res.json();
//    console.log(result)
// } catch (error) {
//    console.log(error)
// }
// }
// foo();

// *************************************************************************************************************************

//!Session Task
//!async & await with error handling rest countries manipulate styling
async function foo(){
try {
  const res = await fetch("https://restcountries.com/v2/all");
  const data = await res.json();
    
    for (let i = 0; i <= data.length; i++) {
      console.log(data[i]);
      const div = document.createElement("div");

      div.innerHTML =               //paste the bootstrap grid groups content

       `<div class="row row-cols-1 row-cols-md-3 ">
        <div class="col">
          <div class="card">
            <img src="${data[i].flag}" class="card-img-top" alt="restcountries flag images here">
            <div class="card-body">
              <h5 class="card-title">${data[i].name}</h5>
              <p class="card-text"><b><i>Capital: ${data[i].capital}</i></b></p>
              <p class="card-text"><b><i>Region: ${data[i].region}</i></b></p>
              <p class="card-text"><b><i>SubRegion: ${data[i].subregion}</i></b></p>
              <p class="card-text"><b><i>Population: ${data[i].population}</i></b></p>
            </div>
          </div>
        </div>
        </div>`;
      document.body.append(div);
    }  
} catch (error) {
  console.log("Error")
}
}
foo()

// *************************************************************************************************************************
