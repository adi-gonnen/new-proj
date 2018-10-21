import axios from 'axios';
import uniqid from 'uniqid'
// import swal from "sweetalert";

const USERS = [
    {
        name: "Mary Craig",
        city: "Colorado",
        active: true
    },
    {
        name: "Duane Newton",
        city: "San Francisco",
        active: false
    },
    {
        name: "Tonu Ruiz",
        city: "London",
        active: true
    },
    {
        name: "Julia Gonzalez",
        city: "Tel Aviv",
        active: true
    }
]


function getItems() {
    return USERS;
}

function deleteUser(idx) {      //I should do with id and not idx. Had no time left...
    USERS.splice(idx, 1)
}

export default {
    // loadItems,
    getItems,
    deleteUser
}
