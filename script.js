const dialog=document.getElementById('figure-dialog');
const largeFigure=document.getElementById('large-figure');
const caption=document.getElementById('figure-caption');
document.querySelectorAll('[data-figure]').forEach(button=>{
  button.addEventListener('click',()=>{
    largeFigure.src=button.dataset.figure;
    largeFigure.alt=button.querySelector('img').alt;
    caption.textContent=button.dataset.caption;
    dialog.showModal();
  });
});
document.getElementById('close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{
  const bounds=dialog.getBoundingClientRect();
  if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)dialog.close();
});
