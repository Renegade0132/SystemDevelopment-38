async function content(divID = "screen") {
menu();
const screen = document.getElementById(divID);
var content = screen.appendChild(Object.assign(document.createElement("div"), { id: "content" }));
    main();
}