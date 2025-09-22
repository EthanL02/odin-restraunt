const content = document.getElementById("content");

function load() {
    const title = document.createElement("h1");
    title.textContent = "Restraunt Name";

    const description = document.createElement("h3");
    description.textContent = "Sample description of a restraunt";

    const paragraph = document.createElement("p");
    paragraph.textContent = "Some more sample text that doesn't really say anything";

    content.append(title);
    content.append(description);
    content.append(paragraph);
}

export default load;
