
// get references to the from and display
const from = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

// handel from submission

from.addEventListener('submit', (event: Event)=>{
    event.preventDefault(); // prevent page reload

      // collect input values
      const name =( document.getElementById('name') as HTMLInputElement).value
      const email =( document.getElementById('email') as HTMLInputElement).value 
      const phone =( document.getElementById('phone') as HTMLInputElement).value
      const education =( document.getElementById('education') as HTMLInputElement).value
      const experience =( document.getElementById('experience') as HTMLInputElement).value
      const skills =( document.getElementById('skills') as HTMLInputElement).value

      // Generate the resume content dynamically
      const resumehtml = `
      <h2><b>Resume</b></h2>
      <h3> Personal Information</h3
      <p><b>Name:</b>${name}</P>
       <p><b>Email:</b>${email}</P>
        <p><b>Phone:</b>${phone}</P>


             <h3>Education</h3>
            <p>${education}</p>

            <h3>Experince</h3>
           <p>${experience}</p>
            <h3>Skills</h3> 
             <p>${skills}</p>

      `;

      if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumehtml;

      }else{
      console.error('the resume dispaly element is messing.')
      }
     
});