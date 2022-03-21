const box = document.querySelectorAll(".box");

function copy(e) {
    let clickedBox = e.target;
    setTimeout(()=> {
        clickedBox.classList.remove("copy");
    },1000);
    clickedBox.classList.add("copy");
    const text = clickedBox.outerHTML;
    navigator.clipboard.writeText(text)
        .then(() => {
        console.log("Text copied to clipboard...")
        console.log(clickedBox)
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })    
};

box.forEach(el => {
    el.addEventListener("click", copy);
});