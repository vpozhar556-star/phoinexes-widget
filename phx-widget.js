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
        var tn=(function(a){ var w = document.createTreeWalker(a, 4, null, false), n; while ((n = w.nextNode())) if (n.textContent.trim()) return n; return null; })(a); if(!tn) return;
        var target=tn.__phx||(tn.__phx=tn.textContent), f=0; clearInterval(a.__phxT);
        a.__phxT=setInterval(function(){ f++; tn.textContent=target.split('').map(function(ch,i){return ch===' '?' ':(i<f/2?ch:GL[(Math.random()*GL.length)|0]);}).join('');
          if(f/2>=target.length){clearInterval(a.__phxT); tn.textContent=target;} },28);
      });
    });

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

    /* Jivo chat: header text "computes" when the chat opens */
    (function(){
      var GLJ = '01#%$▲▼/AIX<>', prev = window.jivo_onOpen;
      var run = function(tries){
        var box = document.querySelector('#jcont jdiv[class^="headerBox__"]') || document.querySelector('#jcont jdiv[class*="header"]');
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
      window.jivo_onOpen = function(){ if (prev) prev.apply(this, arguments); setTimeout(function(){ run(0); }, 120); };
    })();

    /* Jivo chat window: opens like a hologram built from code */
    (function(){
      var css = document.createElement('style');
      css.textContent = 'html.phx-holo #jcont jdiv[class^="main__"]:has(> jdiv[class^="headerBox__"]){transform-origin:50% 100%;animation:phxHoloIn 1s cubic-bezier(.2,.8,.2,1) both}' +
        '@keyframes phxHoloIn{0%{opacity:0;transform:scaleY(.03);filter:brightness(2.2) saturate(0)}' +
        '30%{opacity:.75;transform:scaleY(1.02);filter:brightness(1.7) saturate(.4)}45%{opacity:.35}58%{opacity:.9}70%{opacity:.55}' +
        '100%{opacity:1;transform:none;filter:none}}' +
        '.phx-holo-fx{position:fixed;pointer-events:none;z-index:2147483647;transition:opacity .45s}';
      document.head.appendChild(css);
      var GLH = '01#%$\u25B2\u25BC/AIX<>';
      var holo = function(tries){
        var win = document.querySelector('#jcont jdiv[class^="main__"]');
        win = win && win.parentNode ? [].slice.call(document.querySelectorAll('#jcont jdiv[class^="main__"]')).filter(function(e){ return e.querySelector('jdiv[class^="headerBox__"]'); })[0] : null;
        if (!win) { if (tries < 10) setTimeout(function(){ holo(tries + 1); }, 60); return; }
        var r = win.getBoundingClientRect();
        if (r.width < 50 || r.height < 50) { if (tries < 10) setTimeout(function(){ holo(tries + 1); }, 60); return; }
        var de = document.documentElement; de.classList.remove('phx-holo'); void de.offsetWidth; de.classList.add('phx-holo');
        setTimeout(function(){ de.classList.remove('phx-holo'); }, 1100);
        var cv = document.createElement('canvas'), dpr = Math.min(window.devicePixelRatio || 1, 2), W = r.width, H = r.height;
        cv.className = 'phx-holo-fx'; cv.style.left = r.left + 'px'; cv.style.top = r.top + 'px'; cv.style.width = W + 'px'; cv.style.height = H + 'px';
        cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); document.body.appendChild(cv);
        var ctx = cv.getContext('2d'); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        var CW = 12, CH = 15, cols = Math.ceil(W / CW), rows = Math.ceil(H / CH), t0 = performance.now(), DUR = 950;
        var fr = function(now){
          var k = Math.min(1, (now - t0) / DUR), scan = H * (1 - k);
          ctx.clearRect(0, 0, W, H);
          ctx.font = '12px Consolas,"Courier New",monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
          for (var y = 0; y < rows; y++) {
            var py = y * CH + CH / 2, dist = py - scan;
            if (dist < -CH) continue;
            for (var x = 0; x < cols; x++) {
              if (Math.random() < 0.45) continue;
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
          if (k < 1) requestAnimationFrame(fr); else { cv.style.opacity = '0'; setTimeout(function(){ cv.remove(); }, 500); }
        };
        requestAnimationFrame(fr);
      };
      var prevH = window.jivo_onOpen;
      window.jivo_onOpen = function(){ if (prevH) prevH.apply(this, arguments); setTimeout(function(){ holo(0); }, 30); };
    })();

    /* Hero: sharp still image instead of the heavy video */
    if (CONFIG.heroImage) (function(){
      var BASE = 'https://vpozhar556-star.github.io/phoinexes-widget/';
      /* tiny blurred preview shown instantly, sharp image fades in only when fully loaded (no jerky loading on slow internet) */
      var LQIP = 'data:image/webp;base64,UklGRvYCAABXRUJQVlA4WAoAAAAgAAAALwAAGgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggCAEAAJAHAJ0BKjAAGwA+0VahTCgkoyIwFV1RABoJaAC26SJ9B6gBl2kr9x00BFqpWRHSD+IK12Km48uz06/2JuyI1swtPEI3DAD+/KoQ/HUt3Rn5axYIDI8EBmN8dK86SmFdRTY4okZWMPWF1OWUpryya46dOBnjvMyUkMstnd1w2OPyZItzgIl1gtSk65W78+7hi/a8vAlYI/JYgfCfXcoQfX8IXf9gxyG5w75iUmRONiCO4mnYi/eEjsKXaOI5qaz3wguJP2XnJ4k+1G/n5ntXDQYJUQPt+97VcG6LIyE+6FaH6tIyksxtB/hIhZnpKfr5Zpa/dgvBYitfsNd+SRkLpUvLyRTJ+D5AAA==';
      var hs = document.createElement('style');
      hs.textContent = '.heroVisual .phx-hero-pic,.heroVisual .phx-hero-pic img{position:absolute;left:0;top:0;width:100%;height:100%;display:block;margin:0}.heroVisual .phx-hero-pic img{object-fit:cover;object-position:50% 50%}.heroVisual .phx-hero-pic.tall img{object-position:62% 45%}.heroInner .heroVisual{transform:none !important;transition:none !important;overflow:hidden}.heroVisual .phx-hero-pic{overflow:hidden;opacity:0;transition:opacity .5s ease}.heroVisual .phx-hero-pic.on{opacity:1}' +
        '.heroVisual .phx-hero-pic::before{content:"";position:absolute;left:-30px;top:-30px;right:-30px;bottom:-30px;background:#0b0b0b url(' + LQIP + ') 50% 50%/cover no-repeat;filter:blur(18px)}.heroVisual .phx-hero-pic.tall::before{background-position:62% 45%}' +
        '.heroVisual .phx-hero-pic img{opacity:0;transform:scale(1.04);transition:opacity 1.2s ease,transform 2.2s cubic-bezier(.2,.8,.2,1)}.heroVisual .phx-hero-pic.ld img{opacity:1;transform:none}' +
        '@media (max-width:767px) and (orientation:portrait){.heroVisual .phx-hero-pic.tall img{object-position:50% 45%}.heroVisual .phx-hero-pic.tall::before{background-position:52% 45%}}';
      document.head.appendChild(hs);
      function fit(pic){ var p = pic.parentElement; if (p) pic.classList.toggle('tall', p.clientHeight > p.clientWidth * 0.8); }
      function swap(){
        var v = document.querySelector('.heroVisual video'); if (!v) return false; if (v.__phx) return true; v.__phx = 1;
        var pic = document.createElement('picture'); pic.className = 'phx-hero-pic';
        var hb = v.parentElement.getBoundingClientRect(), hsz = Math.ceil(Math.max(hb.width, hb.height * 16 / 9)) || window.innerWidth;
        pic.innerHTML = '<source type="image/webp" media="(max-width:767px) and (orientation:portrait)" srcset="' + BASE + 'hero-m.webp">' +
          '<source type="image/webp" sizes="' + hsz + 'px" srcset="' + BASE + 'hero-960.webp 960w,' + BASE + 'hero-1600.webp 1600w,' + BASE + 'hero-2560.webp 2560w"><img src="' + BASE + 'hero.jpg" alt="PHOINEXES" decoding="async" fetchpriority="high">';
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
