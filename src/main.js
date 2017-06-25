/**
 * Main function to generate a pupop window for downloading
 */

import { getHighestZindex } from './utilities'
import {
    appName,
    textClose,
    textDownloadSelected,
    hintAllowBrowserDownloadMultiple,
    textSelectAll,
    textDownloadThis,
    textCantFindImgs } from './language'
// eslint-disable-next-line
import style from './style.scss'

(function(s) {
    // make sure only one popup exits
    if( document.querySelector('.downloadWindow') ) return

    let imgs = s.querySelectorAll('img')
    let length = imgs.length ? imgs.length : null
    let hash = new Date().getTime()
    let temp = length
        ? `<div id=${hash}_close class="btn left">${textClose}</div>
            <div id=${hash}_download_btn class="btn right">${textDownloadSelected}</div>
            <p>${hintAllowBrowserDownloadMultiple}</p>
            <input type="checkbox" id="checkallcheck"><span>${textSelectAll}</span>`
        : `<div id=${hash}_close class="btn left">${textClose}</div>`
    let d

    // generate image preview
    if( length ) {
        imgs.forEach((element) => {
            // find other url(s) in attributes and insert to preview(some sites use lazyload plugin)
            let obj = element.attributes
            let regex = /\.(jpg|jpeg|png|gif)$/gm

            for (var key in obj) {
                if ( obj.hasOwnProperty(key) ) {
                    let value = obj[key].value
                    if( value.match(regex) ) {
                        temp += `<div class="component">
                                    <img src="${value}" />
                                    <input type="checkbox" name="imgcheckboxes">
                                    <a id="${hash}_download_link" href="${value}" download>${textDownloadThis}</a>
                                </div>`
                    }
                }
            }
        })

        temp += `<div class="copywright">${appName} by
                    <a href="http://joseph7451797.github.io/bookmarklet_download_imgs/" target="_blank">Joseph</a>, inspired by
                    <a href="http://www.wfublog.com/2015/05/google-drive-direct-link-widget-v2.html" target="_blank">WFU BLOG</a>
                    &amp;&nbsp;<a href="http://angryplay.blogspot.tw/" target="_blank">Angryplay</a>
                </div>`
    }else {
        temp += `<div class="copywright noimg">${textCantFindImgs}<br/>${appName} by
                    <a href="http://joseph7451797.github.io/bookmarklet_download_imgs/" target="_blank">Joseph</a>, inspired by
                    <a href="http://www.wfublog.com/2015/05/google-drive-direct-link-widget-v2.html" target="_blank">WFU BLOG</a>
                    &amp;&nbsp;<a href="http://angryplay.blogspot.tw/" target="_blank">Angryplay</a>
                </div>`
    }

    // generate popup
    d = s.createElement('div')
    d.className = 'downloadWindow'
    d.id = `${hash}_for_download_window`
    d.style.zIndex = getHighestZindex() + 1
    d.innerHTML = temp

    // insert popuup
    s.body.insertBefore(d, s.body.firstChild)

    // add event listener on element
    let closebtn = s.querySelector(`div[id="${hash}_close"]`)
    let downloadBtn = s.querySelector(`div[id="${hash}_download_btn"]`)
    let checkallbtn = s.getElementById('checkallcheck')
    let clicked = false

    closebtn.onclick = () => { // close popup
        s.getElementById(`${hash}_for_download_window`).remove()
    }

    checkallbtn.onclick = () => { // toggle chose-all or remove all
        let checkedBoxes = s.querySelectorAll('input[name=imgcheckboxes]')
        let allboxlength = checkedBoxes.length
        if( clicked ) {
            for(let m = 0; m < allboxlength; m++) {
                checkedBoxes[m].checked = false
            }
            clicked = false
        }else {
            for(var n = 0; n < allboxlength; n++) {
                checkedBoxes[n].checked = true
            }
            clicked = true
        }
    }

    downloadBtn.onclick = () => { // record chosen and trigger click event
        let arr = []
        let checkedBoxes = s.querySelectorAll('input[name=imgcheckboxes]:checked')
        for(let j = 0; j < checkedBoxes.length; j++) {
            arr.push(checkedBoxes[j].nextElementSibling)
        }
        for(let l = 0; l < arr.length; l++) {
            let e = new MouseEvent('click', {
                'view': window,
                'bubbles': true,
                'cancelable': false
            })
            arr[l].dispatchEvent(e)
        }
    }

})(document)