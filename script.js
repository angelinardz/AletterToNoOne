document.getElementById('send').addEventListener('click',function(){
    var banner = document.getElementById('banner');
    var textarea = document.querySelector('.letter');
  
  
    banner.style.display='block';
    textarea.value = ' ';
  
    setTimeout(function(){
      banner.style.display='none';
    },3000);
  });
  