const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyBNBcK6MDVtoQ3BH_Cm68sT-11nvO9zG2Y",
    authDomain: "contactform-89c3b.firebaseapp.com",
    databaseURL: "https://contactform-89c3b-default-rtdb.firebaseio.com",
    projectId: "contactform-89c3b",
    storageBucket: "contactform-89c3b.appspot.com",
    messagingSenderId: "556957404479",
    appId: "1:556957404479:web:a0025ffc8d9226f81f578a"

};



// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("ParisForm");

document.getElementById("form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();





    var emailid = getElementVal("emailid");
    var name = getElementVal("nameid");

    if (emailid !== null && name !== '') {
        saveMessages(emailid, name);
        alert('Record Successfull Sent')
    } else
        alert('Please Fill Field');





    //   reset the form
    document.getElementById("form").reset();
}

const saveMessages = (emailid, name) => {
    var newContactForm = contactFormDB.push();


    newContactForm.set({

        emailid: emailid,
        name: name,

    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;

};

if (!pass || !cpass || !email || !cemail || !user) {
}