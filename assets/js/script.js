class TypingText {
  constructor() {
    this.typedTextSpan = document.querySelector('.typed-text'), this.cursorSpan = document.querySelector('.cursor');

    this.textArray = ["Who I am?", "🅿︎🆈︎🆃︎🅷︎🅾︎🅽︎ developer", "🅲🅻🅰🅽🅶 developer", "#ArchBtw", "#TeamPixel"];
    this.typingDelay = 45, this.erasingDelay = 45, this.newTextDelay = 350, this.textArrayIdx = 0, this.charIdx = 0;
  }

  type = () => {
    if (this.charIdx < this.textArray[this.textArrayIdx].length) {
      if (!this.cursorSpan.classList.contains('typing'))
        this.cursorSpan.classList.add('typing');
      this.typedTextSpan.textContent += this.textArray[this.textArrayIdx].charAt(this.charIdx);
      this.charIdx++;
      setTimeout(this.type, this.typingDelay);
    } else {
      this.cursorSpan.classList.remove('typing');
      setTimeout(this.erase, this.newTextDelay);
    }
  }

  erase = () => {
    if (this.charIdx > 0) {
      if (!this.cursorSpan.classList.contains('typing'))
        this.cursorSpan.classList.add('typing');
      this.typedTextSpan.textContent = this.textArray[this.textArrayIdx].substring(0, this.charIdx - 1);
      this.charIdx--;
      setTimeout(this.erase, this.erasingDelay);
    } else {
      this.cursorSpan.classList.remove('typing');
      this.textArrayIdx++;
      if (this.textArrayIdx >= this.textArray.length) this.textArrayIdx = 0;
      setTimeout(this.type, this.typingDelay + 1100);
    }
  }

  start = () => {
    if (this.textArray.length)
      setTimeout(this.type, this.newTextDelay + 250);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const typingText = new TypingText();
  typingText.start();
});