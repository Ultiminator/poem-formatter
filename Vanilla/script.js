// delete all contents of the poem section
function empty() {
    document.getElementById('poem').innerHTML = '';
}

// show the modal to add new poem
function showModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
}

// close the modal
function hide() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// clear the input fields in the modal
function clearField() {
    document.getElementById('input').value = '';
}

// format the added poem and display it in the poem section
function formatText() {
    //get the poem section
    const poemSection = document.getElementById('poem');
    poemSection.innerHTML = '';
    // get the input value
    let inputValue = document.getElementById('input').value;
    // remove the tashkeel and store it in a variable
    let noTashkeel = inputValue.replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g, '');
    // split the input value by new line
    let poemArray = inputValue.split(/\r?\n/);
    let noTashkeelArray = noTashkeel.split(/\r?\n/);
    // filter the empty lines => no need as html will ignore them
    // poemArray = poemArray.filter(line => line.trim() !== '');
    // add the formatted text to the poem section
    for (let i = 0; i < poemArray.length; i++) {
        let line = poemArray[i];
        let noTashkeelLine = noTashkeelArray[i];
        if (i%2 === 0) {
            // add the line with tashkeel and without tashkeel in a div with class "abs" for the line without tashkeel
            poemSection.innerHTML += `<div class="line"><div>${line}</div><div class="abs">${noTashkeelLine}</div></div>`;
        } else {
            // add a class "ltr" to the line for the lines with odd index
            poemSection.innerHTML += `<div class="line ltr"><div>${line}</div><div class="abs">${noTashkeelLine}</div></div>`;
        }
    }
    // close the modal
    hide();
}