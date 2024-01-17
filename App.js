var txt = document.querySelector(".inputOfGenerator");
var imgBox = document.querySelector(".imgdiv");
var generatorcard = document.querySelector(".generatorcard");
var qrBox = document.querySelector(".imgQr");
var btnOfGenerator = document.querySelector(".btn-of-generator");

function generateQrCode() {
    if (txt.value != "") {
        qrBox.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${txt.value}`;
        imgBox.classList.add("show-img");
    } else {
        console.log("CHala");
        generatorcard.classList.add("error")
        setTimeout(() => {
            generatorcard.classList.remove("error")
        }, 1000)
    }
}


btnOfGenerator.addEventListener("click", generateQrCode);
txt.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        generateQrCode();
    }
});