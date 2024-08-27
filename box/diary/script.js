// Grab the entryForm element
const entryForm = document.getElementById('entryForm')
const entriesSection = document.querySelector('#entries')
const entryTextbox = document.querySelector('.entry-textbox')
const entriesNav = document.querySelector('.entries-nav')

console.log(entryForm)
console.log(entriesSection)

let entries = 0

// handler to deal with button click
const handleForm = e => { 
    event.preventDefault()

    const entryDiv = document.createElement('div')
    entryDiv.className = 'single-entry'
    entryDiv.innerHTML = entryTextbox.value
    entryDiv.style.display = 'none'
    entriesSection.appendChild(entryDiv)
    
    entryTextbox.value = ""
    const displayEntryButton = document.createElement('button')
    displayEntryButton.className = 'display-entry-button'
    displayEntryButton.innerText = ++entries
    entriesNav.appendChild(displayEntryButton)

    displayEntryButton.addEventListener('click', function() { 
      const allEntries = document.querySelectorAll('.single-entry')
      allEntries.forEach(element => element.style.display = 'none')
      entryDiv.style.display = 'block'
    })
  } 

// Add an event listener
entryForm.addEventListener('submit', handleForm)



  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getDatabase,ref,set,get,child } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDoolojnhXBMWgweWLOKCweG7zo7kb_PrI",
    authDomain: "diary-20593.firebaseapp.com",
    projectId: "diary-20593",
    storageBucket: "diary-20593.appspot.com",
    messagingSenderId: "261976914295",
    appId: "1:261976914295:web:76e0c4391899287cbec972"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db=getDatabase(app);

  document.getElementById("submit").addEventListener('click', function(e){

    set(ref(db,'user/' +document.getElementById("mesaj").value),
    {
      mesaj: document.getElementById("mesaj").value
    });
     alert("başarılı");
  })

