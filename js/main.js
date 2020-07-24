// Assign DOM objects to JavaScript variables
let form = document.getElementById("first-form");
let pre = document.getElementById("preview");

form.onsubmit = (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  let preview = {};

  // Display the key/value pairs of the formData
  for (var pair of formData.entries()) {
    // this line shows in console -- open your browser console (F12)
    console.log(`${pair[0]}: ${pair[1]}`);
    // this line shows in the preview tag in the HTML document
    Object.assign(preview, { [pair[0]]: pair[1] });
  }

  // this line populates the pre tag programatically
  pre.innerHTML = JSON.stringify(preview);
};