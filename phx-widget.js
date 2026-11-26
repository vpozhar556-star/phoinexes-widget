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

    /* Header menu: decode effect on hover */
    var GL='01#%$\u20AE\u25B2\u25BCAIX';
    document.querySelectorAll('.menuList > li > a').forEach(function(a){
      a.addEventListener('mouseenter',function(){
        var tn=(function(a){ var w = document.createTreeWalker(a, 4, null, false), n; while ((n = w.nextNode())) if (n.textContent.trim()) return n; return null; })(a); if(!tn) return;
        var target=tn.__phx||(tn.__phx=tn.textContent), f=0; clearInterval(a.__phxT);
        a.__phxT=setInterval(function(){ f++; tn.textContent=target.split('').map(function(ch,i){return ch===' '?' ':(i<f/2?ch:GL[(Math.random()*GL.length)|0]);}).join('');
          if(f/2>=target.length){clearInterval(a.__phxT); tn.textContent=target;} },28);
      });
    });

    var phxOn = function(v){ return v === 'on' || (v === 'demo' && /phxdemo/.test(location.hash + location.search)); };
    if (phxOn(CONFIG.menuIntro)) {
    var phxMiWait = document.createElement('style'); phxMiWait.textContent = '.menuList > li > a{color:transparent !important;text-shadow:none !important}';
    if (innerWidth > 991) document.head.appendChild(phxMiWait);
    var phxMiRun = function(){
    /* Header menu: intro — words "compute" letter by letter on page open */
    (function(){
      var SPEED = 1;
      var links = [].slice.call(document.querySelectorAll('.menuList > li > a')).filter(function(a){
        var r = a.getBoundingClientRect(); return a.offsetParent && r.width > 0 && r.top < innerHeight;
      });
      if (!links.length) return;
      var GL = '01#%$₮▲▼/AIX<>';
      if (!document.getElementById('phx-mi-css')) {
        var st = document.createElement('style'); st.id = 'phx-mi-css';
        st.textContent = '.phx-mi{white-space:pre}.phx-mi i{font-style:normal;display:inline-block;text-align:center;transition:color .25s,text-shadow .4s}' +
          '.phx-mi i.w{color:transparent}.phx-mi i.c{color:#FD4B03;text-shadow:0 0 8px rgba(253,75,3,.75)}' +
          '.phx-mi i.k{color:#fff;text-shadow:0 0 12px rgba(253,75,3,.9),0 0 2px #fff}';
        document.head.appendChild(st);
      }
      var phxOff = 0;
      links.forEach(function(a, li){
        var tn = (function(a){ var w = document.createTreeWalker(a, 4, null, false), n; while ((n = w.nextNode())) if (n.textContent.trim()) return n; return null; })(a);
        if (!tn || a.__phxMi) return; a.__phxMi = 1;
        var txt = tn.textContent, box = document.createElement('span'); box.className = 'phx-mi';
        var ch = txt.split('').map(function(c){ var i = document.createElement('i'); i.textContent = c; box.appendChild(i); return i; });
        tn.parentNode.replaceChild(box, tn);
        ch.forEach(function(i){ i.style.width = i.getBoundingClientRect().width + 'px'; i.className = 'w'; });
        var f = -Math.round(phxOff), lead = (phxOff += (txt.length * 1.2 + 5) * 0.6), iv = setInterval(function(){
          f++; if (f < 0) return;
          var done = true;
          ch.forEach(function(i, k){
            var c = txt.charAt(k), t0 = k * 1.2, t1 = t0 + 5;
            if (c === ' ') { i.className = 'k'; return; }
            if (f < t0) { i.className = 'w'; done = false; }
            else if (f < t1) { i.className = 'c'; i.textContent = GL.charAt((Math.random() * GL.length) | 0); done = false; }
            else { if (i.className !== 'k') { i.className = 'k'; i.textContent = c; } }
          });
          if (done) {
            clearInterval(iv);
            setTimeout(function(){
              ch.forEach(function(i){ i.style.textShadow = 'none'; i.style.color = ''; });
              setTimeout(function(){ if (box.parentNode) box.parentNode.replaceChild(tn, box); }, 450 * SPEED);
            }, 350 * SPEED);
          }
        }, 40 * SPEED);
      });
    })();
    phxMiWait.remove();
    };
    var phxMiGo = function(){ if (phxMiGo.done) return; phxMiGo.done = 1; setTimeout(phxMiRun, 250); };
    (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(function(){ if (document.readyState === 'complete') phxMiGo(); else window.addEventListener('load', phxMiGo); });
    setTimeout(phxMiGo, 3000);
    }
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

    /* Hero: sharp still image instead of the heavy video */
    if (CONFIG.heroImage) (function(){
      var BASE = 'https://vpozhar556-star.github.io/phoinexes-widget/';
      var hs = document.createElement('style');
      hs.textContent = '.heroVisual .phx-hero-pic,.heroVisual .phx-hero-pic img{position:absolute;left:0;top:0;width:100%;height:100%;display:block;margin:0}.heroVisual .phx-hero-pic img{object-fit:cover;object-position:50% 50%}.heroVisual .phx-hero-pic.tall img{object-position:62% 45%}.heroInner .heroVisual{transform:none !important;transition:none !important}.heroVisual .phx-hero-pic{opacity:0;transform:scale(1.04);transition:opacity 1.2s ease,transform 2.2s cubic-bezier(.2,.8,.2,1)}.heroVisual .phx-hero-pic.on{opacity:1;transform:none}';
      document.head.appendChild(hs);
      function fit(pic){ var p = pic.parentElement; if (p) pic.classList.toggle('tall', p.clientHeight > p.clientWidth * 0.8); }
      function swap(){
        var v = document.querySelector('.heroVisual video'); if (!v) return false; if (v.__phx) return true; v.__phx = 1;
        var pic = document.createElement('picture'); pic.className = 'phx-hero-pic';
        pic.innerHTML = '<source type="image/webp" srcset="' + BASE + 'hero.webp"><img src="' + BASE + 'hero.jpg" alt="PHOINEXES" decoding="async">';
        v.parentElement.insertBefore(pic, v);
        try { v.pause(); v.removeAttribute('autoplay'); [].slice.call(v.querySelectorAll('source')).forEach(function(x){ x.remove(); }); v.removeAttribute('src'); v.load(); } catch(e){}
        v.style.display = 'none';
        fit(pic); window.addEventListener('resize', function(){ fit(pic); });
        var him = pic.querySelector('img'), hon = function(){ requestAnimationFrame(function(){ pic.classList.add('on'); }); };
        if (him.complete) hon(); else { him.addEventListener('load', hon); him.addEventListener('error', hon); }
        setTimeout(function(){ pic.classList.add('on'); }, 3000);
        return true;
      }
      if (!swap()) { var hn = 0, hiv = setInterval(function(){ if (swap() || ++hn > 40) clearInterval(hiv); }, 250); }
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
