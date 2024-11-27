import '../styles/main.scss'
import {makeDraggable} from "./drag.js"
import {makeResizable} from "./resize.js"

document.addEventListener("DOMContentLoaded", (event) => {
    const card = document.getElementById('card-container');
    const cardHeader = card.querySelector('.card-header'); // Handle for dragging
    const resizeHandle = card.querySelector('.resize-handle'); // Handle for resizing

    makeDraggable(card, cardHeader)
    makeResizable(card, resizeHandle)

})

