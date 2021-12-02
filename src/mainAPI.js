//Use .env file in config folder
// require("dotenv").config({ path: "./config/.env" });


const weatherKey = process.env.REACT_APP_weatherKey;
document.querySelector(".submit_button").addEventListener("click", tellWeather)


function tellWeather() {
    // const inputVal = document.querySelector("submit_button").value;
    console.log("the tellWeather is firing")
    fetch(weatherKey)
        .then((res) => res.json())
        .then((data)=> {
            console.log(data)

        })
         .catch((err) => {
      console.log(`error ${err}`);
    });
}
