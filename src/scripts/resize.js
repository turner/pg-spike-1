import {prettyPrint} from "./utils.js"

function makeResizable(element, resizeHandle) {
    let isResizing = false;

    resizeHandle.addEventListener('mousedown', (event) => {
        event.preventDefault();
        isResizing = true;

        // Listen for mouse movement and resize the element
        document.addEventListener('mousemove', resizeElement);
        document.addEventListener('mouseup', stopResizing);
    });

    function resizeElement(event) {
        if (!isResizing) return;

        // Update the size of the element
        const newWidth = event.clientX - element.offsetLeft;
        const newHeight = event.clientY - element.offsetTop;

        // Ensure minimum size
        const minWidth = 150;
        const minHeight = 150;

        element.style.width = `${Math.max(newWidth, minWidth)}px`;
        element.style.height = `${Math.max(newHeight, minHeight)}px`;
    }

    function stopResizing() {
        isResizing = false;
        document.removeEventListener('mousemove', resizeElement);
        document.removeEventListener('mouseup', stopResizing);
    }

    // Observe size changes dynamically
    const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
            const { width, height } = entry.contentRect;
            console.log(`Resized to: ${ prettyPrint(width) }px x ${prettyPrint(height)}px`);
        }
    });

    resizeObserver.observe(element);
}

export { makeResizable }
