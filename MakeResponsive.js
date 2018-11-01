// include options object { id, width, height, bgcolor }
export default function makeResponsive(options, isResp, respDim, isScale, scaleType) {
  var canvas = document.getElementById(options.id);
  var lastW, lastH, lastS=1;
  var style = 'html{ margin: 0; } #'+options.id+'{ margin: auto; display: block; position: absolute; background-color: '+options.bgcolor+'; left: 0; right: 0; bottom: 0; top: 0;}';
  var link = document.createElement('style');
  link.innerHTML = style;
  document.head.appendChild(link);
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  function resizeCanvas() {
    var w = options.width || 1920, h = options.height || 1080;
    var iw = window.innerWidth, ih=window.innerHeight;
    var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
    if(isResp) {
      if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
        sRatio = lastS;
      }
      else if(!isScale) {
        if(iw<w || ih<h)
          sRatio = Math.min(xRatio, yRatio);
      }
      else if(scaleType==1) {
        sRatio = Math.min(xRatio, yRatio);
      }
      else if(scaleType==2) {
        sRatio = Math.max(xRatio, yRatio);
      }
    }
    document.getElementById(options.id).width = w*pRatio*sRatio;
    document.getElementById(options.id).height = h*pRatio*sRatio;
    document.getElementById(options.id).style.width =  w*sRatio+'px';
    document.getElementById(options.id).style.height = h*sRatio+'px';
    lastW = iw; lastH = ih; lastS = sRatio;
  }
}
