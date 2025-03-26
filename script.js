// Open Modal with Country Info
function openModal(country) {
    document.getElementById('countryModal').style.display = 'flex';
    document.getElementById('countryName').innerText = country;
    // Additional dynamic content like photos, price, etc. can be populated here
  }
  
  // Close Modal
  function closeModal() {
    document.getElementById('countryModal').style.display = 'none';
  }
  
  // Navigate to country page (open modal)
  function goToCountry(country) {
    openModal(country);
  }
  