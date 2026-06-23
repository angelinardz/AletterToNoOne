const sendBtn = document.getElementById('send');
const banner = document.getElementById('banner');
const textarea = document.querySelector('.letter-body');
const letterPaper = document.querySelector('.letter-paper');
const dateEl = document.getElementById('letterDate');

dateEl.textContent = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

let isSending = false;

sendBtn.addEventListener('click', function () {
  if (isSending) return;

  isSending = true;
  sendBtn.disabled = true;
  document.body.classList.add('sending');

  setTimeout(function () {
    textarea.value = '';
    letterPaper.style.visibility = 'hidden';
    document.body.classList.remove('sending');
    document.body.classList.add('sent');
    banner.classList.remove('hidden');
  }, 2400);

  setTimeout(function () {
    banner.classList.add('hidden');
    document.body.classList.remove('sent');
    letterPaper.style.visibility = '';
    letterPaper.style.animation = 'none';
    void letterPaper.offsetWidth;
    letterPaper.style.animation = '';
    sendBtn.disabled = false;
    isSending = false;
  }, 6400);
});
