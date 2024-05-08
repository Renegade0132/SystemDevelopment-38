
async function menu(divID = "screen") {
    const screen = document.getElementById(divID);
    var menu = screen.appendChild(Object.assign(document.createElement("div"), { id: "menu" }));
    var menuMain = menu.appendChild(Object.assign(document.createElement("div"), { id: "menu_main", innerHTML: text.menu.main }));
    var menuDashboard = menu.appendChild(Object.assign(document.createElement("div"), { id: "menu_dashboard", innerHTML: text.menu.dashboard }));
    var menuMyCourses = menu.appendChild(Object.assign(document.createElement("div"), { id: "menu_my_courses", innerHTML: text.menu.my_courses }));
    var menuNotifications = menu.appendChild(Object.assign(document.createElement("div"), {
        id: "menu_notifications",
        innerHTML: `<svg version="1.1" width="24px" height="24px" viewBox="0 0 512 512" fill="none">
                        <path opacity:"1" fill="var(--textdiv-color)" d="M 234.5,-0.5 C 248.5,-0.5 262.5,-0.5 276.5,-0.5C 367.96,9.83237 436.46,54.8324 482,134.5C 498.217,165.724 508.051,198.724 511.5,233.5C 511.5,248.167 511.5,262.833 511.5,277.5C 499.445,377.048 448.111,448.214 357.5,491C 331.739,501.846 305.073,508.679 277.5,511.5C 262.833,511.5 248.167,511.5 233.5,511.5C 133.191,499.013 61.6912,447.013 19,355.5C 8.70393,330.316 2.20393,304.316 -0.5,277.5C -0.5,262.833 -0.5,248.167 -0.5,233.5C 11.9842,133.193 63.9842,61.693 155.5,19C 181.047,8.73016 207.381,2.23016 234.5,-0.5 Z"/>
                        <path opacity:"1" fill="var(--button-color)" d="M 250.5,101.5 C 272.29,101.289 281.623,111.956 278.5,133.5C 263.16,132.203 247.826,132.203 232.5,133.5C 229.217,117.383 235.217,106.716 250.5,101.5 Z"/>
                        <path opacity:"1" fill="var(--button-color)" d="M 242.5,140.5 C 262.649,139.376 282.316,141.876 301.5,148C 328.129,159.707 342.629,180.207 345,209.5C 346.136,233.822 347.136,258.155 348,282.5C 348.782,307.343 356.449,329.676 371,349.5C 375.741,354.912 381.074,359.579 387,363.5C 387.896,366.025 387.396,368.192 385.5,370C 298.833,370.667 212.167,370.667 125.5,370C 123.675,368.534 123.175,366.701 124,364.5C 149.529,344.11 162.862,317.443 164,284.5C 164.818,260.45 165.985,236.45 167.5,212.5C 201.162,211.667 234.828,211.167 268.5,211C 271.167,208.667 271.167,206.333 268.5,204C 235.168,203.5 201.835,203.333 168.5,203.5C 172.647,171.182 190.647,151.349 222.5,144C 229.245,142.502 235.911,141.335 242.5,140.5 Z"/>
                        <path opacity:"1" fill="var(--textdiv-color)" d="M 290.5,381.5 C 279.186,380.168 267.52,379.501 255.5,379.5C 243.48,379.501 231.814,380.168 220.5,381.5C 219.596,380.791 219.263,379.791 219.5,378.5C 243.5,378.5 267.5,378.5 291.5,378.5C 291.737,379.791 291.404,380.791 290.5,381.5 Z"/>
                        <path opacity:"1" fill="var(--button-color)" d="M 290.5,381.5 C 282.974,404.273 267.307,413.107 243.5,408C 230.985,403.322 223.318,394.488 220.5,381.5C 231.814,380.168 243.48,379.501 255.5,379.5C 267.52,379.501 279.186,380.168 290.5,381.5 Z"/>
                    </svg>`
    }));
    var menuProfile = menu.appendChild(Object.assign(document.createElement("div"), {
        id: "menu_profile",
        innerHTML: `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                        <path opacity="1" d="M12 22.01C17.5228 22.01 22 17.5329 22 12.01C22 6.48716 17.5228 2.01001 12 2.01001C6.47715 2.01001 2 6.48716 2 12.01C2 17.5329 6.47715 22.01 12 22.01Z" fill="var(--textdiv-color)" />
                        <path d="M12 6.93994C9.93 6.93994 8.25 8.61994 8.25 10.6899C8.25 12.7199 9.84 14.3699 11.95 14.4299C11.98 14.4299 12.02 14.4299 12.04 14.4299C12.06 14.4299 12.09 14.4299 12.11 14.4299C12.12 14.4299 12.13 14.4299 12.13 14.4299C14.15 14.3599 15.74 12.7199 15.75 10.6899C15.75 8.61994 14.07 6.93994 12 6.93994Z" fill="var(--button-color)" />
                        <path d="M18.7807 19.36C17.0007 21 14.6207 22.01 12.0007 22.01C9.3807 22.01 7.0007 21 5.2207 19.36C5.4607 18.45 6.1107 17.62 7.0607 16.98C9.7907 15.16 14.2307 15.16 16.9407 16.98C17.9007 17.62 18.5407 18.45 18.7807 19.36Z" fill="var(--button-color)" />
                    </svg>`
    }));

    var profileDropdown = menuProfile.appendChild(Object.assign(document.createElement("div"), { id: "profile_dropdown", style: "display: none" }));
    var dropdownContent = profileDropdown.appendChild(Object.assign(document.createElement("div"), { id: "dropdown_content" }));
    var dropdownItems = [text.user.profile.title, text.user.calendar, text.user.grades, text.user.language, text.user.logout];
    dropdownItems.forEach(item => {
        var dropdownItem = document.createElement('div');
        dropdownItem.textContent = item;
        dropdownContent.appendChild(dropdownItem);

        //new
        dropdownItem.addEventListener("click", function () {
            switch (item) {
                case text.user.profile.title:
                    clearContent();
                    profile();
                    break;
                case text.user.calendar:
                    clearContent();
                    calendar();
                    break;
                case text.user.grades:
                    clearContent();
                    grades();
                    break;
                case text.user.language:
                    clearContent();
                    language();
                    break;
                case text.user.logout:
                    // Handle logout
                    break;
                default:
                    break;
            }
        });
        //end of new

    });
    menuProfile.addEventListener("click", function () {
        profileDropdown.style.display = (profileDropdown.style.display === "none") ? "block" : "none";
    });
}
/*
async function menu(divID = "screen") {
    const screen = document.getElementById(divID);
    var menu = screen.appendChild(Object.assign(document.createElement("div"), { id: "menu" }));
    var menuMain = menu.appendChild(Object.assign(document.createElement("div"), { id: "menu_main", innerHTML: "Main" }));
    var menuDashboard = menu.appendChild(Object.assign(document.createElement("div"), { id: "menu_dashboard", innerHTML: "Dashboard" }));
    var menuMyCourses = menu.appendChild(Object.assign(document.createElement("div"), { id: "menu_my_courses", innerHTML: "My Courses" }));
    var menuAlerts = menu.appendChild(Object.assign(document.createElement("div"), { id: "menu_alert", innerHTML: "Alerts" }));
    var menuProfile = menu.appendChild(Object.assign(document.createElement("div"), {
        id: "menu_profile", 
        innerHTML: `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                        <path opacity="0.4" d="M12 22.01C17.5228 22.01 22 17.5329 22 12.01C22 6.48716 17.5228 2.01001 12 2.01001C6.47715 2.01001 2 6.48716 2 12.01C2 17.5329 6.47715 22.01 12 22.01Z" fill="#292D32" />
                        <path d="M12 6.93994C9.93 6.93994 8.25 8.61994 8.25 10.6899C8.25 12.7199 9.84 14.3699 11.95 14.4299C11.98 14.4299 12.02 14.4299 12.04 14.4299C12.06 14.4299 12.09 14.4299 12.11 14.4299C12.12 14.4299 12.13 14.4299 12.13 14.4299C14.15 14.3599 15.74 12.7199 15.75 10.6899C15.75 8.61994 14.07 6.93994 12 6.93994Z" fill="#292D32" />
                        <path d="M18.7807 19.36C17.0007 21 14.6207 22.01 12.0007 22.01C9.3807 22.01 7.0007 21 5.2207 19.36C5.4607 18.45 6.1107 17.62 7.0607 16.98C9.7907 15.16 14.2307 15.16 16.9407 16.98C17.9007 17.62 18.5407 18.45 18.7807 19.36Z" fill="#292D32" />
                    </svg>`
    }));

    var profileDropdown = menuProfile.appendChild(Object.assign(document.createElement("div"), { id: "profile_dropdown", style: "display: none" }));
    var dropdownContent = profileDropdown.appendChild(Object.assign(document.createElement("div"), { id: "dropdown_content" }));
    var dropdownItems = ["Profile", "Calendar", "Grades", "Language", "Logout"];
    dropdownItems.forEach(item => {
        var dropdownItem = document.createElement('div');
        dropdownItem.textContent = item;
        dropdownContent.appendChild(dropdownItem);
        dropdownItem.addEventListener("click", function() {
            switch(item) {
                case "Profile":
                    profile();
                    break;
                case "Calendar":
                    calendar();
                    break;
                case "Grades":
                    grades();
                    break;
                case "Language":
                    language();
                    break;
                case "Logout":
                    // Handle logout
                    break;
                default:
                    break;
            }
        });
    });

    menuProfile.addEventListener("click", function () {
        profileDropdown.style.display = (profileDropdown.style.display === "none") ? "block" : "none";
    });
}*/