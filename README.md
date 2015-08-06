CK Editor from CDN
=====================

Load [CK Editor](http://ckeditor.com/) from a CDN.


## Browser policy
if you are using the `browser-policy` package, you'll need to add this line to a file in your `/server/` directory to allow the browser to load from the cdn
```
BrowserPolicy.content.allowOriginForAll('cdn.ckeditor.com');
```
