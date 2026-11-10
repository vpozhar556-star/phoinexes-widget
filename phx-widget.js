/* PHOINEXES site widget — Jivo chat (Cyber Frame) + SUPPORT button + Zoom countdown.
   Edit ONLY the CONFIG block below; the site loads this file automatically. */
(function(){
  if (window.__phxWidget) return; window.__phxWidget = true;

  /* ===================== CONFIG ===================== */
  var CONFIG = {
    jivoWidgetId: "WLWwgYq30l",
    zoom: {
      enabled: false,                         // true = show countdown
      start: "2026-11-12T18:00:00+02:00",     // date/time of the meeting (Kyiv = +02:00)
      link:  "https://zoom.us/j/XXXXXXXXXX",  // Zoom link
      title: "PHOINEXES ZOOM",
      liveMinutes: 120
    }
  };
  /* ================================================== */

  var LOGO = '<svg viewBox="0 0 158 158" aria-hidden="true"><path fill="#FD4B03" fill-rule="evenodd" d="M135.766,157.029 L102.421,157.029 C115.526,145.280 132.225,125.348 126.187,95.805 C124.062,124.725 105.514,145.482 83.257,157.029 L21.651,157.029 C10.974,157.029 2.120,149.272 0.450,139.108 C100.242,169.189 111.020,95.303 97.380,69.155 C86.895,49.055 67.425,50.821 53.432,57.029 C50.059,63.378 45.136,66.055 41.206,68.435 C35.732,71.750 29.683,92.204 29.683,92.204 C29.683,92.204 21.112,79.463 25.362,65.554 C18.672,60.266 15.233,52.940 24.146,35.935 C36.558,12.254 64.588,15.653 75.681,0.568 L135.766,0.568 C145.466,0.568 153.662,6.971 156.333,15.763 C142.732,3.283 106.022,17.295 106.022,17.295 C106.022,17.295 132.663,27.287 157.251,21.858 C157.251,21.895 157.254,21.932 157.254,21.970 C157.254,21.970 157.254,35.805 157.254,53.820 C150.558,56.786 142.223,56.685 131.949,53.309 C142.905,68.919 157.155,59.071 157.155,59.071 C157.189,59.085 157.220,59.099 157.254,59.112 C157.254,68.445 157.254,78.585 157.254,88.339 C157.254,113.240 157.254,135.627 157.254,135.627 C157.254,147.446 147.633,157.029 135.766,157.029 ZM33.203,52.409 L32.564,60.082 C32.564,60.082 36.200,56.387 39.596,52.409 C39.160,50.260 40.294,46.021 43.431,39.622 C39.776,41.152 33.203,52.409 33.203,52.409 ZM97.795,94.003 C77.316,155.257 20.417,144.461 0.163,112.676 L0.163,64.116 C0.255,63.967 0.341,63.818 0.435,63.668 C1.096,122.422 69.478,135.494 97.795,94.003 Z"></path></svg>';
  var CSS = ":root{--phx-o:#FD4B03;--phx-bg:#141414;--phx-bg2:#1c1c1c;--phx-line:#3d3d3d;--phx-txt:#ffffff;--phx-mut:#a3a3a3}\njdiv[class^=\"container__\"]:has(> jdiv[class^=\"hoverArea__\"]){display:none !important}\n#jcont jdiv[class^=\"main__\"]:has(> jdiv[class^=\"headerBox__\"]){\n  background:\n    linear-gradient(135deg,transparent 12px,var(--phx-o) 12px,var(--phx-o) 13.5px,transparent 13.5px) top left/20px 20px no-repeat,\n    linear-gradient(-45deg,transparent 12px,var(--phx-o) 12px,var(--phx-o) 13.5px,transparent 13.5px) bottom right/20px 20px no-repeat,\n    var(--phx-bg) !important;\n  box-shadow:inset 0 0 0 1px var(--phx-o) !important;border-radius:0 !important;\n  clip-path:polygon(18px 0,100% 0,100% calc(100% - 18px),calc(100% - 18px) 100%,0 100%,0 18px);\n  font-family:\"Nasalization Rg\",Arial,sans-serif !important}\n#jcont jdiv[class^=\"main__\"]:has(> jdiv[class^=\"headerBox__\"]) *{border-radius:0 !important;font-family:inherit}\n#jcont jdiv[class*=\"leaf\"]{display:none !important}\n#jcont jdiv[class^=\"headerBox__\"],#jcont jdiv[class^=\"header__\"],#jcont jdiv[class^=\"headerContainer__\"]{background:transparent !important;color:var(--phx-txt) !important}\n#jcont jdiv[class^=\"headerBox__\"]:not(:has(jdiv[class^=\"headerBox__\"])){border-bottom:1px solid var(--phx-o) !important}\n#jcont jdiv[class^=\"headerContainer__\"]{padding-left:26px !important}\n#jcont jdiv[class^=\"agentName__\"]{color:var(--phx-txt) !important;text-transform:uppercase;letter-spacing:2px;font-size:13px !important;opacity:1 !important}\n#jcont jdiv[class^=\"title__\"]{color:var(--phx-mut) !important;text-transform:uppercase;letter-spacing:1px;font-size:10px !important;opacity:1 !important}\n#jcont jdiv[class^=\"title__\"]::before{content:\"\";display:inline-block;width:7px;height:7px;background:var(--phx-o);margin-right:6px;vertical-align:1px}\n#jcont jdiv[class^=\"bodyWrap__\"],#jcont jdiv[class^=\"typing__\"],#jcont jdiv[class^=\"chatCopyright__\"],#jcont jdiv[class^=\"moreBox__\"],\n#jcont jdiv[class^=\"input__\"],#jcont jdiv[class^=\"inputContainer__\"],#jcont jdiv[class^=\"wrapMargin__\"]{background:transparent !important;color:var(--phx-mut) !important}\n#jcont jdiv[class^=\"rail__\"]{background:var(--phx-bg2) !important}\n#jcont jdiv[class^=\"rail__\"] > jdiv{background:var(--phx-o) !important}\n#jcont jdiv[class^=\"input__\"]:not(:has(jdiv[class^=\"input__\"])){border-top:1px solid var(--phx-line) !important}\n#jcont textarea,#jcont input,#jcont select{background:var(--phx-bg2) !important;color:var(--phx-txt) !important;border:1px solid var(--phx-line) !important;font-family:Arial,sans-serif !important}\n#jcont ::placeholder{color:#8a8a8a !important}\n#jcont jdiv[class^=\"sendButton__\"]{\n  background:var(--phx-o) url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='%23141414' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14M13 6l6 6-6 6'/%3E%3C/svg%3E\") center/18px no-repeat !important;\n  clip-path:polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px)}\n#jcont jdiv[class^=\"iconPanel__\"] jdiv{filter:invert(.75)}\n#jcont jdiv[class^=\"button__\"][class*=\"__outline__\"]{background:var(--phx-bg2) !important;color:var(--phx-txt) !important;border:1px solid var(--phx-line) !important;\n  text-transform:uppercase;letter-spacing:1px;font-size:12px !important;box-shadow:none !important}\n#jcont jdiv[class^=\"button__\"][class*=\"__outline__\"]:hover{border-color:var(--phx-o) !important}\n#jcont jdiv[class^=\"button__\"][class*=\"__outline__\"] span{color:var(--phx-txt) !important}\n#jcont label,#jcont jdiv[class*=\"label\"]{color:var(--phx-mut) !important}\n#jcont jdiv[class^=\"button__\"]:not([class*=\"__outline__\"]),#jcont button{background:var(--phx-o) !important;color:#141414 !important;text-transform:uppercase;letter-spacing:1px;\n  clip-path:polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)}\n#jcont jdiv[class*=\"message__\"],#jcont jdiv[class*=\"bubble\"]{border-radius:0 !important}\n#jivo_close_button,jdiv[class^=\"closeButton__\"]{background-color:var(--phx-bg) !important;box-shadow:inset 0 0 0 1px var(--phx-o) !important}\n#phx-support-btn{position:fixed;right:24px;bottom:24px;z-index:2147483000;height:52px;padding:0 20px;display:flex;align-items:center;gap:10px;cursor:pointer;border:0;color:#fff;\n  font:13px/1 \"Nasalization Rg\",Arial,sans-serif;letter-spacing:2px;\n  background:\n    linear-gradient(135deg,transparent 7px,var(--phx-o) 7px,var(--phx-o) 8.5px,transparent 8.5px) top left/14px 14px no-repeat,\n    linear-gradient(-45deg,transparent 7px,var(--phx-o) 7px,var(--phx-o) 8.5px,transparent 8.5px) bottom right/14px 14px no-repeat,\n    var(--phx-bg);\n  box-shadow:inset 0 0 0 1px var(--phx-o);\n  clip-path:polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)}\n#phx-support-btn:hover{filter:brightness(1.15)}\n#phx-support-btn svg{width:22px;height:22px}\n#phx-support-btn.phx-hidden{display:none}\n@media (max-width:600px){#phx-support-btn{right:12px;bottom:12px;height:46px;padding:0 14px}}\n#phx-zoom{position:fixed;left:20px;bottom:20px;z-index:2147483000;width:260px;padding:16px 16px 14px;box-sizing:border-box;\n  background:linear-gradient(135deg,transparent 12px,#FD4B03 12px,#FD4B03 13.5px,transparent 13.5px) top left/20px 20px no-repeat,\n  linear-gradient(-45deg,transparent 12px,#FD4B03 12px,#FD4B03 13.5px,transparent 13.5px) bottom right/20px 20px no-repeat,#141414;\n  box-shadow:inset 0 0 0 1px #FD4B03;clip-path:polygon(18px 0,100% 0,100% calc(100% - 18px),calc(100% - 18px) 100%,0 100%,0 18px);\n  color:#fff;font-family:\"Nasalization Rg\",Arial,sans-serif;text-align:center}\n#phx-zoom-x{position:absolute;top:6px;right:10px;background:none;border:0;color:#a3a3a3;font-size:20px;cursor:pointer;line-height:1}\n#phx-zoom .t{font-size:14px;letter-spacing:2px;color:#FD4B03;margin-bottom:4px;text-transform:uppercase}\n#phx-zoom .s{font-size:10px;color:#a3a3a3;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px}\n#phx-zoom .tm{display:flex;gap:6px;margin-bottom:12px}\n#phx-zoom .tm div{flex:1;background:#1c1c1c;border:1px solid #3d3d3d;padding:8px 0 6px}\n#phx-zoom .tm b{display:block;font-size:20px;font-weight:400}\n#phx-zoom .tm span{font-size:9px;color:#a3a3a3;text-transform:uppercase}\n#phx-zoom a{display:block;padding:10px 0;background:#FD4B03;color:#141414;text-decoration:none;font-size:12px;letter-spacing:2px;text-transform:uppercase;\n  clip-path:polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)}\n#phx-zoom.live .tm{display:none}\n@media (max-width:600px){#phx-zoom{left:10px;bottom:80px;width:220px;padding:12px}#phx-zoom .tm b{font-size:16px}}\n";

  function ready(fn){ if (document.body) fn(); else document.addEventListener('DOMContentLoaded', fn); }

  ready(function(){
    var st = document.createElement('style'); st.id = 'phx-widget-css'; st.textContent = CSS; document.head.appendChild(st);

    /* Jivo (loaded here, so the site needs only this one file) */
    if (CONFIG.jivoWidgetId && !document.querySelector('script[src*="code.jivosite.com/widget/"]')) {
      var s = document.createElement('script'); s.async = true;
      s.src = 'https://code.jivosite.com/widget/' + CONFIG.jivoWidgetId;
      document.body.appendChild(s);
    }

    /* SUPPORT launcher */
    var b = document.createElement('button');
    b.id = 'phx-support-btn'; b.type = 'button'; b.setAttribute('aria-label', 'Open support chat');
    b.innerHTML = LOGO + '<span>SUPPORT</span>';
    b.onclick = function(){ if (window.jivo_api) jivo_api.open(); };
    document.body.appendChild(b);
    var po = window.jivo_onOpen, pc = window.jivo_onClose;
    window.jivo_onOpen = function(){ b.classList.add('phx-hidden'); if (po) po.apply(this, arguments); };
    window.jivo_onClose = function(){ b.classList.remove('phx-hidden'); if (pc) pc.apply(this, arguments); };

    /* Zoom countdown */
    var z = CONFIG.zoom;
    if (!z || !z.enabled || !z.start) return;
    var start = new Date(z.start).getTime(), end = start + (z.liveMinutes || 120) * 60000, key = 'phxZoomClosed_' + z.start;
    try { if (sessionStorage.getItem(key)) return; } catch(e){}
    if (Date.now() >= end) return;
    var box = document.createElement('div'); box.id = 'phx-zoom';
    box.innerHTML = '<button id="phx-zoom-x" aria-label="Close">×</button><div class="t"></div><div class="s">Starts in</div>' +
      '<div class="tm"><div><b data-u="d">00</b><span>days</span></div><div><b data-u="h">00</b><span>hours</span></div>' +
      '<div><b data-u="m">00</b><span>min</span></div><div><b data-u="s">00</b><span>sec</span></div></div>' +
      '<a target="_blank" rel="noopener">Join Zoom</a>';
    box.querySelector('.t').textContent = z.title || 'ZOOM';
    box.querySelector('a').href = z.link || '#';
    document.body.appendChild(box);
    box.querySelector('#phx-zoom-x').onclick = function(){ box.remove(); clearInterval(t); try { sessionStorage.setItem(key, '1'); } catch(e){} };
    function p(n){ return (n < 10 ? '0' : '') + n; }
    function u(k, v){ box.querySelector('[data-u="' + k + '"]').textContent = p(v); }
    function tick(){
      var now = Date.now();
      if (now >= end) { box.remove(); clearInterval(t); return; }
      if (now >= start) { box.classList.add('live'); box.querySelector('.s').textContent = '● LIVE NOW'; box.querySelector('a').textContent = 'Join now'; return; }
      var s = Math.floor((start - now) / 1000);
      u('d', Math.floor(s / 86400)); u('h', Math.floor(s % 86400 / 3600)); u('m', Math.floor(s % 3600 / 60)); u('s', s % 60);
    }
    tick(); var t = setInterval(tick, 1000);
  });
})();
