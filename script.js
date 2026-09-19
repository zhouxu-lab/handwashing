const box=document.querySelector('#lightbox');
document.querySelectorAll('[data-enlarge]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();const source=link.querySelector('img');const image=box.querySelector('img');image.src=link.href;image.alt=source.alt;box.querySelector('p').textContent=source.alt;box.showModal();}));
box.querySelector('button').addEventListener('click',()=>box.close());
box.addEventListener('click',event=>{if(event.target===box)box.close();});
document.querySelectorAll('video').forEach(video=>video.addEventListener('play',()=>document.querySelectorAll('video').forEach(other=>{if(other!==video)other.pause();})));
