/*asciiArtAssist
*asciiArtAssist.js
*===================================================================
*	Copyright (c) 2017 Yuji SODE <yuji.sode@gmail.com>
*
*	This software is released under the MIT License.
*	See LICENSE or http://opensource.org/licenses/mit-license.php
*===================================================================
*/
//function that assists in writing ASCII art.
/*
*=== Synopsis ===
* 1. Activating textarea  
*    `var x=asciiArtAssist(src,size,color,bgColor);`
* 2. Value of textarea  
*    `x();`
* 3. Closing textarea  
*    `x.close();`
*=== Parameters ===
* - src: filename or pathname of an image; 'none' is default value
* - size: font size of a character that is available in font-size CSS property; 'inherit' is default value
* - color: color of a character that is available in color CSS property; '#fff' is default value
* - bgColor: background color that is available in background-color CSS property; '#000' is default value
*=== References ===
* - Mozilla and individual contributors. 2005-2017. background-color - CSS | MDN. *MDN Web Docs*. derived on [2017-10-01] from: https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
* - Mozilla and individual contributors. 2005-2017. color - CSS | MDN. *MDN Web Docs*. derived on [2017-10-01] from: https://developer.mozilla.org/en-US/docs/Web/CSS/color
* - Mozilla and individual contributors. 2005-2017. font-size - CSS | MDN. *MDN Web Docs*. derived on [2017-10-01] from: https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
*/
//============================================================================
function asciiArtAssist(src,size,color,bgColor){
	//default values for src, size, color and bgColor
	src=!src?'none':src;
	size=!size?'inherit':size;
	color=!color?'#fff':color;
	bgColor=!bgColor?'#000':bgColor;
	var slf=window,txtA,F,r9=slf.Math.random().toFixed(9).replace(/\./g,''),
		t=slf.document.getElementsByTagName('body')[0],
		E=slf.document.createElement('textarea');
	E.id='asciiA'+r9;
	E.style.cssText="color: "+color+";font-size: "+size+";background: url(\'"+src+"\') "+bgColor+" no-repeat;";
	txtA=t.appendChild(E),t=E=null;
	//returned function returns the current value of textarea tag
	F=function(){
		return document.getElementById('asciiA'+r9).value;
	};
	//method to close textarea tag
	F.close=function(){
		var r=document.getElementById('asciiA'+r9);
		r=r.parentNode.removeChild(r),r=null;
	};
	return F;
}
