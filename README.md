# Usage

```
import makeResponsive from '../node_modules/make-responsive/MakeResponsive.js';
import './styles.scss';

makeResponsive(1920, 1080, true,'both',true,1);
```

- Use the above to import the module and set the dimensions in the first two params. The module looks for a ```#canvas``` element as a default ```<canvas>```.

# Example styles.scss file 
```
html{
  margin: 0;
}
#canvas{
  margin: auto;
  display: block;
  position: absolute;
  background-color: black;
  left: 0; right: 0;
  bottom: 0; top: 0;
}
```

# Example pug file
```
doctype html
html
  head
    meta(charset='utf-8')
    title
    link(href='./css/styles.css' rel='stylesheet')
  body
    canvas#canvas
script(src='./js/app.js')
```
