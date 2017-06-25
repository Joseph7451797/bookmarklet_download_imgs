# Bookmarklet-Download-Imgs #

This browser bookmarklet tool is an experimetal project for downloading image in webpage. [Demo page](http://joseph7451797.github.io/bookmarklet_download_imgs/)

**Note:** This is version 2. Rewrite in ES6 and use webpack2 for development.
Main code is hosted in another server, remember to add new link in [Demo page](http://joseph7451797.github.io/bookmarklet_download_imgs/) to browser bookmark.

### How to do that? ###
- use HTML ```<a>``` download attribute
- execute Javascript in href of ```<a>```, like ```<a href="javascript:dosomething()";></a>```

### Browser compatibility ###
- Google Chrome fully supports
- Firefox only supports same-origin image
- More info：[caniuse.com](http://caniuse.com/#search=download)

### Have fun in local dev ###

1.Download this repo and install packages
```sh
$ npm install
```
2.Development mode
```sh
$ npm run dev
```
See http://localhost:8080 at browser

3.Build source code
```sh
$ npm run build
```

### Contribution ###

Feel free to fork!

### License ###
MIT License