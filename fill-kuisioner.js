// Get all dropdown elements with class "quizionare"
var dropdowns = document.querySelectorAll('.quizionare');

// Loop through each dropdown
dropdowns.forEach(function(dropdown) {
    // Set the desired option's value (e.g., "13" for "Baik")
    // Cek drop down value pada setiap kuisioner, karena setiap kuisioner mempunyai nomor yang berbeda-beda
    dropdown.value = '13';

    // Trigger a change event for each dropdown
    var changeEvent = new Event('change', { bubbles: true });
    dropdown.dispatchEvent(changeEvent);
});
// Get the "Simpan" button element by its ID
var simpanButton = document.getElementById('simpan_quizionare');

// Trigger the click event on the button
simpanButton.click();
