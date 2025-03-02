function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");

    if (popup.classList.contains("active")) {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        if (username === "QuanBui" && password === "Access") {
            alert("Login successful!");
            popup.classList.remove("active"); // Close the popup
        } else {
            alert("Invalid username or password!");
        }
    } else {
        popup.classList.add("active"); // Open the popup
    }
}