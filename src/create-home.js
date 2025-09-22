const content = document.getElementById("content");

function load() {
    const title = document.createElement("h1");
    title.textContent = "Restraunt Name";

    content.append(title);
}

export default load;
