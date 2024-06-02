let container = document.getElementById('container');
let overlayCon = document.getElementById('overlayCon');
let overlayBtn = document.getElementById('overlayBtn');

overlayBtn.addEventListener('click',() =>{
    container.classList.toggle('right-panel-active')
    overlayBtn.classList.remove('btnScaled');
    window.requestAnimationFrame(() =>{
        overlayBtn.classList.add('btnScaled');
    })
})
