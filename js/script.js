const encryptBtn = document.getElementById("encryptBtn");
const decryptBtn = document.getElementById("decryptBtn");
const copyBtn = document.getElementById("copyBtn");

const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

const noMessageSection = document.getElementById("noMessageSection");
const messageSection = document.getElementById("messageSection");

encryptBtn.addEventListener("click", () => {
    const message = inputText.value;
    if (message.length == 0) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "warning",
            title: "Please enter a message! 😕",
        });
        return;
    }
    
    let encryptedMessage = replaceLetters(message);
    outputText.value = encryptedMessage;

    noMessageSection.style.display = "none";
    messageSection.style.display = "block";

    const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Message encrypted! 😉",
    });

});

function replaceLetters(text) {
    const replacements = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    const modifiedText = text.replace(/a|e|i|o|u/g, function(matched){
        return replacements[matched];
    });
    
    return modifiedText;
}

decryptBtn.addEventListener("click", () => {
    const message = inputText.value;
    if (message.length == 0) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "warning",
            title: "Please enter a message! 😕",
        });
        return;
    }
    
    let decryptedMessage = decryptText(message);
    outputText.value = decryptedMessage;

    noMessageSection.style.display = "none";
    messageSection.style.display = "block";

    const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Message decrypted! 🤫",
      });
});

function decryptText(text) {
    const replacements = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    const modifiedText = text.replace(/ai|enter|imes|ober|ufat/g, function(matched){
        return replacements[matched];
    });
    
    return modifiedText;
}

// RESTRICT INPUT TO LETTERS ONLY AND NO ACCENTS
inputText.addEventListener("keyup", (event) => {
    const currentText = event.target.value;

    let newText = currentText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '');

    if (newText !== currentText) {
        event.target.value = newText;
    }
});

copyBtn.addEventListener("click", () => {
    const textValue = outputText.value;
    navigator.clipboard.writeText(textValue);

    const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "info",
        title: "Copied to clipboard! 📋",
      });
});