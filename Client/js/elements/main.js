async function main(divID = "screen") {
    const screen = document.getElementById(divID);
    var main = screen.appendChild(Object.assign(document.createElement("div"), { id: "main" }));
    try {
        const response = await getUserData("name");
        screen.innerHTML = text.text.welcome + " " + response;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}