async function profile(divID = "screen") {
    try {
        const username = await getUserData("username");
        const name = await getUserData("name");
        const degreeID = await getUserData("degree_id");
        const userType = await getUserData("user_type");

        const main = document.getElementById(divID);
        var profileTitle = main.appendChild(Object.assign(document.createElement("div"), { id: "profile_title", innerHTML: text.user.profile.title }));
        var profileModify = main.appendChild(Object.assign(document.createElement("div"), { id: "profile_modify", innerHTML: text.user.profile.modify }));
        var profileModifyUsername = main.appendChild(Object.assign(document.createElement("div"), { id: "profile_modify_username", innerHTML: text.user.profile.username }));
        var profileModifyName = main.appendChild(Object.assign(document.createElement("div"), { id: "profile_modify_name", innerHTML: text.user.profile.name }));
        var profileModifyPassword = main.appendChild(Object.assign(document.createElement("div"), { id: "profile_modify_password", innerHTML: text.user.profile.password }));
        var profileModifyDegreeID = main.appendChild(Object.assign(document.createElement("div"), { id: "profile_modify_degree_id", innerHTML: text.user.profile.degree_id }));
        var profileModifyUserType = main.appendChild(Object.assign(document.createElement("div"), { id: "profile_modify_user_type", innerHTML: text.user.profile.user_type }));
        var form = main.appendChild(document.createElement("form"));
        form.setAttribute("method", "POST");
        var profileModifyUsernameInput = profileModifyUsername.appendChild(Object.assign(document.createElement("input"), { type: "text", id: "profile_modify_username_input", name: "profile_modify_username_input", value: username }));
        var profileModifyNameInput = profileModifyName.appendChild(Object.assign(document.createElement("input"), { type: "text", id: "profile_modify_name_input", name: "profile_modify_name_input", value: name }));
        var profileModifyDegreeIDInput = profileModifyDegreeID.appendChild(Object.assign(document.createElement("input"), { type: "text", id: "profile_modify_degree_id_input", name: "profile_modify_degree_id_input", value: degreeID }));
        var profileModifyUserTypeInput = profileModifyUserType.appendChild(Object.assign(document.createElement("input"), { type: "text", id: "profile_modify_user_type_input", name: "profile_modify_user_type_input", value: userType }));
        var submitButton = form.appendChild(Object.assign(document.createElement("button"), { type: "submit", innerHTML: text.user.profile.save }));

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
                        main.innerHTML = "";
                        user_profile();
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