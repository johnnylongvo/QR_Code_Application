const form = document.getElementById('gen-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
    e.preventDefault();
    
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;
    
    console.log(url, size);
    // validation 
    if (url == '') {
        alert('No URL found! Please enter a URL!');
    } else {
        showLoadingSpinner();

        setTimeout(() => {  // show loading spinner for 1 second or so.
            hideLoadingSpinner();
        }, 1000); 
    }
};

const showLoadingSpinner = () => {
    document.getElementById('loadingSpinner').style.display = 'block';
}

const hideLoadingSpinner = () => {
    document.getElementById('loadingSpinner').style.display = 'none';
}

hideLoadingSpinner();

form.addEventListener('submit', onGenerateSubmit);