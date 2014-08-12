Slender Menu
===========

Slender Menu is a responsive jquery-based left menu built for dashboard-like web applications. Slender Menu runs on all smart mobile devices and is extremely light (less than 3kb). This menu works with bootstrap and supports FontAwesome. 

Example
==========

Include the css:
```
<link rel="stylesheet" type="text/css" href="/styles/jquery.slendermenu.css"/>
```
FontAwesome(optional):
```
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
```
The html
```
<div class='slenmenu'>
	<ul>
		<li>
			<i class="fa fa-camera-retro fa-lg"></i> <a>Menu item</a>
		</li>
		<li>
			<i class="fa fa-camera-retro fa-lg"></i> <a>Menu item</a>
		</li>
	</ul>
</div>
<button id="selector">Toggle</button>
```
Include jquery and jquery.slendermenu.js scripts:
```
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript" src="js/jquery.slendermenu.min.js"></script>
```
Attach script to button:
```
<script>
	$("#selector").slenselect();
</script>
```

For the full example <a href='https://gist.github.com/nikrich/e299ab3bbdacb28f32d4'>click here</a>

Demo
===========
http://nikrich.github.io/slendermenu

Licensing
===========
The MIT License (MIT)

Copyright (c) 2014 slenderware

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

