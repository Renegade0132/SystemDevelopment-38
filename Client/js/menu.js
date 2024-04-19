async function menu_login(divID = "screen") {
    try {
        const parentDiv = document.getElementById(divID);
        var childDiv = parentDiv.appendChild(Object.assign(document.createElement("div"), { id: "login" }));
        var form = childDiv.appendChild(document.createElement("form"));
        form.setAttribute("method", "POST");

        var menuLoginLabel = form.appendChild(Object.assign(document.createElement("div"), { id: "menu_login_label", innerHTML: text.menu_login.login }));
        var menuLoginUserLabel = form.appendChild(Object.assign(document.createElement("div"), { id: "menu_login_user_label", innerHTML: text.menu_login.user }));
        var menuLoginPasswordLabel = form.appendChild(Object.assign(document.createElement("div"), { id: "menu_login_password", innerHTML: text.menu_login.password }));

        var menuLoginUserInput = menuLoginUserLabel.appendChild(Object.assign(document.createElement("input"), { type: "text", id: "menu_login_user_input", name: "menu_login_user_input" }));
        var menuLoginPasswordInput = menuLoginPasswordLabel.appendChild(Object.assign(document.createElement("input"), { type: "password", id: "menu_login_password_input", name: "menu_login_password_input" }));
        var submitButton = form.appendChild(Object.assign(document.createElement("button"), { type: "submit", innerHTML: text.menu_login.login }));

        form.addEventListener('submit', function (event) {
            var http = new XMLHttpRequest();

            event.preventDefault();
            var userName = menuLoginUserInput.value;
            var password = menuLoginPasswordInput.value;
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    // document.getElementById("home").innerHTML = this.responseText;
                    if (this.responseText == true) {
                        parentDiv.innerHTML = "";
                        //menu_main();
                        menu_user_profile();
                    }
                    else {
                        alert("Hibás adatok!");
                        parentDiv.innerHTML = "";
                        menu_login();
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

async function menu_main(divID = "screen") {
    const screen = document.getElementById(divID);
    var menu = screen.appendChild(Object.assign(document.createElement("div"), { id: "menu" }));
    var menuMain = menu.appendChild(Object.assign(document.createElement("div"), { id: "menu_main" }));
    var menuAlert = menu.appendChild(Object.assign(document.createElement("div"), { id: "menu_alert" }));
    var menuUser = menu.appendChild(Object.assign(document.createElement("div"), { id: "menu_user" }));
    var home = screen.appendChild(Object.assign(document.createElement("div"), { id: "home" }));
    try {
        const response = await getData("name");
        screen.innerHTML = text.text.welcome + " " + response;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

async function menu_user_profile(divID = "screen") {
    try {
        const username = await getData("username");
        const name = await getData("name");
        const degreeID = await getData("degree_id");
        const userType = await getData("user_type");

        const home = document.getElementById(divID);
        var profileTitle = home.appendChild(Object.assign(document.createElement("div"), { id: "profile_title", innerHTML: text.menu_user.profile.title }));
        var profileModify = home.appendChild(Object.assign(document.createElement("div"), { id: "profile_modify", innerHTML: text.menu_user.profile.modify }));
        var profileModifyUsername = home.appendChild(Object.assign(document.createElement("div"), { id: "profile_modify_username", innerHTML: text.menu_user.profile.username }));
        var profileModifyName = home.appendChild(Object.assign(document.createElement("div"), { id: "profile_modify_name", innerHTML: text.menu_user.profile.name }));
        var profileModifyPassword = home.appendChild(Object.assign(document.createElement("div"), { id: "profile_modify_password", innerHTML: text.menu_user.profile.password }));
        var profileModifyDegreeID = home.appendChild(Object.assign(document.createElement("div"), { id: "profile_modify_degree_id", innerHTML: text.menu_user.profile.degree_id }));
        var profileModifyUserType = home.appendChild(Object.assign(document.createElement("div"), { id: "profile_modify_user_type", innerHTML: text.menu_user.profile.user_type }));
        var form = home.appendChild(document.createElement("form"));
        form.setAttribute("method", "POST");
        var profileModifyUsernameInput = profileModifyUsername.appendChild(Object.assign(document.createElement("input"), { type: "text", id: "profile_modify_username_input", name: "profile_modify_username_input", value: username }));
        var profileModifyNameInput = profileModifyName.appendChild(Object.assign(document.createElement("input"), { type: "text", id: "profile_modify_name_input", name: "profile_modify_name_input", value: name }));
        var profileModifyDegreeIDInput = profileModifyDegreeID.appendChild(Object.assign(document.createElement("input"), { type: "text", id: "profile_modify_degree_id_input", name: "profile_modify_degree_id_input", value: degreeID }));
        var profileModifyUserTypeInput = profileModifyUserType.appendChild(Object.assign(document.createElement("input"), { type: "text", id: "profile_modify_user_type_input", name: "profile_modify_user_type_input", value: userType }));
        var submitButton = form.appendChild(Object.assign(document.createElement("button"), { type: "submit", innerHTML: text.menu_user.profile.save }));

        form.addEventListener('submit', function (event) {
            var http = new XMLHttpRequest();

            event.preventDefault();
            var userName = profileModifyUsernameInput.value;
            var name = profileModifyNameInput.value;
            var degreeID = profileModifyDegreeIDInput.value;
            var userType = profileModifyUserTypeInput.value;
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    if (this.responseText) {
                        console.log("Modifying complete");
                        home.innerHTML = "";
                        menu_user_profile();
                    }
                    else {
                        alert("Modifying failed!");
                    }
                }
            };

            http.open("POST", "../Server/Class_User.php", true);
            http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            http.send("userName=" + userName + "&name=" + name + "&degreeID=" + degreeID + "&userType=" + userType);
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}