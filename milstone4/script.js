// get references to the from and display
var from = document.getElementById('resume-from');
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
    var resumehtml = "\n      <h2><b>Editable Resume</b></h2>\n      <h3> Personal Information</h3\n      <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></P>\n       <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></P>\n        <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></P>\n\n\n             <h3>Education</h3>\n            <p contenteditable=\"true\">").concat(education, "</p>\n\n            <h3>Experince</h3>\n           <p contenteditable\"true\">").concat(experience, "</p>\n            <h3>Skills</h3> \n           <p pcontenteditable\"true\">").concat(skills, "</p>\n      ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumehtml;
    }
    else {
        console.error('the resume dispaly element is messing.');
    }
    ;
});
