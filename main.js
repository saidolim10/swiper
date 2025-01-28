let body = document.querySelector('body');

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChange: function () {
      let activeSlide = this.slides[this.activeIndex];
      console.log("Active slide ID:", activeSlide.id);  // Log the active slide's ID for debugging

      switch(activeSlide.id) {
        case "1":
          body.style.backgroundColor = 'rgb(243, 210, 126)';
          break;
        case "2":
          body.style.backgroundColor = 'gray';
          break;
        case "3":
          body.style.backgroundColor = 'green';
          break;
        case "4":
          body.style.backgroundColor = 'red';
          break;
        default:
          body.style.backgroundColor = 'rgb(243, 210, 126)';
          break;
      }
    }
  }
});
