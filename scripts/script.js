// const album = document.querySelector('.image-gallery');
// let isDown = false;
// let startX;
// let scrollLeft;

// album.addEventListener('mousedown', (e) => {
//   isDown = true;
//   album.classList.add('active');
//   startX = e.pageX - album.offsetLeft;
//   scrollLeft = album.scrollLeft;
// });
// album.addEventListener('mouseleave', () => {
//   isDown = false;
//   album.classList.remove('active');
// });
// album.addEventListener('mouseup', () => {
//   isDown = false;
//   album.classList.remove('active');
// });
// album.addEventListener('mousemove', (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - album.offsetLeft;
//   const walk = (x - startX) * 3; //scroll-fast
//   album.scrollLeft = scrollLeft - walk;
//   console.log(walk);
// });

// album.addEventListener("wheel", (e) => {
//   e.preventDefault()
//   console.log(e.deltaY);
//   album.scrollBy({
//     left: e.deltaY < 0 ? -200 : 200
//   })
// })


