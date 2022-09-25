function display() {
    let a = document.getElementById("billAmount").value;
    let b = document.getElementById("percentageTip").value;
    if (a === "" || b === "") {
        document.getElementById("errorMessage").textContent = "Please Enter a valid Input.";
    } else {
        document.getElementById("errorMessage").textContent = "";
        let c = (b / 100) * a;
        document.getElementById("tipAmount").value = c;
        document.getElementById("totalAmount").value = parseFloat(a) + parseFloat(c);
    }
}