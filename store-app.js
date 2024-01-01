import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, get} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyDrkKeKLxfRopESjme33aVDwmFG1xrmPf0",
    authDomain: "mindhub-v100.firebaseapp.com",
    projectId: "mindhub-v100",
    storageBucket: "mindhub-v100.appspot.com",
    messagingSenderId: "1073476131747",
    appId: "1:1073476131747:web:7550ef433595e15fe8d816",
    databaseURL: "https://mindhub-v100-default-rtdb.asia-southeast1.firebasedatabase.app"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function getData() {
    const userRef = ref(db, 'user/');
    get(userRef)
    .then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            for (let i in data) {
                const cont = document.querySelector(".container");
                let card = document.createElement("div");
                card.classList.add("card");
                let stat1 = document.createElement("div");
                stat1.innerHTML = i;
                card.appendChild(stat1);
                const uff = ref(db, 'user/' + i);
                get(uff)
                .then((response) => {
                    let stat2 = document.createElement("div");
                    stat2.innerHTML = response.val().productPrice;
                    card.appendChild(stat2);
                });
                cont.appendChild(card);
            }
            console.log(data);
        } else {
            console.log("No data available");
        }
    })
    .catch((error) => {
        console.error('Error getting data:', error);
    });
}

getData();

//render items

function render() {
    const cont = document.querySelector(".store");
    let card = document.createElement("div");
    card.classList.add(".card");
    let stat1 = document.createElement("div");
    stat1.classList.add(".name");
    let stat2 = document.createElement("div");
    stat1.innerHTML = i;
}

// render();