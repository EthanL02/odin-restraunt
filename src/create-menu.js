const content = document.getElementById("content");

function load() {
    const title = document.createElement("h1");
    title.textContent = "The Menu";
    content.append(title);

    const lunchHeader = document.createElement("h2");
    lunchHeader.textContent = "Lunch";
    content.append(lunchHeader);

    const lunch1 = document.createElement("p");
    lunch1.textContent = "Option 1";
    content.append(lunch1);

    const lunch2 = document.createElement("p");
    lunch2.textContent = "Option 2";
    content.append(lunch2);

    const dinnerHeader = document.createElement("h2");
    dinnerHeader.textContent = "Dinner";
    content.append(dinnerHeader);

    const dinner1 = document.createElement("p");
    dinner1.textContent = "Option 1";
    content.append(dinner1);

    const dinner2 = document.createElement("p");
    dinner2.textContent = "Option 2";
    content.append(dinner2);
}

export default load;