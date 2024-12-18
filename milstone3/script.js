// get references to the from and display
var from = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// handel from submission
from.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically
    var resumehtml = "\n      <h2><b>Resume</b></h2>\n      <h3> Personal Information</h3\n      <p><b>Name:</b>".concat(name, "</P>\n       <p><b>Email:</b>").concat(email, "</P>\n        <p><b>Phone:</b>").concat(phone, "</P>\n\n\n             <h3>Education</h3>\n            <p>").concat(education, "</p>\n\n            <h3>Experince</h3>\n           <p>").concat(experience, "</p>\n            <h3>Skills</h3> \n             <p>").concat(skills, "</p>\n\n      ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumehtml;
    }
    else {
        console.error('the resume dispaly element is messing.');
    }
});
