let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}

document.addEventListener('DOMContentLoaded', function() {
   const registerForm = document.getElementById('registerForm');

   registerForm.addEventListener('submit', function(event) {
       event.preventDefault();

       const formData = new FormData(registerForm);
       const name = formData.get('name');
       const email = formData.get('email');
       const password = formData.get('pass');
       const confirmPassword = formData.get('c_pass');
       const profilePicture = formData.get('profile_picture');

       if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' || !profilePicture) {
           alert('Please fill in all required fields.');
           return;
       }

       if (password !== confirmPassword) {
           alert('Passwords do not match.');
           return;
       }

       // Here you can perform further processing like sending the data to a server
       // For demonstration, let's log the form data
       console.log('Name:', name);
       console.log('Email:', email);
       console.log('Password:', password);
       console.log('Confirm Password:', confirmPassword);
       console.log('Profile Picture:', profilePicture);

       // Optionally, you can reset the form after submission
       registerForm.reset();
   });
});
