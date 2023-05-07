function changeImage() {
    const moon = document.getElementById('moon');
    const sun = document.getElementById('sun');
    const hidden = 'hidden';
    const visible = 'visible';

    document.body.classList.toggle("light");
    if (moon.classList.contains('hidden')) {
        moon.classList.add(visible);
        moon.classList.remove(hidden);

        sun.classList.add(hidden);
        sun.classList.remove(visible);
    } 
    else {
        sun.classList.add(visible);
        sun.classList.remove(hidden);

        moon.classList.add(hidden);
        moon.classList.remove(visible);
    }
}

function myImageFunction(productSmallImg) {
    var productFullImg = document.getElementById("img-Box");
    productFullImg.src = productSmallImg.src;
}

function submitForm() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxDgdbtlNgS1AS-0gERN5ExFFY2AaCqhZwy6QFy1a0XBUu8Dbh90cj-1_j6xJJ94PhK/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg");
    form.addEventListener('submit', e => 
    {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
}