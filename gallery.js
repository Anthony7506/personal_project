
function changeTextColor() {
    const myColor = document.getElementById("inputColor").value;
    document.body.style.color = myColor;
}

document.getElementById("inputColor").addEventListener("input", changeTextColor);
