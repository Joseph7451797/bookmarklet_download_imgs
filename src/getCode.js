/**
 * This function generate a <a> with execuable Javascript in href attribute,
 * and the <a> can be added to browser bookmark
 */

import { appName, textDemopage, msgGetCodeAlert, textOpenDownloadPopup } from './language'

/**
 *
 * @function
 * @name getScript
 * get source code from server and append to document
 * @param {Object} d - document
 * @param {string} s - source code url
 * @param {function} f - callback function
 * @param {string} alert - alert message
 */
const getScript = (d, s, f, alertmsg) => {

    let script = d.createElement('script')
    script.setAttribute('charset', 'UTF-8')

    if( script.readyState ) {
        script.onreadystatechange = () => {
            if ( script.readyState == 'loaded' || script.readyState == 'complete' ) {
                script.onreadystatechange = null
                if( typeof f === 'function' ) {
                    f()
                }
            }
        }
    }else {
        script.onload = () => {
            if( typeof f === 'function' ) {
                f()
            }
        }
    }
    script.onerror = () => {
        alert(alertmsg)
    }

    script.src = s
    d.getElementsByTagName('head')[0].appendChild(script)
};

// insert code to html a link on document
(function(d, s) {

    // eslint-disable-next-line
    let coreJsUri = serverPathofMainjs
    let atag = d.getElementById('link')

    if( atag ) {
        atag.href = `javascript:var awesomebookmark = ${String(s)};
                                awesomebookmark(document, "${String(coreJsUri)}", null, "${String(msgGetCodeAlert)}");`
        atag.innerHTML = textOpenDownloadPopup
    }

    // insert text by language
    d.title = appName
    d.getElementById('demo').innerHTML = textDemopage
})(document, getScript)
