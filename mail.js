// this has been connected to the firebase database 

const firebaseConfig = {
  apiKey: "AIzaSyDSckbRITq3C-6mfW0Xfhxld1ouDinHM9c",
  authDomain: "contact-form-8b266.firebaseapp.com",
  databaseURL: "https://contact-form-8b266-default-rtdb.firebaseio.com",
  projectId: "contact-form-8b266",
  storageBucket: "contact-form-8b266.appspot.com",
  messagingSenderId: "639674150475",
  appId: "1:639674150475:web:797d03169bda26fe6767ce",
  measurementId: "G-TZVEX90TVS"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);




// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var lname = getElementVal("lname");
  var emailid = getElementVal("emailid");
  var password = getElementVal("password");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, lname,emailid, password,msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, lname, emailid, password,msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    lname: lname,
    emailid: emailid,
    password: password,
    msgContent: msgContent,
    
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
