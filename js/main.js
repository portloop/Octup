'use sctrict'

$(document).ready(() => {
    let arrowToScrollUp = $('.arrow');

    arrowToScrollUp.click(() => {
        window.scrollTo(0, 0);
    })



    let words = document.querySelectorAll(".word");
    words.forEach((word) => {
        let letters = word.textContent.split("");
        word.textContent = "";
        letters.forEach((letter) => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.className = "letter";
            word.append(span);
        });
    });
    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;
    words[currentWordIndex].style.opacity = "1";
    let rotateText = () => {
        let currentWord = words[currentWordIndex];
        let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
        // rotate out letters of current word
        Array.from(currentWord.children).forEach((letter, i) => {
            setTimeout(() => {
                letter.className = "letter out";
            }, i * 80);
        });
        // reveal and rotate in letters of next word
        nextWord.style.opacity = "1";
        Array.from(nextWord.children).forEach((letter, i) => {
            letter.className = "letter behind";
            setTimeout(() => {
                letter.className = "letter in";
            }, 340 + i * 80);
        });
        currentWordIndex =
            currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };
    rotateText();
    setInterval(rotateText, 2400);

    // Sticky header
    let header = $('.header-fixed');

    $(document).scroll(() => {
        let pageY = window.pageYOffset;
        if (pageY > 50) {
            header.css('background-color', '#fff');
        } else {
            header.css('background-color', 'transparent');
        }
    });


    function prevD() {
        event.preventDefault();
    };


    let button = $('#order-button');

    let name = $('#name');
    let email = $('#email');
    let phone = $('#phone');

    let loader = $('.loader');

    let form = $('.order-form');
    let success = $('.success')


    name.keypress(() => {
        name.css('border', '1px solid transparent');
        name.next().fadeOut();
    });

    email.keypress(() => {
        email.css('border', '1px solid transparent');
        email.next().fadeOut();
    })

    button.click(() => {
        let hasError = false;


        if (!name.val()) {
            name.css('border', '1px solid red');
            name.next().fadeIn();
            hasError = true;
        }

        var email_value = email.val();
        var isProperEmail = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/).test(email_value);
        if (!isProperEmail) {
            email.css('border', '1px solid red');
            email.next().fadeIn();
            hasError = true;
        }

        if (!hasError) {
            form.submit(function (e) {
                !function (e, t) { if (!document.getElementById(e)) { var c = document.createElement("script"); c.src = "https://js-eu1.hs-analytics.net/analytics/1657227300000/26004468.js", c.type = "text/javascript", c.id = e; var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(c, n) } }("hs-analytics");
                var _hsp = window._hsp = window._hsp || [];
                _hsp.push(['addEnabledFeatureGates', []]);
                !function (t, e, r) { if (!document.getElementById(t)) { var n = document.createElement("script"); for (var a in n.src = "https://js-eu1.hs-banner.com/26004468.js", n.type = "text/javascript", n.id = t, r) r.hasOwnProperty(a) && n.setAttribute(a, r[a]); var i = document.getElementsByTagName("script")[0]; i.parentNode.insertBefore(n, i) } }("cookieBanner-26004468", 0, { "data-cookieconsent": "ignore", "data-hs-ignore": true, "data-loader": "hs-scriptloader", "data-hsjs-portal": 26004468, "data-hsjs-env": "prod", "data-hsjs-hublet": "eu1" });
                !function (t, e, r) { if (!document.getElementById(t)) { var n = document.createElement("script"); for (var a in n.src = "https://js-eu1.hscollectedforms.net/collectedforms.js", n.type = "text/javascript", n.id = t, r) r.hasOwnProperty(a) && n.setAttribute(a, r[a]); var i = document.getElementsByTagName("script")[0]; i.parentNode.insertBefore(n, i) } }("CollectedForms-26004468", 0, { "crossorigin": "anonymous", "data-leadin-portal-id": 26004468, "data-leadin-env": "prod", "data-loader": "hs-scriptloader", "data-hsjs-portal": 26004468, "data-hsjs-env": "prod", "data-hsjs-hublet": "eu1" });
                e.preventDefault();
                form.fadeOut();
                success.fadeIn();
                success.css('display', 'flex')
            });

        } else {
            event.preventDefault();
        }

    });


});