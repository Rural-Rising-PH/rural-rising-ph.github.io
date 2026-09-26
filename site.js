// Videos open only after a visitor clicks. Closing the dialog clears the iframe and stops playback.
const modal=document.getElementById('video-modal');
const panel=modal.querySelector('.modal-panel');
const player=document.getElementById('video-player');
const modalTitle=document.getElementById('modal-title');
const original=document.getElementById('modal-original');
const closeButton=modal.querySelector('.modal-close');
let previousFocus=null;
function openVideo(id,title){
  if(!/^[\w-]{11}$/.test(id)) return;
  previousFocus=document.activeElement;
  modalTitle.textContent=title;
  original.href=`https://www.youtube.com/watch?v=${id}`;
  player.src=`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
  modal.hidden=false;
  document.body.classList.add('modal-open');
  closeButton.focus();
}
function closeVideo(){
  if(modal.hidden) return;
  modal.hidden=true;
  player.src='';
  document.body.classList.remove('modal-open');
  previousFocus?.focus();
}
document.addEventListener('click',e=>{
  const trigger=e.target.closest('.video-trigger');
  if(trigger){openVideo(trigger.dataset.video,trigger.dataset.title);return;}
  if(e.target.closest('.modal-close')||e.target.dataset.close==='true') closeVideo();
});
document.addEventListener('keydown',e=>{
  if(modal.hidden) return;
  if(e.key==='Escape') closeVideo();
  if(e.key==='Tab'){
    const focusables=[...panel.querySelectorAll('button,a,iframe')].filter(el=>!el.hidden);
    const first=focusables[0],last=focusables.at(-1);
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
  }
});
