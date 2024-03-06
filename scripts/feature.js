/**
 * storing images for standard, eco and luxury taxi in arrays.
 */
const standardTaxi = ["../Utilities/Features/classic_1.webp", "../Utilities/Features/classic_2.webp", "../Utilities/Features/classic_3.webp"];
const ecoTaxi = ["../Utilities/Features/eco_1.webp", "../Utilities/Features/eco_2.webp", "../Utilities/Features/eco_3.webp"];
const luxuryTaxi = ["../Utilities/Features/lux_taxi_1.webp", "../Utilities/Features/lux_taxi_2.webp", "../Utilities/Features/lux_taxi_3.webp"];

let standardTaxiIndex = 0;
let ecoTaxiIndex = 0;
let luxuryTaxiIndex = 0;

/**
 * we used switch cases to change the images of standard, eco and luxury taxi based on the index.
*/

function changePrevFromStandardTaxi(){
  switch(standardTaxiIndex){
    case 0:
      document.getElementById("standard-taxi-image").src = standardTaxi[2];
      standardTaxiIndex = 2;
      break;
    case 1:
      document.getElementById("standard-taxi-image").src = standardTaxi[0];
      standardTaxiIndex = 0;
      break;
    case 2:
      document.getElementById("standard-taxi-image").src = standardTaxi[1];
      standardTaxiIndex = 1;    
      break;

    default:
      luxuryTaxiIndex = 0;
      break;
  }
}


function changeNextFromStandardTaxi(){
  switch(standardTaxiIndex){
    case 0:
      document.getElementById("standard-taxi-image").src = standardTaxi[1];
      standardTaxiIndex = 1;
      break;
    case 1:
      document.getElementById("standard-taxi-image").src = standardTaxi[2];
      standardTaxiIndex = 2;
      break;
    case 2:
      document.getElementById("standard-taxi-image").src = standardTaxi[0];
      standardTaxiIndex = 0;
      break;

    default:
      luxuryTaxiIndex = 0;
      break;  

  }
}



function changePrevFromEcoTaxi(){
  switch(ecoTaxiIndex){
    case 0:
      document.getElementById("eco-taxi-image").src = ecoTaxi[2];
      ecoTaxiIndex = 2;
      break;
    case 1:
      document.getElementById("eco-taxi-image").src = ecoTaxi[0];
      ecoTaxiIndex = 0;
      break;
    case 2:
      document.getElementById("eco-taxi-image").src = ecoTaxi[1];
      ecoTaxiIndex = 1;   
      break;

    default:
      luxuryTaxiIndex = 0;
      break;   
  }
}



function changeNextFromEcoTaxi(){
  switch(luxuryTaxiIndex){
    case 0:
      document.getElementById("eco-taxi-image").src = ecoTaxi[1];
      ecoTaxiIndex = 1;
      break;
    case 1:
      document.getElementById("eco-taxi-image").src = ecoTaxi[2];
      ecoTaxiIndex = 2;
      break;
    case 2:
      document.getElementById("eco-taxi-image").src = ecoTaxi[0];
      ecoTaxiIndex = 0;
      break;

    default:
      luxuryTaxiIndex = 0;
      break;  

  }
}


function changeNextFromLuxTaxi(){
  switch(luxuryTaxiIndex){
    case 0:
      document.getElementById("lux-taxi-image").src = luxuryTaxi[1];
      luxuryTaxiIndex = 1;
      break;
    case 1:
      document.getElementById("lux-taxi-image").src = luxuryTaxi[2];
      luxuryTaxiIndex = 2;
      break;
    case 2:
      document.getElementById("lux-taxi-image").src = luxuryTaxi[0];
      luxuryTaxiIndex = 0;
      break;

    default:
      luxuryTaxiIndex = 0;
      break;
  }
}


function changePrevFromLuxTaxi(){

  switch(luxuryTaxiIndex){
    case 0:
      document.getElementById("lux-taxi-image").src = luxuryTaxi[2];
      luxuryTaxiIndex = 2;
      break;
    case 1:
      document.getElementById("lux-taxi-image").src = luxuryTaxi[0];
      luxuryTaxiIndex = 0;
      break;
    case 2:
      document.getElementById("lux-taxi-image").src = luxuryTaxi[1];
      luxuryTaxiIndex = 1;
      break;

    default: 
      luxuryTaxiIndex = 0;     
      break;

  }
}

