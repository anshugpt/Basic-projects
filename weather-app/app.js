const cityName = document.querySelector("input");
const btn = document.querySelector("button");
const tempe = document.querySelector("#temp");
const humidity = document.querySelector("#humidity");
const wedStatus = document.querySelector("#status");
const description = document.querySelector("#description");
const visibility = document.querySelector("#visibility");

let city;
let key = "&appid=4ac6915bb3d75a87c4661776308bde55";
let wedUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

async function getData(url){
    try {
        let data = await axios.get(url);
    console.log(data);
    return data;
    } catch {
        return false;
    }
}

btn.addEventListener("click", async function(e){
    e.preventDefault();
    city = cityName.value;
    // console.log("into the btn");
    if(validate(city)){
        let validUrl = wedUrl+city+key;

        if(getData(validUrl) != false){
            let res = await getData(validUrl);
        addTemp(res);
        addHumidity(res);
        addStatus(res);
        addDescription(res);
        } else {
            cityName.value = '';
        }
        cityName.value = '';
    }

});

function validate(value){
    if(value == ''){
        return false;
    } else {
        return true;
    }
}

function addTemp(res){
    let c = res.data.main.temp - 273;
    tempe.innerHTML = `Temp - ${c} Celsius`;
}

function addHumidity(res){
    humidity.innerHTML = `Humidity - ${res.data.main.humidity}%`;
}

function addStatus(res){
    wedStatus.innerHTML = `Status - ${res.data.weather[0].main}`;
}

function addDescription(res){
    description.innerHTML = `Description - ${res.data.weather[0].description}`;
}

function addvisibility(res){
    visibility.innerHTML = `Visibility - ${res.data.visibility} meter`;
}