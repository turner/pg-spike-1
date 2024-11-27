import '../styles/main.scss'
import {makeDraggable} from "./drag.js"

document.addEventListener("DOMContentLoaded", (event) => {
    const card = document.getElementById('card-container');
    const cardHeader = card.querySelector('.card-header');
    makeDraggable(card, cardHeader);
});

