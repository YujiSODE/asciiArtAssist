# asciiArtAssist
Function that assists in writing ASCII art.  
https://github.com/YujiSODE/asciiArtAssist

>Copyright (c) 2016 Yuji SODE \<yuji.sode@gmail.com\>  
>This software is released under the MIT License.  
>See LICENSE or http://opensource.org/licenses/mit-license.php
______

## Script
- `asciiArtAssist.js`

## Synopsis
1. Activating textarea  
   `var x=asciiArtAssist(src,size,color,bgColor);`  
   **Parameters**  
   - `src`: filename or pathname of an image; `'none'` is default value
   - `size`: font size of a character that is available in `font-size CSS property`; `'inherit'` is default value
   - `color`: color of a character that is available in `color CSS property`; `'#fff'` is default value
   - `bgColor`: background color that is available in `background-color CSS property`; `'#000'` is default value

2. Value of textarea  
   `x();`
3. Closing textarea  
   `x.close();`
## References
- Mozilla and individual contributors. 2005-2017. background-color - CSS | MDN. *MDN Web Docs*. derived on [2017-10-01] from: https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
- Mozilla and individual contributors. 2005-2017. color - CSS | MDN. *MDN Web Docs*. derived on [2017-10-01] from: https://developer.mozilla.org/en-US/docs/Web/CSS/color
- Mozilla and individual contributors. 2005-2017. font-size - CSS | MDN. *MDN Web Docs*. derived on [2017-10-01] from: https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
