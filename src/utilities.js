/**
 * @function
 * @name getBrowserLanguage
 * @return {string} - browser language
 */
export function getBrowserLanguage() {
    if( typeof navigator.language !== 'undefined' ) {
        return navigator.language
    }else {
        return 'zh-TW'
    }
}

/**
 * @function
 * @name getHighestZindex
 * @return {number} - maximum zIndex value of all elements in document
 */
export function getHighestZindex() {
    let allElems = document.querySelectorAll('*')
    let length = allElems.length
    let highest = 0
    let zindex

    if( length ) {
        for(let i = 0; i < length; i++) {
            zindex = document.defaultView.getComputedStyle(allElems[i], null).getPropertyValue('z-index')
            if ( zindex > highest && zindex !== 'auto' ) {
                highest = zindex
            }
        }
    }
    return +highest
}