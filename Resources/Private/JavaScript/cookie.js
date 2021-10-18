function createElement(tagName, id = '', className = '', attributes = [], innerHTML = '') {
    let tag = document.createElement(tagName);
    if(className != '') {
        tag.className = className;
    }
    if(id != '') {
        tag.setAttribute('id', id);
    }
    if(innerHTML != '') {
        tag.innerHTML = innerHTML;
    }
    return tag;
}

let cookies = ['essential'];

const cookieSvg = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 122.25" style="enable-background:new 0 0 122.88 122.25" xml:space="preserve"><g><path d="M101.77,49.38c2.09,3.1,4.37,5.11,6.86,5.78c2.45,0.66,5.32,0.06,8.7-2.01c1.36-0.84,3.14-0.41,3.97,0.95 c0.28,0.46,0.42,0.96,0.43,1.47c0.13,1.4,0.21,2.82,0.24,4.26c0.03,1.46,0.02,2.91-0.05,4.35h0v0c0,0.13-0.01,0.26-0.03,0.38 c-0.91,16.72-8.47,31.51-20,41.93c-11.55,10.44-27.06,16.49-43.82,15.69v0.01h0c-0.13,0-0.26-0.01-0.38-0.03 c-16.72-0.91-31.51-8.47-41.93-20C5.31,90.61-0.73,75.1,0.07,58.34H0.07v0c0-0.13,0.01-0.26,0.03-0.38 C1,41.22,8.81,26.35,20.57,15.87C32.34,5.37,48.09-0.73,64.85,0.07V0.07h0c1.6,0,2.89,1.29,2.89,2.89c0,0.4-0.08,0.78-0.23,1.12 c-1.17,3.81-1.25,7.34-0.27,10.14c0.89,2.54,2.7,4.51,5.41,5.52c1.44,0.54,2.2,2.1,1.74,3.55l0.01,0 c-1.83,5.89-1.87,11.08-0.52,15.26c0.82,2.53,2.14,4.69,3.88,6.4c1.74,1.72,3.9,3,6.39,3.78c4.04,1.26,8.94,1.18,14.31-0.55 C99.73,47.78,101.08,48.3,101.77,49.38L101.77,49.38z M59.28,57.86c2.77,0,5.01,2.24,5.01,5.01c0,2.77-2.24,5.01-5.01,5.01 c-2.77,0-5.01-2.24-5.01-5.01C54.27,60.1,56.52,57.86,59.28,57.86L59.28,57.86z M37.56,78.49c3.37,0,6.11,2.73,6.11,6.11 s-2.73,6.11-6.11,6.11s-6.11-2.73-6.11-6.11S34.18,78.49,37.56,78.49L37.56,78.49z M50.72,31.75c2.65,0,4.79,2.14,4.79,4.79 c0,2.65-2.14,4.79-4.79,4.79c-2.65,0-4.79-2.14-4.79-4.79C45.93,33.89,48.08,31.75,50.72,31.75L50.72,31.75z M119.3,32.4 c1.98,0,3.58,1.6,3.58,3.58c0,1.98-1.6,3.58-3.58,3.58s-3.58-1.6-3.58-3.58C115.71,34.01,117.32,32.4,119.3,32.4L119.3,32.4z M93.62,22.91c2.98,0,5.39,2.41,5.39,5.39c0,2.98-2.41,5.39-5.39,5.39c-2.98,0-5.39-2.41-5.39-5.39 C88.23,25.33,90.64,22.91,93.62,22.91L93.62,22.91z M97.79,0.59c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78C92.02,3.17,94.6,0.59,97.79,0.59L97.79,0.59z M76.73,80.63c4.43,0,8.03,3.59,8.03,8.03 c0,4.43-3.59,8.03-8.03,8.03s-8.03-3.59-8.03-8.03C68.7,84.22,72.29,80.63,76.73,80.63L76.73,80.63z M31.91,46.78 c4.8,0,8.69,3.89,8.69,8.69c0,4.8-3.89,8.69-8.69,8.69s-8.69-3.89-8.69-8.69C23.22,50.68,27.11,46.78,31.91,46.78L31.91,46.78z M107.13,60.74c-3.39-0.91-6.35-3.14-8.95-6.48c-5.78,1.52-11.16,1.41-15.76-0.02c-3.37-1.05-6.32-2.81-8.71-5.18 c-2.39-2.37-4.21-5.32-5.32-8.75c-1.51-4.66-1.69-10.2-0.18-16.32c-3.1-1.8-5.25-4.53-6.42-7.88c-1.06-3.05-1.28-6.59-0.61-10.35 C47.27,5.95,34.3,11.36,24.41,20.18C13.74,29.69,6.66,43.15,5.84,58.29l0,0.05v0h0l-0.01,0.13v0C5.07,73.72,10.55,87.82,20.02,98.3 c9.44,10.44,22.84,17.29,38,18.1l0.05,0h0v0l0.13,0.01h0c15.24,0.77,29.35-4.71,39.83-14.19c10.44-9.44,17.29-22.84,18.1-38l0-0.05 v0h0l0.01-0.13v0c0.07-1.34,0.09-2.64,0.06-3.91C112.98,61.34,109.96,61.51,107.13,60.74L107.13,60.74z M116.15,64.04L116.15,64.04 L116.15,64.04L116.15,64.04z M58.21,116.42L58.21,116.42L58.21,116.42L58.21,116.42z"/></g></svg>';

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

function destroyCookieWindows() {
    if(document.getElementById('cookie_Banner')) {
        document.getElementById('cookie_Banner').remove();
    }
    if(document.getElementById('cookie_Settings')) {
        document.getElementById('cookie_Settings').remove();
    }
}

function toggleCookieGroups(array, value) {
    var index = array.indexOf(value);
    if (index === -1) {
        array.push(value);
    } else {
        array.splice(index, 1);
    }
}

function nowPlusOneYear() {
    var oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    return oneYearFromNow;
}

function setCookie(cookie, value, expires) {
    document.cookie = cookie + '=' + value + ';expires=' + expires;
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

function cookieButtonEventListener() {
    document.getElementById('cookie_Banner__Button__OK').addEventListener('click', (e) => {
        setCookie('_cs', 'all', nowPlusOneYear());
        destroyCookieWindows();
        createRevokeButton();
        processCookieDependentResources();
    });
}

function createRevokeButton() {
    const cookieBanner = document.getElementById('cb');
    const cookieBannerRevokeButton = createElement('button', 'cookie_Banner__Revoke', 'cookie-Banner--Revoke', [], cookieSvg);
    cookieBanner.append(cookieBannerRevokeButton);
    cookieBanner.style.opacity = '1';

    document.getElementById('cookie_Banner__Revoke').addEventListener('click', (e) => {
        document.getElementById('cookie_Banner__Revoke').remove();
        setCookie('_cs', 'revoked', nowPlusOneYear());
        location.reload();
    });
}

async function fetchCookieMetadataAsync(delayTime = 2000) {

    let lang = document.documentElement.lang;
    let fetchFile = '/' + lang + '.cookie.json';
    const response = await fetch(fetchFile);
    let metadata = await response.json();

    const cookieBanner = document.getElementById('cb');
    const cookieBannerButtonSettings = createElement('button', 'cookie_Banner__Button__Settings', 'cookie-Banner--Button', [], metadata.buttons.settings.label);
    const cookieBannerButtonOK = createElement('button', 'cookie_Banner__Button__OK', 'cookie-Banner--Button', [], metadata.buttons.confirm.label + ' <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="long-arrow-right" class="svg-inline--fa fa-long-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg>');

    function createCookieBanner() {

        const cookieBannerWrapper = createElement('div', 'cookie_Banner', 'cookie-Banner--Wrapper', [], '');
        cookieBannerWrapper.append(createElement('div', '', 'cookie-Banner', [], ''));

        cookieBanner.append(cookieBannerWrapper);

        const cookieBannerInner = document.getElementsByClassName('cookie-Banner')[0];
        const cookieBannerRow = createElement('div', '', 'cookie-Banner--Row', [], '');

        const cookieBannerRow1 = createElement('div', '', 'cookie-Banner--Row--Column-1', [], '');
        const cookieBannerRow2 = createElement('div', '', 'cookie-Banner--Row--Column-2', [], '<div class="text"><span class="text--Header">' + metadata.header + '</span><span class="text--P">' + metadata.text + '</span><div class="text--Links"><a href="' + metadata.links.dataprivacy.href + '" class="text--Links-Privacy">' + metadata.links.dataprivacy.label + '</a><a href="' + metadata.links.legalnotice.href + '" class="text--Links-Imprint">' + metadata.links.legalnotice.label + '</a></div></div>');
        const cookieBannerRow3 = createElement('div', '', 'cookie-Banner--Row--Column-3', [], '');

        cookieBannerRow3.append(cookieBannerButtonSettings);
        cookieBannerRow3.append(cookieBannerButtonOK);

        cookieBannerRow1.innerHTML = cookieSvg;

        cookieBannerInner.append(cookieBannerRow);
        cookieBannerRow.append(cookieBannerRow1);
        cookieBannerRow.append(cookieBannerRow2);
        cookieBannerRow.append(cookieBannerRow3);

        cookieButtonEventListener();
    }

    function createCookieSettings() {

        const cookieGroupToggleContent = '<div class="cookie-Group--Toggle--Sprite">&nbsp;</div><div class="cookie-Group--Toggle--Switch">&nbsp;</div>';

        const cookieSettingsWrapper = createElement('div', 'cookie_Settings', 'cookie-Settings--Wrapper', [], '');
        cookieSettingsWrapper.append(createElement('div', '', 'cookie-Settings', [], '<div class="cookie-Settings--Header">' + metadata.additionalHeader + '</div><div id="cookie_Settings__Body" class="cookie-Settings--Body"></div><div class="cookie-Settings--Footer"></div>'));

        const cookieSettingsFooter = cookieSettingsWrapper.getElementsByClassName('cookie-Settings--Footer')[0];

        const cookieBannerButtonSettingsModified = cookieBannerButtonSettings;
        cookieBannerButtonSettingsModified.setAttribute('id', 'cookie_Banner__Button__Settings__OK');
        cookieBannerButtonSettingsModified.textContent = metadata.buttons.settings.additionalLabelText;

        cookieSettingsFooter.append(cookieBannerButtonSettingsModified);
        cookieSettingsFooter.append(cookieBannerButtonOK);

        cookieBanner.append(cookieSettingsWrapper);

        for (var group in metadata.groups) {

            let cookieGroupToggle = createElement('button', 'cookie_Group__Toggle__' + group, 'cookie-Group--Toggle', [], cookieGroupToggleContent);
            let cookieGroup = createElement('div', 'cookie_Group__' + group, 'cookie-Group', [], '<div class="cookie-Settings--Body--Title"><span>' + metadata.groups[group].label + '</span>' + cookieGroupToggle.outerHTML + '</div><div id="cookie_Settings__Body__Cookies__' + group + '" class="cookie-Settings--Body--Cookies"></div>');
            document.getElementById('cookie_Settings__Body').append(cookieGroup);

            for (var cookie in metadata.groups[group].cookies) {
                let cookieGroupCookieRow = createElement('div', '', 'cookie-Group--Row', [], '<div class="cookie-Banner--Row--Column-1"><code>' + cookie + '</code></div><div class="cookie-Banner--Row--Column-2">' + metadata.groups[group].cookies[cookie].description + '</div><div class="cookie-Banner--Row--Column-3">' + metadata.groups[group].cookies[cookie].lifetime + '</div>');
                document.getElementById('cookie_Settings__Body__Cookies__' + group).append(cookieGroupCookieRow);
                document.getElementById('cookie_Group__Toggle__' + group).setAttribute('data-cookiegroup', group);
            }
        }

        document.getElementById('cookie_Group__Toggle__essential').classList.add('toggled');

        document.querySelectorAll('.cookie-Group--Toggle').forEach(toggleButton => {
            toggleButton.addEventListener('click', function () {
                toggleButton.classList.toggle('toggled');
                toggleCookieGroups(cookies, toggleButton.dataset.cookiegroup);
            });
        });


        document.getElementById('cookie_Banner__Button__Settings__OK').addEventListener('click', (e) => {
            setCookie('_cs', cookies.join(','), nowPlusOneYear());
            destroyCookieWindows();
            createRevokeButton();
            processCookieDependentResources();
        });

    }

    let bannerCreation = setTimeout(function () {

        createCookieBanner();
        document.getElementById('cb').classList.add('show');
        clearInterval(bannerCreation);

        document.getElementById('cookie_Banner__Button__Settings').addEventListener('click', (e) => {
            if(e.target.getAttribute('id') === 'cookie_Banner__Button__Settings') {
                document.getElementById('cookie_Banner').remove();
                createCookieSettings();
            }
        });
    }, parseInt(metadata.settings.bannerDelayTime));

}

if(!getCookie('_cs') || getCookie('_cs') == 'revoked') {
    fetchCookieMetadataAsync();
} else {
    createRevokeButton();
    processCookieDependentResources();
}
