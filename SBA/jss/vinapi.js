// VIN API
const vinForm = document.getElementById('vin-form');
const vinFormButton = document.getElementById('check-vin');
const vinInput = document.getElementById('vin-input');
const vehicleInfo = document.getElementById('vehicle-info');
const vinErrorMessage = document.getElementById('vin-error-message');


vinFormButton.addEventListener('click', (event) => {
  console.log('Click!');
  vehicleInfo.style.display = "none"
  event.preventDefault(); // STOP RELOAD
  
  const vin = vinInput.value.trim();
  if (vin && validateVIN()) {
    fetchVehicleInfo(vin);
  }
});

// VALIDATION VIN
function isValidVIN(vin) {
  const vinRegex = /^[0-9A-HJ-NPR-Z]{17}$/;
  return vinRegex.test(vin);
}

function validateVIN() {
  const vin = vinInput.value.trim();
  if (isValidVIN(vin)) {
    vinErrorMessage.textContent = '';
    vinInput.classList.remove('is-invalid');
    return true;
  } else {
    vinErrorMessage.textContent = 'Please input a valid VIN.';
    vinInput.classList.add('is-invalid');
    return false;
  }
}

async function fetchVehicleInfo(vin) {
  try {
    const response = await fetch('https://api.api-ninjas.com/v1/vinlookup?vin=' + vin, {
      headers: {
        'X-Api-Key': 'zUQTxkwC2sey1rZzYIHkpw==Fjy6It3w0u55Sb5n'
      }
    });
    const data = await response.json();
    if (response.status == 200) {
      displayVehicleInfo(data);
      vehicleInfo.style.display = "block"
    } else {
      alert('Cannot find info. Please check the VIN number.');
      vehicleInfo.style.display = "none"
    }
  } catch (error) {
    console.error('Error retrieving vehicle information:', error);
    alert('There was an error retrieving vehicle information. Please try again.');
    vehicleInfo.style.display = "none"
  }
}

function displayVehicleInfo(data) {
  document.getElementById('vehicle-country').textContent = data.country;
  document.getElementById('vehicle-region').textContent = data.region;
  document.getElementById('vehicle-year').textContent = data.year;
}


// API KEY - zUQTxkwC2sey1rZzYIHkpw==Fjy6It3w0u55Sb5n

// Try Random VIN

const randomVins = ['JH4KA7561PC008269', 'JH4KA7561PC008269'];
// console.log(randomVin);

const randomButton = document.getElementById('random-vin');
randomButton.addEventListener('click', getRandomVin);

function getRandomVin() { 
  let vin = generateRandomVin();
  console.log(vinInput);
  vinInput.value = vin;
  fetchVehicleInfo(vin);
}

// GENERATE RANDOM VIN 
const vinChars = 'ABCDEFGHJKLMNPRSTUVWXYZ0123456789';

function generateRandomVin() {
  // VIN consists of 17 characters (digits and letters)
  
  let vin = '';

  // Generate random VIN characters
  for (let i = 0; i < 17; i++) {
    vin += vinChars[Math.floor(Math.random() * vinChars.length)];
  }

  // Check if the VIN is valid
  if (isValidVin(vin)) {
    return vin;
  } else {
    // If the VIN is not valid, generate a new one
    return generateRandomVin();
  }
}

function isValidVin(vin) {
  // Check the length of the VIN
  if (vin.length !== 17) {
    return false;
  }

  // Check each character of the VIN
  for (let i = 0; i < 17; i++) {
    if (!vinChars.includes(vin[i])) {
      return false;
    }
  }

  // Calculate the check digit of the VIN
  let sum = 0;
  const weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];
  for (let i = 0; i < 17; i++) {
    const char = vin[i];
    let value = parseInt(char);
    if (isNaN(value)) {
      value = 'ABCDEFGHJKLMNPRSTUVWXYZ'.indexOf(char) + 1;
    }
    sum += value * weights[i];
  }

  // The check digit must be divisible by 11
  return sum % 11 === 0;
}

// Generate a random, but valid VIN
const randomVin = generateRandomVin();
console.log(randomVin); // Example: 1FMCU0DG8CKB12345