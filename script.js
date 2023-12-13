const chatElement = document.querySelector(".chat");
const submitButton = document.getElementById('submit')
const textArea = document.getElementById('textarea')
submitButton.onclick = chat;

let text = '';
const content = document.getElementById('textbox');

function chat() {
    let temp = '';
    text = textArea.value;
    if (text.trim().length > 0) {

        temp += `<div class="grid justify-items-end">
                    <div class="font-bold">You</div>
                    <div class="py-2 px-4 bg-sky-100 w-fit">${text}</div>
                    <div class="text-gray-400 text-[12px]">${formatDate()}</div>
                </div>`

        let reply = '';
        let lowerCaseText = text.trim().toLowerCase();
        if (text === text.toUpperCase()) {
            reply = 'Please remain calm.';
            if (
                lowerCaseText.includes(' how ') ||
                lowerCaseText.includes(' what ') ||
                lowerCaseText.includes(' why ') ||
                lowerCaseText.includes(' who ') ||
                lowerCaseText.includes(' which ') ||
                lowerCaseText.includes(' ?')
            ) {
                reply = 'Please give me some time to resolve the issue.';
            }
        } else {
            if (
                lowerCaseText.includes(' how ') ||
                lowerCaseText.includes(' what ') ||
                lowerCaseText.includes(' why ') ||
                lowerCaseText.includes(' who ') ||
                lowerCaseText.includes(' which ') ||
                lowerCaseText.includes(' ?')
            ) {
                reply = 'Yes';
            } else if (lowerCaseText === 'jamie') {
                reply = 'Can I help you?';
            } else {
                reply = 'Sorry, I don’t understand';
            }
        }
        temp += `<div>
                    <div class="font-bold">Jamie</div>
                    <div class="py-2 px-4 bg-sky-100 w-fit">${reply}</div>
                    <div class="text-gray-400 text-[12px]">${formatDate()}</div>
                </div>`
        text = '';
        textArea.value = '';
        chatElement.innerHTML += temp;
        // Updating the UI might differ based on the actual implementation in your HTML structure

        scrollToSection('bottom');
    } else {
        text = '';
    }
}

function scrollToSection(sectionId) {
    const element = content.querySelector(`#${sectionId}`);
    if (element) {
        element.scrollIntoView({behavior: 'smooth'});
    }
}

function formatDate() {
    let formattedDate = new Date();

    let day = formattedDate.getDate();
    let month = formattedDate.getMonth() + 1;
    let year = formattedDate.getFullYear();
    let hours = formattedDate.getHours();
    let minutes = formattedDate.getMinutes();
    let seconds = formattedDate.getSeconds();

    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    let formattedDateString = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    return formattedDateString;
}
