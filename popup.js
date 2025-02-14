console.log('Popup script loaded');

document.getElementById('clickMe').addEventListener('click', () => {
    console.log("RUN! ");
    alert('Button clicked!');
    // document.body.style = "background:red";
    abc();
});

function abc() {
    alert('abc...')
}





