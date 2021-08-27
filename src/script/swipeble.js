class Swipable {
  constructor(elem) {
    this.elem = document.getElementById(elem);
    this.mouseDown = false;
    this.mouseUp = false;
    this.currentX = 0;
    this.previousX = null;
    this.distance =
      (this.elem.getBoundingClientRect()
        .width - document.body.clientWidth) / 2;
    this.frameId = null;
    this.swipeActive = false;
    this.boundClRect = this.elem.getBoundingClientRect();
    this.galleryLeftEdge = this.boundClRect.x;
    this.galleryRightEdge = this.boundClRect.x + this.boundClRect.width;
    this.swipeStart = this.swipeStart.bind(this);
    this.update = this.update.bind(this);
    this.swipeEnd = this.swipeEnd.bind(this);

    this.scrollToCenter = this.scrollToCenter.bind(this);

    this.addEventListeners();
  }

  addEventListeners(event) {
    this.elem.addEventListener("mouseup", this.swipeEnd);
    this.elem.addEventListener("mousemove", this.update);
    this.elem.addEventListener("mousedown", this.swipeStart);

    this.elem.addEventListener("touchstart", this.swipeStart);
    this.elem.addEventListener("touchmove", this.update);
    this.elem.addEventListener("touchend", this.swipeEnd);

    window.addEventListener("resize", this.scrollToCenter);
    document.addEventListener("DOMContentLoaded", this.scrollToCenter);
  }

  swipeStart(event) {
    this.swipeActive = true;
    this.previousX =
      event.pageX || (event.touches ? event.touches[0].pageX : 0);
  }

  swipeEnd(event) {
    this.previousX = event.pageX;
    this.swipeActive = false;
  }

  update(event) {
    if (!this.swipeActive) {
      return;
    }

    this.currentX = event.pageX || (event.touches ? event.touches[0].pageX : 0);

    window.getSelection()
      .removeAllRanges();

    if (this.previousX > this.currentX) this.elem.scrollLeft += 25;
    else if (this.previousX < this.currentX) this.elem.scrollLeft -= 25;

    this.previousX = this.currentX;
    event.preventDefault();
  }

  scrollToCenter() {
    console.log(this.elem.scrollLeft = parseInt(this.boundClRect.width / 2))
    return this.elem.scrollLeft = parseInt(this.boundClRect.width / 4);
  }
}

module.exports = Swipable;
