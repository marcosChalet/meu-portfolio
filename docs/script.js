(()=>{"use strict";const e=document.getElementById("progresso"),t=document.querySelectorAll(".btn-item"),o=document.querySelectorAll(".descricao");let c=0;const s=t.length-1;let i;function n(){l(c),i=setTimeout((()=>n()),4e3)}function l(i){var n;!function(e){t.forEach(((t,o)=>{o<=e?t.classList.add("selecionado"):t.classList.remove("selecionado")}))}(i),o.forEach((e=>{e.classList.remove("ativo")})),o[i].classList.add("ativo"),function(o){e.style.width=o/(t.length-1)*100+"%"}(i),c=(n=i+1)>s?0:n}t.forEach(((e,t)=>{e.addEventListener("click",(()=>{clearTimeout(i),l(t),i=setTimeout((()=>n()),4e3)}))})),n()})();