
// zoom and pan

const elem = document.querySelector(".tree-container")
const panzoom = Panzoom(elem, {
  maxScale: 6
})
panzoom.pan(10, 10)
panzoom.zoom(0.5, { animate: true })

document.querySelector(".tree").addEventListener("wheel", panzoom.zoomWithWheel);
//   document.querySelector(".zoom-area img").addEventListener("click", function() {
//     alert("clicked!");
//   });

// scroll to me

const me = document.querySelector('#me')
window.onload = () => {
    me && me.scrollIntoView()
}





