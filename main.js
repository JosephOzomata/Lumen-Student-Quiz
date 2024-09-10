let registeredSchools = {};

function flipToLogin() {
  document.getElementById('card').classList.add('flipped');
}

function flipToSignUp() {
  document.getElementById('card').classList.remove('flipped');
}



function handleSignUp(event) {
    event.preventDefault();
    
    const schoolName = document.getElementById('schoolNameSignUp').value;
    const studentName = document.getElementById('studentNameSignUp').value;
    
    if (!registeredSchools[schoolName]) {
      registeredSchools[schoolName] = [];
      addSchoolOption(schoolName);
    }
    
    registeredSchools[schoolName].push(studentName);
  
 
    localStorage.setItem('loggedInSchool', schoolName);
    localStorage.setItem('loggedInStudent', studentName);
  
    alert("Sign up successful! You will be redirected to the login page.");
    flipToLogin();
  }
  

const goToSecondPageButton = document.getElementById('logedin');

goToSecondPageButton.addEventListener('click', () => {
  window.location.href = 'second.html';
});


function addSchoolOption(schoolName) {
  const schoolSelectLogin = document.getElementById('schoolSelectLogin');
  const option = document.createElement('option');
  option.value = schoolName;
  option.text = schoolName;
  schoolSelectLogin.appendChild(option);
}

function populateStudents() {
  const school = document.getElementById('schoolSelectLogin').value;
  const studentSelect = document.getElementById('studentSelectLogin');
  studentSelect.innerHTML = '<option value="" disabled selected>Select Student</option>';
  if (registeredSchools[school]) {
    registeredSchools[school].forEach(student => {
      const option = document.createElement('option');
      option.value = student;
      option.text = student;
      studentSelect.appendChild(option);
    });
  }
}
