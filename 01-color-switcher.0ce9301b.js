const t={buttonStart:document.querySelector("button[data-start]"),buttonStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};let o=null;function e(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.buttonStart.addEventListener("click",(function(){o=setInterval(e,1e3),t.buttonStart.disabled=!0})),t.buttonStop.addEventListener("click",(function(){t.body.style.backgroundColor="white",clearInterval(o),t.buttonStart.disabled=!1})),console.log(1);
//# sourceMappingURL=01-color-switcher.0ce9301b.js.map