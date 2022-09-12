const ce_main_container = document.createElement('DIV');
const ce_iframe_container = document.createElement('iframe');
const ce_name = document.createElement('DIV');
const ce_input = document.createElement('INPUT');
const ce_button = document.createElement('DIV');

ce_main_container.classList.add('ce_main');
ce_name.id = 'ce_name';
ce_input.id = 'ce_input';
ce_button.id = 'ce_button';

ce_name.innerHTML = `Hello NAME`;
ce_button.innerHTML = `Change name.`;

ce_main_container.appendChild(ce_iframe_container);

ce_iframe_container.appendChild(ce_name);
ce_iframe_container.appendChild(ce_input);
ce_iframe_container.appendChild(ce_button);
ce_iframe_container.setAttribute('src', 'https://www.bublup.com')


document.querySelector('body').appendChild(ce_main_container);

chrome.runtime.sendMessage({
    message: "get_name"
}, response => {
    if (response.message === 'success') {
        ce_name.innerHTML = `Hello ${response.payload}`;
    }
});

ce_button.addEventListener('click', () => {
    chrome.runtime.sendMessage({
        message: "change_name",
        payload: ce_input.value
    }, response => {
        if (response.message === 'success') {
            ce_name.innerHTML = `Hello ${ce_input.value}`;
        }
    });
});
