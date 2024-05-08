async function main(divID = "content") {
    const content = document.getElementById(divID);
    var main = content.appendChild(Object.assign(document.createElement("div"), { id: "main" }));
    try {
        const response = await getUserData("name");
        content.innerHTML = text.text.welcome + " " + response;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}