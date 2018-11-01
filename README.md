# Description

- Create an element that scales uniformly according to the width/height ratio 


# Install 

```
npm install --save make-responsive@1.0.5
```


# Usage

```
import makeResponsive from '../node_modules/make-responsive/MakeResponsive.js';

let options = { id:'canvas', width:1920, height:1080, bgcolor:'#ccc' }
makeResponsive(options, true,'both',true, 1);
```

- Use the above to import the module and set the id, dimensions, and bgcolor in the 'options' object. The module looks for ```#YOUR-ELEMENT-ID```.



# Example starter pug markup file

```
doctype html
html
  head
    meta(charset='utf-8')
    title
  body
    canvas#canvas
script(src='./js/app.js')
```
