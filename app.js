import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, get} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";


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

const addItem = document.querySelector(".confirm");

addItem.addEventListener('click', async function (uploadItem) {
    const name = document.querySelector("#pname").value;
    const price = document.querySelector("#pprice").value;
    try {
        await set(ref(db, 'user/' + name), {
            productPrice: price
        });
        console.log('Data has been saved successfully');
        alert('Data has been saved!');
    } catch (error) {
        console.error('Error saving data:', error);
        alert('Error saving data. Please check the console for details.');
    }
});

