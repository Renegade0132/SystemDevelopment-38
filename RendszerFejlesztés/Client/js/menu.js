async function menu_login(divID="screen") {
    try {
        const parentDiv = document.getElementById(divID);

        var form = parentDiv.appendChild(document.createElement("form"));
        form.setAttribute("method", "POST");
        form.setAttribute("action", "your_php_script.php");
        
        var menuLoginLabel = form.appendChild(Object.assign(document.createElement("div"), { id: "menu_login_label", innerHTML: text.menu_login.login }));
        var menuLoginUserLabel = form.appendChild(Object.assign(document.createElement("div"), { id: "menu_login_user_label", innerHTML: text.menu_login.user })); 
        var menuLoginPasswordLabel = form.appendChild(Object.assign(document.createElement("div"), { id: "menu_login_password", innerHTML: text.menu_login.password }));
        
        var menuLoginUserInput = menuLoginUserLabel.appendChild(Object.assign(document.createElement("input"), { type: "text", id: "menu_login_user_input", name: "menu_login_user_input" }));
        var menuLoginPasswordInput = menuLoginPasswordLabel.appendChild(Object.assign(document.createElement("input"), { type: "password", id: "menu_login_password_input", name: "menu_login_password_input" }));
        var submitButton = form.appendChild(Object.assign(document.createElement("button"), { type: "submit", innerHTML: text.menu_login.login }));

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            var username = menuLoginUserInput.value;
            var password = menuLoginPasswordInput.value;
            console.log("Username:", username);
            console.log("Password:", password);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}