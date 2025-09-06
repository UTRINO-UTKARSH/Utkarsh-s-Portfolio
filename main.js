const roles = ["Web Developer", "Student", "Python", "MySql"]
let roleIndex = 0;   // which role we're on
let charIndex = 0;   // which character inside that role
let isDeleting = false; // typing or deleting?

const skillSpan = document.querySelector(".skill1"); // pick the first skill span

function typeEffect() {
  const currentRole = roles[roleIndex];  

  if (!isDeleting) {
    // typing
    skillSpan.textContent = currentRole.slice(0, ++charIndex);
    if (charIndex === currentRole.length) {
      // pause at full word
      isDeleting = true;
      setTimeout(typeEffect, 1000); // wait 1s before deleting
      return;
    }
  } else {
    // deleting
    skillSpan.textContent = currentRole.slice(0, --charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length; // next role
    }
  }

  // speed control
  const speed = isDeleting ? 80 : 120;
  setTimeout(typeEffect, speed);
}
typeEffect()

let newc = document.getElementById("e")
let inn = document.getElementById("in")
let count = 0
newc.addEventListener("click",() => {
  let new_content = document.getElementById("questions")
  let ques = document.createElement("span")
   if (inn.value.trim() !== "") {   
    let edit = document.createElement("button")
    edit.innerHTML = "Edit"
    ques.innerText = `Q ${++count}. ` + inn.value;
    ques.appendChild(edit)
    new_content.appendChild(ques);
    new_content.appendChild(document.createElement("br")); 
    console.log(ques);
    inn.value = "";
    edit.addEventListener("click",() => {
       let newText = prompt("Edit your question:", ques.textContent.replace(`Q ${count}. `, "").trim());
      if (newText !== null && newText.trim() !== "") {
        // Replace only the question text, keep the button
        ques.firstChild.textContent = `Q ${count}. ${newText} `;
      }
    }
    )
  }
}
)

