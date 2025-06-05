document.addEventListener("DOMContentLoaded", function () 

{
    // Stats values,temps and wind speed

    const temperature = 27; // Temp in °C
    const windSpeed = 22; // Show in km/h


    // Function to calculate wind chill factor

    function calculateWindChill(temp, wind) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
    }


    // Function for wind chill

    function isWindChillApplicable(temp, wind) 
    
    {
        return temp <= 10 && wind > 4.8;
    }


    // Show wind chill 

    const windChillElement = document.createElement("tr");
    const windChillLabel = document.createElement("td");
    windChillLabel.className = "label";
    windChillLabel.innerHTML = "<b>Wind Chill:</b>";

    const windChillValue = document.createElement("td");

    if 
    
    (isWindChillApplicable(temperature, windSpeed)) 
        
    {
        const windChill = calculateWindChill(temperature, windSpeed).toFixed(2);
        windChillValue.textContent = `${windChill} °C`;
    } 
    
    else 
    
    {
        windChillValue.textContent = "N/A";
    }

    windChillElement.appendChild(windChillLabel);
    windChillElement.appendChild(windChillValue);

    document.querySelector(".weather table").appendChild(windChillElement);

});



// Footer info

const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
const copyrightYearElement = document.getElementById('currentyear');
const lastModifiedElement = document.getElementById('lastModified');
copyrightYearElement.textContent = currentYear;
lastModifiedElement.textContent = `Last update: ${lastModified}`;
