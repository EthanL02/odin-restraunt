const content = document.getElementById("content");

function load() {
    const title = document.createElement("h1");
    title.textContent = "About this restraunt";
    content.append(title);

    const para1 = document.createElement("p");
    para1.textContent = "Creator: Ethan Lopez";
    content.append(para1);

    const para2 = document.createElement("p");
    para2.textContent = "Assignment from The Odin Project";
    content.append(para2);
}

export default load;