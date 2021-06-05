var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

let slideUp = (target, duration=500) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout( () => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}

let slideDown = (target, duration=500) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;

    if (display === 'none')
        display = 'block';

    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout( () => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}
var slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
    } else {
        return slideUp(target, duration);
    }
}

var cookieBannerLayout1 = '<div id="cookie__banner" class="cookie-banner-layout-1" style="position:fixed;width:100%;height:100%;left:0;top:0;background:rgba(0,0,0,0.8);z-index:9999;overflow:scroll;overflow-x:hidden">\n' +
    '    <div class="row h-100 align-items-center">\n' +
    '        <div class="col-md-6 mx-auto">\n' +
    '            <div class="cookie-banner" style="background:#FFF;padding:1rem;margin:1rem">\n' +
    '                <h3 id="banner__header"></h3>\n' +
    '                <p id="banner__text"></p>\n' +
    '                <div id="cookie__groups"></div>\n' +
    '                <div id="cookie__buttons">\n' +
    '                    <div class="row"></div>\n' +
    '                </div>\n' +
    '                <div class="row">\n' +
    '                    <div class="col-md-6">\n' +
    '                        <div id="cookielinks__start"></div>\n' +
    '                    </div>\n' +
    '                    <div class="col-md-6">\n' +
    '                        <div id="cookielinks__end" style="text-align:right"></div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>';

var cookieBannerLayout2 = '<div id="cookie__banner" class="cookie-banner-layout-2" style="position:fixed;width:100%;height:100%;left:0;top:0;background:rgba(0,0,0,0.8);z-index:9999;overflow:scroll;overflow-x:hidden">\n' +
    '            <div class="row h-100 align-items-end">\n' +
    '                <div class="col-md-11 mx-auto">\n' +
    '                    <div class="cookie-banner" style="background:#FFF;padding:1rem;margin:1rem">\n' +
    '                        <div class="row">\n' +
    '                            <div class="col-md-6">\n' +
    '                                <h3 id="banner__header"></h3>\n' +
    '                                <p id="banner__text"></p>\n' +
    '                                <div id="cookie__buttons">\n' +
    '                                    <div class="row"></div>\n' +
    '                                </div>\n' +
    '                                <div class="row">\n' +
    '                                    <div class="col-md-6">\n' +
    '                                        <div id="cookielinks__start"></div>\n' +
    '                                    </div>\n' +
    '                                    <div class="col-md-6">\n' +
    '                                        <div id="cookielinks__end" style="text-align:right"></div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="col-md-6">\n' +
    '                                <div id="cookie__groups"></div>\n' +
    '                                <div id="additional__text" style="font-size:0.8rem"></div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>';

function nowPlusOneYear() {
    var oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    return oneYearFromNow;
}

function getCookie(cookiename) {
    if (typeof(cookiename) == 'string' && cookiename != '') {
        const cookies = document.cookie.split(';');
        for (i = 0; i < cookies.length; i++) {
            if (cookies[i].trim().startsWith(cookiename)) {
                return cookies[i].split('=')[1];
            }
        }
    }
    return null;
}

function setCookie(cookie, value, expires) {
    document.cookie = cookie + '=' + value + ';expires=' + expires;
}

function cookieWorkerProcess(ev) {
    var tagName = ev.tagName
    if(tagName == 'SCRIPT') {
        var scriptElement = document.createElement('script');
        if(ev.hasAttribute('src')) {
            var attribute = ev.getAttribute('src');
            scriptElement.src = attribute;
        } else {
            scriptElement.innerHTML = ev.innerHTML;
        }
        scriptElement.setAttribute('data-cookie', ev.getAttribute('data-cookie'));
        ev.after(scriptElement);
        ev.remove();
    }
    if(tagName == 'IFRAME') {
        ev.setAttribute('src', ev.getAttribute('cookie-src'));
    }
}

function cookieWorker(ev, cookie) {
    if(cookie == ev.getAttribute('data-cookie')) {
        cookieWorkerProcess(ev);
    } else if (ev.getAttribute('data-cookie') == 'essential') {
        cookieWorkerProcess(ev);
    } else if (cookie == 'all') {
        cookieWorkerProcess(ev);
    }
}

function processCookieDependentResources() {
    var cookieValue = getCookie('_cs');
    var a = document.querySelectorAll('[data-cookie]');
    for (var i in a) if (a.hasOwnProperty(i)) {
        var htmlElement = a[i];
        if(cookieValue.includes(',')) {
            var cookiesArray = cookieValue.split(',');
            cookiesArray.forEach((item, j) => cookieWorker(a[i], `${item}`));
        } else {
            cookieWorker(a[i], `${cookieValue}`);
        }
    }
}

function writeCookieRevokeButton() {
    fetch(document.documentElement.lang + '.cookie.json')
        .then(response => response.json())
        .then(json => {
            document.body.innerHTML += '<button id="cookie__revoke">' + json.settings.label + '</button>';
            var cookieRevoker = document.getElementById('cookie__revoke');
            if (cookieRevoker !== null) {
                document.getElementById('cookie__revoke').addEventListener('click', (e) => {
                    setCookie('_cs', 'revoked', nowPlusOneYear());
                    location.reload();
                });
            }
        });
}

if(!getCookie('_cs') || getCookie('_cs') == 'revoked') {
    ready(() => {
        writeCookieBanner();
    });
} else {
    writeCookieRevokeButton();
    processCookieDependentResources();
}

function writeCookieBanner() {
    async function fetchCookieMetadataAsync() {
        var lang = document.documentElement.lang;
        var fetchFile = lang + '.cookie.json';
        const response = await fetch(fetchFile);
        var metadata = await response.json();
        if(metadata.layout == 'classic') {
            document.body.innerHTML += cookieBannerLayout1;
        }
        if(metadata.layout == 'wide') {
            document.body.innerHTML += cookieBannerLayout2;
        }
        document.getElementById('banner__header').innerText = metadata.header;
        document.getElementById('banner__text').innerText = metadata.text;
        var additionalText = document.getElementById('additional__text');
        if (additionalText !== null) {
            document.getElementById('additional__text').innerText = metadata.additionalText;
        }
        var cookieButtons = document.getElementById('cookie__buttons').querySelector('.row');
        var cookieLinksStart = document.getElementById('cookielinks__start');
        var cookieLinksEnd = document.getElementById('cookielinks__end');
        var cookieGroups = document.getElementById('cookie__groups');
        for (var button in metadata.buttons) {
            if(button != 'selected') {
                var newCookieButtonCol = document.createElement('div');
                var buttonMargin = 'my-3'
                if(metadata.layout == 'classic') {
                    newCookieButtonCol.className = 'col-md-6';
                }
                if(metadata.layout == 'wide') {
                    newCookieButtonCol.className = 'col-12';
                    buttonMargin = 'my-2';
                }
                var newCookieButton = document.createElement('button');
                var className = 'btn btn-primary w-100 ' + buttonMargin + ' cookie-button';
                if (button == 'essential') {
                    className = 'btn btn-outline-primary w-100 ' + buttonMargin + ' cookie-button';
                }
                newCookieButton.className = className;
                newCookieButton.setAttribute('id', 'button__' + button);
                newCookieButton.appendChild(document.createTextNode(metadata.buttons[button].label));
                newCookieButtonCol.appendChild(newCookieButton);
                cookieButtons.appendChild(newCookieButtonCol);
            }
            if(button == 'selected') {
                var newCookieButton = document.createElement('button');
                newCookieButton.className = 'btn btn-link cookie-link';
                newCookieButton.setAttribute('id', 'button__' + button);
                newCookieButton.setAttribute('style', 'display:none');
                newCookieButton.appendChild(document.createTextNode(metadata.buttons[button].label));
                cookieLinksStart.appendChild(newCookieButton);
            }
        }
        for (var link in metadata.links) {
            if(metadata.links[link].label) {
                var newCookieLink = document.createElement('a');
                newCookieLink.className = 'btn btn-link cookie-link';
                newCookieLink.setAttribute('id', 'link__' + link);
                newCookieLink.appendChild(document.createTextNode(metadata.links[link].label));
                newCookieLink.setAttribute('href', metadata.links[link].href);
                cookieLinksEnd.appendChild(newCookieLink);
            }
        }
        for (var cookiegroup in metadata.cookiegroups) {
            var newCookieGroupWrapper = document.createElement('div');
            newCookieGroupWrapper.className = 'cookie-group mb-3'
            newCookieGroupWrapper.setAttribute('id', 'cookiegroup__' + cookiegroup);
            var newCookieGroupRow = document.createElement('div');
            newCookieGroupRow.className = 'row align-items-center'
            var newCookieGroupColStart = document.createElement('div');
            newCookieGroupColStart.className = 'col-9'
            var newCookieGroupColEnd = document.createElement('div');
            newCookieGroupColEnd.className = 'col-3'

            var newCookieGroupColStartButton = document.createElement('button');
            newCookieGroupColStartButton.className = 'btn btn-link group-btn';
            newCookieGroupColStartButton.appendChild(document.createTextNode(metadata.cookiegroups[cookiegroup].label));
            newCookieGroupColStartButton.setAttribute('style', 'font-weight:bold;padding:0;margin:0');
            newCookieGroupColStartButton.setAttribute('id', 'groupbtn__' + cookiegroup);
            newCookieGroupColStartButton.setAttribute('data-togglegroup', cookiegroup);

            newCookieGroupColStart.appendChild(newCookieGroupColStartButton);

            if(cookiegroup == 'essential') {
                newCookieGroupColEnd.innerHTML = '<div class="form-check"><input class="form-check-input" type="checkbox" value="" id="checkbox__essential" checked disabled></div>';
            } else {
                newCookieGroupColEnd.innerHTML = '<div class="form-check"><input class="form-check-input" type="checkbox" value="" data-cookiegroup="' + cookiegroup + '" id="checkbox__' + cookiegroup + '"></div>';
            }
            newCookieGroupWrapper.appendChild(newCookieGroupRow);
            newCookieGroupRow.appendChild(newCookieGroupColStart);
            newCookieGroupRow.appendChild(newCookieGroupColEnd);

            var newCookieOuterWrapper = document.createElement('div');
            newCookieOuterWrapper.className = 'cookie-wrapper'
            newCookieOuterWrapper.setAttribute('id', 'cookiewrapper__' + cookiegroup);
            newCookieOuterWrapper.setAttribute('style', 'display:none');
            newCookieGroupWrapper.appendChild(newCookieOuterWrapper);

            for (var cookie in metadata.cookiegroups[cookiegroup].cookies) {
                var newCookieWrapper = document.createElement('div');
                newCookieWrapper.className = 'cookie py-2'
                newCookieWrapper.setAttribute('id', 'cookie__' + cookie);
                newCookieWrapper.setAttribute('style', 'font-size:0.9rem');
                var newCookieRow = document.createElement('div');
                newCookieRow.className = 'row'
                var newCookieColStart = document.createElement('div');
                newCookieColStart.className = 'col-md-1'
                newCookieColStart.appendChild(document.createTextNode(cookie));
                var newCookieColCenter = document.createElement('div');
                newCookieColCenter.className = 'col-md-9'
                newCookieColCenter.appendChild((document.createTextNode(metadata.cookiegroups[cookiegroup].cookies[cookie].description)));
                var newCookieColEnd = document.createElement('div');
                newCookieColEnd.className = 'col-md-2'
                newCookieColEnd.setAttribute('style', 'text-align:right');
                newCookieColEnd.appendChild((document.createTextNode(metadata.cookiegroups[cookiegroup].cookies[cookie].lifetime)));
                newCookieWrapper.appendChild(newCookieRow);
                newCookieRow.appendChild(newCookieColStart);
                newCookieRow.appendChild(newCookieColCenter);
                newCookieRow.appendChild(newCookieColEnd);
                newCookieOuterWrapper.appendChild(newCookieWrapper);
            }

            cookieGroups.appendChild(newCookieGroupWrapper);
        }

        function setEssentialCookie(value) {
            setCookie('_cs', value, nowPlusOneYear());
            document.getElementById('cookie__banner').remove();
            processCookieDependentResources();
        }

        const selectedCookieGroups = [];

        document.querySelectorAll('.form-check-input').forEach(item => {
            item.addEventListener('click', e => {
                var cookieGroup = item.getAttribute('data-cookiegroup');
                if(item.checked == true) {
                    selectedCookieGroups.push(cookieGroup);
                } else {
                    selectedCookieGroups.splice(cookieGroup, 1);
                }
                var buttonSelected = document.getElementById('button__selected');
                if(selectedCookieGroups.length === 0) {
                    buttonSelected.setAttribute('style', 'display:none');
                } else {
                    buttonSelected.setAttribute('style', 'display:block');
                }
            });
        });


        document.getElementById('button__all').addEventListener('click', (e) => {
            setEssentialCookie('all');
            writeCookieRevokeButton();
        });

        document.getElementById('button__essential').addEventListener('click', (e) => {
            setEssentialCookie('essential');
            writeCookieRevokeButton();
        });

        document.getElementById('button__selected').addEventListener('click', (e) => {;
            var cookieString = selectedCookieGroups.join(',');
            setEssentialCookie(cookieString);
            writeCookieRevokeButton();
        });

        document.querySelectorAll('.group-btn').forEach(item => {
            item.addEventListener('click', e => {
                var dataToggleGroup = item.getAttribute('data-togglegroup');
                slideToggle(document.getElementById('cookiewrapper__' + dataToggleGroup), 300);
            });
        });

    }

    if(!getCookie('_cs') || getCookie('_cs') == 'revoked') {
        fetchCookieMetadataAsync();
    }
}


