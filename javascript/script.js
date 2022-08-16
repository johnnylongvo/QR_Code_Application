const form = document.getElementById('gen-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
    e.preventDefault();

    clearUI(); // clear screen from QR code
    
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;
    
    console.log(url, size);
    // validation 
    if (url == '') {
        alert('No URL found! Please enter a URL!');
    } else {
        showLoadingSpinner();

        setTimeout(() => {  // show loading spinner for 3 second or so.
            hideLoadingSpinner();

            generateQRCode(url, size);
        }, 3000); 
    }
};

const showLoadingSpinner = () => {
    document.getElementById('loadingSpinner').style.display = 'block';
}

const hideLoadingSpinner = () => {
    document.getElementById('loadingSpinner').style.display = 'none';
}

const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode', { // pass id
        text: url, // object with text value, pass as an argument
        width: size,
        height: size,
    });
};

const clearUI = () => { // clearing QR code from screen
    qr.innerHTML = '';  
}

hideLoadingSpinner();

form.addEventListener('submit', onGenerateSubmit);