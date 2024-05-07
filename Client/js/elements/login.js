async function login(divID = "screen") {
    try {
        const screen = document.getElementById(divID);
        var childDiv = screen.appendChild(Object.assign(document.createElement("div"), { id: "login" }));
        var form = childDiv.appendChild(document.createElement("form"));
        form.setAttribute("method", "POST");

        var menuLoginLabel = form.appendChild(Object.assign(document.createElement("div"), { id: "login_label", innerHTML: text.login.login }));
        var menuLoginUserLabel = form.appendChild(Object.assign(document.createElement("div"), { id: "login_user_label", innerHTML: text.login.user }));
        var menuLoginPasswordLabel = form.appendChild(Object.assign(document.createElement("div"), { id: "login_password", innerHTML: text.login.password }));

        var menuLoginUserInput = menuLoginUserLabel.appendChild(Object.assign(document.createElement("input"), { type: "text", id: "login_user_input", name: "login_user_input" }));
        var menuLoginPasswordInput = menuLoginPasswordLabel.appendChild(Object.assign(document.createElement("input"), { type: "password", id: "login_password_input", name: "login_password_input" }));
        var submitButton = form.appendChild(Object.assign(document.createElement("button"), { type: "submit", innerHTML: text.login.login }));

        form.addEventListener('submit', function (event) {
            var http = new XMLHttpRequest();

            event.preventDefault();
            var userName = menuLoginUserInput.value;
            var password = menuLoginPasswordInput.value;
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    if (this.responseText == true) {
                        screen.innerHTML = "";
                        menu();
                        //main();
                    }
                    else {
                        alert("Hibás adatok!");
                        screen.innerHTML = "";
                        login();
                    }
                }
            };

            http.open("POST", "../Server/Login.php", true);
            http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            http.send("userName=" + userName + "&password=" + password);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}