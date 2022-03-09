var sideMenu = document.querySelector('.side-menu');
document.querySelector('.side-menu-toggle').addEventListener('click', function () {
    sideMenu.classList.toggle('hidden');
});
document.querySelector('.side-menu .close').addEventListener('click', function () {
    sideMenu.classList.add('hidden');
});
var scrollToDetails = document.getElementById('scroll-to-details');
var detailsScroll = document.getElementById('details-scroll');
scrollToDetails.addEventListener('click', function (ev) {
    detailsScroll.scrollIntoView({
        behavior: "smooth"
    });
});
var scrollToHome = document.getElementById('scroll-to-home');
var homeScroll = document.getElementById('home-scroll');
scrollToHome.addEventListener('click', function (ev) {
    homeScroll.scrollIntoView({
        behavior: "smooth"
    });
});
var scrollToPersonalInfo = document.getElementById('scroll-to-personal-info');
var personalinfoScroll = document.getElementById('personal-info-scroll');
scrollToPersonalInfo.addEventListener('click', function (ev) {
    personalinfoScroll.scrollIntoView({
        behavior: "smooth"
    });
});
var scrollToWorkingProcess = document.getElementById('scroll-to-working-process');
var workingProcessScroll = document.getElementById('working-process-scroll');
scrollToWorkingProcess.addEventListener('click', function (ev) {
    workingProcessScroll.scrollIntoView({
        behavior: "smooth"
    });
});
var scrollToSchedule = document.getElementById('scroll-to-schedule');
var scheduleScroll = document.getElementById('schedule-scroll');
scrollToSchedule.addEventListener('click', function (ev) {
    scheduleScroll.scrollIntoView({
        behavior: "smooth"
    });
});
var scrollToLatestWork = document.getElementById('scroll-to-latest-work');
var latestWorkScroll = document.getElementById('latest-work-scroll');
scrollToLatestWork.addEventListener('click', function (ev) {
    latestWorkScroll.scrollIntoView({
        behavior: "smooth"
    });
});
var scrollToRecommendation = document.getElementById('scroll-to-recommendation');
var recommendationScroll = document.getElementById('recommendation-scroll');
scrollToRecommendation.addEventListener('click', function (ev) {
    recommendationScroll.scrollIntoView({
        behavior: "smooth"
    });
});
var scrollToDetailsNav = document.getElementById('scroll-to-details-nav');
var detailsNavScroll = document.getElementById('details-scroll');
scrollToDetailsNav.addEventListener('click', function (ev) {
    detailsNavScroll.scrollIntoView({
        behavior: "smooth"
    });
});
var target;
document.addEventListener("click", function (ev) {
    var action = ev.target.closest(".grid-item");
    if (action) {
        var elementPositionToSwapWith = Math.floor(Math.random() * 4);
        var clickedElementPostion = Array.prototype.indexOf.call(action.parentElement.children, action);
        while (clickedElementPostion === elementPositionToSwapWith) {
            elementPositionToSwapWith = Math.floor(Math.random() * 4);
        }
        target = action.parentElement.children[elementPositionToSwapWith];
        var swapY = target.offsetLeft - (action.offsetWidth + action.offsetLeft);
        var swapX = target.offsetTop - (action.offsetHeight + action.offsetTop);
        var offsetSwapY = swapY + action.offsetWidth;
        var offsetSwapX = swapX + action.offsetHeight;
        var keyframe = "\n        @keyframes spaceSwap {\n            from {\n                transform: translate3d(0, 0, 0);\n            }\n            to {\n                transform: translate3d(" + offsetSwapY + "px, " + offsetSwapX + "px, 0);\n            }\n        } \n        @keyframes spaceSwapReverse {\n            from {\n                transform: translate3d(0, 0, 0);\n            }\n            to {\n                transform: translate3d(" + -offsetSwapY + "px, " + -offsetSwapX + "px, 0);\n            }\n        }";
        var style_1 = document.querySelector("#keyframe");
        style_1.innerHTML = keyframe;
        action.style.animation = "spaceSwap .2s cubic-bezier(0.33, 1, 0.68, 1)";
        target.style.animation = "spaceSwapReverse .2s cubic-bezier(0.33, 1, 0.68, 1)";
        action.addEventListener("animationend", function () {
            action.style.removeProperty("animation");
            target.style.removeProperty("animation");
            style_1.innerHTML = "";
            swapElements(action, target);
        }, { once: true });
    }
});
var parentItem = document.querySelector(".process-grid");
function swapElements(swapItemOne, swapItemTwo) {
    var parentTwo = swapItemTwo.parentNode;
    var nextTwo = swapItemTwo.nextSibling;
    if (nextTwo === swapItemOne) {
        parentTwo.insertBefore(swapItemOne, swapItemTwo);
    }
    else {
        swapItemOne.parentNode.insertBefore(swapItemTwo, swapItemOne);
        if (nextTwo) {
            parentTwo.insertBefore(swapItemOne, nextTwo);
        }
        else {
            parentTwo.appendChild(swapItemOne);
        }
    }
}
var form = document.getElementById('form');
var formName = document.getElementById('name');
var formEmail = document.getElementById('email');
var formSubject = document.getElementById('subject');
var formMessage = document.getElementById('message');
form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    checkInputs();
});
function checkInputs() {
    var nameValue = formName.value.trim();
    var emailValue = formEmail.value.trim();
    var subjectValue = formSubject.value.trim();
    var messageValue = formMessage.value.trim();
    if (!nameValue) {
        setError(formName, 'Name section cannot be blank.');
    }
    else if (nameValue === nameValue.toLowerCase()) {
        setError(formName, 'Name must start with an upper letter.');
    }
    else {
        setSuccess(formName, 'Name section is filled correctly.');
    }
    if (!emailValue) {
        setError(formEmail, 'Email section cannot be blank.');
    }
    else {
        setSuccess(formEmail, 'Email section is filled correctly.');
    }
    if (!subjectValue) {
        setError(formSubject, 'Subject section cannot be blank.');
    }
    else {
        setSuccess(formSubject, 'Subject section is filled correctly.');
    }
    if (!messageValue) {
        setError(formMessage, 'Message section cannot be blank.');
    }
    else {
        setSuccess(formMessage, 'Message section is filled correctly.');
    }
    nameValue = null;
    emailValue = null;
    subjectValue = null;
    messageValue = null;
}
function setError(input, message) {
    var formControl = input.parentElement;
    var displayedMessage = formControl.querySelector("small");
    displayedMessage.innerText = message;
    formControl.className = 'form-control error';
}
function setSuccess(input, message) {
    var formControl = input.parentElement;
    var displayedMessage = formControl.querySelector("small");
    displayedMessage.innerText = message;
    formControl.className = 'form-control success';
}
//# sourceMappingURL=scripts.js.map