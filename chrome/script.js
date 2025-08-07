const bgColor = 'rgb(255, 94, 25)';

function findOrangeElement() {
  return Array.from(document.querySelectorAll('*'))
    .find(el => window.getComputedStyle(el).backgroundColor === bgColor);
}

function clickPlayButtonIfVisible() {
  if (!findOrangeElement()) return;

  const btns = document.querySelectorAll('button.GameIntro_playButton__ZVOOP');
  for (const btn of btns) {
    if (
      btn.textContent.trim() === 'Play' &&
      !btn.closest('a')
    ) {
      btn.click();
      return;
    }
  }
}

const observer = new MutationObserver(() => {
  clickPlayButtonIfVisible();
});

observer.observe(document.body, { childList: true, subtree: true });
window.addEventListener('load', clickPlayButtonIfVisible);
