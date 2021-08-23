class temperatureConverter{
    constructor(){}
    celciusFarenheit(temperature){
        return (temperature*1.8)+32;
    }
    celciusReamure(temperature){
        return temperature*0.8;
    }
    celciusCelius(temperature){
        return temperature;
    }
    farenheitCelcius(temperature){
        return (temperature-32)*5/9;
    }
    farenheitReamur(temperature){
        return(temperature-32)*4/9;
    }
    farenheitFarenheit(temperature){
        return temperature;
    }
    reamureCelcius(temperature){
        return 1.25*temperature;
    }
    reamureFarenheit(temperature){
        return ((temperature*9)/4)+32;
    }
    reamureReamure(temperature){
        return temperature;
    }

    
}


const temperatureConvert = new temperatureConverter();


function convertThep(){
    let inputTemp = document.querySelector(".input")
    let outputTemp = document.querySelector(".output")
    let inputValue = document.querySelector("#TemperatureIn");
    let outputValue = document.querySelector("#TemperatureOut");

    inputValue.addEventListener("keyup",convertThep);
    inputTemp.addEventListener("change", convertThep);
    outputValue.addEventListener("change", convertThep);


    let input = inputTemp.value;
    let output = outputTemp.value;
    let inputVal = Number(inputValue.value);

    //opsi jika langsung memasukkan oprasi konversi

    // if (input === "celcius" && output ==="farenheit"){
    //     outputValue.value = (inputVal*1.8)+32;
    // }else if (input === "celcius" && output ==="reamure"){
    //     outputValue.value = inputVal*0.8;
    // }else if (input === "celcius" && output ==="celcius"){
    //     outputValue.value= inputVal;
    // }else if (input === "farenheit" && output ==="celcius"){
    //      outputValue.value = (inputVal-32)*5/9;
    // }else if (input === "farenheit" && output ==="reamure"){
    //      outputValue.value = (inputVal-32)*4/9;
    // }else if (input === "farenheit" && output ==="farenheit"){
    //      outputValue.value= inputVal;
    // }else if (input === "reamure" && output ==="celcius"){
    //      outputValue.value = (4*inputVal)/5;
    // }else if (input === "reamure" && output ==="farenheit"){
    //      outputValue.value = ((inputVal*9)/4)+32;
    // }else{
    //      outputValue.value= inputVal;
    // }
  

    if (input === "celcius" && output ==="farenheit"){
        outputValue.value = temperatureConvert.celciusFarenheit(inputVal);
    }else if (input === "celcius" && output ==="reamure"){
        outputValue.value = temperatureConvert.celciusReamure(inputVal);
    }else if (input === "celcius" && output ==="celcius"){
        outputValue.value= temperatureConvert.celciusCelius(inputVal);
    }else if (input === "farenheit" && output ==="celcius"){
         outputValue.value = temperatureConvert.farenheitCelcius(inputVal);
    }else if (input === "farenheit" && output ==="reamure"){
         outputValue.value = temperatureConvert.farenheitReamur(inputVal);
    }else if (input === "farenheit" && output ==="farenheit"){
         outputValue.value= temperatureConvert.farenheitFarenheit(inputVal);
    }else if (input === "reamure" && output ==="celcius"){
         outputValue.value = temperatureConvert.reamureCelcius(inputVal);
    }else if (input === "reamure" && output ==="farenheit"){
         outputValue.value = temperatureConvert.reamureFarenheit(inputVal);
    }else{
         outputValue.value= temperatureConvert.reamureReamure(inputVal);
    }

}

//change background
function changeBackground(){
    let color = document.querySelector("#color").value;
    document.body.style.backgroundColor= color;
}

//eksport
//module.exports= temperatureConvert.celciusFarenheit;
// module.exports = temperatureConvert.celciusReamure;
// module.exports = temperatureConvert.celciusCelius;
// module.exports = temperatureConvert.farenheitCelcius;
// module.exports = temperatureConvert.farenheitReamur;
// module.exports = temperatureConvert.farenheitFarenheit;
// module.exports = temperatureConvert.reamureCelcius;
// module.exports = temperatureConvert.reamureFarenheit;
// module.exports = temperatureConvert.reamureReamure;




