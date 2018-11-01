var canvas = document.getElementById('canvas');
// code from Adobe Animate responsive
export default function makeResponsive(_w, _h, isResp, respDim, isScale, scaleType) {
  var lastW, lastH, lastS=1;
  //canvas.setAttribute('width', _w);
  //canvas.setAttribute('height', _h);
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  function resizeCanvas() {
    //var w = lib.properties.width, h = lib.properties.height;
    var w = _w, h = _h;
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
    canvas.width = w*pRatio*sRatio;
    canvas.height = h*pRatio*sRatio;
    canvas.style.width =  w*sRatio+'px';
    canvas.style.height = h*sRatio+'px';
    //stage.scaleX = pRatio*sRatio;
    //stage.scaleY = pRatio*sRatio;
    lastW = iw; lastH = ih; lastS = sRatio;
    //stage.tickOnUpdate = false;
    //stage.update();
    //stage.tickOnUpdate = true;
  }
}
