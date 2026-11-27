/* PHOINEXES site widget — Jivo chat (Cyber Frame) + SUPPORT button + Zoom countdown.
   Edit ONLY the CONFIG block below; the site loads this file automatically. */
(function(){
  if (window.__phxWidget) return; window.__phxWidget = true;

  /* ===================== CONFIG ===================== */
  var CONFIG = {
    jivoWidgetId: "WLWwgYq30l",
    zoom: {
      enabled: true,                          // true = show countdown, false = hide
      start: "2026-11-20T20:00:00+01:00",     // meeting start (20:00 Paris / 19:00 London)
      link:  "https://us06web.zoom.us/j/85814471659?pwd=mzPpdRAUkPXavA0SQRLyGEYSxPYa7I.1",
      title: "Live: How PHOINEXES makes profit",
      liveMinutes: 120,                       // how long "LIVE NOW" stays after start
      theme: "green",                         // "green" or "" (orange)
      kicker: "NEW INFORMATION",              // pulsing label on top
      headline: "PULSE",                      // big glowing word ("" = no headline)
      sub: "IMPROVED PERFORMANCE \u00B7 JOIN US",
      button: "JOIN US"
    },
    heroImage: true,                          // true = sharp still image instead of the hero video
    menuIntro: "on",                          // menu letters "compute" on open: "on" | "demo" (only with #phxdemo) | "off"
    marketPanel: "on"                         // LIVE MARKET panel: "on" | "demo" (only with #phxdemo) | "off"
  };
  /* ================================================== */

  var ZCSS = "#phx-zoom{position:fixed;left:20px;bottom:20px;z-index:2147482999;width:300px;box-sizing:border-box;padding:16px 16px 14px;\n  background:rgba(17,17,17,.94);border:1px solid #2e2e2e;border-radius:14px;color:#fff;font-family:\"Nasalization Rg\",Arial,sans-serif;\n  box-shadow:0 10px 30px rgba(0,0,0,.45),0 0 0 1px rgba(253,75,3,.08);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);\n  opacity:0;transform:translateY(16px);transition:opacity .6s ease,transform .6s cubic-bezier(.2,.8,.2,1)}\n#phx-zoom.on{opacity:1;transform:none}\n#phx-zoom.phx-hidden{display:none}\n#phx-zoom.soon .jn{border-color:#22c55e;color:#fff;animation:phxSoon 2.6s ease-in-out infinite}\n#phx-zoom.soon .jn:hover{background:#22c55e;color:#0b0b0b}\n@keyframes phxSoon{0%,100%{background:rgba(34,197,94,.08);box-shadow:0 0 0 0 rgba(34,197,94,0)}50%{background:rgba(34,197,94,.38);box-shadow:0 0 22px 4px rgba(34,197,94,.45)}}\n@media (max-width:600px){#phx-zoom.soon .jn{color:#0b0b0b;animation-name:phxSoonM}@keyframes phxSoonM{0%,100%{background:#1f9d4f;box-shadow:0 0 0 0 rgba(34,197,94,0)}50%{background:#3ee07a;box-shadow:0 0 16px 3px rgba(34,197,94,.55)}}}\n#phx-zoom *{box-sizing:border-box}\n#phx-zoom-x{position:absolute;top:8px;right:10px;width:22px;height:22px;padding:0;background:none;border:0;color:#777;font:18px/22px Arial,sans-serif;cursor:pointer;transition:color .2s}\n#phx-zoom-x:hover{color:#FD4B03}\n#phx-zoom .hd{display:flex;align-items:center;gap:8px;margin:0 22px 12px 0;font-size:11px;letter-spacing:2px;color:#a3a3a3;white-space:nowrap}\n#phx-zoom .hd svg{width:16px;height:16px;flex:none}\n#phx-zoom .at{margin-left:auto;color:#FD4B03;font-size:10px;letter-spacing:1px}\n#phx-zoom .tt{margin:-4px 22px 12px 0;font-size:11px;letter-spacing:1.5px;line-height:1.45;color:#fff;text-transform:uppercase}\n#phx-zoom .clk{display:flex;align-items:flex-start;justify-content:center;gap:5px}\n#phx-zoom .g{display:flex;flex-direction:column;align-items:center}\n#phx-zoom .pr{display:flex;gap:4px}\n#phx-zoom .g em{font-style:normal;font-size:9px;letter-spacing:1px;color:#777;margin-top:6px}\n#phx-zoom .c{color:#FD4B03;font-size:24px;font-weight:400;line-height:48px;animation:phxBlink 2s ease-in-out infinite}\n@keyframes phxBlink{50%{opacity:.35}}\n#phx-zoom .fd{position:relative;display:block;width:34px;height:48px;perspective:220px;border-radius:6px;box-shadow:0 3px 0 #000,0 4px 10px rgba(0,0,0,.5)}\n#phx-zoom .fd i{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-style:normal;font-size:30px;line-height:1;color:#FD4B03;\n  border-radius:6px;backface-visibility:hidden;-webkit-backface-visibility:hidden;text-shadow:0 0 10px rgba(253,75,3,.35)}\n#phx-zoom .fd .up,#phx-zoom .fd .fu{background:#262626;clip-path:inset(0 0 50% 0)}\n#phx-zoom .fd .dn,#phx-zoom .fd .fb{background:#1b1b1b;clip-path:inset(50% 0 0 0)}\n#phx-zoom .fd::after{content:\"\";position:absolute;left:0;right:0;top:50%;height:1px;background:#0b0b0b;z-index:3}\n#phx-zoom .fd .fu,#phx-zoom .fd .fb{visibility:hidden;z-index:2}\n#phx-zoom .fd.go .fu{visibility:visible;animation:phxFu .35s ease-in forwards}\n#phx-zoom .fd.go .fb{visibility:visible;transform:rotateX(90deg);animation:phxFb .35s .35s ease-out forwards}\n@keyframes phxFu{to{transform:rotateX(-90deg)}}\n@keyframes phxFb{to{transform:rotateX(0)}}\n#phx-zoom .lv{display:none;align-items:center;justify-content:center;gap:10px;height:48px;font-size:18px;letter-spacing:3px;color:#fff}\n#phx-zoom .lv span{width:10px;height:10px;border-radius:50%;background:#FD4B03;animation:phxPulse 1.6s ease-out infinite}\n@keyframes phxPulse{0%{box-shadow:0 0 0 0 rgba(253,75,3,.7)}100%{box-shadow:0 0 0 12px rgba(253,75,3,0)}}\n#phx-zoom .js{display:none}\n#phx-zoom .lv b{font-weight:400}\n#phx-zoom.live .clk{display:none}\n#phx-zoom.live .lv{display:flex}\n#phx-zoom.live .lb{color:#FD4B03}\n#phx-zoom.live .at{display:none}\n#phx-zoom .jn{display:block;margin-top:14px;padding:11px 0;text-align:center;border:1px solid #FD4B03;border-radius:8px;color:#fff;text-decoration:none;\n  font-size:12px;letter-spacing:2px;transition:background .3s,color .3s,box-shadow .3s}\n#phx-zoom .jn:hover,#phx-zoom.live .jn{background:#FD4B03;color:#141414;box-shadow:0 0 18px rgba(253,75,3,.45)}\n@media (max-width:600px){\n  #phx-zoom{left:10px;bottom:12px;width:auto;height:46px;padding:0 4px 0 10px;border-radius:10px;display:flex;align-items:center;gap:8px}\n  #phx-zoom .hd{margin:0}\n  #phx-zoom .hd .lb,#phx-zoom .hd .at,#phx-zoom .g em,#phx-zoom .tt{display:none}\n  #phx-zoom .clk{gap:2px}\n  #phx-zoom .pr{gap:2px}\n  #phx-zoom .c{font-size:14px;line-height:26px}\n  #phx-zoom .fd{width:14px;height:26px;border-radius:3px;perspective:120px;box-shadow:0 2px 0 #000}\n  #phx-zoom .fd i{font-size:16px;border-radius:3px}\n  #phx-zoom .lv{height:26px;font-size:11px;letter-spacing:2px;gap:7px}\n  #phx-zoom .lv span{width:8px;height:8px}\n  #phx-zoom .jn{margin:0;padding:0 11px;height:36px;line-height:36px;font-size:10px;letter-spacing:1px;background:#FD4B03;color:#141414;border-radius:7px}\n  #phx-zoom .jt,#phx-zoom .ar,#phx-zoom .lv b{display:none}\n  #phx-zoom .js{display:inline}\n  #phx-zoom-x{top:-9px;right:-9px;width:20px;height:20px;border-radius:50%;background:#262626;border:1px solid #3d3d3d;color:#a3a3a3;font-size:13px;line-height:18px}\n}\n@media (max-width:380px){#phx-zoom .hd{display:none}#phx-zoom{padding-left:6px}}\n@media (max-width:340px){#phx-zoom .clk .g:last-child,#phx-zoom .clk b.c:nth-of-type(2){display:none}}\n";

  var GCSS = "#phx-zoom.green{width:320px;background:rgba(6,14,10,.95);border-color:rgba(46,230,130,.35);box-shadow:0 10px 34px rgba(0,0,0,.5),0 0 24px rgba(46,230,130,.14)}\n#phx-zoom.green .at,#phx-zoom.green .c{color:#2ee682}\n#phx-zoom.green .fd i{color:#3dff9a;text-shadow:0 0 10px rgba(61,255,154,.45)}\n#phx-zoom.green .fd .up,#phx-zoom.green .fd .fu{background:#13241b}\n#phx-zoom.green .fd .dn,#phx-zoom.green .fd .fb{background:#0d1913}\n#phx-zoom.green .jn{border-color:#2ee682}\n#phx-zoom.green .jn:hover,#phx-zoom.green.live .jn{background:#2ee682;color:#06110b;box-shadow:0 0 18px rgba(46,230,130,.5)}\n#phx-zoom.green .lv span{background:#2ee682;animation-name:phxPulseG}\n@keyframes phxPulseG{0%{box-shadow:0 0 0 0 rgba(46,230,130,.7)}100%{box-shadow:0 0 0 12px rgba(46,230,130,0)}}\n#phx-zoom.green.live .lb{color:#2ee682}\n#phx-zoom.green .tt{color:#cfeedd}\n#phx-zoom .hl{margin:0 22px 14px 0;padding-bottom:13px;border-bottom:1px solid rgba(46,230,130,.18)}\n#phx-zoom .hl .k{display:inline-flex;align-items:center;gap:7px;padding:5px 10px;border:1px solid rgba(46,230,130,.45);border-radius:20px;font:600 9px/1 Orbitron,\"Nasalization Rg\",Arial,sans-serif;letter-spacing:2.5px;color:#3dff9a;animation:phxKick 2s ease-in-out infinite}\n#phx-zoom .hl .k span{width:6px;height:6px;border-radius:50%;background:#3dff9a;box-shadow:0 0 8px #3dff9a}\n#phx-zoom .hl .k b{font-weight:600}\n#phx-zoom .hl .k i{display:none;font-style:normal}\n@keyframes phxKick{50%{border-color:rgba(46,230,130,.95);box-shadow:0 0 14px rgba(46,230,130,.45);color:#eafff3}}\n#phx-zoom .hl .h{margin-top:11px;font:900 32px/1 Orbitron,\"Nasalization Rg\",Arial,sans-serif;letter-spacing:5px;white-space:nowrap;background:linear-gradient(90deg,#eafff3,#3dff9a 45%,#16c96a);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;animation:phxGlow 2.8s ease-in-out infinite}\n@keyframes phxGlow{0%,100%{filter:drop-shadow(0 0 3px rgba(61,255,154,.3))}50%{filter:drop-shadow(0 0 14px rgba(61,255,154,.85))}}\n#phx-zoom .hl .sb{margin-top:8px;font:500 9px/1.4 Orbitron,\"Nasalization Rg\",Arial,sans-serif;letter-spacing:1.3px;white-space:nowrap;color:#cfeedd}\n@media (max-width:600px){\n  #phx-zoom.green{width:auto;border-color:rgba(46,230,130,.5)}\n  #phx-zoom .hl{position:absolute;left:0;bottom:calc(100% + 8px);margin:0;padding:0;border:0}\n  #phx-zoom .hl .h,#phx-zoom .hl .sb{display:none}\n  #phx-zoom .hl .k{background:rgba(6,14,10,.94);white-space:nowrap}\n  #phx-zoom .hl .k i{display:inline}\n  #phx-zoom.green .jn{background:#2ee682;color:#06110b}\n}\n#phx-zoom.green{isolation:isolate}\n#phx-zoom.green::before,#phx-zoom.green::after{content:\"\";position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:-1}\n#phx-zoom.green::before{background:url(\"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27140%27 height=%27140%27 fill=%27none%27 stroke=%27%232ee682%27 stroke-width=%271%27 stroke-linecap=%27round%27%3E%3Cg opacity=%27.55%27%3E%3Cpath d=%27M0 20h30l10 10h40%27/%3E%3Cpath d=%27M80 30l12-12h48%27/%3E%3Cpath d=%27M0 70h18l8-8h34v28l10 10h30%27/%3E%3Cpath d=%27M100 100h40%27/%3E%3Cpath d=%27M20 140v-22l10-10h26%27/%3E%3Cpath d=%27M56 108l14-14%27/%3E%3Cpath d=%27M110 0v22l-8 8v24l14 14h24%27/%3E%3Cpath d=%27M40 0v8%27/%3E%3Cpath d=%27M128 140v-18l-10-10%27/%3E%3C/g%3E%3Cg fill=%27%232ee682%27 stroke=%27none%27 opacity=%27.8%27%3E%3Ccircle cx=%2780%27 cy=%2730%27 r=%272%27/%3E%3Ccircle cx=%2760%27 cy=%2762%27 r=%272%27/%3E%3Ccircle cx=%27100%27 cy=%27100%27 r=%272%27/%3E%3Ccircle cx=%2756%27 cy=%27108%27 r=%272%27/%3E%3Ccircle cx=%27102%27 cy=%2754%27 r=%272%27/%3E%3Ccircle cx=%2740%27 cy=%278%27 r=%272%27/%3E%3Ccircle cx=%27118%27 cy=%27112%27 r=%272%27/%3E%3C/g%3E%3C/svg%3E\") 0 0/140px 140px;opacity:.38}\n#phx-zoom.green::after{background:linear-gradient(115deg,transparent 42%,rgba(110,255,180,.95) 50%,transparent 58%) 0 0/320% 100% no-repeat;-webkit-mask:url(\"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27140%27 height=%27140%27 fill=%27none%27 stroke=%27%232ee682%27 stroke-width=%271%27 stroke-linecap=%27round%27%3E%3Cg opacity=%27.55%27%3E%3Cpath d=%27M0 20h30l10 10h40%27/%3E%3Cpath d=%27M80 30l12-12h48%27/%3E%3Cpath d=%27M0 70h18l8-8h34v28l10 10h30%27/%3E%3Cpath d=%27M100 100h40%27/%3E%3Cpath d=%27M20 140v-22l10-10h26%27/%3E%3Cpath d=%27M56 108l14-14%27/%3E%3Cpath d=%27M110 0v22l-8 8v24l14 14h24%27/%3E%3Cpath d=%27M40 0v8%27/%3E%3Cpath d=%27M128 140v-18l-10-10%27/%3E%3C/g%3E%3Cg fill=%27%232ee682%27 stroke=%27none%27 opacity=%27.8%27%3E%3Ccircle cx=%2780%27 cy=%2730%27 r=%272%27/%3E%3Ccircle cx=%2760%27 cy=%2762%27 r=%272%27/%3E%3Ccircle cx=%27100%27 cy=%27100%27 r=%272%27/%3E%3Ccircle cx=%2756%27 cy=%27108%27 r=%272%27/%3E%3Ccircle cx=%27102%27 cy=%2754%27 r=%272%27/%3E%3Ccircle cx=%2740%27 cy=%278%27 r=%272%27/%3E%3Ccircle cx=%27118%27 cy=%27112%27 r=%272%27/%3E%3C/g%3E%3C/svg%3E\") 0 0/140px 140px;mask:url(\"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27140%27 height=%27140%27 fill=%27none%27 stroke=%27%232ee682%27 stroke-width=%271%27 stroke-linecap=%27round%27%3E%3Cg opacity=%27.55%27%3E%3Cpath d=%27M0 20h30l10 10h40%27/%3E%3Cpath d=%27M80 30l12-12h48%27/%3E%3Cpath d=%27M0 70h18l8-8h34v28l10 10h30%27/%3E%3Cpath d=%27M100 100h40%27/%3E%3Cpath d=%27M20 140v-22l10-10h26%27/%3E%3Cpath d=%27M56 108l14-14%27/%3E%3Cpath d=%27M110 0v22l-8 8v24l14 14h24%27/%3E%3Cpath d=%27M40 0v8%27/%3E%3Cpath d=%27M128 140v-18l-10-10%27/%3E%3C/g%3E%3Cg fill=%27%232ee682%27 stroke=%27none%27 opacity=%27.8%27%3E%3Ccircle cx=%2780%27 cy=%2730%27 r=%272%27/%3E%3Ccircle cx=%2760%27 cy=%2762%27 r=%272%27/%3E%3Ccircle cx=%27100%27 cy=%27100%27 r=%272%27/%3E%3Ccircle cx=%2756%27 cy=%27108%27 r=%272%27/%3E%3Ccircle cx=%27102%27 cy=%2754%27 r=%272%27/%3E%3Ccircle cx=%2740%27 cy=%278%27 r=%272%27/%3E%3Ccircle cx=%27118%27 cy=%27112%27 r=%272%27/%3E%3C/g%3E%3C/svg%3E\") 0 0/140px 140px;animation:phxSweep 5s linear infinite}\n@keyframes phxSweep{0%{background-position:120% 0}100%{background-position:-120% 0}}\n@media (max-width:600px){#phx-zoom.green::before{opacity:.28}}\n";

  var LOGO = '<svg viewBox="0 0 158 158" aria-hidden="true"><path fill="#FD4B03" fill-rule="evenodd" d="M135.766,157.029 L102.421,157.029 C115.526,145.280 132.225,125.348 126.187,95.805 C124.062,124.725 105.514,145.482 83.257,157.029 L21.651,157.029 C10.974,157.029 2.120,149.272 0.450,139.108 C100.242,169.189 111.020,95.303 97.380,69.155 C86.895,49.055 67.425,50.821 53.432,57.029 C50.059,63.378 45.136,66.055 41.206,68.435 C35.732,71.750 29.683,92.204 29.683,92.204 C29.683,92.204 21.112,79.463 25.362,65.554 C18.672,60.266 15.233,52.940 24.146,35.935 C36.558,12.254 64.588,15.653 75.681,0.568 L135.766,0.568 C145.466,0.568 153.662,6.971 156.333,15.763 C142.732,3.283 106.022,17.295 106.022,17.295 C106.022,17.295 132.663,27.287 157.251,21.858 C157.251,21.895 157.254,21.932 157.254,21.970 C157.254,21.970 157.254,35.805 157.254,53.820 C150.558,56.786 142.223,56.685 131.949,53.309 C142.905,68.919 157.155,59.071 157.155,59.071 C157.189,59.085 157.220,59.099 157.254,59.112 C157.254,68.445 157.254,78.585 157.254,88.339 C157.254,113.240 157.254,135.627 157.254,135.627 C157.254,147.446 147.633,157.029 135.766,157.029 ZM33.203,52.409 L32.564,60.082 C32.564,60.082 36.200,56.387 39.596,52.409 C39.160,50.260 40.294,46.021 43.431,39.622 C39.776,41.152 33.203,52.409 33.203,52.409 ZM97.795,94.003 C77.316,155.257 20.417,144.461 0.163,112.676 L0.163,64.116 C0.255,63.967 0.341,63.818 0.435,63.668 C1.096,122.422 69.478,135.494 97.795,94.003 Z"></path></svg>';
  var CSS = ":root{--phx-o:#FD4B03;--phx-bg:#141414;--phx-bg2:#1c1c1c;--phx-line:#3d3d3d;--phx-txt:#ffffff;--phx-mut:#a3a3a3}\njdiv[class^=\"container__\"]:has(> jdiv[class^=\"hoverArea__\"]){display:none !important}\njdiv[class*=\"__jivoMobileButton\"]{display:none !important}\n#jcont jdiv[class^=\"main__\"]:has(> jdiv[class^=\"headerBox__\"]){\n  background:\n    linear-gradient(135deg,transparent 12px,var(--phx-o) 12px,var(--phx-o) 13.5px,transparent 13.5px) top left/20px 20px no-repeat,\n    linear-gradient(-45deg,transparent 12px,var(--phx-o) 12px,var(--phx-o) 13.5px,transparent 13.5px) bottom right/20px 20px no-repeat,\n    var(--phx-bg) !important;\n  box-shadow:inset 0 0 0 1px var(--phx-o) !important;border-radius:0 !important;\n  clip-path:polygon(18px 0,100% 0,100% calc(100% - 18px),calc(100% - 18px) 100%,0 100%,0 18px);\n  font-family:\"Nasalization Rg\",Arial,sans-serif !important}\n#jcont jdiv[class^=\"main__\"]:has(> jdiv[class^=\"headerBox__\"]) *{border-radius:0 !important;font-family:inherit}\n#jcont jdiv[class*=\"leaf\"]{display:none !important}\n#jcont jdiv[class^=\"headerBox__\"],#jcont jdiv[class^=\"header__\"],#jcont jdiv[class^=\"headerContainer__\"]{background:transparent !important;color:var(--phx-txt) !important}\n#jcont jdiv[class^=\"headerBox__\"]:not(:has(jdiv[class^=\"headerBox__\"])){border-bottom:1px solid var(--phx-o) !important}\n#jcont jdiv[class^=\"headerContainer__\"]{padding-left:26px !important}\n#jcont jdiv[class^=\"agentName__\"]{color:var(--phx-txt) !important;text-transform:uppercase;letter-spacing:2px;font-size:13px !important;opacity:1 !important}\n#jcont jdiv[class^=\"title__\"]{color:var(--phx-mut) !important;text-transform:uppercase;letter-spacing:1px;font-size:10px !important;opacity:1 !important}\n#jcont jdiv[class^=\"title__\"]::before{content:\"\";display:inline-block;width:7px;height:7px;background:var(--phx-o);margin-right:6px;vertical-align:1px}\n#jcont jdiv[class^=\"bodyWrap__\"],#jcont jdiv[class^=\"typing__\"],#jcont jdiv[class^=\"chatCopyright__\"],#jcont jdiv[class^=\"moreBox__\"],\n#jcont jdiv[class^=\"input__\"],#jcont jdiv[class^=\"inputContainer__\"],#jcont jdiv[class^=\"wrapMargin__\"]{background:transparent !important;color:var(--phx-mut) !important}\n#jcont jdiv[class^=\"rail__\"]{background:var(--phx-bg2) !important}\n#jcont jdiv[class^=\"rail__\"] > jdiv{background:var(--phx-o) !important}\n#jcont jdiv[class^=\"input__\"]:not(:has(jdiv[class^=\"input__\"])){border-top:1px solid var(--phx-line) !important}\n#jcont textarea,#jcont input,#jcont select{background:var(--phx-bg2) !important;color:var(--phx-txt) !important;border:1px solid var(--phx-line) !important;font-family:Arial,sans-serif !important}\n#jcont ::placeholder{color:#8a8a8a !important}\n#jcont#jcont textarea,#jcont#jcont input,#jcont#jcont select{-webkit-text-fill-color:#ffffff !important;color:#ffffff !important;caret-color:#FD4B03 !important}\n#jcont#jcont textarea::placeholder,#jcont#jcont input::placeholder{-webkit-text-fill-color:#8a8a8a !important;color:#8a8a8a !important}\n#jcont jdiv[class^=\"sendButton__\"]{\n  background:var(--phx-o) url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='%23141414' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14M13 6l6 6-6 6'/%3E%3C/svg%3E\") center/18px no-repeat !important;\n  clip-path:polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px)}\n#jcont jdiv[class^=\"iconPanel__\"] jdiv{filter:invert(.75)}\n#jcont jdiv[class^=\"button__\"][class*=\"__outline__\"]{background:var(--phx-bg2) !important;color:var(--phx-txt) !important;border:1px solid var(--phx-line) !important;\n  text-transform:uppercase;letter-spacing:1px;font-size:12px !important;box-shadow:none !important}\n#jcont jdiv[class^=\"button__\"][class*=\"__outline__\"]:hover{border-color:var(--phx-o) !important}\n#jcont jdiv[class^=\"button__\"][class*=\"__outline__\"] span{color:var(--phx-txt) !important}\n#jcont label,#jcont jdiv[class*=\"label\"]{color:var(--phx-mut) !important}\n#jcont jdiv[class^=\"button__\"]:not([class*=\"__outline__\"]),#jcont button{background:var(--phx-o) !important;color:#141414 !important;text-transform:uppercase;letter-spacing:1px;\n  clip-path:polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)}\n#jcont jdiv[class*=\"message__\"],#jcont jdiv[class*=\"bubble\"]{border-radius:0 !important}\n#jivo_close_button#jivo_close_button{width:30px !important;height:30px !important;\n  background:linear-gradient(135deg,transparent 5px,var(--phx-o) 5px,var(--phx-o) 6.5px,transparent 6.5px) top left/10px 10px no-repeat,\n  linear-gradient(-45deg,transparent 5px,var(--phx-o) 5px,var(--phx-o) 6.5px,transparent 6.5px) bottom right/10px 10px no-repeat,var(--phx-bg) !important;\n  box-shadow:inset 0 0 0 1px var(--phx-o) !important;border-radius:0 !important;\n  clip-path:polygon(7px 0,100% 0,100% calc(100% - 7px),calc(100% - 7px) 100%,0 100%,0 7px);display:flex !important;align-items:center;justify-content:center;cursor:pointer}\n#jivo_close_button#jivo_close_button:hover{background-color:var(--phx-o) !important}\n#jivo_close_button#jivo_close_button jdiv[class^=\"closeIcon__\"]{width:30px !important;height:30px !important;margin:0 !important;position:static !important;\n  background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2.5' stroke-linecap='round'%3E%3Cpath d='M6 6l12 12M18 6L6 18'/%3E%3C/svg%3E\") center/14px no-repeat !important}\n#phx-support-btn{position:fixed;right:24px;bottom:24px;z-index:2147483000;height:52px;padding:0 20px;display:flex;align-items:center;gap:10px;cursor:pointer;border:0;color:#fff;\n  font:13px/1 \"Nasalization Rg\",Arial,sans-serif;letter-spacing:2px;\n  background:\n    linear-gradient(135deg,transparent 7px,var(--phx-o) 7px,var(--phx-o) 8.5px,transparent 8.5px) top left/14px 14px no-repeat,\n    linear-gradient(-45deg,transparent 7px,var(--phx-o) 7px,var(--phx-o) 8.5px,transparent 8.5px) bottom right/14px 14px no-repeat,\n    var(--phx-bg);\n  box-shadow:inset 0 0 0 1px var(--phx-o);\n  clip-path:polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)}\n#phx-support-btn:hover{filter:brightness(1.15)}\n#phx-support-btn svg{width:22px;height:22px}\n#phx-support-btn.phx-hidden{display:none}\n@media (max-width:600px){#phx-support-btn{right:12px;bottom:12px;height:46px;padding:0 14px}}\n#jcont#jcont jdiv[class^=\"message__\"]{background:var(--phx-o) !important;color:#141414 !important;\n  clip-path:polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)}\n#jcont#jcont jdiv[class^=\"message__\"] *{color:#141414 !important}\n#jcont#jcont jdiv[class*=\"__agent__\"] jdiv[class^=\"message__\"]{background:#2b2b2b !important;color:#fff !important}\n#jcont#jcont jdiv[class*=\"__agent__\"] jdiv[class^=\"message__\"] *{color:#fff !important}\n#jcont#jcont jdiv[class*=\"__agent__\"] jdiv[class^=\"message__\"] a{color:var(--phx-o) !important}\n";
  CSS += ".menuList > li > a{transition:color .25s,text-shadow .25s}\n.menuList > li > a::after{content:\"\" !important;position:absolute !important;left:0 !important;right:auto !important;bottom:-7px !important;top:auto !important;height:2px !important;width:100% !important;background:linear-gradient(90deg,#FD4B03 0,#FD4B03 calc(100% - 6px),transparent calc(100% - 6px)) !important;transform:scaleX(0) !important;transform-origin:left !important;transition:transform .35s cubic-bezier(.2,.8,.2,1) !important;opacity:1 !important;border:0 !important}\n.menuList > li > a::before{content:\"\";position:absolute;bottom:-9px;left:0;width:6px;height:6px;background:#fff;box-shadow:0 0 8px 2px #FD4B03;opacity:0;transform:translateX(-6px) rotate(45deg);pointer-events:none}\n.menuList > li > a:hover{color:#FD4B03 !important;text-shadow:0 0 12px rgba(253,75,3,.65)}\n.menuList > li > a:hover::after{transform:scaleX(1) !important}\n.menuList > li > a:hover::before{animation:phxSpark .45s cubic-bezier(.2,.8,.2,1) forwards}\n@keyframes phxSpark{0%{opacity:1;left:0}85%{opacity:1}100%{opacity:0;left:calc(100% - 6px)}}\n";

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

    /* SUPPORT chooser: one button, two channels (live chat on the site / Telegram support) */
    (function(){
      var tgA = document.querySelector('.fixedSocials2 a[href*="t.me"]');
      var TG = tgA ? tgA.href : 'https://t.me/phoinexessupportreserve';
      var TGN = '@' + TG.replace(/\/+$/, '').split('/').pop();
      var fs = document.querySelector('.fixedSocials2');
      if (fs && fs.querySelectorAll('li').length <= 1) fs.classList.add('phx-gone');
      else if (tgA && tgA.closest('li')) tgA.closest('li').classList.add('phx-gone');
      var sc = document.createElement('style');
      sc.textContent = '.phx-gone{display:none !important}' +
        '#phx-sup-menu{position:fixed;right:24px;bottom:86px;z-index:2147483001;width:250px;padding:6px 8px 8px;box-sizing:border-box;background:rgba(20,20,20,.97);' +
        'box-shadow:inset 0 0 0 1px #FD4B03,0 12px 30px rgba(0,0,0,.55);clip-path:polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px);' +
        'font-family:"Nasalization Rg",Arial,sans-serif;transform-origin:100% 100%;opacity:0;transform:translateY(10px) scaleY(.15);pointer-events:none;' +
        'transition:opacity .25s,transform .4s cubic-bezier(.2,.8,.2,1)}' +
        '#phx-sup-menu.open{opacity:1;transform:none;pointer-events:auto}' +
        '#phx-sup-menu .t{font-size:10px;letter-spacing:2px;color:#8f8f8f;padding:6px 6px 8px;white-space:nowrap}' +
        '#phx-sup-menu a{display:flex;align-items:center;gap:12px;padding:10px 6px;color:#fff;text-decoration:none;font-size:12px;letter-spacing:1.5px;border-top:1px solid #2a2a2a;cursor:pointer;transition:background .2s}' +
        '#phx-sup-menu a:hover{background:rgba(253,75,3,.12)}' +
        '#phx-sup-menu .ic{width:34px;height:34px;flex:0 0 34px;display:grid;place-items:center;border:1px solid #3d3d3d;box-sizing:border-box}' +
        '#phx-sup-menu .ic svg{width:18px;height:18px;display:block}' +
        '#phx-sup-menu .tx{min-width:0;flex:1}' +
        '#phx-sup-menu .tx b{display:block;font-weight:400;white-space:nowrap}' +
        '#phx-sup-menu .tx small{display:block;font:10px/1.3 Arial,sans-serif;letter-spacing:.4px;color:#8a8a8a;margin-top:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
        '#phx-sup-menu .ar{color:#FD4B03;font-size:14px}' +
        '#phx-sup-menu .dot{display:inline-block;width:6px;height:6px;border-radius:50%;background:#2bd96b;margin-right:5px;box-shadow:0 0 6px #2bd96b;vertical-align:1px}' +
        '#phx-support-btn.act{filter:brightness(1.25)}' +
        '@media (max-width:600px){#phx-sup-menu{right:12px;bottom:66px;width:min(250px,calc(100vw - 24px))}}';
      document.head.appendChild(sc);
      var m = document.createElement('div');
      m.id = 'phx-sup-menu'; m.setAttribute('role', 'menu');
      m.innerHTML = '<div class="t">CHOOSE SUPPORT</div>' +
        '<a role="menuitem" data-k="chat"><span class="ic"><svg viewBox="0 0 24 24"><path fill="#FD4B03" d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm3 6.5a1.5 1.5 0 1 0 0 .01zm5 0a1.5 1.5 0 1 0 0 .01zm5 0a1.5 1.5 0 1 0 0 .01z"/></svg></span>' +
        '<span class="tx"><b>LIVE CHAT</b><small><i class="dot"></i>Online \u00B7 here on the site</small></span><span class="ar">\u203A</span></a>' +
        '<a role="menuitem" data-k="tg" href="' + TG + '" target="_blank" rel="noopener"><span class="ic"><svg viewBox="0 0 24 24"><path fill="#2AABEE" d="M21.9 4.3 18.7 19.4c-.2 1.1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.2 13.1l-4.8-1.5c-1-.3-1.1-1 .2-1.5L20.5 2.9c.9-.3 1.6.2 1.4 1.4z"/></svg></span>' +
        '<span class="tx"><b>TELEGRAM</b><small>' + TGN + '</small></span><span class="ar">\u203A</span></a>';
      document.body.appendChild(m);
      var GLS = '01#%$\u25B2\u25BC/AIX<>';
      var dec = function(el, d){
        var fin = el.getAttribute('data-t') || el.textContent; el.setAttribute('data-t', fin);
        var f = 0, n = fin.length;
        clearInterval(el._t);
        el._t = setInterval(function(){
          f++; var o = '';
          for (var i = 0; i < n; i++) {
            var s = d + i * 1.2;
            o += (fin[i] === ' ' || f >= s + 6) ? fin[i] : (f >= s ? GLS.charAt((Math.random() * GLS.length) | 0) : '\u00A0');
          }
          el.textContent = o;
          if (f >= d + n * 1.2 + 6) { clearInterval(el._t); el.textContent = fin; }
        }, 35);
      };
      var open = function(){
        m.classList.add('open'); b.classList.add('act');
        dec(m.querySelector('.t'), 0);
        [].forEach.call(m.querySelectorAll('.tx b'), function(e, i){ dec(e, 4 + i * 6); });
      };
      var close = function(){ m.classList.remove('open'); b.classList.remove('act'); };
      b.onclick = function(e){ e.stopPropagation(); if (m.classList.contains('open')) close(); else open(); };
      m.querySelector('[data-k="chat"]').onclick = function(e){ e.preventDefault(); close(); if (window.jivo_api) jivo_api.open(); };
      m.querySelector('[data-k="tg"]').addEventListener('click', function(){ setTimeout(close, 150); });
      document.addEventListener('click', function(e){ if (m.classList.contains('open') && !m.contains(e.target)) close(); });
      document.addEventListener('keydown', function(e){ if (e.key === 'Escape') close(); });
      var po3 = window.jivo_onOpen;
      window.jivo_onOpen = function(){ close(); if (po3) po3.apply(this, arguments); };
    })();

    /* Header menu: decode effect on hover */
    var GL='01#%$\u20AE\u25B2\u25BCAIX';
    document.querySelectorAll('.menuList > li > a').forEach(function(a){
      a.addEventListener('mouseenter',function(){
        /* letters keep a fixed width while they compute, so the menu does not jump; slower pace */
        if (typeof phxCompute === 'function') { if (!a.__phxMi) try { phxCompute([a], { step: 2.2, scr: 9, lap: 1, ms: 55 }); } catch (e) {} return; }
        if (!a.__phxW) { a.__phxW = 1; a.style.display = 'inline-block'; a.style.minWidth = a.getBoundingClientRect().width + 'px'; }
        var tn=(function(a){ var w = document.createTreeWalker(a, 4, null, false), n; while ((n = w.nextNode())) if (n.textContent.trim()) return n; return null; })(a); if(!tn) return;
        var target=tn.__phx||(tn.__phx=tn.textContent), f=0; clearInterval(a.__phxT);
        a.__phxT=setInterval(function(){ f++; tn.textContent=target.split('').map(function(ch,i){return ch===' '?' ':(i<f/2?ch:GL[(Math.random()*GL.length)|0]);}).join('');
          if(f/2>=target.length){clearInterval(a.__phxT); tn.textContent=target;} },60);
      });
    });

    /* Header Sign up / Log in buttons: same compute effect as the menu (once on load and on hover) */
    (function(){
      var bs = [].slice.call(document.querySelectorAll('.siteHeader .headerRight .themeBtn'));
      if (!bs.length) return;
      bs.forEach(function(a){
        a.addEventListener('mouseenter', function(){ if (typeof phxCompute === 'function' && !a.__phxMi) try { phxCompute([a], { step: 2.2, scr: 9, lap: 1, ms: 55 }); } catch (e) {} });
      });
      setTimeout(function(){ if (typeof phxCompute === 'function') try { phxCompute(bs.filter(function(a){ return a.offsetParent; }), { step: 1.8, scr: 8, lap: 0.6, ms: 50 }); } catch (e) {} }, 1200);
    })();

    /* Site-wide pulse rail on the left (desktop): a node per section, orange fill = scroll progress, label computes on hover, click scrolls */
    (function(){
      if (innerWidth < 1200 || !(window.matchMedia && matchMedia('(pointer:fine)').matches)) return;
      var css = document.createElement('style');
      css.textContent = '#phx-rail{position:fixed;top:100px;bottom:36px;width:14px;z-index:60;pointer-events:none;transition:opacity .4s}' +
        '#phx-rail.off{opacity:0;visibility:hidden}' +
        '#phx-rail .ln,#phx-rail .fl{position:absolute;left:6px;top:0;width:2px}' +
        '#phx-rail .ln{bottom:0;background:linear-gradient(180deg,rgba(255,255,255,.18),rgba(255,255,255,.05))}' +
        '#phx-rail .fl{height:0;background:linear-gradient(180deg,rgba(253,75,3,.3),#FD4B03);box-shadow:0 0 8px rgba(253,75,3,.8)}' +
        '#phx-rail .hd{position:absolute;left:2px;top:0;width:10px;height:10px;margin-top:-5px;border-radius:50%;background:#fff;box-shadow:0 0 0 3px #FD4B03,0 0 14px #FD4B03;z-index:2}' +
        '#phx-rail .hd::after{content:"";position:absolute;left:-3px;top:-3px;right:-3px;bottom:-3px;border-radius:50%;border:2px solid #FD4B03;animation:phxRp 1.6s ease-out infinite}' +
        '@keyframes phxRp{0%{transform:scale(1);opacity:.9}100%{transform:scale(2.8);opacity:0}}' +
        '#phx-rail .nd{position:absolute;left:3px;width:8px;height:8px;margin-top:-4px;border-radius:50%;background:#1b1b1b;box-shadow:inset 0 0 0 2px #4a4a4a;pointer-events:auto;cursor:pointer;transition:background .3s,box-shadow .3s}' +
        '#phx-rail .nd::before{content:"";position:absolute;left:-8px;top:-8px;right:-8px;bottom:-8px}' +
        '#phx-rail .nd.on{background:#FD4B03;box-shadow:0 0 0 3px rgba(253,75,3,.22),0 0 10px #FD4B03}' +
        '#phx-rail .nd.hit{animation:phxNh .7s ease-out}' +
        '@keyframes phxNh{0%{box-shadow:0 0 0 0 rgba(253,75,3,.9),0 0 10px #FD4B03}100%{box-shadow:0 0 0 16px rgba(253,75,3,0),0 0 10px #FD4B03}}' +
        '#phx-rail .nd span{position:absolute;left:22px;top:50%;transform:translate(-6px,-50%);opacity:0;white-space:nowrap;padding:7px 10px;font:11px/1 "Nasalization Rg",Arial,sans-serif;letter-spacing:2px;color:#fff;' +
        'background:rgba(14,14,14,.94);box-shadow:inset 0 0 0 1px rgba(253,75,3,.7);transition:opacity .25s,transform .25s;pointer-events:none}' +
        '#phx-rail .nd:hover span{opacity:1;transform:translate(0,-50%)}';
      document.head.appendChild(css);
      var rail = document.createElement('div'); rail.id = 'phx-rail'; rail.className = 'off';
      rail.innerHTML = '<i class="ln"></i><i class="fl"></i><b class="hd"></b>';
      document.body.appendChild(rail);
      var fl = rail.querySelector('.fl'), hd = rail.querySelector('.hd'), nodes = [], secs = [], last = -1;
      var hero = document.querySelector('.pageWrapper > section.hero');
      var label = function(s){
        var h = s.querySelector('h1,h2,h3'), t = (h ? h.textContent : '').replace(/\s+/g, ' ').trim();
        if (!t && s.tagName === 'FOOTER') t = 'CONTACTS';
        t = t.split(/ [-\u2013\u2014|] |: /)[0];
        if (t.length > 30) t = t.slice(0, 28).replace(/\s+\S*$/, '') + '...';
        return t.toUpperCase();
      };
      var place = function(){
        var cn = document.querySelector('.pageWrapper .container'), gut = cn ? parseFloat(getComputedStyle(cn).paddingLeft) || 0 : 0;
        if (gut < 120 || !secs.length) { rail.classList.add('off'); return; }
        var top = hero ? Math.max(100, hero.getBoundingClientRect().bottom + 24) : 100, H = innerHeight - top - 36;
        if (H < 120) { rail.classList.add('off'); return; }
        rail.style.left = Math.round(gut / 2 - 7) + 'px'; rail.style.top = top + 'px'; rail.classList.remove('off');
        var D = Math.max(1, document.documentElement.scrollHeight - innerHeight), p = Math.min(1, Math.max(0, scrollY / D)), cur = 0;
        fl.style.height = (p * H) + 'px'; hd.style.top = (p * H) + 'px';
        secs.forEach(function(s, i){
          var y = Math.min(1, Math.max(0, (s.getBoundingClientRect().top + scrollY) / D)) * H, on = p * H >= y - 1;
          nodes[i].style.top = y + 'px'; nodes[i].classList.toggle('on', on); if (on) cur = i;
        });
        if (cur !== last) { if (last >= 0) { var n = nodes[cur]; n.classList.remove('hit'); void n.offsetWidth; n.classList.add('hit'); } last = cur; }
      };
      var build = function(){
        secs = [].slice.call(document.querySelectorAll('.pageWrapper > section, .pageWrapper > footer')).filter(function(s){ return s.offsetHeight > 150; });
        nodes.forEach(function(n){ n.remove(); }); nodes = []; last = -1;
        secs.forEach(function(s, i){
          var n = document.createElement('a'); n.className = 'nd'; n.href = '#'; n.innerHTML = '<span></span>';
          n.addEventListener('mouseenter', function(){
            var sp = n.firstChild; if (sp.__phxMi) return;
            sp.textContent = label(s);
            if (typeof phxCompute === 'function') try { phxCompute([sp], { step: 1.6, scr: 7, lap: 0.5, ms: 40 }); } catch (e) {}
          });
          n.addEventListener('click', function(e){ e.preventDefault(); scrollTo({ top: Math.max(0, s.getBoundingClientRect().top + scrollY - (i ? 90 : 0)), behavior: 'smooth' }); });
          rail.appendChild(n); nodes.push(n);
        });
        place();
      };
      var tk = 0;
      window.addEventListener('scroll', function(){ if (!tk) tk = requestAnimationFrame(function(){ tk = 0; place(); }); }, { passive: true });
      window.addEventListener('resize', place);
      build(); setTimeout(build, 2500); setTimeout(build, 7000);
    })();

    /* Header icon buttons (PDF, YouTube, language, Telegram): "generate" with a scan reveal, once on load and on hover */
    (function(){
      var css = document.createElement('style');
      css.textContent = '.phx-gn{position:relative}' +
        '.phx-gn .phx-sc{position:absolute;left:-2px;right:-2px;top:0;height:2px;background:#FD4B03;box-shadow:0 0 8px #FD4B03,0 0 2px #fff;opacity:0;pointer-events:none;z-index:3}' +
        '.phx-gn.go .phx-sc{animation:phxScn .7s linear}' +
        '.phx-gn.go > :not(.phx-sc){animation:phxGen .7s steps(7) both}' +
        '@keyframes phxScn{0%{top:0;opacity:1}90%{opacity:1}100%{top:100%;opacity:0}}' +
        '@keyframes phxGen{0%{clip-path:inset(0 0 100% 0);filter:brightness(1.8) drop-shadow(0 0 4px #FD4B03)}50%{clip-path:inset(0 0 40% 0);transform:translateX(-1px)}70%{transform:translateX(1px)}100%{clip-path:inset(0);filter:none;transform:none}}';
      document.head.appendChild(css);
      var GLs = '01#%$<>/AIX';
      var run = function(b){
        if (b.__gn) return; b.__gn = 1;
        b.classList.remove('go'); void b.offsetWidth; b.classList.add('go');
        var tn = b.__tn;
        if (tn) {
          var fin = b.__tx, f = 0, t = setInterval(function(){
            f++; tn.textContent = fin.split('').map(function(c, i){ return c === ' ' || i < f / 2 ? c : GLs[(Math.random() * GLs.length) | 0]; }).join('');
            if (f / 2 >= fin.length) { clearInterval(t); tn.textContent = fin; }
          }, 70);
        }
        setTimeout(function(){ b.__gn = 0; b.classList.remove('go'); }, 750);
      };
      var setup = function(){
        var list = [].slice.call(document.querySelectorAll('.siteHeader .fileLink a, .siteHeader .headerRight a[href*="youtube.com"], .siteHeader .langHead, .siteHeader .phx-tgb'));
        list.forEach(function(b){
          if (b.__gs) return; b.__gs = 1;
          b.classList.add('phx-gn'); var s = document.createElement('i'); s.className = 'phx-sc'; b.appendChild(s);
          if (b.classList.contains('langHead')) { var w = document.createTreeWalker(b, 4, null, false), n; while ((n = w.nextNode())) if (n.textContent.trim()) { b.__tn = n; b.__tx = n.textContent; break; } }
          b.addEventListener('mouseenter', function(){ run(b); });
        });
        return list;
      };
      setTimeout(function(){ setup().forEach(function(b, i){ if (b.offsetParent) setTimeout(function(){ run(b); }, i * 160); }); }, 1400);
    })();

    /* Hero pulses: small light impulses run exactly along the glowing fibers (traced from the picture) - from the city up into the chip
       and from the chip out to the panels; a dot walks the ECG line left to right, each heartbeat spike it climbs sends a burst up from the city */
    (function(){
      if (!CONFIG.heroImage) return;
      if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      var DATA = {"e1":[0,0.3996,0.0806,0.3996,0.0813,0.3987,0.1125,0.3987,0.1138,0.3996,0.1156,0.394,0.1163,0.394,0.1187,0.409,0.1194,0.4053,0.1194,0.4146,0.12,0.4109,0.12,0.3996,0.1206,0.4034,0.1206,0.394,0.1212,0.3977,0.1212,0.3884,0.1219,0.3921,0.1219,0.3809,0.1225,0.3846,0.1225,0.3734,0.1231,0.379,0.1231,0.3659,0.1237,0.364,0.1237,0.3752,0.1244,0.3809,0.1244,0.3659,0.125,0.3734,0.125,0.3884,0.1256,0.3959,0.1256,0.3809,0.1263,0.3884,0.1263,0.4034,0.1269,0.3977,0.1269,0.4109,0.1275,0.4034,0.1275,0.4203,0.1281,0.4259,0.1281,0.4109,0.1288,0.4109,0.1288,0.4221,0.1294,0.4165,0.1294,0.4053,0.13,0.4015,0.13,0.4109,0.1306,0.4015,0.1319,0.3959,0.1338,0.4006,0.135,0.3996,0.1675,0.3996,0.1681,0.4006,0.1862,0.3996,0.1875,0.4006,0.1944,0.3987,0.1969,0.4006,0.1981,0.3996,0.2044,0.4006,0.205,0.3996,0.2387,0.3996,0.2406,0.394,0.2425,0.3996,0.2431,0.3996,0.2431,0.409,0.2437,0.4128,0.2437,0.4034,0.2444,0.4034,0.2444,0.4165,0.245,0.4165,0.245,0.4034,0.2456,0.3959,0.2456,0.4128,0.2462,0.4053,0.2462,0.3902,0.2469,0.3977,0.2469,0.3827,0.2475,0.3752,0.2475,0.3921,0.2481,0.3827,0.2481,0.3677,0.2487,0.3602,0.2487,0.3771,0.2494,0.3696,0.2494,0.3527,0.25,0.3452,0.25,0.364,0.2506,0.3659,0.2506,0.3452,0.2512,0.3527,0.2512,0.3734,0.2519,0.3809,0.2519,0.3621,0.2525,0.3734,0.2525,0.3902,0.2531,0.3996,0.2531,0.3809,0.2537,0.3902,0.2537,0.4109,0.2544,0.4203,0.2544,0.3996,0.255,0.4053,0.255,0.4315,0.2556,0.4296,0.2556,0.4015,0.2562,0.4015,0.2562,0.424,0.2569,0.4184,0.2569,0.4034,0.2575,0.4015,0.2575,0.4128,0.2581,0.4071,0.2581,0.3959,0.2587,0.394,0.2587,0.4034,0.2594,0.4015,0.2594,0.3921,0.26,0.3959,0.2619,0.4006,0.2631,0.3996,0.2781,0.3996,0.2787,0.3987,0.2844,0.3987,0.285,0.3996,0.2919,0.3996,0.2925,0.3987,0.2963,0.3987,0.2969,0.3996,0.2994,0.3987,0.3056,0.3987,0.3063,0.3996,0.3137,0.3996,0.3144,0.3987,0.3169,0.3996,0.3231,0.3996,0.3237,0.3987,0.325,0.3996,0.3287,0.3987,0.3481,0.3996,0.3488,0.3987,0.3525,0.3987,0.3544,0.3996,0.3569,0.3921,0.3575,0.3931,0.3588,0.3996,0.3594,0.3977,0.3594,0.4071,0.36,0.4109,0.36,0.4015,0.3606,0.4053,0.3606,0.4165,0.3613,0.4203,0.3613,0.409,0.3619,0.4071,0.3619,0.424,0.3625,0.4203,0.3625,0.3996,0.3631,0.394,0.3631,0.4128,0.3638,0.4053,0.3638,0.3865,0.3644,0.3771,0.3644,0.3977,0.365,0.3902,0.365,0.3677,0.3656,0.3565,0.3656,0.3827,0.3663,0.3734,0.3663,0.3471,0.3669,0.3396,0.3669,0.3659,0.3675,0.3583,0.3675,0.3321,0.3681,0.3265,0.3681,0.3583,0.3688,0.3621,0.3688,0.3283,0.3694,0.3358,0.3694,0.3659,0.37,0.3752,0.37,0.3452,0.3706,0.3565,0.3706,0.3846,0.3713,0.394,0.3713,0.3659,0.3719,0.3752,0.3719,0.4053,0.3725,0.4146,0.3725,0.3865,0.3731,0.394,0.3731,0.4259,0.3738,0.4371,0.3738,0.4015,0.3744,0.4146,0.3744,0.4465,0.375,0.4484,0.375,0.4146,0.3756,0.4128,0.3756,0.4447,0.3762,0.4371,0.3762,0.4109,0.3769,0.4071,0.3769,0.4296,0.3775,0.4221,0.3775,0.4015,0.3781,0.3996,0.3781,0.4146,0.3787,0.4071,0.3787,0.3977,0.3794,0.4015,0.3794,0.3921,0.38,0.3884,0.38,0.3996,0.3806,0.3902,0.3812,0.3884,0.3837,0.3968,0.3856,0.3996,0.4063,0.3996,0.4069,0.3987,0.4088,0.3996,0.4138,0.3996,0.4144,0.3987,0.415,0.3996,0.4194,0.3996,0.42,0.3987,0.4219,0.3996,0.4231,0.3987,0.4244,0.3996,0.4325,0.3996,0.4331,0.3987,0.4369,0.3987,0.4375,0.3996,0.4713,0.3996,0.4719,0.3987,0.4756,0.3987,0.4781,0.3996],"e2":[0.6281,0.3996,0.6637,0.3996,0.6669,0.3893,0.6681,0.3959,0.6687,0.3959,0.6687,0.4053,0.6694,0.3996,0.6694,0.4146,0.67,0.4221,0.67,0.4015,0.6713,0.4053,0.6713,0.4371,0.6719,0.4447,0.6719,0.409,0.6725,0.4128,0.6725,0.4465,0.6731,0.439,0.6731,0.3996,0.6737,0.394,0.6737,0.4278,0.6744,0.4165,0.6744,0.3884,0.675,0.3734,0.675,0.4071,0.6756,0.3996,0.6756,0.3677,0.6763,0.3583,0.6763,0.3865,0.6769,0.3771,0.6769,0.349,0.6775,0.3396,0.6775,0.3696,0.6781,0.3677,0.6781,0.334,0.6787,0.334,0.6787,0.3659,0.6794,0.3677,0.6794,0.3396,0.68,0.3452,0.68,0.3752,0.6806,0.3827,0.6806,0.3527,0.6813,0.3621,0.6813,0.3846,0.6819,0.3959,0.6819,0.3696,0.6825,0.379,0.6825,0.4015,0.6831,0.4071,0.6831,0.3865,0.6837,0.3865,0.6844,0.3996,0.6844,0.4221,0.685,0.4259,0.685,0.4015,0.6856,0.4015,0.6856,0.4221,0.6863,0.4184,0.6863,0.3996,0.6869,0.3977,0.6869,0.4146,0.6875,0.409,0.6875,0.3977,0.6881,0.3959,0.6881,0.4053,0.6887,0.3977,0.6894,0.4015,0.6894,0.3902,0.69,0.3902,0.69,0.4015,0.6906,0.4015,0.6906,0.3921,0.6913,0.394,0.6913,0.4034,0.6919,0.4034,0.6919,0.394,0.6925,0.3996,0.6931,0.4006,0.6937,0.3996,0.72,0.3996,0.7206,0.3987,0.7556,0.4006,0.7575,0.3959,0.7588,0.3996,0.7594,0.3996,0.7594,0.409,0.76,0.4071,0.7606,0.4015,0.7606,0.4146,0.7612,0.4109,0.7612,0.3996,0.7619,0.4053,0.7619,0.394,0.7625,0.3996,0.7625,0.3884,0.7631,0.394,0.7631,0.3809,0.7638,0.3865,0.7638,0.3734,0.7644,0.3677,0.7644,0.3809,0.765,0.3827,0.765,0.3677,0.7656,0.3734,0.7656,0.3902,0.7662,0.3977,0.7662,0.3809,0.7669,0.3884,0.7669,0.4053,0.7675,0.4146,0.7675,0.3959,0.7681,0.4015,0.7681,0.4203,0.7688,0.424,0.7688,0.4015,0.7694,0.4015,0.7694,0.4203,0.77,0.4146,0.77,0.4015,0.7706,0.3996,0.7706,0.409,0.7712,0.4053,0.7712,0.3959,0.7744,0.4015,0.775,0.4006,0.7963,0.4006,0.7969,0.3996,0.8056,0.4006,0.81,0.3987,0.8119,0.3996,0.8137,0.3987,0.8656,0.3987,0.8675,0.394,0.8681,0.3949,0.8688,0.3987,0.8712,0.4165,0.8712,0.4053,0.8719,0.409,0.8719,0.3977,0.8725,0.4034,0.8725,0.3921,0.8731,0.3959,0.8731,0.3846,0.8738,0.3902,0.8738,0.3771,0.8744,0.3827,0.8744,0.3696,0.875,0.364,0.875,0.3771,0.8756,0.3715,0.8756,0.3583,0.8762,0.3565,0.8762,0.3734,0.8769,0.379,0.8769,0.364,0.8775,0.3715,0.8775,0.3865,0.8781,0.394,0.8781,0.379,0.8788,0.3865,0.8788,0.4034,0.8794,0.4109,0.8794,0.3959,0.88,0.4034,0.88,0.4203,0.8806,0.4259,0.8806,0.409,0.8812,0.4109,0.8812,0.424,0.8819,0.4184,0.8819,0.4053,0.8825,0.4015,0.8825,0.4128,0.8831,0.4071,0.8831,0.3977,0.8838,0.394,0.8838,0.4034,0.8844,0.3959,0.885,0.394,0.8869,0.3996,0.8881,0.3987,0.9994,0.3996,1,0.3977],"roots":[[0.4466,0.7232,0.4484,0.7219,0.4532,0.7133,0.4644,0.6753,0.4806,0.6371,0.5071,0.5954,0.5115,0.5851,0.518,0.5649,0.5224,0.5466,0.525,0.5257,0.524,0.515],[0.4467,0.7231,0.4534,0.7131,0.4574,0.7014,0.4632,0.6792,0.4776,0.6433,0.4856,0.6286,0.5055,0.5972,0.513,0.5805,0.5182,0.5642,0.5225,0.5458,0.5244,0.5361,0.527,0.515],[0.4981,0.6913,0.4995,0.6879,0.5028,0.6742,0.5089,0.6609,0.5137,0.6525,0.5207,0.6441,0.5271,0.6325,0.5319,0.6152,0.5351,0.6014,0.5394,0.5703,0.5422,0.5318,0.542,0.515],[0.7571,0.8167,0.7483,0.8071,0.7333,0.8056,0.7315,0.8039,0.7253,0.7916,0.7217,0.788,0.6871,0.7627,0.6648,0.7551,0.6408,0.7427,0.6336,0.7359,0.6263,0.7318,0.6152,0.7359,0.5943,0.7108,0.5909,0.7058,0.5835,0.6887,0.5787,0.6715,0.5723,0.6437,0.5626,0.6094,0.5582,0.5847,0.5567,0.5626,0.551,0.515],[0.5771,0.8361,0.5763,0.8251,0.5746,0.8152,0.5672,0.7981,0.5591,0.784,0.5557,0.7705,0.5541,0.7603,0.5542,0.7379,0.5563,0.7222,0.5576,0.7058,0.5558,0.6329,0.5545,0.605,0.554,0.515],[0.5747,0.8564,0.5766,0.8346,0.5765,0.829,0.5751,0.8185,0.5697,0.8032,0.5599,0.7863,0.5563,0.7735,0.5545,0.7637,0.5542,0.7412,0.5577,0.7033,0.5568,0.6584,0.5537,0.5859,0.5535,0.5409,0.557,0.515],[0.6225,0.676,0.6144,0.6615,0.6075,0.6531,0.6009,0.6425,0.5781,0.5934,0.5718,0.5725,0.5686,0.5585,0.5657,0.5319,0.566,0.515],[0.6225,0.676,0.5993,0.6392,0.5797,0.5956,0.5728,0.5766,0.5692,0.5636,0.5673,0.5477,0.5671,0.5421,0.569,0.5263,0.569,0.515]],"ups":[[0.626,0.182,0.6415,0.1624,0.6509,0.1627,0.6564,0.1653,0.6725,0.1808,0.6787,0.1933,0.6839,0.2094,0.6857,0.2191],[0.479,0.266,0.4753,0.267,0.4718,0.2713,0.4699,0.271,0.461,0.2633,0.447,0.2353,0.4384,0.2133,0.4321,0.1927],[0.479,0.278,0.4645,0.2666,0.4529,0.2485,0.4398,0.2169,0.4319,0.1928],[0.626,0.29,0.6333,0.2856,0.6397,0.2738,0.6518,0.2589,0.6635,0.241,0.6681,0.2313,0.6778,0.2049,0.6904,0.1805,0.6938,0.176,0.6976,0.1758,0.7101,0.1644,0.7175,0.1607],[0.479,0.314,0.4665,0.3253,0.4461,0.3326,0.4329,0.3324,0.4255,0.3292,0.4164,0.3229,0.4075,0.314,0.3993,0.3008,0.3915,0.2851,0.3757,0.2451,0.3696,0.2324,0.3581,0.2136,0.3442,0.1968,0.3277,0.1859,0.309,0.1854,0.2961,0.1932,0.2857,0.2053],[0.626,0.314,0.6311,0.3211,0.6355,0.3313,0.6392,0.3316,0.6446,0.327,0.6509,0.3145,0.6592,0.2919,0.6641,0.2837,0.6748,0.2522,0.6864,0.2235,0.6911,0.2146,0.6983,0.2079,0.7076,0.2074,0.713,0.203,0.7257,0.213],[0.479,0.326,0.4773,0.3236,0.4736,0.3224,0.4642,0.3222,0.4571,0.3289,0.4515,0.3318,0.4347,0.3323,0.4235,0.3279,0.4162,0.3228,0.404,0.3082,0.396,0.2939,0.374,0.2414,0.3612,0.2179,0.3439,0.1966,0.3292,0.1871,0.3086,0.1854,0.3032,0.19,0.2958,0.1931,0.2854,0.2053],[0.626,0.326,0.6293,0.3312,0.633,0.3324,0.6441,0.327,0.649,0.3186,0.6572,0.2958,0.6652,0.2809,0.6743,0.2526,0.6861,0.2251,0.6926,0.2138,0.6998,0.2075,0.7025,0.1998,0.7061,0.1973,0.708,0.1981,0.7206,0.209,0.7237,0.215,0.7256,0.2154],[0.479,0.338,0.4736,0.3339,0.4699,0.3358,0.434,0.3678],[0.626,0.338,0.6314,0.3334,0.6425,0.3285,0.6507,0.3147,0.6681,0.2723,0.6803,0.2374,0.691,0.2146,0.6981,0.2076,0.7075,0.2074,0.7128,0.2028,0.7256,0.2123],[0.479,0.434,0.4753,0.4325,0.4735,0.4338,0.4666,0.4424,0.454,0.467,0.4452,0.4881]]};
      var IW = 3072, IH = 1024, MC = [1455, -221, 880, 1467]; /* full image size, crop rect used for hero-w-m.webp */
      var BL = .402, CX = .551, CY = .31;
      var pts = function(f){ var a = []; for (var i = 0; i < f.length; i += 2) a.push([f[i], f[i + 1]]); return a; };
      var mk = function(p){ var c = [0], L = 0; for (var i = 1; i < p.length; i++) { L += Math.hypot((p[i][0] - p[i-1][0]) * IW, (p[i][1] - p[i-1][1]) * IH); c.push(L); } return { p: p, c: c, L: L || 1 }; };
      var at = function(P, s){ var d = s * P.L, c = P.c, i = 1; while (i < c.length - 1 && c[i] < d) i++; var a = P.p[i-1], b = P.p[i], f = (d - c[i-1]) / ((c[i] - c[i-1]) || 1); f = Math.max(0, Math.min(1, f)); return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f]; };
      var ROOTS = DATA.roots.map(function(f){ return mk(pts(f)); }), OUT = DATA.ups.map(function(f){ return mk(pts(f)); });
      var E1 = mk(pts(DATA.e1)), E2 = mk(pts(DATA.e2)), GAP = (E2.p[0][0] - E1.p[E1.p.length - 1][0]) * IW, TOT = E1.L + GAP + E2.L;
      /* heartbeat spikes: runs of ECG points far from the baseline, as arc-length ranges on the whole walk */
      var SPK = [];
      [[E1, 0], [E2, E1.L + GAP]].forEach(function(q){
        var P = q[0], s0 = -1;
        P.p.forEach(function(pt, i){ var far = Math.abs(pt[1] - BL) > .012; if (far && s0 < 0) s0 = i; if ((!far || i === P.p.length - 1) && s0 >= 0) { var a = Math.max(0, s0 - 1), b = i; SPK.push({ a: q[1] + P.c[a], b: q[1] + P.c[b], P: P, i0: a, i1: b, h: 0 }); s0 = -1; } });
      });
      var start = function(pic){
        var img = pic.querySelector('img'); if (!img) return;
        var cs = document.createElement('style');
        cs.textContent = '.heroVisual .phx-hero-pic canvas.phx-hp{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;opacity:0;transition:opacity 1.2s ease}.heroVisual .phx-hero-pic.ld canvas.phx-hp{opacity:1}';
        document.head.appendChild(cs);
        var cv = document.createElement('canvas'); cv.className = 'phx-hp'; pic.appendChild(cv);
        var g = cv.getContext('2d'), W = 0, H = 0, D = 1, map = null, k = 1, run = false, last = 0, walk = 0;
        var pulses = [], chip = 0, flashes = [], nextAmb = 500, nextOut = 2200, fired = {};
        var layout = function(){
          W = pic.clientWidth; H = pic.clientHeight; D = Math.min(window.devicePixelRatio || 1, 2);
          cv.width = Math.round(W * D); cv.height = Math.round(H * D); g.setTransform(D, 0, 0, D, 0, 0);
          var mob = (img.currentSrc || '').indexOf('hero-w-m') >= 0, iw = mob ? MC[2] : IW, ih = mob ? MC[3] : IH;
          var op = (getComputedStyle(img).objectPosition || '50% 50%').split(' '), px = (parseFloat(op[0]) || 50) / 100, py = (parseFloat(op[1]) || 50) / 100;
          var s = Math.max(W / iw, H / ih), dw = iw * s, dh = ih * s, ox = (W - dw) * px, oy = (H - dh) * py;
          k = Math.max(.55, Math.min(1.3, dw / 2000));
          map = function(p){ var nx = mob ? (p[0] * IW - MC[0]) / MC[2] : p[0], ny = mob ? (p[1] * IH - MC[1]) / MC[3] : p[1]; return [ox + nx * dw, oy + ny * dh]; };
        };
        var add = function(P, dur, out){ pulses.push({ P: P, t: 0, d: dur, o: out }); };
        var root = function(){ add(ROOTS[(Math.random() * ROOTS.length) | 0], 1700 + Math.random() * 800, 0); };
        var dot = function(x, y, r, a){
          var gr = g.createRadialGradient(x, y, 0, x, y, r * 3.2);
          gr.addColorStop(0, 'rgba(255,240,220,' + a + ')'); gr.addColorStop(.3, 'rgba(255,150,50,' + (a * .75) + ')'); gr.addColorStop(1, 'rgba(253,75,3,0)');
          g.fillStyle = gr; g.beginPath(); g.arc(x, y, r * 3.2, 0, 6.2832); g.fill();
        };
        var line = function(P, i0, i1, a){
          g.strokeStyle = 'rgba(255,190,120,' + a + ')'; g.lineWidth = 1.6 * k; g.shadowColor = '#FD4B03'; g.shadowBlur = 10 * k; g.beginPath();
          for (var i = i0; i <= i1; i++) { var q = map(P.p[i]); if (i === i0) g.moveTo(q[0], q[1]); else g.lineTo(q[0], q[1]); }
          g.stroke(); g.shadowBlur = 0;
        };
        var ecgAt = function(d){ if (d <= E1.L) return at(E1, d / E1.L); if (d < E1.L + GAP) return null; return at(E2, Math.min(1, (d - E1.L - GAP) / E2.L)); };
        var frame = function(ts){
          if (!run) return;
          var dt = last ? Math.min(60, ts - last) : 16; last = ts;
          if (cv.width !== Math.round(pic.clientWidth * D) || cv.height !== Math.round(pic.clientHeight * D)) layout();
          g.clearRect(0, 0, W, H); g.globalCompositeOperation = 'lighter';
          var w0 = walk; walk = (walk + dt * TOT / 16000) % TOT; if (walk < w0) fired = {};
          SPK.forEach(function(S, i){ if (!fired[i] && walk >= S.a) { fired[i] = 1; flashes.push({ S: S, t: 0 }); root(); root(); root(); } });
          if (!fired.c && walk >= E1.L + GAP / 2) { fired.c = 1; chip = 1; OUT.forEach(function(P){ add(P, 1500 + Math.random() * 700, 1); }); }
          nextAmb -= dt; if (nextAmb <= 0) { root(); nextAmb = 500 + Math.random() * 700; }
          nextOut -= dt; if (nextOut <= 0) { add(OUT[(Math.random() * OUT.length) | 0], 1600, 1); nextOut = 1500 + Math.random() * 1500; }
          flashes = flashes.filter(function(f){ f.t += dt; var a = 1 - f.t / 700; if (a <= 0) return false; line(f.S.P, f.S.i0, f.S.i1, a * .85); return true; });
          pulses = pulses.filter(function(Q){
            Q.t += dt; var t = Q.t / Q.d; if (t >= 1) { if (!Q.o) chip = Math.min(1, chip + .22); return false; }
            var e = t < .5 ? 2*t*t : 1 - 2*(1-t)*(1-t), fade = Math.min(1, t / .1, (1 - t) / .12);
            for (var j = 0; j < 5; j++) { var q = e - j * 12 / Q.P.L; if (q < 0) break; var pt = map(at(Q.P, q)); dot(pt[0], pt[1], (1.05 - j * .15) * k, fade * (1 - j / 5) * .95); }
            return true;
          });
          chip *= Math.pow(.965, dt / 16);
          var c = map([CX, CY]), cr = 110 * k, cg = g.createRadialGradient(c[0], c[1], 0, c[0], c[1], cr);
          cg.addColorStop(0, 'rgba(255,150,60,' + (.06 + chip * .26) + ')'); cg.addColorStop(1, 'rgba(253,75,3,0)');
          g.fillStyle = cg; g.beginPath(); g.arc(c[0], c[1], cr, 0, 6.2832); g.fill();
          for (var j = 0; j < 6; j++) { var q = ecgAt(walk - j * 7); if (!q) break; q = map(q); dot(q[0], q[1], (1.25 - j * .17) * k, 1 - j / 6); }
          g.globalCompositeOperation = 'source-over';
          requestAnimationFrame(frame);
        };
        layout(); img.addEventListener('load', layout); window.addEventListener('resize', layout);
        var vis = true, go = function(v){ if (v && !run && !document.hidden) { run = true; last = 0; requestAnimationFrame(frame); } else if (!v) run = false; };
        if ('IntersectionObserver' in window) new IntersectionObserver(function(es){ vis = es[0].isIntersecting; go(vis); }).observe(pic); else go(true);
        document.addEventListener('visibilitychange', function(){ go(vis && !document.hidden); });
      };
      var n = 0, iv = setInterval(function(){ var p = document.querySelector('.heroVisual .phx-hero-pic'); if (p) { clearInterval(iv); start(p); } else if (++n > 60) clearInterval(iv); }, 300);
    })();

    /* Hero tiles: the headline box darkens only partially and fades into the city; the grey haze over the middle city tile is removed */
    (function(){
      if (!CONFIG.heroImage) return;
      var st = document.createElement('style');
      st.textContent = '.hero .layoutItem.contentItem{background:linear-gradient(90deg,rgba(0,0,0,.82) 0%,rgba(0,0,0,.62) 36%,rgba(0,0,0,.22) 70%,rgba(0,0,0,0) 100%) !important}' +
        '.hero .layoutItem.contentItem .heroTitle,.hero .layoutItem.contentItem .bulletText{text-shadow:0 2px 16px rgba(0,0,0,.85)}' +
        '.hero .layoutItem.stubItem{background-color:transparent !important}' +
        '@media (max-width:991px){.hero .layoutItem.contentItem{background:linear-gradient(180deg,rgba(0,0,0,.2) 0%,rgba(0,0,0,.62) 45%,rgba(0,0,0,.82) 100%) !important}}';
      document.head.appendChild(st);
    })();

    /* Hide the "Elysium Russian" plan on the page (slider card + calculator dropdown item) - visual only, the plan itself stays in the system.
       The slide is removed only when it is at the end of the slider, so the other plans keep their order and the calculator stays in sync */
    (function(){
      var st = document.createElement('style');
      st.textContent = '.calcSection .choices__item[data-value*="Russian" i]{display:none !important}';
      document.head.appendChild(st);
      var run = function(){
        var sl = document.querySelector('.planSlider'); if (!sl) return;
        var sw = sl.swiper, all = [].slice.call(sl.querySelectorAll('.swiper-slide')), idx = [];
        all.forEach(function(s, i){ var n = s.querySelector('.name'); if (n && /russian/i.test(n.textContent)) idx.push(i); });
        if (!idx.length) return;
        var tail = idx.every(function(i, k){ return i === all.length - idx.length + k; });
        if (!tail) return;
        if (sw && sw.removeSlide) { try { if (sw.activeIndex >= all.length - idx.length) sw.slideTo(0, 0); sw.removeSlide(idx); return; } catch (e) {} }
        idx.forEach(function(i){ all[i].remove(); }); if (sw && sw.update) sw.update();
      };
      run(); setTimeout(run, 1500); setTimeout(run, 4000);
    })();

    /* Hero top-right tile: full-tile carousel of all plans (names "compute"), arrows / bar / swipe to browse, button goes to the plans section; no profit figures; the looping background video is removed */
    (function(){
      var tile = document.querySelector('.hero .bonusItem'), box = tile && tile.querySelector('.heroBonus'), cards = [].slice.call(document.querySelectorAll('.planSlider .planCard'));
      if (!box || !cards.length) return;
      var seen = {}, P = [];
      cards.forEach(function(c){
        var nm = c.querySelector('.name'), cn = c.querySelector('.count'); if (!nm) return;
        var n = nm.textContent.trim(); if (!n || seen[n] || /russian/i.test(n)) return; seen[n] = 1;
        var items = [].slice.call(c.querySelectorAll('.planCharItem')).map(function(it){ var a = it.querySelector('.caption'), b = it.querySelector('.value'); return [a ? a.textContent.trim() : '', b ? b.textContent.trim() : '']; });
        var im = c.querySelector('img');
        P.push({ n: n, k: cn ? cn.textContent.trim() : '', t: items[0] || ['', ''], r: items[2] || ['', ''], img: im ? (im.currentSrc || im.src) : '' });
      });
      if (!P.length) return;
      P.sort(function(a, b){ return (parseInt(a.k, 10) || 0) - (parseInt(b.k, 10) || 0); });
      /* stop and drop the looping background video */
      [].forEach.call(tile.querySelectorAll('video'), function(v){ try { v.pause(); v.removeAttribute('autoplay'); v.preload = 'none'; [].forEach.call(v.querySelectorAll('source'), function(s){ s.remove(); }); v.removeAttribute('src'); v.load(); } catch (e) {} });
      var lang = (document.documentElement.lang || 'en').slice(0, 2);
      var BTN = { ru: '\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043f\u043b\u0430\u043d', vi: 'Ch\u1ecdn g\u00f3i', th: '\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e41\u0e1c\u0e19', ms: 'Pilih pelan' }[lang] || 'Choose plan';
      var sec = document.querySelector('.calcSection'), h = sec && sec.querySelector('h2,h3'), TTL = (h ? h.textContent.trim() : 'Our offers').toUpperCase();
      var css = document.createElement('style');
      css.textContent = '.hero .bonusItem video,.hero .bonusItem .phx-bv{display:none !important}.hero .bonusItem{position:relative;overflow:hidden;background:transparent !important}' +
        '.hero .layoutItem.phx-pc-host{position:relative;overflow:hidden}.hero .heroBonus.phx-pc{position:absolute !important;left:0 !important;top:0 !important;right:0 !important;bottom:0 !important;width:auto !important;height:auto !important;margin:0 !important;transform:none !important;' +
        'padding:28px 30px 26px !important;text-align:left !important;display:flex !important;flex-direction:column;justify-content:space-between;background:transparent !important;border-radius:0 !important;box-shadow:none !important;overflow:hidden;user-select:none}' +
        '.phx-pc .bg{display:none}' +
        '.phx-pc .bg.out{opacity:0;transform:scale(1.12)}' +
        '.phx-pc .sh{position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient(315deg,rgba(0,0,0,.85) 0%,rgba(0,0,0,.62) 25%,rgba(0,0,0,.36) 50%,rgba(0,0,0,.12) 75%,rgba(0,0,0,0) 100%);pointer-events:none}.phx-pc .nm,.phx-pc .ln,.phx-pc .top{text-shadow:0 1px 3px rgba(0,0,0,.95),0 2px 16px rgba(0,0,0,.95)}' +
        '.phx-pc .top,.phx-pc .mid,.phx-pc .bot{position:relative}' +
        '.phx-pc .top{display:flex;justify-content:space-between;align-items:center;font:11px/1 "Nasalization Rg",Arial,sans-serif;letter-spacing:3px;color:#FD4B03}' +
        '.phx-pc .top b{font-weight:400;color:#9a9a9a;letter-spacing:2px}' +
        '.phx-pc .top{display:none !important}' +
        '.phx-pc .nm{margin:0 0 14px;min-height:1.1em;font:400 clamp(30px,2.8vw,52px)/1.05 "Nasalization Rg",Arial,sans-serif;letter-spacing:2px;color:#fff;text-transform:uppercase;text-shadow:0 0 22px rgba(253,75,3,.45)}' +
        '.phx-pc .nm i{font-style:normal;color:#FD4B03}' +
        '.phx-pc .ln{margin:0 0 6px;min-height:1.4em;font:14px/1.4 Arial,sans-serif;color:#c4c4c4;max-width:80%}.phx-pc .ln em{font-style:normal}.phx-pc .ln span{color:#fff}' +
        '.phx-pc .bar{display:flex;gap:4px;margin:0 0 18px}.phx-pc .bar u{flex:1;height:14px;cursor:pointer;text-decoration:none;position:relative}' +
        '.phx-pc .bar u::after{content:"";position:absolute;left:0;right:0;top:6px;height:3px;background:rgba(255,255,255,.18);transition:background .3s,box-shadow .3s}' +
        '.phx-pc .bar u:hover::after{background:rgba(253,75,3,.6)}.phx-pc .bar u.on::after{background:#FD4B03;box-shadow:0 0 8px #FD4B03}' +
        '.phx-pc .row{display:flex;align-items:center;gap:10px}' +
        '.phx-pc .ar{width:40px;height:40px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;box-shadow:inset 0 0 0 1px rgba(255,255,255,.35);transition:box-shadow .25s,color .25s,background .25s}' +
        '.phx-pc .ar:hover{box-shadow:inset 0 0 0 1px #FD4B03;color:#FD4B03;background:rgba(253,75,3,.08)}' +
        '.phx-pc .go{margin-left:auto;display:inline-flex;align-items:center;gap:10px;height:40px;padding:0 18px;cursor:pointer;font:12px/1 "Nasalization Rg",Arial,sans-serif;letter-spacing:2px;color:#141414;background:#FD4B03;text-transform:uppercase;' +
        'clip-path:polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px);transition:filter .25s}' +
        '.phx-pc .go:hover{filter:brightness(1.12)}' +
        '@media (max-width:767px){.hero .layoutGrid.rows-2{grid-template-columns:minmax(0,46fr) minmax(0,54fr) !important}.hero .bonusItem{min-width:0}' +
        '.hero .heroBonus.phx-pc{padding:14px 12px 12px !important}.phx-pc .top{font-size:9px;letter-spacing:1.5px}.phx-pc .nm{font-size:20px !important;letter-spacing:1px;margin:0 0 8px}' +
        '.phx-pc .ln{font-size:11px;margin:0 0 4px;max-width:none}.phx-pc .bar{gap:2px;margin:0 0 10px}.phx-pc .ar{width:30px;height:30px}.phx-pc .go{height:30px;padding:0 9px;font-size:9px;letter-spacing:1px;gap:5px}.phx-pc .go svg{display:none}}';
      document.head.appendChild(css);
      box.className = 'heroBonus phx-pc';
      /* desktop: the carousel sits in the lower right tile (the upper one shows the picture); on phones it stays in the upper tile */
      var host = function(){
        var b = tile.getBoundingClientRect(), low = [].slice.call(tile.parentElement.children).filter(function(e){ var r = e.getBoundingClientRect(); return e !== tile && e.classList.contains('layoutItem') && Math.abs(r.left - b.left) < 6 && r.top > b.top + 20 && r.width > 120 && r.height > 120; })[0] || tile;
        if (box.parentElement !== low) { low.classList.add('phx-pc-host'); low.appendChild(box); }
      };
      host(); window.addEventListener('resize', function(){ clearTimeout(host.t); host.t = setTimeout(host, 200); });
      var arr = function(d){ return '<svg width="14" height="14" viewBox="0 0 14 14"><path d="' + (d < 0 ? 'M9 2 4 7l5 5' : 'M5 2l5 5-5 5') + '" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>'; };
      box.innerHTML = '<i class="bg"></i><i class="sh"></i><div class="top"><span>' + TTL + '</span><b class="ix"></b></div>' +
        '<div class="mid"><div class="nm"></div><div class="ln l1"></div><div class="ln l2"></div></div>' +
        '<div class="bot"><div class="bar">' + P.map(function(){ return '<u></u>'; }).join('') + '</div>' +
        '<div class="row"><span class="ar pv">' + arr(-1) + '</span><span class="ar nx">' + arr(1) + '</span>' +
        '<span class="go">' + BTN + ' <svg width="16" height="10" viewBox="0 0 16 10"><path d="M0 5h14M10 1l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></span></div></div>';
      var bg = box.querySelector('.bg'), ix = box.querySelector('.ix'), nm = box.querySelector('.nm'), l1 = box.querySelector('.l1'), l2 = box.querySelector('.l2'), bars = box.querySelectorAll('.bar u');
      var GL = '01#%$<>/AIX', cur = -1, hold = false, dec = 0, idle = 0;
      var tms = [], scr = function(el, txt, delay){
        var f = -delay, step = Math.max(1, Math.round(txt.length / 18));
        var t = setInterval(function(){
          f++; if (f < 0) return;
          var n = f * step; el.textContent = txt.split('').map(function(ch, j){ return ch === ' ' || j < n ? ch : (j < n + 5 ? GL.charAt((Math.random() * GL.length) | 0) : ''); }).join('');
          if (n >= txt.length) { clearInterval(t); el.textContent = txt; }
        }, 40);
        tms.push(t);
      };
      var esc = function(s){ return s.replace(/[&<>"]/g, function(c){ return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
      var show = function(i){
        cur = (i + P.length) % P.length; var p = P[cur];
        ix.textContent = (cur + 1 < 10 ? '0' : '') + (cur + 1) + ' / ' + (P.length < 10 ? '0' : '') + P.length;
        /* term / capital lines compute too */
        tms.forEach(clearInterval); tms = [];
        [[l1, p.t], [l2, p.r]].forEach(function(L, li){
          L[0].innerHTML = '<em></em> <span></span>';
          scr(L[0].firstChild, L[1][0], li * 4); scr(L[0].lastChild, L[1][1], 6 + li * 4);
        });
        [].forEach.call(bars, function(b, j){ b.classList.toggle('on', j === cur); });
        bg.classList.add('out'); setTimeout(function(){ if (p.img) bg.style.backgroundImage = 'url("' + p.img + '")'; bg.classList.remove('out'); }, 350);
        var fin = p.n.toUpperCase(), f = 0; clearInterval(dec);
        dec = setInterval(function(){
          f++;
          nm.innerHTML = fin.split('').map(function(ch, j){ return j < f / 3 ? esc(ch) : (j < f / 3 + 4 ? '<i>' + GL.charAt((Math.random() * GL.length) | 0) + '</i>' : ''); }).join('');
          if (f / 3 >= fin.length) { clearInterval(dec); nm.textContent = fin; }
        }, 45);
      };
      /* user browsing pauses the auto-rotation for a while */
      var touch = function(){ idle = Date.now() + 9000; };
      box.querySelector('.pv').addEventListener('click', function(e){ e.stopPropagation(); touch(); show(cur - 1); });
      box.querySelector('.nx').addEventListener('click', function(e){ e.stopPropagation(); touch(); show(cur + 1); });
      [].forEach.call(bars, function(b, j){ b.addEventListener('click', function(e){ e.stopPropagation(); touch(); show(j); }); });
      box.querySelector('.go').addEventListener('click', function(e){ e.stopPropagation(); if (sec) scrollTo({ top: Math.max(0, sec.getBoundingClientRect().top + scrollY - 90), behavior: 'smooth' }); });
      var sx = null;
      box.addEventListener('touchstart', function(e){ sx = e.touches[0].clientX; }, { passive: true });
      box.addEventListener('touchend', function(e){ if (sx === null) return; var dx = e.changedTouches[0].clientX - sx; sx = null; if (Math.abs(dx) > 40) { touch(); show(cur + (dx < 0 ? 1 : -1)); } });
      box.addEventListener('mouseenter', function(){ hold = true; }); box.addEventListener('mouseleave', function(){ hold = false; });
      show(0);
      setInterval(function(){ if (!hold && !document.hidden && Date.now() > idle) show(cur + 1); }, 4000);
    })();

    /* Plans slider: the plan picture fills the whole card (it was cut off with an empty band at the bottom); soft shade keeps the texts readable */
    (function(){
      var st = document.createElement('style');
      st.textContent = '@media (min-width:768px){.planSlider .planCard{position:relative}.planSlider .planCard .infoLine{position:relative;z-index:2}' +
        '.planSlider .planCard .imageContainer{top:0 !important;left:0 !important;right:0 !important;bottom:0 !important;width:auto !important;height:auto !important;margin:0 !important;transform:none !important;overflow:hidden}' +
        '.planSlider .planCard .imageContainer img{width:100% !important;height:100% !important;object-fit:cover}' +
        '.planSlider .planCard .imageContainer::after{content:"";position:absolute;left:0;top:0;right:0;bottom:0;background:linear-gradient(180deg,rgba(0,0,0,.55) 0%,rgba(0,0,0,0) 22%,rgba(0,0,0,0) 68%,rgba(0,0,0,.8) 100%);pointer-events:none}}';
      document.head.appendChild(st);
    })();

    /* Widget is ready: lets the site's early <head> snippet (html:not(.phx-ready) ...) show the header buttons again, so the old buttons / video never flash on reload */
    document.documentElement.classList.add('phx-ready');

    var phxOn = function(v){ return v === 'on' || (v === 'demo' && /phxdemo/.test(location.hash + location.search)); };
    if (phxOn(CONFIG.menuIntro)) {
    /* Intro: menu + hero texts "compute" letter by letter (code glyphs) */
    var PHX_GL = '01#%$₮▲▼/AIX<>';
    var phxMiCss = document.createElement('style');
    phxMiCss.textContent = '.phx-mi{white-space:nowrap}' +
      '.phx-mi i{font-style:normal;display:inline-block;text-align:center;transition:color .35s,text-shadow .6s,transform .4s,opacity .35s}' +
      '.phx-mi i.w{opacity:0;transform:translateY(5px)}' +
      '.phx-mi i.c{opacity:1;color:#FD4B03 !important;-webkit-text-fill-color:#FD4B03;text-shadow:0 0 8px rgba(253,75,3,.75);transform:translateY(-1px)}' +
      '.phx-mi i.k{opacity:1;transform:none;text-shadow:0 0 12px rgba(253,75,3,.9),0 0 2px rgba(255,255,255,.9)}';
    document.head.appendChild(phxMiCss);
    var phxWait = document.createElement('style');
    phxWait.textContent = (innerWidth > 991 ? '.menuList > li > a,' : '') + '.heroContent .heroTitle,.heroContent .bulletText p,.heroBonus .value,.heroInner .themeBtn,.heroContent .themeBtn{color:transparent !important;text-shadow:none !important}';
    document.head.appendChild(phxWait);
    var phxVis = function(e){ var r = e.getBoundingClientRect(); return e.offsetParent && r.width > 0 && r.top < innerHeight && r.bottom > 0; };
    var phxQ = function(sel){ return [].slice.call(document.querySelectorAll(sel)).filter(phxVis); };
    var phxTexts = function(el){ var w = document.createTreeWalker(el, 4, null, false), n, out = []; while ((n = w.nextNode())) if (n.textContent.trim()) out.push(n); return out; };
    var phxCompute = function(els, o){
      var off = o.delay || 0;
      els.forEach(function(el){
        if (!el || el.__phxMi) return; el.__phxMi = 1;
        var parts = phxTexts(el), left = parts.length;
        parts.forEach(function(tn){
          var txt = tn.textContent, box = document.createElement('span'), ch = [], rg = document.createRange(), tops = [], last = null, pend = '';
          box.className = 'phx-mi' + (o.green ? ' phx-mi-g' : ''); o._n = (o._n || 0) + 1;
          for (var q = 0; q < txt.length; q++) { if (/\s/.test(txt.charAt(q))) { tops.push(null); continue; } rg.setStart(tn, q); rg.setEnd(tn, q + 1); var rr = rg.getClientRects(); tops.push(rr.length ? rr[0].top : null); }
          txt.split('').forEach(function(c, q){
            if (/\s/.test(c)) { pend += c; return; }
            var t = tops[q], br = last !== null && t !== null && t > last + 3;
            if (br) box.appendChild(document.createElement('br')); else if (pend) box.appendChild(document.createTextNode(pend));
            pend = ''; if (t !== null) last = t;
            var i = document.createElement('i'); i.textContent = c; box.appendChild(i); ch.push({ i: i, c: c });
          });
          if (pend) box.appendChild(document.createTextNode(pend));
          tn.parentNode.replaceChild(box, tn);
          ch.forEach(function(x){ x.w = x.i.getBoundingClientRect().width; });
          ch.forEach(function(x){ x.i.style.width = x.w + 'px'; x.i.className = 'w'; });
          var f = -Math.round(off); off += (ch.length * o.step + o.scr) * o.lap;
          var iv = setInterval(function(){
            f++; if (f < 0) return;
            var done = true;
            ch.forEach(function(x, k){
              var t0 = k * o.step, t1 = t0 + o.scr, i = x.i;
              if (f < t0) { done = false; }
              else if (f < t1) { if (i.className !== 'c' || f % 2 === 0) { i.className = 'c'; i.textContent = PHX_GL.charAt((Math.random() * PHX_GL.length) | 0); } done = false; }
              else if (i.className !== 'k') { i.className = 'k'; i.textContent = x.c; }
            });
            if (done) {
              clearInterval(iv); if (--o._n === 0 && o.done) o.done();
              setTimeout(function(){
                ch.forEach(function(x){ x.i.style.textShadow = 'none'; });
                setTimeout(function(){ if (box.parentNode) box.parentNode.replaceChild(tn, box); if (--left <= 0) el.__phxMi = 0; }, 600);
              }, 350);
            }
          }, o.ms);
        });
      });
    };
    var phxPulseCss = document.createElement('style');
    phxPulseCss.textContent = '.phx-pulse{position:absolute;left:0;top:0;pointer-events:none;z-index:2147482000;overflow:visible;transition:opacity 1s}' +
      '.phx-pulse.out{opacity:0}.phx-pulse path{fill:none;stroke-linecap:round;stroke-linejoin:round}' +
      '.phx-pulse.rest .hd{opacity:0;transition:opacity .8s}.phx-pulse.rest .tr{stroke:rgba(46,230,130,.5);filter:drop-shadow(0 0 4px rgba(46,230,130,.7));animation:phxRest 4s ease-in-out infinite}' +
      '@keyframes phxRest{0%,100%{opacity:.35}50%{opacity:.75}}' +
      '.phx-glow{filter:drop-shadow(0 0 5px rgba(46,230,130,.6));animation:phxGlowB 4s ease-in-out infinite}' +
      '@keyframes phxGlowB{0%,100%{filter:drop-shadow(0 0 3px rgba(46,230,130,.35))}50%{filter:drop-shadow(0 0 8px rgba(46,230,130,.75))}}' +
      '.phx-pulse .tr{stroke:rgba(46,230,130,.4);stroke-width:1.5;stroke-dasharray:0 100000}' +
      '.phx-pulse .hd{stroke:#8dffc2;stroke-width:2.5;filter:drop-shadow(0 0 4px #2ee682) drop-shadow(0 0 10px #2ee682);stroke-dasharray:0 100000}' +
      '.phx-lit{filter:drop-shadow(0 0 6px rgba(46,230,130,.95)) drop-shadow(0 0 14px rgba(46,230,130,.55));transition:filter .8s}' +
      '.phx-lit.phx-lit-off{filter:none}' +
      '.phx-mi-g i.c{color:#3dff9a !important;-webkit-text-fill-color:#3dff9a;text-shadow:0 0 8px rgba(46,230,130,.85)}' +
      '.phx-mi-g i.k{text-shadow:0 0 12px rgba(46,230,130,.9),0 0 2px #fff}';
    document.head.appendChild(phxPulseCss);
    var PHX_PULSE = false;                    // pulse line along the header: true = on, false = off
    var phxBtnWait = document.createElement('style');
    phxBtnWait.textContent = '.siteHeader .themeBtn:not(.phx-gen){color:transparent !important}';
    if (PHX_PULSE && innerWidth > 991) { document.head.appendChild(phxBtnWait); setTimeout(function(){ phxBtnWait.remove(); }, 9000); }
    /* Pulse line: menu -> PDF -> language -> Sign up -> Log in (buttons light up green) */
    var phxPulse = function(){
      if (!PHX_PULSE) { phxBtnWait.remove(); return; }
      try {
        var q = function(s){ return document.querySelector(s); };
        var last = phxQ('.siteHeader .menuList > li > a').pop() || phxQ('.menuList > li > a').pop();
        var vq = function(sel){ return [].slice.call(document.querySelectorAll(sel)).filter(phxVis)[0]; }, pdf = vq('.siteHeader .fileLink'), lang = vq('.siteHeader .langBtn') || vq('.siteHeader .langContainer');
        var btns = [].slice.call(document.querySelectorAll('.siteHeader .themeBtn')).filter(phxVis);
        var tg = [pdf, lang].concat(btns).filter(function(e){ return e && phxVis(e); });
        if (!last || !tg.length) { phxBtnWait.remove(); return; }
        var sx = scrollX, sy = scrollY, lr = last.getBoundingClientRect(), y = Math.round(lr.top + lr.height / 2 + sy), x = Math.round(lr.right + 10 + sx);
        var d = '', segs = [];
        tg.forEach(function(e){
          var r = e.getBoundingClientRect(), x1 = Math.round(r.left - 6 + sx), w = x1 - x, seg = 'M' + x + ' ' + y;
          if (w > 46) { var m = x + w / 2; seg += ' L' + (m - 16) + ' ' + y + ' L' + (m - 9) + ' ' + (y - 9) + ' L' + (m - 2) + ' ' + (y + 11) + ' L' + (m + 5) + ' ' + (y - 5) + ' L' + (m + 10) + ' ' + y; }
          seg += ' L' + Math.max(x1, x + 1) + ' ' + y;
          d += seg + ' '; segs.push({ el: e, seg: seg }); x = Math.round(r.right + 6 + sx);
        });
        var NS = 'http://www.w3.org/2000/svg', svg = document.createElementNS(NS, 'svg');
        svg.setAttribute('class', 'phx-pulse'); svg.setAttribute('width', document.documentElement.scrollWidth); svg.setAttribute('height', y + 40);
        svg.innerHTML = '<path class="tr" d="' + d + '"/><path class="hd" d="' + d + '"/><path class="tmp" d=""/>';
        document.body.appendChild(svg);
        var tr = svg.querySelector('.tr'), hd = svg.querySelector('.hd'), tmp = svg.querySelector('.tmp'), acc = 0;
        segs.forEach(function(s){ tmp.setAttribute('d', s.seg); s.a = acc; acc += tmp.getTotalLength(); s.b = acc; });
        tmp.remove();
        var L = acc, idx = 0, HEAD = 26;
        var light = function(el){
          el.classList.add('phx-lit');
          if (el.classList.contains('themeBtn')) { el.classList.add('phx-gen'); phxCompute([el], { step: 1.2, scr: 7, lap: 1, ms: 45, green: true }); }
          var isLast = el === segs[segs.length - 1].el;
          setTimeout(function(){ el.classList.add('phx-lit-off'); }, 2600);
          setTimeout(function(){ el.classList.remove('phx-lit', 'phx-lit-off'); if (isLast) el.classList.add('phx-glow'); }, 3500);
        };
        var finish = function(){ phxBtnWait.remove(); setTimeout(function(){ svg.classList.add('rest'); }, 600); };
        var drop = function(){ svg.classList.add('out'); setTimeout(function(){ svg.remove(); }, 1000); window.removeEventListener('resize', drop); };
        window.addEventListener('resize', drop);
        var step = function(){
          var s = segs[idx]; if (!s) { finish(); return; }
          var t0 = performance.now(), dur = Math.max(320, (s.b - s.a) * 7);
          var fr = function(now){
            var k = Math.min(1, (now - t0) / dur), e2 = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2, pos = s.a + (s.b - s.a) * e2;
            tr.style.strokeDasharray = pos + ' ' + (L + 50);
            hd.style.strokeDasharray = HEAD + ' ' + (L + 50); hd.style.strokeDashoffset = -(pos - HEAD);
            if (k < 1) requestAnimationFrame(fr); else { light(s.el); idx++; setTimeout(step, 260); }
          };
          requestAnimationFrame(fr);
        };
        step();
      } catch (e) { phxBtnWait.remove(); }
    };
    var PHX_MENU = { step: 1.6, scr: 8, lap: 0.5, ms: 55 };
    var phxRun = function(){
      try {
        if (innerWidth > 991) { var ml = phxQ('.menuList > li > a'); if (ml.length) phxCompute(ml, { step: 1.6, scr: 8, lap: 0.5, ms: 55, done: phxPulse }); else phxPulse(); }
        var btn = phxQ('.themeBtn').filter(function(b){ return /start/i.test(b.textContent); }).slice(0, 1);
        phxCompute(btn.concat(phxQ('.heroContent .bulletText p'), phxQ('.heroContent .heroTitle')), { step: 0.9, scr: 8, lap: 0.35, ms: 50, delay: 6 });
        phxCompute(phxQ('.heroBonus .value'), { step: 1.1, scr: 8, lap: 0.45, ms: 50, delay: 14 });
      } catch (e) {}
      phxWait.remove();
    };
    var phxMiGo = function(){ if (phxMiGo.done) return; phxMiGo.done = 1; setTimeout(phxRun, 250); };
    (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(function(){ if (document.readyState === 'complete') phxMiGo(); else window.addEventListener('load', phxMiGo); });
    setTimeout(phxMiGo, 3000);
    if (innerWidth <= 991) {
      document.addEventListener('click', function(e){ if (e.target.closest && e.target.closest('.burger')) setTimeout(function(){ var mc = document.querySelector('.menuContainer'); if (mc && mc.classList.contains('active')) phxCompute(phxQ('.menuList > li > a'), PHX_MENU); }, 320); }, true);
    }
    }
    /* Section titles further down "compute" letter by letter when scrolled into view */
    if (typeof phxCompute === 'function' && 'IntersectionObserver' in window) (function(){
      var swc = document.createElement('style');
      swc.textContent = '.phx-sw{visibility:hidden}';
      document.head.appendChild(swc);
      var sl = [].slice.call(document.querySelectorAll('h2.sectionTitle, .textTitle')).filter(function(e){
        return e.getBoundingClientRect().top > innerHeight && e.textContent.trim() && !e.closest('#phx-zoom, #jcont, footer');
      });
      if (!sl.length) return;
      sl.forEach(function(e){ e.classList.add('phx-sw'); });
      var sio = new IntersectionObserver(function(es){
        es.forEach(function(en){
          if (!en.isIntersecting) return;
          var e = en.target; sio.unobserve(e);
          e.classList.remove('phx-sw');
          try {
            phxCompute([e], e.tagName === 'H2' ? { step: 1.1, scr: 8, lap: 0.4, ms: 45 } : { step: 0.8, scr: 7, lap: 0.4, ms: 40, delay: 5 });
          } catch (x) {}
        });
      }, { threshold: 0.5, rootMargin: '0px 0px -6% 0px' });
      sl.forEach(function(e){ sio.observe(e); });
    })();

    /* Back-to-top button in the SUPPORT style (above SUPPORT, shows after scrolling) */
    (function(){
      var uc = document.createElement('style');
      uc.textContent = '#phx-up{position:fixed;right:24px;bottom:86px;z-index:2147483000;width:52px;height:52px;padding:0;border:0;cursor:pointer;display:grid;place-items:center;' +
        'background:linear-gradient(135deg,transparent 7px,#FD4B03 7px,#FD4B03 8.5px,transparent 8.5px) top left/14px 14px no-repeat,' +
        'linear-gradient(-45deg,transparent 7px,#FD4B03 7px,#FD4B03 8.5px,transparent 8.5px) bottom right/14px 14px no-repeat,#141414;' +
        'box-shadow:inset 0 0 0 1px #FD4B03;clip-path:polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px);' +
        'opacity:0;transform:translateY(14px);pointer-events:none;transition:opacity .35s,transform .35s,filter .2s}' +
        '#phx-up.on{opacity:1;transform:none;pointer-events:auto}' +
        '#phx-up:hover{filter:brightness(1.25)}' +
        '#phx-up svg{width:20px;height:20px;display:block;transition:transform .25s}' +
        '#phx-up:hover svg{transform:translateY(-3px)}' +
        '#phx-up::after{content:"";position:absolute;left:4px;bottom:4px;height:2px;width:calc((100% - 8px) * var(--p,0));background:#FD4B03;box-shadow:0 0 6px rgba(253,75,3,.8)}' +
        '#phx-support-btn.act ~ #phx-up,#phx-support-btn.phx-hidden ~ #phx-up{opacity:0 !important;pointer-events:none !important}' +
        '@media (max-width:600px){#phx-up{right:12px;bottom:66px;width:46px;height:46px}}';
      document.head.appendChild(uc);
      var up = document.createElement('button');
      up.id = 'phx-up'; up.type = 'button'; up.setAttribute('aria-label', 'Back to top');
      up.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="#FD4B03" stroke-width="2.4" stroke-linecap="square" d="M5 15l7-7 7 7"/></svg>';
      up.onclick = function(){ try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) { window.scrollTo(0, 0); } };
      document.body.appendChild(up);
      var upd = function(){
        var y = window.scrollY || document.documentElement.scrollTop, mx = document.documentElement.scrollHeight - innerHeight;
        up.classList.toggle('on', y > Math.max(500, innerHeight * 0.8));
        up.style.setProperty('--p', mx > 0 ? Math.min(1, y / mx).toFixed(3) : 0);
      };
      var tk = 0;
      window.addEventListener('scroll', function(){ if (tk) return; tk = 1; requestAnimationFrame(function(){ tk = 0; upd(); }); }, { passive: true });
      upd();
    })();

    if (phxOn(CONFIG.marketPanel)) {
    /* Left market panel: "LIVE MARKET" terminal instead of the sliding cards */
    (function(){
      var hr = document.querySelector('.heroRate'); if (!hr || hr.__phx) return; hr.__phx = 1;
      var css = '.heroRate.phx-mk .rateSlider{display:none !important}' +
        '.phx-mk-box{position:absolute;inset:6px;display:flex;flex-direction:column;padding:12px 10px 10px;box-sizing:border-box;font-family:"Nasalization Rg",Arial,sans-serif;color:#fff;' +
        'background:linear-gradient(180deg,rgba(253,75,3,.06),rgba(0,0,0,0) 40%),#0a0a0a;border:1px solid rgba(253,75,3,.35);' +
        'clip-path:polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px);overflow:hidden}' +
        '.phx-mk-hd{display:flex;align-items:center;gap:7px;white-space:nowrap;font-size:9.5px;letter-spacing:1.5px;color:#a3a3a3;margin:0 2px 8px}' +
        '.phx-mk-hd b{width:7px;height:7px;border-radius:50%;background:#2ee682;box-shadow:0 0 0 0 rgba(46,230,130,.6);animation:phxMkP 1.8s ease-out infinite}' +
        '.phx-mk-hd span{margin-left:auto;color:#FD4B03;font-size:8.5px;letter-spacing:.5px}' +
        '@keyframes phxMkP{100%{box-shadow:0 0 0 9px rgba(46,230,130,0)}}' +
        '.phx-mk-list{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:space-between}' +
        '.phx-mk-row{position:relative;display:grid;grid-template-columns:24px 1fr auto;grid-template-rows:auto auto;column-gap:8px;row-gap:3px;line-height:1.2;align-items:center;padding:5px 6px;border-bottom:1px solid #1d1d1d}' +
        '.phx-mk-row:last-child{border-bottom:0}' +
        '.phx-mk-row img{grid-row:1/3;width:22px;height:22px;filter:grayscale(1) brightness(1.6);opacity:.9}' +
        '.phx-mk-n{font-size:11px;letter-spacing:1px;color:#cfcfcf}' +
        '.phx-mk-v{grid-column:2/4;font-size:12px;letter-spacing:.5px;color:#fff;transition:color .6s,text-shadow .6s}' +
        '.phx-mk-c{font-size:10px;line-height:1.3;padding:1px 5px;border-radius:3px;justify-self:end}' +
        '.phx-mk-c.up{color:#3dff9a;background:rgba(46,230,130,.1)}.phx-mk-c.down{color:#ff5a5a;background:rgba(255,80,80,.1)}' +
        '.phx-mk-s{position:absolute;right:6px;bottom:5px;width:44px;height:14px;opacity:.9}' +
        '.phx-mk-row.fl .phx-mk-v{color:#FD4B03;text-shadow:0 0 10px rgba(253,75,3,.8)}' +
        '.phx-mk-scan{position:absolute;left:-10px;right:-10px;height:46px;pointer-events:none;background:linear-gradient(180deg,transparent,rgba(253,75,3,.10) 50%,transparent);' +
        'border-top:1px solid rgba(253,75,3,.25);animation:phxMkScan 6s linear infinite}' +
        '@keyframes phxMkScan{0%{top:-46px}100%{top:100%}}';
      var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
      var slides = [].slice.call(hr.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)')), seen = {}, coins = [];
      slides.forEach(function(s){ var n = s.querySelector('.name'); if (!n || seen[n.textContent]) return; seen[n.textContent] = 1; coins.push(s); });
      var box = document.createElement('div'); box.className = 'phx-mk-box';
      box.innerHTML = '<div class="phx-mk-hd"><b></b>LIVE MARKET<span></span></div><div class="phx-mk-list"><div class="phx-mk-scan"></div></div>';
      var list = box.querySelector('.phx-mk-list'), rows = {};
      coins.forEach(function(s){
        var sym = s.querySelector('.name').textContent.trim(), row = document.createElement('div'); row.className = 'phx-mk-row';
        row.innerHTML = '<img alt=""><span class="phx-mk-n"></span><span class="phx-mk-c"></span><span class="phx-mk-v"></span><svg class="phx-mk-s" viewBox="0 0 54 16" preserveAspectRatio="none"></svg>';
        row.querySelector('img').src = s.querySelector('img').src; row.querySelector('.phx-mk-n').textContent = sym;
        list.appendChild(row); rows[sym] = { row: row, src: s };
      });
      hr.classList.add('phx-mk'); if (getComputedStyle(hr).position === 'static') hr.style.position = 'relative'; hr.appendChild(box);
      function sync(){
        Object.keys(rows).forEach(function(sym){
          var r = rows[sym], p = r.src.querySelector('.progress'), v = r.src.querySelector('.value').textContent.trim();
          var c = r.row.querySelector('.phx-mk-c'), vv = r.row.querySelector('.phx-mk-v'), up = !/down|minus/.test(p.className) && !/^-/.test(p.textContent.trim());
          c.className = 'phx-mk-c ' + (up ? 'up' : 'down'); c.textContent = (up ? '▲ ' : '▼ ') + p.textContent.trim().replace(/^[-+]/, '');
          if (vv.textContent && vv.textContent !== v) { r.row.classList.add('fl'); setTimeout(function(){ r.row.classList.remove('fl'); }, 900); }
          vv.textContent = v;
        });
        var d = new Date(); box.querySelector('.phx-mk-hd span').textContent = ('0' + d.getUTCHours()).slice(-2) + ':' + ('0' + d.getUTCMinutes()).slice(-2) + ' UTC';
      }
      sync(); setInterval(sync, 1000);
      Object.keys(rows).forEach(function(sym){
        fetch('https://api.binance.com/api/v3/klines?symbol=' + sym + 'USDT&interval=1h&limit=24').then(function(r){ return r.json(); }).then(function(k){
          var cl = k.map(function(x){ return +x[4]; }), mn = Math.min.apply(0, cl), mx = Math.max.apply(0, cl), up = cl[cl.length - 1] >= cl[0];
          var pts = cl.map(function(v, i){ return (i * 54 / (cl.length - 1)).toFixed(1) + ',' + (15 - (v - mn) / ((mx - mn) || 1) * 14).toFixed(1); }).join(' ');
          rows[sym].row.querySelector('svg').innerHTML = '<polyline fill="none" stroke="' + (up ? '#2ee682' : '#ff5a5a') + '" stroke-width="1.2" points="' + pts + '"/>';
        }).catch(function(){});
      });
    })();
    }

    /* Language menu: flags + language names, name "computes" on hover */
    (function(){
      var F = {
        en: '<svg viewBox="0 0 20 14"><rect width="20" height="14" fill="#fff"/><g fill="#b22234"><rect y="0" width="20" height="1.08"/><rect y="2.15" width="20" height="1.08"/><rect y="4.3" width="20" height="1.08"/><rect y="6.46" width="20" height="1.08"/><rect y="8.61" width="20" height="1.08"/><rect y="10.77" width="20" height="1.08"/><rect y="12.92" width="20" height="1.08"/></g><rect width="9" height="7.54" fill="#3c3b6e"/><g fill="#fff"><circle cx="1.6" cy="1.4" r=".45"/><circle cx="3.9" cy="1.4" r=".45"/><circle cx="6.2" cy="1.4" r=".45"/><circle cx="2.75" cy="3.1" r=".45"/><circle cx="5.05" cy="3.1" r=".45"/><circle cx="7.35" cy="3.1" r=".45"/><circle cx="1.6" cy="4.8" r=".45"/><circle cx="3.9" cy="4.8" r=".45"/><circle cx="6.2" cy="4.8" r=".45"/><circle cx="2.75" cy="6.4" r=".45"/><circle cx="5.05" cy="6.4" r=".45"/></g></svg>',
        ru: '<svg viewBox="0 0 20 14"><rect width="20" height="4.67" fill="#fff"/><rect y="4.67" width="20" height="4.67" fill="#0039a6"/><rect y="9.33" width="20" height="4.67" fill="#d52b1e"/></svg>',
        vi: '<svg viewBox="0 0 20 14"><rect width="20" height="14" fill="#da251d"/><polygon fill="#ff0" points="10,2.6 11.06,5.86 14.49,5.86 11.72,7.88 12.77,11.14 10,9.12 7.23,11.14 8.28,7.88 5.51,5.86 8.94,5.86"/></svg>',
        my: '<svg viewBox="0 0 20 14"><rect width="20" height="14" fill="#fff"/><g fill="#cc0001"><rect y="0" width="20" height="1"/><rect y="2" width="20" height="1"/><rect y="4" width="20" height="1"/><rect y="6" width="20" height="1"/><rect y="8" width="20" height="1"/><rect y="10" width="20" height="1"/><rect y="12" width="20" height="1"/></g><rect width="10" height="8" fill="#010066"/><circle cx="4.2" cy="4" r="2.5" fill="#fc0"/><circle cx="5" cy="4" r="2.1" fill="#010066"/><polygon fill="#fc0" points="7.6,2.6 7.95,3.6 9,3.65 8.15,4.25 8.45,5.25 7.6,4.65 6.75,5.25 7.05,4.25 6.2,3.65 7.25,3.6"/></svg>',
        th: '<svg viewBox="0 0 20 14"><rect width="20" height="14" fill="#a51931"/><rect y="2.33" width="20" height="9.33" fill="#f4f5f8"/><rect y="4.67" width="20" height="4.67" fill="#2d2a4a"/></svg>'
      };
      var N = { en: 'English', ru: 'Русский', vi: 'Tiếng Việt', my: 'Bahasa Melayu', th: 'ไทย' };
      var GLL = '01#%$▲▼/AIX<>';
      var st = document.createElement('style');
      st.textContent = '.langMenu{left:auto !important;right:0 !important;width:auto !important;min-width:200px !important}' +
        '.langMenu .langBtn.phx-lang{display:flex !important;align-items:center;gap:10px;white-space:nowrap;justify-content:flex-start;padding:0 12px !important}' +
        '.phx-flag{display:inline-block;width:20px;height:14px;flex:none;border-radius:2px;overflow:hidden;box-shadow:0 0 0 1px rgba(255,255,255,.18)}' +
        '.phx-flag svg{display:block;width:100%;height:100%}' +
        '.phx-lcode{min-width:24px}' +
        '.phx-ln{font-family:"Nasalization Rg",Arial,sans-serif;font-size:12px;letter-spacing:.5px;text-transform:none;color:#9a9a9a;transition:color .25s,text-shadow .25s}' +
        '.langBtn.phx-lang:hover .phx-ln,.langBtn.phx-lang.active .phx-ln{color:#fff}' +
        '.langBtn.phx-lang:hover .phx-ln{text-shadow:0 0 10px rgba(253,75,3,.6)}' +
        '.phx-ln b{font-weight:400;color:#FD4B03}' +
        '.langHead .phx-flag{margin-right:6px;vertical-align:-2px;width:18px;height:12px}';
      document.head.appendChild(st);
      var code = function(a){
        var m = (a.getAttribute('href') || '').match(/lang=([a-z]{2})-([A-Z]{2})/);
        var c = (a.textContent || '').trim().toLowerCase().slice(0, 2);
        return F[c] ? c : (m && F[m[1]] ? m[1] : (m && m[2] === 'MY' ? 'my' : c));
      };
      [].slice.call(document.querySelectorAll('.langMenu .langBtn')).forEach(function(a){
        var c = code(a); if (!F[c] || a.querySelector('.phx-flag')) return;
        var tn = [].slice.call(a.childNodes).filter(function(n){ return n.nodeType === 3 && n.textContent.trim(); })[0];
        a.classList.add('phx-lang');
        var fl = document.createElement('span'); fl.className = 'phx-flag'; fl.innerHTML = F[c]; a.insertBefore(fl, a.firstChild);
        if (tn) { var cs = document.createElement('span'); cs.className = 'phx-lcode'; tn.parentNode.insertBefore(cs, tn); cs.appendChild(tn); }
        var ln = document.createElement('span'); ln.className = 'phx-ln'; ln.textContent = N[c]; a.appendChild(ln);
        var name = N[c], iv;
        a.addEventListener('mouseenter', function(){
          var f = 0; clearInterval(iv);
          iv = setInterval(function(){
            f++;
            ln.innerHTML = '';
            name.split('').forEach(function(ch, i){
              if (ch === ' ' || i < f / 2.2) { ln.appendChild(document.createTextNode(ch)); }
              else { var b = document.createElement('b'); b.textContent = GLL.charAt((Math.random() * GLL.length) | 0); ln.appendChild(b); }
            });
            if (f / 2.2 >= name.length) { clearInterval(iv); ln.textContent = name; }
          }, 40);
        });
      });
      [].slice.call(document.querySelectorAll('.langHead')).forEach(function(h){
        var tn = [].slice.call(h.childNodes).filter(function(n){ return n.nodeType === 3 && n.textContent.trim(); })[0];
        var c = tn ? tn.textContent.trim().toLowerCase().slice(0, 2) : '';
        if (!F[c] || h.querySelector('.phx-flag')) return;
        var fl = document.createElement('span'); fl.className = 'phx-flag'; fl.innerHTML = F[c]; h.insertBefore(fl, tn);
      });
    })();

    /* Language hint: visitors whose phone/browser language is RU / VI / TH / MS get a one-time offer to switch */
    (function(){
      try { if (localStorage.getItem('phxLangHint')) return; } catch (e) {}
      var LH = {
        ru: ['ru-RU', '\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0430\u0439\u0442 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C?', '\u0414\u0430, \u0440\u0443\u0441\u0441\u043A\u0438\u0439'],
        vi: ['vi-VI', 'Xem trang web b\u1EB1ng Ti\u1EBFng Vi\u1EC7t?', 'C\u00F3, Ti\u1EBFng Vi\u1EC7t'],
        th: ['th-TH', '\u0E14\u0E39\u0E40\u0E27\u0E47\u0E1A\u0E44\u0E0B\u0E15\u0E4C\u0E40\u0E1B\u0E47\u0E19\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22?', '\u0E43\u0E0A\u0E48 \u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22'],
        ms: ['ms-MY', 'Lihat laman dalam Bahasa Melayu?', 'Ya, Bahasa Melayu']
      };
      var force = (location.hash.match(/phxlang=([a-z]{2})/) || [])[1];
      var want = force || (((navigator.languages && navigator.languages[0]) || navigator.language || '') + '').slice(0, 2).toLowerCase();
      var cur = (document.documentElement.lang || 'en').slice(0, 2).toLowerCase();
      var d = LH[want]; if (!d || (want === cur && !force)) return;
      var lc = document.createElement('style');
      lc.textContent = '#phx-lh{position:fixed;top:84px;right:24px;z-index:2147483001;display:flex;align-items:center;gap:12px;max-width:calc(100vw - 48px);box-sizing:border-box;padding:10px 10px 10px 14px;' +
        'background:rgba(20,20,20,.97);box-shadow:inset 0 0 0 1px #FD4B03,0 12px 30px rgba(0,0,0,.5);clip-path:polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px);' +
        'font:12px/1.3 "Nasalization Rg",Arial,sans-serif;color:#fff;letter-spacing:.5px;opacity:0;transform:translateY(-12px);pointer-events:none;transition:opacity .4s,transform .4s}' +
        '#phx-lh.on{opacity:1;transform:none;pointer-events:auto}' +
        '#phx-lh .f{display:flex;flex:0 0 auto}#phx-lh .f .phx-flag{width:22px;height:15px}' +
        '#phx-lh .q{flex:1 1 auto;min-width:0}' +
        '#phx-lh .y{flex:0 0 auto;padding:9px 12px;background:#FD4B03;color:#141414;text-decoration:none;font-size:11px;letter-spacing:1px;white-space:nowrap;' +
        'clip-path:polygon(6px 0,100% 0,100% calc(100% - 6px),calc(100% - 6px) 100%,0 100%,0 6px)}' +
        '#phx-lh .y:hover{filter:brightness(1.15)}' +
        '#phx-lh .x{flex:0 0 auto;width:28px;height:28px;border:0;background:none;color:#8a8a8a;font:20px/1 Arial;cursor:pointer;padding:0}#phx-lh .x:hover{color:#fff}' +
        '@media (max-width:600px){#phx-lh{top:auto;bottom:122px;left:12px;right:12px;max-width:none}}';
      document.head.appendChild(lc);
      var hb = document.createElement('div'); hb.id = 'phx-lh'; hb.setAttribute('role', 'dialog');
      hb.innerHTML = '<span class="f"></span><span class="q">' + d[1] + '</span><a class="y" href="/changelang/?lang=' + d[0] + '">' + d[2] + '</a><button class="x" type="button" aria-label="Close">\u00D7</button>';
      var fl = document.querySelector('.langMenu a[href*="lang=' + d[0] + '"] .phx-flag');
      if (fl) hb.querySelector('.f').appendChild(fl.cloneNode(true));
      var hdone = function(){ try { localStorage.setItem('phxLangHint', '1'); } catch (e) {} };
      hb.querySelector('.y').addEventListener('click', hdone);
      hb.querySelector('.x').onclick = function(){ hdone(); hb.classList.remove('on'); setTimeout(function(){ hb.remove(); }, 500); };
      document.body.appendChild(hb);
      setTimeout(function(){
        hb.classList.add('on');
        if (want !== 'th' && typeof phxCompute === 'function') try { phxCompute([hb.querySelector('.q')], { step: 0.7, scr: 6, lap: 1, ms: 40 }); } catch (e) {}
      }, 3500);
      setTimeout(function(){ hb.classList.remove('on'); }, 25000);
    })();

    /* Latest news: 3 newest posts of the Telegram channel (news.json is refreshed from t.me/s/phoinexesofficial) */
    (function(){
      var ft = document.querySelector('footer.siteFooter') || document.querySelector('footer'); if (!ft) return;
      var NEWS = 'https://raw.githubusercontent.com/vpozhar556-star/phoinexes-widget/main/news.json?t=' + Math.floor(Date.now() / 300000);
      var esc = function(s){ return String(s || '').replace(/[&<>"]/g, function(c){ return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
      var nrun = function(){
        fetch(NEWS).then(function(r){ return r.json(); }).then(function(j){
          if (!j || !j.posts || !j.posts.length) return;
          var nc = document.createElement('style');
          nc.textContent = '.phx-news{padding:60px 0 60px}' +
            '.phx-news .phx-nh{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:20px}' +
            '.phx-news .phx-nh .titleWrapper{margin:0}' +
            '.phx-news .phx-ch{font:11px/1 "Nasalization Rg",Arial,sans-serif;letter-spacing:2px;color:#FD4B03;text-decoration:none;white-space:nowrap}' +
            '.phx-news .phx-ch:hover{filter:brightness(1.2)}' +
            '.phx-news .phx-gr{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}' +
            '.phx-news .phx-nc{display:flex;flex-direction:column;background:#141414;color:#fff;text-decoration:none;box-shadow:inset 0 0 0 1px #2e2e2e;' +
            'clip-path:polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px);opacity:0;transform:translateY(18px);transition:opacity .6s,transform .6s,box-shadow .25s}' +
            '.phx-news .phx-nc.in{opacity:1;transform:none}' +
            '.phx-news .phx-nc:hover{box-shadow:inset 0 0 0 1px #FD4B03}' +
            '.phx-news .phx-im{position:relative;aspect-ratio:1/1;overflow:hidden;background:radial-gradient(circle at 70% 40%,rgba(253,75,3,.35),transparent 60%),#0b0b0b}' +
            '.phx-news .phx-im i{position:absolute;left:-24px;top:-24px;right:-24px;bottom:-24px;background:50% 50%/cover no-repeat;filter:blur(18px) brightness(.5)}' +
            '.phx-news .phx-im img{position:absolute;left:0;top:0;width:100%;height:100%;object-fit:contain;transition:transform .6s}' +
            '.phx-news .phx-nc:hover .phx-im img{transform:scale(1.04)}' +
            '.phx-news .phx-im img ~ b{display:none}' +
            '.phx-news .phx-im b{position:absolute;left:16px;bottom:12px;font:400 22px/1 "Nasalization Rg",Arial,sans-serif;letter-spacing:3px;color:rgba(255,255,255,.14)}' +
            '.phx-news .phx-bd{display:flex;flex-direction:column;gap:8px;padding:14px 16px 16px;flex:1}' +
            '.phx-news .phx-dt{font:11px/1 Arial,sans-serif;color:#8a8a8a;letter-spacing:.5px}' +
            '.phx-news .phx-dt i{display:inline-block;width:6px;height:6px;border-radius:50%;background:#FD4B03;margin-right:6px;box-shadow:0 0 6px #FD4B03;vertical-align:1px}' +
            '.phx-news .phx-tl{font:14px/1.35 "Nasalization Rg",Arial,sans-serif;color:#fff;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}' +
            '.phx-news .phx-tx{font:13px/1.5 Arial,sans-serif;color:#a3a3a3;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;white-space:pre-line}' +
            '.phx-news .phx-mo{margin-top:auto;padding-top:4px;font:11px/1 "Nasalization Rg",Arial,sans-serif;letter-spacing:2px;color:#FD4B03}' +
            '@media (max-width:900px){.phx-news .phx-gr{grid-template-columns:1fr}.phx-news{padding:40px 0}}';
          document.head.appendChild(nc);
          var lang = document.documentElement.lang || 'en';
          var cards = j.posts.slice(0, 3).map(function(p){
            var lines = String(p.text || '').split('\n').filter(function(s){ return s.trim(); });
            var title = lines.shift() || '', body = lines.join('\n');
            var dt = '';
            try { var dd = new Date(p.date); dt = dd.toLocaleDateString(lang, { day: 'numeric', month: 'short' }) + ' \u00B7 ' + dd.toLocaleTimeString(lang, { hour: '2-digit', minute: '2-digit' }); } catch (e) {}
            return '<a class="phx-nc" href="' + esc(p.url) + '" target="_blank" rel="noopener">' +
              '<span class="phx-im">' + (p.image ? '<i style="background-image:url(\'' + esc(p.image) + '\')"></i><img src="' + esc(p.image) + '" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.parentNode.removeChild(this.previousSibling);this.remove()">' : '') + '<b>PHOINEXES</b></span>' +
              '<span class="phx-bd"><span class="phx-dt"><i></i>' + esc(dt) + '</span><span class="phx-tl">' + esc(title) + '</span>' +
              (body ? '<span class="phx-tx">' + esc(body) + '</span>' : '') + '<span class="phx-mo">READ IN TELEGRAM \u203A</span></span></a>';
          }).join('');
          var sec = document.createElement('section'); sec.className = 'phx-news';
          sec.innerHTML = '<div class="container"><div class="phx-nh"><div class="titleWrapper"><h2 class="sectionTitle">Latest News</h2></div>' +
            '<a class="phx-ch" href="' + esc(j.channel || 'https://t.me/phoinexesofficial') + '" target="_blank" rel="noopener">TELEGRAM CHANNEL \u203A</a></div>' +
            '<div class="phx-gr">' + cards + '</div></div>';
          var tapS = document.querySelector('.phx-tap');
          ft.parentNode.insertBefore(sec, tapS && tapS.parentNode === ft.parentNode ? tapS : ft);
          var h2 = sec.querySelector('h2'), nl = [].slice.call(sec.querySelectorAll('.phx-nc'));
          if ('IntersectionObserver' in window) {
            if (typeof phxCompute === 'function') h2.classList.add('phx-sw');
            var nio = new IntersectionObserver(function(es){
              es.forEach(function(en){
                if (!en.isIntersecting) return;
                nio.unobserve(en.target);
                if (en.target === h2) { h2.classList.remove('phx-sw'); try { phxCompute([h2], { step: 1.1, scr: 8, lap: 0.4, ms: 45 }); } catch (e) {} }
                else setTimeout(function(){ en.target.classList.add('in'); }, nl.indexOf(en.target) * 140);
              });
            }, { threshold: 0.25 });
            nio.observe(h2); nl.forEach(function(c){ nio.observe(c); });
          } else nl.forEach(function(c){ c.classList.add('in'); });
        }).catch(function(){});
      };
      if ('IntersectionObserver' in window) {
        var fio = new IntersectionObserver(function(es){ if (es[0].isIntersecting) { fio.disconnect(); nrun(); } }, { rootMargin: '900px 0px' });
        fio.observe(ft);
      } else nrun();
    })();


    /* Plan cards: 3D tilt + glow on hover (tap pulse on phones), plan name "computes" when the plan changes */
    (function(){
      var slider = document.querySelector('.planSlider'); if (!slider) return;
      var pc = document.createElement('style');
      pc.textContent = '.planSlider .swiper-slide{perspective:1100px}' +
        '.planSlider .planCard{transform-style:preserve-3d;transition:transform .25s ease-out,box-shadow .35s;will-change:transform}' +
        '.planSlider .planCard::after{content:"";position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:3;opacity:0;transition:opacity .35s;' +
        'background:radial-gradient(circle at var(--mx,50%) var(--my,30%),rgba(255,180,120,.22),rgba(253,75,3,.08) 35%,transparent 65%)}' +
        '.planSlider .planCard.phx-tilt{box-shadow:0 18px 40px rgba(0,0,0,.45),0 0 0 1px rgba(253,75,3,.55),0 0 28px rgba(253,75,3,.35)}' +
        '.planSlider .planCard.phx-tilt::after{opacity:1}' +
        '.planSlider .planCard.phx-tap{animation:phxTap .9s ease-out}' +
        '@keyframes phxTap{0%{transform:none;box-shadow:none}30%{transform:rotateX(5deg) rotateY(-6deg) scale(1.015);box-shadow:0 0 0 1px rgba(253,75,3,.7),0 0 30px rgba(253,75,3,.45)}100%{transform:none;box-shadow:none}}' +
        '@media (prefers-reduced-motion:reduce){.planSlider .planCard{transition:none}.planSlider .planCard.phx-tap{animation:none}}';
      document.head.appendChild(pc);
      var act = function(){ return slider.querySelector('.swiper-slide-active .planCard'); };
      var calc = function(card){
        if (!card || typeof phxCompute !== 'function') return;
        var nm = card.querySelector('.planHead .name'); if (nm && !nm.__phxMi) try { phxCompute([nm], { step: 1.4, scr: 7, lap: 1, ms: 40 }); } catch (e) {}
      };
      var fine = window.matchMedia && matchMedia('(hover:hover) and (pointer:fine)').matches;
      if (fine) {
        var cur = null;
        slider.addEventListener('mousemove', function(e){
          var c = act(); if (!c) return;
          if (cur !== c) { if (cur) { cur.classList.remove('phx-tilt'); cur.style.transform = ''; } cur = c; c.classList.add('phx-tilt'); calc(c); }
          var r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
          c.style.transform = 'rotateX(' + ((0.5 - y) * 7).toFixed(2) + 'deg) rotateY(' + ((x - 0.5) * 9).toFixed(2) + 'deg) translateZ(0)';
          c.style.setProperty('--mx', (x * 100).toFixed(1) + '%'); c.style.setProperty('--my', (y * 100).toFixed(1) + '%');
        });
        slider.addEventListener('mouseleave', function(){ if (cur) { cur.classList.remove('phx-tilt'); cur.style.transform = ''; cur = null; } });
      } else {
        slider.addEventListener('touchstart', function(){
          var c = act(); if (!c) return;
          c.classList.remove('phx-tap'); void c.offsetWidth; c.classList.add('phx-tap'); calc(c);
        }, { passive: true });
      }
      /* the plan is switched from the "Your invest plan" select: compute the new name */
      if ('MutationObserver' in window) {
        var last = act();
        new MutationObserver(function(){
          var c = act(); if (c && c !== last) { last = c; calc(c); }
        }).observe(slider, { subtree: true, attributes: true, attributeFilter: ['class'] });
      }
    })();

    /* "How to Get Started": a pulse line runs down the steps while scrolling, each step lights up in turn */
    (function(){
      var ol = document.querySelector('.stepsSection ol'); if (!ol) return;
      var items = [].slice.call(ol.children); if (items.length < 2) return;
      var tc = document.createElement('style');
      tc.textContent = '.stepsSection ol.phx-tl{position:relative;padding-left:30px !important}' +
        '.phx-tl .phx-tl-rail{position:absolute;left:7px;top:6px;bottom:6px;width:2px;background:rgba(255,255,255,.12);border-radius:2px}' +
        '.phx-tl .phx-tl-fill{position:absolute;left:0;top:0;width:100%;height:var(--h,0%);background:linear-gradient(#FD4B03,#ff8a3d);box-shadow:0 0 8px rgba(253,75,3,.9)}' +
        '.phx-tl .phx-tl-fill::after{content:"";position:absolute;left:50%;bottom:-5px;width:10px;height:10px;margin-left:-5px;border-radius:50%;background:#fff;box-shadow:0 0 6px #fff,0 0 16px #FD4B03,0 0 28px #FD4B03;opacity:var(--o,0)}' +
        '.phx-tl > li{position:relative;opacity:.42;transition:opacity .5s}' +
        '.phx-tl > li::before{content:"";position:absolute;left:-28px;top:3px;width:12px;height:12px;box-sizing:border-box;border-radius:50%;border:2px solid #4a4a4a;background:#141414;transition:border-color .4s,box-shadow .4s,background .4s}' +
        '.phx-tl > li.on{opacity:1}' +
        '.phx-tl > li.on::before{border-color:#FD4B03;background:#FD4B03;box-shadow:0 0 0 4px rgba(253,75,3,.18),0 0 14px rgba(253,75,3,.9)}' +
        '.phx-tl > li.hit::before{animation:phxStepHit .8s ease-out}' +
        '@keyframes phxStepHit{0%{box-shadow:0 0 0 0 rgba(253,75,3,.8),0 0 14px rgba(253,75,3,.9)}100%{box-shadow:0 0 0 14px rgba(253,75,3,0),0 0 14px rgba(253,75,3,.9)}}' +
        '.stepsSection .countCard .cardCount{transition:color .5s,text-shadow .5s}' +
        '.stepsSection .countCard.phx-on .cardCount{color:#FD4B03;text-shadow:0 0 14px rgba(253,75,3,.75)}';
      document.head.appendChild(tc);
      ol.classList.add('phx-tl');
      var rail = document.createElement('span'); rail.className = 'phx-tl-rail'; rail.innerHTML = '<span class="phx-tl-fill"></span>';
      ol.appendChild(rail);
      var fill = rail.firstChild;
      var cards = [].slice.call(document.querySelectorAll('.stepsSection .countCard'));
      var cardFor = function(k){ var t = 'step ' + (k + 1); return cards.filter(function(c){ return (c.textContent || '').trim().toLowerCase() === t; })[0]; };
      var upd = function(){
        var r = ol.getBoundingClientRect(); if (!r.height) return;
        var p = Math.max(0, Math.min(1, (innerHeight * 0.62 - r.top) / r.height));
        fill.style.setProperty('--h', (p * 100).toFixed(1) + '%');
        fill.style.setProperty('--o', p > 0 && p < 1 ? 1 : 0);
        items.forEach(function(li, k){
          var on = li.getBoundingClientRect().top - r.top + 8 <= p * r.height + 1;
          if (on && !li.classList.contains('on')) { li.classList.add('on', 'hit'); setTimeout(function(){ li.classList.remove('hit'); }, 900); }
          if (!on && li.classList.contains('on')) li.classList.remove('on');
          var cc = cardFor(k); if (cc) cc.classList.toggle('phx-on', on);
        });
      };
      var tk = 0;
      window.addEventListener('scroll', function(){ if (tk) return; tk = 1; requestAnimationFrame(function(){ tk = 0; upd(); }); }, { passive: true });
      window.addEventListener('resize', upd);
      upd();
    })();

    /* Easter egg: 5 quick clicks on the logo -> PULSE mode for ~2.5 s (green wave + heartbeat line) */
    (function(){
      var logos = [].slice.call(document.querySelectorAll('a.logoLink'));
      if (!logos.length) return;
      var ec = document.createElement('style');
      ec.textContent = '.phx-pz{position:fixed;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:2147483646}' +
        '.phx-pz-tint{background:#1dff8c;mix-blend-mode:hue;opacity:0;transition:opacity .25s}' +
        '.phx-pz-tint.on{opacity:1}' +
        '.phx-pz-t{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;color:#eafff3;opacity:0;transition:opacity .3s;' +
        'font:900 clamp(34px,8vw,92px)/1 Orbitron,"Nasalization Rg",Arial,sans-serif;letter-spacing:.12em;text-shadow:0 0 18px #1dff8c,0 0 42px #0bd66a}' +
        '.phx-pz-t small{font:600 clamp(10px,1.6vw,14px)/1 Orbitron,"Nasalization Rg",Arial,sans-serif;letter-spacing:.45em;color:#9dffc9;text-shadow:0 0 10px #1dff8c}' +
        '.phx-pz-t.on{opacity:1}' +
        'html.phx-pz-shake body{animation:phxShake .28s steps(2) 2}' +
        '@keyframes phxShake{0%{transform:translate(0,0)}25%{transform:translate(-3px,1px)}50%{transform:translate(2px,-2px)}75%{transform:translate(-1px,2px)}100%{transform:translate(0,0)}}';
      document.head.appendChild(ec);
      var GLP = '01#%$\u25B2\u25BC/<>AIX';
      var busy = 0;
      var pulse = function(ox, oy){
        if (busy) return; busy = 1;
        if (!document.querySelector('link[href*="Orbitron"]')) { var fl = document.createElement('link'); fl.rel = 'stylesheet'; fl.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@600;900&display=swap'; document.head.appendChild(fl); }
        var tint = document.createElement('div'); tint.className = 'phx-pz phx-pz-tint';
        var cv = document.createElement('canvas'); cv.className = 'phx-pz';
        var tx = document.createElement('div'); tx.className = 'phx-pz phx-pz-t'; tx.innerHTML = '<span>PULSE</span><small>SYSTEM ONLINE</small>';
        document.body.appendChild(tint); document.body.appendChild(cv); document.body.appendChild(tx);
        var W = innerWidth, H = innerHeight, dpr = Math.min(window.devicePixelRatio || 1, 2);
        cv.width = W * dpr; cv.height = H * dpr; var g = cv.getContext('2d'); g.setTransform(dpr, 0, 0, dpr, 0, 0);
        var de = document.documentElement; de.classList.add('phx-pz-shake'); setTimeout(function(){ de.classList.remove('phx-pz-shake'); }, 600);
        requestAnimationFrame(function(){ tint.classList.add('on'); });
        var big = tx.querySelector('span'), fin = 'PULSE', f = 0;
        setTimeout(function(){ tx.classList.add('on'); }, 350);
        var dv = setInterval(function(){
          f++; var o = ''; for (var i = 0; i < fin.length; i++) o += f > 4 + i * 2 ? fin[i] : GLP.charAt((Math.random() * GLP.length) | 0);
          big.textContent = o; if (f > 4 + fin.length * 2) clearInterval(dv);
        }, 55);
        var ecg = function(x){
          var c = W / 2, u = Math.min(W, 900) / 900, d = x - c;
          if (d < -90 * u || d > 90 * u) return 0;
          if (d < -50 * u) return -Math.sin((d + 90 * u) / (40 * u) * Math.PI) * 10 * u;
          if (d < -20 * u) return 0;
          if (d < -10 * u) return (d + 20 * u) / (10 * u) * 18 * u;
          if (d < 0) return 18 * u - (d + 10 * u) / (10 * u) * 140 * u;
          if (d < 12 * u) return -122 * u + d / (12 * u) * 175 * u;
          if (d < 26 * u) return 53 * u - (d - 12 * u) / (14 * u) * 53 * u;
          if (d < 46 * u) return 0;
          return -Math.sin((d - 46 * u) / (44 * u) * Math.PI) * 16 * u;
        };
        var t0 = performance.now(), D = 2300, cy = H * 0.5;
        var fr = function(now){
          var k = Math.min(1, (now - t0) / D);
          g.clearRect(0, 0, W, H);
          for (var w = 0; w < 3; w++) {
            var kk = k * 1.25 - w * 0.12; if (kk <= 0 || kk >= 1) continue;
            var rr = kk * Math.hypot(W, H);
            g.beginPath(); g.arc(ox, oy, rr, 0, Math.PI * 2);
            g.strokeStyle = 'rgba(29,255,140,' + (0.55 * (1 - kk)) + ')'; g.lineWidth = 3 + 10 * (1 - kk); g.stroke();
          }
          var head = Math.min(1, k / 0.6) * W;
          g.save(); g.shadowColor = '#1dff8c'; g.shadowBlur = 18; g.lineWidth = 3; g.lineJoin = 'round';
          g.strokeStyle = 'rgba(29,255,140,' + (k < 0.75 ? 0.95 : 0.95 * (1 - (k - 0.75) / 0.25)) + ')';
          g.beginPath(); for (var x = 0; x <= head; x += 3) { var y = cy + ecg(x); if (x === 0) g.moveTo(x, y); else g.lineTo(x, y); } g.stroke();
          if (k < 0.6) { g.fillStyle = '#eafff3'; g.beginPath(); g.arc(head, cy + ecg(head), 5, 0, Math.PI * 2); g.fill(); }
          g.restore();
          if (k < 1) requestAnimationFrame(fr);
          else {
            tint.classList.remove('on'); tx.classList.remove('on'); cv.style.transition = 'opacity .4s'; cv.style.opacity = '0';
            setTimeout(function(){ tint.remove(); cv.remove(); tx.remove(); busy = 0; }, 450);
          }
        };
        requestAnimationFrame(fr);
      };
      var hits = [];
      logos.forEach(function(a){
        a.addEventListener('click', function(e){
          var home = (a.getAttribute('href') || '') === '/' && (location.pathname === '/' || location.pathname === '');
          if (!home) return;
          e.preventDefault();
          try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (x) {}
          var now = Date.now(); hits = hits.filter(function(t){ return now - t < 2500; }); hits.push(now);
          if (hits.length >= 5) { hits = []; var r = a.getBoundingClientRect(); pulse(r.left + r.width / 2, r.top + r.height / 2); }
        });
      });
    })();

    /* PHOINEXES TAP game card at the end of the page: game art on the right (4 variants), button opens the official bot.
       Variant: TAP_ART below (1 boss fight, 2 skins squad, 3 champions, 4 gallery); preview any with #tap=N in the URL */
    (function(){
      var ft = document.querySelector('footer.siteFooter') || document.querySelector('footer'); if (!ft) return;
      var TAP_ART = 1;
      var V = +((location.hash.match(/tap=([1-4])/) || [])[1]) || TAP_ART;
      var BOT = 'https://t.me/PHOINEXES_TaP_BOT', A = 'https://vpozhar556-star.github.io/phoinexes-widget/';
      var gc = document.createElement('style');
      gc.textContent = '.phx-tap{padding:20px 0 70px}' +
        '.phx-tap .phx-tc{position:relative;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.15fr);gap:28px;align-items:center;min-height:340px;padding:34px 36px;overflow:hidden;' +
        'background:#141414;box-shadow:inset 0 0 0 1px #FD4B03;clip-path:polygon(16px 0,100% 0,100% calc(100% - 16px),calc(100% - 16px) 100%,0 100%,0 16px)}' +
        '.phx-tap .tx{position:relative;z-index:2}' +
        '.phx-tap .k{font:11px/1 "Nasalization Rg",Arial,sans-serif;letter-spacing:3px;color:#FD4B03}' +
        '.phx-tap h2{margin:12px 0 10px;font:400 clamp(28px,4vw,46px)/1.05 "Nasalization Rg",Arial,sans-serif;color:#fff;letter-spacing:1px}' +
        '.phx-tap h2 b{font-weight:400;color:#FD4B03;text-shadow:0 0 18px rgba(253,75,3,.6)}' +
        '.phx-tap p{margin:0 0 16px;font:15px/1.55 Arial,sans-serif;color:#b5b5b5;max-width:460px}' +
        '.phx-tap .ch{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 22px}' +
        '.phx-tap .ch span{padding:7px 10px;font:11px/1 "Nasalization Rg",Arial,sans-serif;letter-spacing:1px;color:#fff;background:rgba(255,255,255,.05);box-shadow:inset 0 0 0 1px #333}' +
        '.phx-tap .go{display:inline-flex;align-items:center;gap:10px;padding:15px 22px;background:#FD4B03;color:#141414;text-decoration:none;' +
        'font:13px/1 "Nasalization Rg",Arial,sans-serif;letter-spacing:2px;clip-path:polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px);animation:phxGo 2.6s ease-in-out infinite}' +
        '.phx-tap .go:hover{filter:brightness(1.12)}.phx-tap .go svg{width:18px;height:18px}' +
        '@keyframes phxGo{0%,100%{box-shadow:0 0 0 rgba(253,75,3,0)}50%{box-shadow:0 0 26px rgba(253,75,3,.65)}}' +
        /* art panel: right part of the card, fades into the dark side */
        '.phx-tap .art{position:absolute;right:0;top:0;width:62%;height:100%;overflow:hidden;-webkit-mask:linear-gradient(90deg,transparent 0,#000 28%);mask:linear-gradient(90deg,transparent 0,#000 28%);user-select:none;-webkit-tap-highlight-color:transparent}' +
        '.phx-tap .art .sc{position:absolute;left:0;top:0;width:100%;height:100%;background:50% 50%/cover no-repeat;transition:opacity 1s ease}' +
        '.phx-tap .art .kb{animation:phxKb 20s ease-in-out infinite alternate;will-change:transform}' +
        '@keyframes phxKb{from{transform:scale(1) translateX(0)}to{transform:scale(1.05) translateX(-1%)}}' +
        '.phx-tap .art canvas{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none}' +
        '.phx-tap .art .cap{position:absolute;right:18px;bottom:16px;padding:7px 10px;font:11px/1 "Nasalization Rg",Arial,sans-serif;letter-spacing:2px;color:#fff;background:rgba(10,10,10,.65);box-shadow:inset 0 0 0 1px rgba(253,75,3,.6)}' +
        /* variant 1: boss HUD */
        '.phx-tap .hud{position:absolute;right:18px;top:16px;width:min(300px,70%);font:11px/1 "Nasalization Rg",Arial,sans-serif;letter-spacing:2px;color:#d7ffe6;text-shadow:0 0 8px rgba(30,255,120,.6)}' +
        '.phx-tap .hud .bar{margin-top:7px;height:10px;background:rgba(0,0,0,.6);box-shadow:inset 0 0 0 1px rgba(60,255,140,.5)}' +
        '.phx-tap .hud .bar i{display:block;height:100%;width:100%;background:linear-gradient(90deg,#14c45a,#5dff9a);box-shadow:0 0 10px rgba(60,255,140,.7);transition:width .25s}' +
        '.phx-tap .hud .bar.low i{background:linear-gradient(90deg,#ff3b1f,#ff8a3d);box-shadow:0 0 10px rgba(255,80,30,.8)}' +
        '.phx-tap .hit-me{position:absolute;left:58%;top:58%;transform:translate(-50%,-50%);font:12px/1 "Nasalization Rg",Arial,sans-serif;letter-spacing:3px;color:#fff;padding:8px 12px;background:rgba(0,0,0,.55);box-shadow:inset 0 0 0 1px #FD4B03;animation:phxBlink 1.6s ease-in-out infinite;pointer-events:none}' +
        '@keyframes phxBlink{0%,100%{opacity:.35}50%{opacity:1}}' +
                '.phx-tap .art.shake .sc{animation:phxHitShake .18s linear}' +
        '@keyframes phxHitShake{0%{transform:translate(0,0)}25%{transform:translate(-5px,2px)}50%{transform:translate(4px,-3px)}75%{transform:translate(-2px,3px)}100%{transform:translate(0,0)}}' +
        '.phx-tap .dmg{position:absolute;pointer-events:none;font:20px/1 "Nasalization Rg",Arial,sans-serif;color:#fff;text-shadow:0 0 10px #FD4B03,0 0 2px #000;animation:phxDmg .9s ease-out forwards}' +
        '.phx-tap .dmg.crit{font-size:28px;color:#ffd36b;text-shadow:0 0 14px #ff7a00,0 0 2px #000}' +
        '@keyframes phxDmg{0%{opacity:1;transform:translate(-50%,0) scale(.7)}100%{opacity:0;transform:translate(-50%,-80px) scale(1.2)}}' +
        '.phx-tap .slash{position:absolute;pointer-events:none;width:140px;height:4px;margin:-2px 0 0 -70px;background:linear-gradient(90deg,transparent,#fff,#FD4B03,transparent);box-shadow:0 0 14px #FD4B03;animation:phxSlash .35s ease-out forwards}' +
        '@keyframes phxSlash{0%{opacity:1;transform:rotate(var(--r)) scaleX(.2)}100%{opacity:0;transform:rotate(var(--r)) scaleX(1.3)}}' +
        '.phx-tap .win{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:rgba(0,0,0,.45);opacity:0;transition:opacity .4s;pointer-events:none;' +
        'font:400 clamp(26px,3.4vw,44px)/1 "Nasalization Rg",Arial,sans-serif;letter-spacing:3px;color:#fff;text-shadow:0 0 18px #FD4B03}' +
        '.phx-tap .win small{font-size:12px;letter-spacing:3px;color:#ffd0b0;text-shadow:none}' +
        '.phx-tap .win.on{opacity:1}' +
        /* variant 4: gallery dots + glitch */
        '.phx-tap .dots{position:absolute;left:32%;bottom:18px;display:flex;gap:8px}' +
        '.phx-tap .dots b{width:22px;height:3px;background:rgba(255,255,255,.25);transition:background .3s}.phx-tap .dots b.on{background:#FD4B03;box-shadow:0 0 8px #FD4B03}' +
        '.phx-tap .art.glitch .sc.cur{animation:phxGlitch .45s steps(3) 1}' +
        '.phx-tap .art.v1 .sc{background-position:50% 38%}' +
        /* variants 2-3: character cards (skins collection / champions podium) */
        '.phx-tap .art.v2{background:radial-gradient(ellipse at 64% 55%,rgba(253,75,3,.30),transparent 62%),#0e0e0e}' +
        '.phx-tap .art.v3{background:radial-gradient(ellipse at 64% 30%,rgba(255,200,80,.26),transparent 60%),radial-gradient(ellipse at 64% 100%,rgba(30,200,120,.20),transparent 60%),#0e0e0e}' +
        '.phx-tap .art.v2 .cap,.phx-tap .art.v3 .cap{top:16px;bottom:auto}' +
        '.phx-tap .deck{position:absolute;right:4%;top:54%;transform:translateY(-50%);width:64%;display:flex;gap:16px;align-items:center;justify-content:center}' +
        '.phx-tap .v3 .deck{top:auto;bottom:0;transform:none;align-items:flex-end}' +
        '.phx-tap .cw{position:relative;flex:1;min-width:0;filter:drop-shadow(0 0 10px var(--c));animation:phxFl 4.2s ease-in-out infinite;animation-delay:var(--d)}' +
        '.phx-tap .cw.big{flex:1.22;z-index:2}' +
        '@keyframes phxFl{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}' +
        '.phx-tap .v3 .cw{animation:none}' +
        '.phx-tap .cd{position:relative;display:block;aspect-ratio:4/5;background:50% 45%/cover no-repeat;overflow:hidden;cursor:pointer;transition:transform .35s cubic-bezier(.2,.8,.2,1);' +
        'clip-path:polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px);box-shadow:inset 0 0 0 2px var(--c)}' +
        '.phx-tap .cd:hover,.phx-tap .cd.pop{transform:translateY(-10px) scale(1.05)}' +
        '.phx-tap .cd::after{content:"";position:absolute;top:0;left:-60%;width:40%;height:100%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.45),transparent);transform:skewX(-18deg);animation:phxShine 4.2s ease-in-out infinite;animation-delay:var(--d)}' +
        '@keyframes phxShine{0%,62%{left:-60%}100%{left:130%}}' +
        '.phx-tap .cd b{position:absolute;left:0;right:0;bottom:0;padding:18px 6px 8px;text-align:center;font:400 10px/1 "Nasalization Rg",Arial,sans-serif;letter-spacing:2px;color:#fff;background:linear-gradient(0deg,rgba(0,0,0,.85),transparent)}' +
        '.phx-tap .cd b em{display:block;margin-top:4px;font-style:normal;color:var(--c);text-shadow:0 0 8px var(--c)}' +
        '.phx-tap .cd .rk{position:absolute;left:8px;top:8px;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font:400 13px/1 "Nasalization Rg",Arial,sans-serif;color:#141414;background:var(--c);clip-path:polygon(6px 0,100% 0,100% calc(100% - 6px),calc(100% - 6px) 100%,0 100%,0 6px)}' +
        '.phx-tap .stp{height:var(--h);margin-top:8px;display:flex;align-items:center;justify-content:center;font:400 18px/1 "Nasalization Rg",Arial,sans-serif;color:var(--c);' +
        'background:linear-gradient(180deg,rgba(255,255,255,.10),rgba(255,255,255,.02));box-shadow:inset 0 2px 0 var(--c);text-shadow:0 0 10px var(--c)}' +
        '.phx-tap .crown{position:absolute;left:50%;top:-30px;transform:translateX(-50%);width:34px;height:24px;filter:drop-shadow(0 0 8px #ffc94a);animation:phxCr 2.4s ease-in-out infinite}' +
        '@keyframes phxCr{0%,100%{transform:translate(-50%,0) rotate(-4deg)}50%{transform:translate(-50%,-5px) rotate(4deg)}}' +
        '@keyframes phxGlitch{0%{clip-path:inset(10% 0 60% 0);transform:translateX(-8px)}33%{clip-path:inset(50% 0 20% 0);transform:translateX(6px)}66%{clip-path:inset(30% 0 40% 0);transform:translateX(-3px)}100%{clip-path:inset(0);transform:none}}' +
        '@media (max-width:900px){.phx-tap .phx-tc{grid-template-columns:1fr;padding:0 0 30px;min-height:0}' +
        '.phx-tap .art{position:relative;width:100%;height:210px;-webkit-mask:linear-gradient(180deg,#000 70%,transparent);mask:linear-gradient(180deg,#000 70%,transparent)}' +
        '.phx-tap .art{order:-1}.phx-tap .tx{padding:0 20px}.phx-tap .dots{left:20px}.phx-tap .hit-me{left:50%}' +
        '.phx-tap .art.v2,.phx-tap .art.v3{height:270px;-webkit-mask:none;mask:none}' +
        '.phx-tap .deck{left:50%;right:auto;width:min(92%,420px);transform:translate(-50%,-50%);gap:10px}.phx-tap .v3 .deck{transform:translateX(-50%)}' +
        '.phx-tap .art.v2 .cap,.phx-tap .art.v3 .cap{display:none}.phx-tap .cd b{font-size:9px;letter-spacing:1px}.phx-tap .stp{font-size:15px}}';
      document.head.appendChild(gc);
      var ART = { 1: ['tap-boss-hd.webp'], 2: [], 3: [], 4: ['tap-boss-hd.webp', 'tap-dungeon.webp', 'tap-skins.webp'] }[V];
      var sec = document.createElement('section'); sec.className = 'phx-tap';
      sec.innerHTML = '<div class="container"><div class="phx-tc">' +
        '<div class="tx"><div class="k">TELEGRAM GAME</div><h2>PHOINEXES <b>TAP</b></h2>' +
        '<p>Play & earn tickets. Tap, level up your phoenix, collect skins, open daily chests and join the team boss fights in the Dungeon.</p>' +
        '<div class="ch"><span>\uD83D\uDD25 Fire Rush</span><span>\uD83C\uDF81 Daily Chest</span><span>\uD83C\uDFA1 Lucky Wheel</span><span>\uD83D\uDC09 Dungeon</span></div>' +
        '<a class="go" href="' + BOT + '" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path fill="#141414" d="M21.9 4.3 18.7 19.4c-.2 1.1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.2 13.1l-4.8-1.5c-1-.3-1.1-1 .2-1.5L20.5 2.9c.9-.3 1.6.2 1.4 1.4z"/></svg>PLAY IN TELEGRAM</a></div>' +
        '<div></div><div class="art v' + V + '">' + ART.map(function(f, i){ return '<div class="sc' + (V === 4 ? '' : ' kb') + (i === 0 ? ' cur' : '') + '" style="background-image:url(' + A + f + ');' + (i ? 'opacity:0' : '') + '"></div>'; }).join('') + '</div>' +
        '</div></div>';
      ft.parentNode.insertBefore(sec, ft);
      var art = sec.querySelector('.art');
      var canvasFx = function(kind){
        var cv = document.createElement('canvas'); art.appendChild(cv);
        var g = cv.getContext('2d'), ps = [], W = 0, H = 0, run = false;
        var size = function(){ var r = art.getBoundingClientRect(), d = Math.min(window.devicePixelRatio || 1, 2); W = r.width; H = r.height; cv.width = W * d; cv.height = H * d; g.setTransform(d, 0, 0, d, 0, 0); };
        var spawn = function(){
          if (kind === 'embers') return { x: Math.random() * W, y: H + 10, vx: (Math.random() - .5) * .4, vy: -(0.4 + Math.random() * 1.1), r: 1 + Math.random() * 2.2, a: .6 + Math.random() * .4, c: Math.random() < .5 ? '255,140,40' : '120,255,150' };
          return { x: Math.random() * W, y: -10, vx: (Math.random() - .5) * .6, vy: 0.6 + Math.random() * 1.2, r: 2 + Math.random() * 3, a: .9, rot: Math.random() * 6, vr: (Math.random() - .5) * .2, c: ['255,210,90', '253,75,3', '255,240,200'][(Math.random() * 3) | 0] };
        };
        var fr = function(){
          if (!run) return;
          g.clearRect(0, 0, W, H);
          if (ps.length < (kind === 'embers' ? 55 : 45)) ps.push(spawn());
          ps.forEach(function(p){
            p.x += p.vx; p.y += p.vy;
            if (kind === 'embers') { p.a -= .003; g.fillStyle = 'rgba(' + p.c + ',' + Math.max(0, p.a) + ')'; g.shadowColor = 'rgba(' + p.c + ',1)'; g.shadowBlur = 8; g.beginPath(); g.arc(p.x, p.y, p.r, 0, 6.3); g.fill(); }
            else { p.rot += p.vr; g.save(); g.translate(p.x, p.y); g.rotate(p.rot); g.fillStyle = 'rgba(' + p.c + ',' + p.a + ')'; g.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); g.restore(); }
          });
          ps = ps.filter(function(p){ return p.y > -20 && p.y < H + 20 && p.a > 0; });
          requestAnimationFrame(fr);
        };
        size(); window.addEventListener('resize', size);
        if ('IntersectionObserver' in window) new IntersectionObserver(function(es){ var v = es[0].isIntersecting; if (v && !run) { run = true; requestAnimationFrame(fr); } else if (!v) run = false; }).observe(art);
        else { run = true; requestAnimationFrame(fr); }
      };
      if (V === 1) {
        art.insertAdjacentHTML('beforeend', '<div class="hud">EMERALD TYRANT \u00B7 BOSS<div class="bar"><i></i></div></div>');
        canvasFx('embers');
      } else if (V === 2) {
        canvasFx('embers');
        var SK = [['skin-1', 'EPIC', '#b35cff'], ['skin-2', 'LEGENDARY', '#FD4B03'], ['skin-3', 'RARE', '#3aa0ff']];
        art.insertAdjacentHTML('beforeend', '<div class="cap">COLLECT PHOENIX SKINS</div><div class="deck">' + SK.map(function(s, i){
          return '<div class="cw' + (i === 1 ? ' big' : '') + '" style="--c:' + s[2] + ';--d:' + (i * 0.7) + 's"><span class="cd" style="background-image:url(' + A + s[0] + '.webp)"><b>PHOENIX SKIN<em>' + s[1] + '</em></b></span></div>';
        }).join('') + '</div>');
      } else if (V === 3) {
        canvasFx('confetti');
        var CH = [['champ-1', '2', '#cfd6e0', '30px', 'SILVER'], ['champ-2', '1', '#ffc94a', '46px', 'GOLD'], ['champ-3', '3', '#e0894a', '20px', 'BRONZE']];
        var crown = '<svg class="crown" viewBox="0 0 34 24"><path fill="#ffc94a" d="M2 8l8 6 7-12 7 12 8-6-3 15H5z"/><circle cx="2" cy="7" r="2" fill="#ffe08a"/><circle cx="17" cy="2" r="2" fill="#ffe08a"/><circle cx="32" cy="7" r="2" fill="#ffe08a"/></svg>';
        art.insertAdjacentHTML('beforeend', '<div class="cap">WEEKLY CHAMPIONS</div><div class="deck">' + CH.map(function(c, i){
          return '<div class="cw' + (i === 1 ? ' big' : '') + '" style="--c:' + c[2] + ';--d:' + (i * 0.7) + 's;--h:' + c[3] + '">' + (i === 1 ? crown : '') + '<span class="cd" style="background-image:url(' + A + c[0] + '.webp)"><i class="rk">' + c[1] + '</i><b>TOP PLAYER<em>' + c[4] + '</em></b></span><div class="stp">#' + c[1] + '</div></div>';
        }).join('') + '</div>');
      } else {
        art.insertAdjacentHTML('beforeend', '<div class="dots">' + ART.map(function(f, i){ return '<b' + (i ? '' : ' class="on"') + '></b>'; }).join('') + '</div>');
        canvasFx('embers');
        var scs = [].slice.call(art.querySelectorAll('.sc')), dts = [].slice.call(art.querySelectorAll('.dots b')), k = 0;
        setInterval(function(){
          if (document.hidden) return;
          scs[k].classList.remove('cur'); scs[k].style.opacity = 0; dts[k].classList.remove('on');
          k = (k + 1) % scs.length;
          scs[k].classList.add('cur'); scs[k].style.opacity = 1; dts[k].classList.add('on');
          art.classList.remove('glitch'); void art.offsetWidth; art.classList.add('glitch');
        }, 4200);
      }
      [].forEach.call(art.querySelectorAll('.cd'), function(c){ c.addEventListener('pointerdown', function(){ c.classList.add('pop'); setTimeout(function(){ c.classList.remove('pop'); }, 450); }); });
      if (typeof phxCompute === 'function' && 'IntersectionObserver' in window) {
        var h2 = sec.querySelector('h2'); h2.classList.add('phx-sw');
        var tio = new IntersectionObserver(function(es){ if (!es[0].isIntersecting) return; tio.disconnect(); h2.classList.remove('phx-sw'); try { phxCompute([h2], { step: 1.6, scr: 8, lap: 0.5, ms: 45 }); } catch (e) {} }, { threshold: 0.5 });
        tio.observe(h2);
      }
    })();

    /* Jivo chat: header text "computes" when the chat opens */
    (function(){
      var GLJ = '01#%$▲▼/AIX<>', prev = window.jivo_onOpen;
      var run = function(tries){
        var box = document.querySelector('#jcont jdiv[class^="headerBox__"], jdiv[class^="mobile__"] > jdiv[class^="headerBox__"]') || document.querySelector('#jcont jdiv[class*="header"]');
        var nodes = [];
        if (box) { var w = document.createTreeWalker(box, 4, null, false), n; while ((n = w.nextNode())) if (n.nodeValue.trim() && !n.__phxJ) nodes.push(n); }
        if (!nodes.length) { if (tries < 8) setTimeout(function(){ run(tries + 1); }, 200); return; }
        nodes.forEach(function(tn, idx){
          var orig = tn.nodeValue, f = -idx * 6; tn.__phxJ = 1;
          var iv = setInterval(function(){
            f++;
            if (f < 0) { tn.nodeValue = orig.replace(/\S/g, ' '); return; }
            tn.nodeValue = orig.split('').map(function(ch, i){ return /\s/.test(ch) ? ch : (i < f / 2 ? ch : GLJ.charAt((Math.random() * GLJ.length) | 0)); }).join('');
            if (f / 2 >= orig.length) { clearInterval(iv); tn.nodeValue = orig; tn.__phxJ = 0; }
          }, 40);
        });
      };
      window.jivo_onOpen = function(){ if (prev) prev.apply(this, arguments); setTimeout(function(){ run(0); }, 700); };
    })();

    /* Jivo chat window: opens like a hologram built from code */
    (function(){
      var css = document.createElement('style');
      css.textContent = 'html.phx-holo #jcont jdiv[class^="main__"]:has(> jdiv[class^="headerBox__"]),html.phx-holo jdiv[class^="mobile__"]:has(> jdiv[class^="headerBox__"]){transform-origin:50% 100%;animation:phxHoloIn 2.2s cubic-bezier(.22,.8,.25,1) both}' +
        /* clip-path reveal (no transform), so the chat measures its real size while it opens and is never left empty */
        '@keyframes phxHoloIn{0%{opacity:.2;clip-path:inset(100% 0 0 0);filter:brightness(2.4) saturate(0)}' +
        '30%{opacity:.6;clip-path:inset(55% 0 0 0);filter:brightness(2) saturate(.25)}' +
        '55%{opacity:.85;clip-path:inset(0 0 0 0);filter:brightness(1.55) saturate(.6)}65%{opacity:.6}75%{opacity:.95}85%{opacity:.8}' +
        '100%{opacity:1;clip-path:inset(0 0 0 0);filter:none}}' +
        '.phx-holo-fx{position:fixed;pointer-events:none;z-index:2147483647;transition:opacity .9s}';
      document.head.appendChild(css);
      var GLH = '01#%$\u25B2\u25BC/AIX<>';
      var holo = function(tries){
        var win = [].slice.call(document.querySelectorAll('#jcont jdiv[class^="main__"], jdiv[class^="mobile__"]')).filter(function(e){ return e.querySelector('jdiv[class^="headerBox__"]') && e.getBoundingClientRect().height > 50; })[0] || null;
        if (!win) { if (tries < 10) setTimeout(function(){ holo(tries + 1); }, 60); return; }
        var r = win.getBoundingClientRect();
        if (r.width < 50 || r.height < 50) { if (tries < 10) setTimeout(function(){ holo(tries + 1); }, 60); return; }
        var de = document.documentElement; de.classList.remove('phx-holo'); void de.offsetWidth; de.classList.add('phx-holo');
        setTimeout(function(){ de.classList.remove('phx-holo'); try { window.dispatchEvent(new Event('resize')); } catch (e) {} }, 2300);
        var cv = document.createElement('canvas'), dpr = Math.min(window.devicePixelRatio || 1, 2), W = r.width, H = r.height;
        cv.className = 'phx-holo-fx'; cv.style.left = r.left + 'px'; cv.style.top = r.top + 'px'; cv.style.width = W + 'px'; cv.style.height = H + 'px';
        cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); document.body.appendChild(cv);
        var ctx = cv.getContext('2d'); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        var CW = 12, CH = 15, cols = Math.ceil(W / CW), rows = Math.ceil(H / CH), t0 = performance.now(), DUR = 2000;
        var fr = function(now){
          var lk = Math.min(1, (now - t0) / DUR), k = 1 - Math.pow(1 - lk, 3), scan = H * (1 - k);
          ctx.clearRect(0, 0, W, H);
          ctx.font = '12px Consolas,"Courier New",monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
          for (var y = 0; y < rows; y++) {
            var py = y * CH + CH / 2, dist = py - scan;
            if (dist < -CH) continue;
            for (var x = 0; x < cols; x++) {
              if (Math.random() < 0.6) continue;
              var a = dist < CH * 3 ? 0.95 : Math.max(0, 0.5 - (dist / H) * 0.9);
              a *= (1 - k * 0.85);
              if (a <= 0.03) continue;
              ctx.fillStyle = dist < CH * 2 ? 'rgba(255,220,190,' + a + ')' : 'rgba(253,' + (90 + ((Math.random() * 60) | 0)) + ',3,' + a + ')';
              ctx.fillText(GLH.charAt((Math.random() * GLH.length) | 0), x * CW + CW / 2, py);
            }
          }
          ctx.fillStyle = 'rgba(253,75,3,' + (0.9 * (1 - k)) + ')'; ctx.fillRect(0, scan - 1, W, 2);
          var g = ctx.createLinearGradient(0, scan - 30, 0, scan + 10); g.addColorStop(0, 'rgba(253,75,3,0)'); g.addColorStop(1, 'rgba(253,75,3,' + (0.25 * (1 - k)) + ')');
          ctx.fillStyle = g; ctx.fillRect(0, scan - 30, W, 40);
          var bmg = ctx.createLinearGradient(0, H, 0, scan); bmg.addColorStop(0, 'rgba(253,75,3,' + (0.2 * (1 - k)) + ')'); bmg.addColorStop(1, 'rgba(253,75,3,0)'); ctx.fillStyle = bmg; ctx.fillRect(0, scan, W, H - scan);
          ctx.strokeStyle = 'rgba(255,130,50,' + (0.85 * (1 - k)) + ')'; ctx.lineWidth = 1.5; ctx.strokeRect(1, Math.max(1, scan), W - 2, H - Math.max(1, scan) - 1);
          if (k < 1) requestAnimationFrame(fr); else { cv.style.opacity = '0'; setTimeout(function(){ cv.remove(); }, 500); }
        };
        requestAnimationFrame(fr);
      };
      var prevH = window.jivo_onOpen;
      window.jivo_onOpen = function(){ if (prevH) prevH.apply(this, arguments); setTimeout(function(){ holo(0); }, 30); };
    })();

    /* Social icons (footer / menu): hide the channels that are not active yet; YouTube stays */
    (function(){
      var off = ['t.me/phoinexesofficial', 'x.com/', 'instagram.com/', 'facebook.com/', 'tiktok.com/'];
      [].forEach.call(document.querySelectorAll('.socialsList a'), function(a){
        if (a.closest('.fixedSocials2')) return;
        var h = a.getAttribute('href') || '';
        if (off.some(function(s){ return h.indexOf(s) > -1; })) (a.closest('li') || a).style.display = 'none';
      });
    })();

    /* Telegram channel button next to the language switcher (header on desktop, burger menu on phones) */
    (function(){
      var CH = 'https://t.me/phoinexesofficial';
      var lcs = [].slice.call(document.querySelectorAll('.siteHeader .langContainer'));
      if (!lcs.length) return;
      var tg = document.createElement('style');
      tg.textContent = '.phx-tgb{position:absolute;z-index:5;width:34px;height:34px;display:grid;place-items:center;box-sizing:border-box;text-decoration:none;' +
        'background:linear-gradient(135deg,transparent 5px,#FD4B03 5px,#FD4B03 6.5px,transparent 6.5px) top left/10px 10px no-repeat,#0e0e0e;box-shadow:inset 0 0 0 1px #3a3a3a;' +
        'clip-path:polygon(7px 0,100% 0,100% calc(100% - 7px),calc(100% - 7px) 100%,0 100%,0 7px);transition:box-shadow .25s}' +
        '.phx-tgb svg{width:17px;height:17px;display:block;transition:transform .25s}' +
        '.phx-tgb:hover{box-shadow:inset 0 0 0 1px #FD4B03,0 0 14px rgba(253,75,3,.45)}' +
        '.phx-tgb:hover svg{transform:translateX(1px) rotate(-8deg)}' +
        '.phx-tgb i{position:absolute;right:4px;top:4px;width:5px;height:5px;border-radius:50%;background:#2AABEE;box-shadow:0 0 6px #2AABEE;animation:phxTgDot 2s ease-in-out infinite}' +
        '@keyframes phxTgDot{0%,100%{opacity:.35}50%{opacity:1}}' +
        '.phx-tgb.flow{position:relative;left:auto !important;top:auto !important;flex:0 0 34px;margin-left:-24px}' +
        '@media (min-width:1800px){.siteHeader .headerRight{justify-content:flex-end !important;column-gap:16px !important}}';
      document.head.appendChild(tg);
      var mk = function(){
        var a = document.createElement('a');
        a.className = 'phx-tgb'; a.href = CH; a.target = '_blank'; a.rel = 'noopener';
        a.title = 'PHOINEXES Telegram channel'; a.setAttribute('aria-label', a.title);
        a.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#fff" d="M21.9 4.3 18.7 19.4c-.2 1.1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.2 13.1l-4.8-1.5c-1-.3-1.1-1 .2-1.5L20.5 2.9c.9-.3 1.6.2 1.4 1.4z"/></svg><i></i>';
        return a;
      };
      var slots = lcs.map(function(lc){ return { lc: lc, el: null }; });
      /* wide screens: the PDF button joins the same group on the right (moved back below 1800px) */
      var pdf = document.querySelector('.siteHeader .fileLink'), pdfHome = pdf && pdf.parentNode, pdfNext = pdf && pdf.nextSibling;
      var movePdf = function(){
        var hr = document.querySelector('.siteHeader .headerRight'); if (!pdf || !hr) return;
        if (window.innerWidth >= 1800) { if (pdf.parentNode !== hr) hr.insertBefore(pdf, hr.firstChild); }
        else if (pdf.parentNode !== pdfHome) pdfHome.insertBefore(pdf, pdfNext && pdfNext.parentNode === pdfHome ? pdfNext : null);
      };
      var place = function(){
        movePdf();
        slots.forEach(function(s){
          var lc = s.lc, op = lc.offsetParent;
          if (!op || !lc.getBoundingClientRect().width) { if (s.el) s.el.style.display = 'none'; return; }
          if (!s.el) s.el = mk();
          /* wide screens: the header row is grouped to the right, the button simply sits after the language */
          if (window.innerWidth >= 1800 && lc.parentNode && lc.parentNode.classList.contains('headerRight')) {
            if (s.el.previousElementSibling !== lc) lc.parentNode.insertBefore(s.el, lc.nextSibling);
            s.el.classList.add('flow'); s.el.style.display = ''; return;
          }
          s.el.classList.remove('flow');
          if (s.el.parentNode !== op) op.appendChild(s.el);
          var lr = lc.getBoundingClientRect(), pr = op.getBoundingClientRect(), nx = lc.nextElementSibling, x, room;
          var nr = nx && nx.getBoundingClientRect();
          if (nr && nr.width && nr.top < lr.bottom && nr.bottom > lr.top && nr.left >= lr.right) {
            room = nr.left - lr.right; x = lr.right + (room - 34) / 2;      /* between language and Sign up / Log in */
          } else {
            room = lr.left - pr.left; x = lr.left - 34 - 12;                 /* left of the language button (phone menu) */
          }
          if (room < 40) { s.el.style.display = 'none'; return; }
          s.el.style.display = '';
          s.el.style.left = Math.round(x - pr.left - op.clientLeft) + 'px';
          s.el.style.top = Math.round(lr.top - pr.top - op.clientTop + (lr.height - 34) / 2) + 'px';
        });
      };
      place();
      var prt = 0;
      window.addEventListener('resize', function(){ place(); clearTimeout(prt); prt = setTimeout(place, 250); });
      window.addEventListener('load', place);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(place);
      document.addEventListener('click', function(e){ if (e.target.closest && e.target.closest('.burger')) { setTimeout(place, 60); setTimeout(place, 400); } }, true);
      setTimeout(place, 1500);
    })();

    /* "Game & Earn" menu item opens the game in Telegram (official bot) */
    [].forEach.call(document.querySelectorAll('.menuList a[href*="phoinexes.app"]'), function(a){ a.href = 'https://t.me/PHOINEXES_TaP_BOT'; a.target = '_blank'; a.rel = 'noopener'; });

    /* Hero: sharp still image instead of the heavy video */
    if (CONFIG.heroImage) (function(){
      var BASE = 'https://vpozhar556-star.github.io/phoinexes-widget/';
      /* tiny blurred preview shown instantly, sharp image fades in only when fully loaded (no jerky loading on slow internet) */
      var LQIP = 'data:image/webp;base64,UklGRu4CAABXRUJQVlA4WAoAAAAgAAAALwAADwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggAAEAAFAGAJ0BKjAAEAA+yVShS6ekoyG1WAgA8BkJbACdMuOCuszyAH/hiBcGUETSTtxDnz52CI0jSlgZYacgAP7+cl0nCnmRqJmb9V0iG3rB9o8i1pU8Ej6w9UJNO+wF7CtL1ZA+ePETYGLjCSOOV3N9+e9thL5SoWfjmFqDVb8IA5Gdb2T4T2dAog7MTp0MqLNwWIjtUvScqr7Jj/m0N1RsijLuQcNwP2F3D3xszBlVL6a/uRraZz5AbRTBa+VNlJfzo2ILSg2XkLpgNugZ7ENQa0SQYrnCNtF+41eRK/DpuMU1Q97gXrDcmXAIUyOtEwWxQEMRvUjNNebylRxD9UQAAAA=';
      var hs = document.createElement('style');
      hs.textContent = '.heroVisual .phx-hero-pic,.heroVisual .phx-hero-pic img{position:absolute;left:0;top:0;width:100%;height:100%;display:block;margin:0}.heroVisual .phx-hero-pic img{object-fit:cover;object-position:50% 50%}.heroVisual .phx-hero-pic.tall img{object-position:55% 45%}.heroInner .heroVisual{transform:none !important;transition:none !important;overflow:hidden}.heroVisual .phx-hero-pic{overflow:hidden;opacity:0;transition:opacity .5s ease}.heroVisual .phx-hero-pic.on{opacity:1}' +
        '.heroVisual .phx-hero-pic::before{content:"";position:absolute;left:-30px;top:-30px;right:-30px;bottom:-30px;background:#0b0b0b url(' + LQIP + ') 50% 50%/cover no-repeat;filter:blur(18px)}.heroVisual .phx-hero-pic.tall::before{background-position:55% 45%}' +
        '.heroVisual .phx-hero-pic img{opacity:0;transform:scale(1.04);transition:opacity 1.2s ease,transform 2.2s cubic-bezier(.2,.8,.2,1)}.heroVisual .phx-hero-pic.ld img{opacity:1;transform:none}' +
        '@media (max-width:767px) and (orientation:portrait){.heroVisual .phx-hero-pic.tall img{object-position:50% 50%}}';
      document.head.appendChild(hs);
      function fit(pic){ var p = pic.parentElement; if (p) pic.classList.toggle('tall', p.clientHeight > p.clientWidth * 0.8); }
      function swap(){
        var v = document.querySelector('.heroVisual video'); if (!v) return false; if (v.__phx) return true; v.__phx = 1;
        var pic = document.createElement('picture'); pic.className = 'phx-hero-pic';
        var hb = v.parentElement.getBoundingClientRect(), hsz = Math.ceil(Math.max(hb.width, hb.height * 3)) || window.innerWidth;
        pic.innerHTML = '<source type="image/webp" media="(max-width:767px) and (orientation:portrait)" srcset="' + BASE + 'hero-w-m.webp">' +
          '<source type="image/webp" sizes="' + hsz + 'px" srcset="' + BASE + 'hero-w-1200.webp 1200w,' + BASE + 'hero-w-1920.webp 1920w,' + BASE + 'hero-w-3072.webp 3072w"><img src="' + BASE + 'hero-w.jpg" alt="PHOINEXES" decoding="async" fetchpriority="high">';
        v.parentElement.insertBefore(pic, v);
        try { v.pause(); v.removeAttribute('autoplay'); [].slice.call(v.querySelectorAll('source')).forEach(function(x){ x.remove(); }); v.removeAttribute('src'); v.load(); } catch(e){}
        v.style.display = 'none';
        fit(pic); window.addEventListener('resize', function(){ fit(pic); });
        setTimeout(function(){ pic.classList.add('on'); }, 20);
        var him = pic.querySelector('img'), hdone = 0, hon = function(){ if (hdone) return; hdone = 1; setTimeout(function(){ pic.classList.add('ld'); }, 20); };
        var hok = function(){ if (him.decode) him.decode().then(hon, hon); else hon(); };
        if (him.complete && him.naturalWidth) hok(); else { him.addEventListener('load', hok); him.addEventListener('error', hon); }
        return true;
      }
      if (!swap()) { var hn = 0, hiv = setInterval(function(){ if (swap() || ++hn > 40) clearInterval(hiv); }, 250); }
    })();

    /* Bonus card video (~13 MB): on phones and slow / data-saving connections use two light frames with slow living motion */
    (function(){
      var BASE = 'https://vpozhar556-star.github.io/phoinexes-widget/';
      var cn = navigator.connection || {};
      var fast = !cn.saveData && (!cn.effectiveType || cn.effectiveType === '4g') && (!cn.downlink || cn.downlink >= 5);
      if (window.innerWidth >= 1024 && fast) return;
      var bs = document.createElement('style');
      bs.textContent = '.phx-bv{position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden;z-index:-1;background:#050505}' +
        '.phx-bv i{position:absolute;left:-8%;top:-8%;width:116%;height:116%;background:50% 50%/cover no-repeat;animation:phxBvA 16s ease-in-out infinite alternate;will-change:transform}' +
        '.phx-bv i+i{mix-blend-mode:screen;opacity:0;animation:phxBvB 11s ease-in-out infinite}' +
        '@keyframes phxBvA{from{transform:translateX(-4%) scale(1)}to{transform:translateX(4%) scale(1.08)}}' +
        '@keyframes phxBvB{0%{opacity:0;transform:translateX(5%) scale(1.06)}50%{opacity:.9}100%{opacity:0;transform:translateX(-5%) scale(1)}}';
      document.head.appendChild(bs);
      var bgo = function(){
        var v = document.querySelector('.bonusItem video'); if (!v) return false; if (v.__phx) return true; v.__phx = 1;
        try { v.pause(); v.removeAttribute('autoplay'); [].slice.call(v.querySelectorAll('source')).forEach(function(x){ x.remove(); }); v.removeAttribute('src'); v.load(); } catch(e){}
        v.style.display = 'none';
        var d = document.createElement('div'); d.className = 'phx-bv';
        d.innerHTML = '<i style="background-image:url(' + BASE + 'bonus-1.webp)"></i><i style="background-image:url(' + BASE + 'bonus-2.webp)"></i>';
        v.parentElement.insertBefore(d, v);
        return true;
      };
      if (!bgo()) { var bn = 0, biv = setInterval(function(){ if (bgo() || ++bn > 40) clearInterval(biv); }, 250); }
    })();

    /* Zoom countdown — flip clock (desktop card / compact mobile bar) */
    var z = CONFIG.zoom;
    if (!z || !z.enabled || !z.start) return;
    var start = new Date(z.start).getTime(), end = start + (z.liveMinutes || 120) * 60000, key = 'phxZoomClosed_' + z.start;
    try { if (sessionStorage.getItem(key)) return; } catch(e){}
    if (Date.now() >= end) return;
    var zc = document.createElement('style'); zc.textContent = ZCSS; document.head.appendChild(zc);
    if (z.theme === 'green') { zc.textContent += GCSS; var fl = document.createElement('link'); fl.rel = 'stylesheet'; fl.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@500;600;900&display=swap'; document.head.appendChild(fl); }
    function tile(){ return '<span class="fd"><i class="up">0</i><i class="dn">0</i><i class="fu">0</i><i class="fb">0</i></span>'; }
    function grp(n){ return '<div class="g" data-g="' + n + '"><div class="pr">' + tile() + tile() + '</div><em></em></div>'; }
    var box = document.createElement('div'); box.id = 'phx-zoom';
    box.innerHTML = '<button id="phx-zoom-x" type="button" aria-label="Close">×</button>' +
      (z.headline ? '<div class="hl"><div class="k"><span></span><b class="kt"></b><i class="km"></i></div><div class="h"></div><div class="sb"></div></div>' : '') +
      '<div class="hd">' + LOGO + '<span class="lb">ZOOM STARTS IN</span><span class="at"></span></div>' +
      '<div class="tt"></div>' +
      '<div class="clk">' + grp(0) + '<b class="c">:</b>' + grp(1) + '<b class="c">:</b>' + grp(2) + '</div>' +
      '<div class="lv"><span></span>LIVE<b> NOW</b></div>' +
      '<a class="jn" target="_blank" rel="noopener"><span class="jt">JOIN ZOOM</span><span class="js">JOIN</span><span class="ar"> →</span></a>';
    box.querySelector('.jn').href = z.link || '#';
    box.title = z.title || 'Zoom';
    box.querySelector('.tt').textContent = z.title || '';
    if (z.theme) box.classList.add(z.theme);
    if (z.button) box.querySelector('.jt').textContent = z.button;
    if (z.headline) {
      box.querySelector('.kt').textContent = z.kicker || 'NEW';
      box.querySelector('.km').textContent = ' \u00B7 ' + z.headline;
      box.querySelector('.sb').textContent = z.sub || '';
      var hh = box.querySelector('.h'), HT = z.headline, HG = '01#%$\u25B2\u25BCAIX';
      hh.textContent = HT;
      var scr = function(){ var f = 0, iv = setInterval(function(){ f++; hh.textContent = HT.split('').map(function(ch, i){ return ch === ' ' ? ' ' : (i < f / 3 ? ch : HG[(Math.random() * HG.length) | 0]); }).join(''); if (f / 3 >= HT.length) { clearInterval(iv); hh.textContent = HT; } }, 45); };
      setTimeout(scr, 700); setInterval(scr, 7000);
    }
    var sd = new Date(start), today = new Date().toDateString() === sd.toDateString();
    box.querySelector('.at').textContent = (today ? 'TODAY ' : sd.toLocaleDateString([], {day:'2-digit', month:'short'}).toUpperCase() + ' ') +
      sd.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit', hour12:false});
    document.body.appendChild(box);
    requestAnimationFrame(function(){ box.classList.add('on'); }); setTimeout(function(){ box.classList.add('on'); }, 80);
    box.querySelector('#phx-zoom-x').onclick = function(){ box.classList.remove('on'); clearInterval(t); setTimeout(function(){ box.remove(); }, 400); try { sessionStorage.setItem(key, '1'); } catch(e){} };
    var po2 = window.jivo_onOpen, pc2 = window.jivo_onClose;
    window.jivo_onOpen = function(){ box.classList.add('phx-hidden'); if (po2) po2.apply(this, arguments); };
    window.jivo_onClose = function(){ box.classList.remove('phx-hidden'); if (pc2) pc2.apply(this, arguments); };
    var tiles = box.querySelectorAll('.fd'), cur = [];
    function setTile(el, v){
      var q = function(c){ return el.querySelector('.' + c); }, old = q('up').textContent;
      if (old === v) return;
      q('fu').textContent = old; q('fb').textContent = v; q('up').textContent = v; q('dn').textContent = old;
      el.classList.remove('go'); void el.offsetWidth; el.classList.add('go');
      clearTimeout(el.__t); el.__t = setTimeout(function(){ q('dn').textContent = v; el.classList.remove('go'); }, 700);
    }
    function p(n){ n = Math.max(0, n); return (n < 10 ? '0' : '') + n; }
    function tick(){
      var now = Date.now();
      if (now >= end) { box.remove(); clearInterval(t); return; }
      if (now >= start) { if (!box.classList.contains('live')) { box.classList.remove('soon'); box.classList.add('live'); box.querySelector('.jt').textContent = 'JOIN NOW'; box.querySelector('.lb').textContent = 'ZOOM IS LIVE'; } return; }
      var s = Math.floor((start - now) / 1000), d = Math.floor(s / 86400), v, lab;
      if (d > 0) { v = [d > 99 ? 99 : d, Math.floor(s % 86400 / 3600), Math.floor(s % 3600 / 60)]; lab = ['DAYS', 'HOURS', 'MINUTES']; }
      else { v = [Math.floor(s / 3600), Math.floor(s % 3600 / 60), s % 60]; lab = ['HOURS', 'MINUTES', 'SECONDS']; }
      box.classList.toggle('soon', s <= 300);
      var str = v.map(p).join('');
      for (var i = 0; i < 6; i++) if (cur[i] !== str[i]) { setTile(tiles[i], str[i]); cur[i] = str[i]; }
      box.querySelectorAll('.g em').forEach(function(e, i){ if (e.textContent !== lab[i]) e.textContent = lab[i]; });
    }
    tick(); var t = setInterval(tick, 1000);
  });
})();
