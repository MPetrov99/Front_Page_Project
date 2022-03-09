//Open menu on click
const sideMenu = document.querySelector('.side-menu');
document.querySelector('.side-menu-toggle').addEventListener('click', () => {
    sideMenu.classList.toggle('hidden');
});


//Close menu on click
document.querySelector('.side-menu .close').addEventListener('click', () => {
    sideMenu.classList.add('hidden');
});

//Scroll to functions on side menu
let scrollToDetails = document.getElementById('scroll-to-details');
let detailsScroll = document.getElementById('details-scroll');

scrollToDetails.addEventListener('click', (ev) => {
    detailsScroll.scrollIntoView({
        behavior: "smooth"
    })
});

let scrollToHome = document.getElementById('scroll-to-home');
let homeScroll = document.getElementById('home-scroll');

scrollToHome.addEventListener('click', (ev) => {
    homeScroll.scrollIntoView({
        behavior: "smooth"
    })
});

let scrollToPersonalInfo = document.getElementById('scroll-to-personal-info');
let personalinfoScroll = document.getElementById('personal-info-scroll');

scrollToPersonalInfo.addEventListener('click', (ev) => {
    personalinfoScroll.scrollIntoView({
        behavior: "smooth"
    })
});

let scrollToWorkingProcess = document.getElementById('scroll-to-working-process');
let workingProcessScroll = document.getElementById('working-process-scroll');

scrollToWorkingProcess.addEventListener('click', (ev) => {
    workingProcessScroll.scrollIntoView({
        behavior: "smooth"
    })
});

let scrollToSchedule = document.getElementById('scroll-to-schedule');
let scheduleScroll = document.getElementById('schedule-scroll');

scrollToSchedule.addEventListener('click', (ev) => {
    scheduleScroll.scrollIntoView({
        behavior: "smooth"
    })
});

let scrollToLatestWork = document.getElementById('scroll-to-latest-work');
let latestWorkScroll = document.getElementById('latest-work-scroll');

scrollToLatestWork.addEventListener('click', (ev) => {
    latestWorkScroll.scrollIntoView({
        behavior: "smooth"
    })
});

let scrollToRecommendation = document.getElementById('scroll-to-recommendation');
let recommendationScroll = document.getElementById('recommendation-scroll');

scrollToRecommendation.addEventListener('click', (ev) => {
    recommendationScroll.scrollIntoView({
        behavior: "smooth"
    })
});

let scrollToDetailsNav = document.getElementById('scroll-to-details-nav');
let detailsNavScroll = document.getElementById('details-scroll');

scrollToDetailsNav.addEventListener('click', (ev) => {
    detailsNavScroll.scrollIntoView({
        behavior: "smooth"
    })
});


//Working Process - Random swapping element places

let target: HTMLElement;
document.addEventListener("click", (ev: MouseEvent) => {
    let action: HTMLElement = (ev.target as HTMLElement).closest(".grid-item");

    if (action) {
        let elementPositionToSwapWith = Math.floor(Math.random() * 4);
        let clickedElementPostion = Array.prototype.indexOf.call(action.parentElement.children, action);
        while (clickedElementPostion === elementPositionToSwapWith) {
            elementPositionToSwapWith = Math.floor(Math.random() * 4);
        }

        target = action.parentElement.children[elementPositionToSwapWith] as HTMLElement;

        let swapY = target.offsetLeft - (action.offsetWidth + action.offsetLeft);
        let swapX = target.offsetTop - (action.offsetHeight + action.offsetTop);

        let offsetSwapY = swapY + action.offsetWidth;
        let offsetSwapX = swapX + action.offsetHeight;

        let keyframe = `
        @keyframes spaceSwap {
            from {
                transform: translate3d(0, 0, 0);
            }
            to {
                transform: translate3d(${offsetSwapY}px, ${offsetSwapX}px, 0);
            }
        } 
        @keyframes spaceSwapReverse {
            from {
                transform: translate3d(0, 0, 0);
            }
            to {
                transform: translate3d(${-offsetSwapY}px, ${-offsetSwapX}px, 0);
            }
        }`;
        
        let style = document.querySelector("#keyframe");
        style.innerHTML = keyframe;

        action.style.animation = "spaceSwap .2s cubic-bezier(0.33, 1, 0.68, 1)";
        target.style.animation = "spaceSwapReverse .2s cubic-bezier(0.33, 1, 0.68, 1)";
        action.addEventListener("animationend",() => {
            action.style.removeProperty("animation");
            target.style.removeProperty("animation");
            style.innerHTML = "";
            swapElements(action, target);
            
        }, { once: true});
    }
});

let parentItem = document.querySelector(".process-grid");

function swapElements(swapItemOne: HTMLElement, swapItemTwo: HTMLElement) {
    let parentTwo = swapItemTwo.parentNode;
    let nextTwo = swapItemTwo.nextSibling;
    
    if (nextTwo === swapItemOne) {
        parentTwo.insertBefore(swapItemOne, swapItemTwo);
    } else {
        swapItemOne.parentNode.insertBefore(swapItemTwo, swapItemOne);
        if (nextTwo) {
            parentTwo.insertBefore(swapItemOne, nextTwo);
        } else {
            parentTwo.appendChild(swapItemOne);
        }
    }
}


// Form Validate

const form = document.getElementById('form') as HTMLElement;
const formName = document.getElementById('name') as HTMLInputElement;
const formEmail = document.getElementById('email') as HTMLInputElement;
const formSubject = document.getElementById('subject') as HTMLInputElement;
const formMessage = document.getElementById('message') as HTMLInputElement;

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    checkInputs();
});

function checkInputs() {
    // .trim so we remove the excess space in string
    let nameValue = formName.value.trim();
    let emailValue = formEmail.value.trim();
    let subjectValue = formSubject.value.trim();
    let messageValue = formMessage.value.trim();

    if(!nameValue) {
        setError(formName, 'Name section cannot be blank.'); 
    } else if(nameValue === nameValue.toLowerCase()) {
        setError(formName, 'Name must start with an upper letter.')
    } else {
         setSuccess(formName, 'Name section is filled correctly.');
    }

    if(!emailValue) {
        setError(formEmail, 'Email section cannot be blank.');
    } else {
        setSuccess(formEmail, 'Email section is filled correctly.');
    }

    if(!subjectValue) {
        setError(formSubject, 'Subject section cannot be blank.');
    } else {
        setSuccess(formSubject, 'Subject section is filled correctly.');
    }
    
    if(!messageValue) {
        setError(formMessage, 'Message section cannot be blank.');
    } else {
        setSuccess(formMessage, 'Message section is filled correctly.');
    }

    // Garbage collector
    nameValue = null;
    emailValue = null;
    subjectValue = null;
    messageValue = null;
}

function setError(input: HTMLInputElement, message: string) {
    let formControl = input.parentElement;
    let displayedMessage = formControl.querySelector("small");

    displayedMessage.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccess(input: HTMLInputElement, message: string) {
    let formControl = input.parentElement;
    let displayedMessage = formControl.querySelector("small");

    displayedMessage.innerText = message;
    
    formControl.className = 'form-control success';
}

