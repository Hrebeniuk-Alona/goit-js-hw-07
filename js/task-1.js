const items = document.querySelectorAll("#categories .item");

console.log(`Number of categories:${items.length}`);


items.forEach(function (item) {
    const titles = item.querySelector("h2").textContent;
    const itemsCount = item.querySelectorAll("ul>li");

    console.log(`Category: ${titles}`);
    console.log(`Elements: ${itemsCount.length}`);

    
}

)

const list = document.querySelector("#categories");

list.style.backgroundColor = "#f6f6";
list.style.listStyle = "none";
list.style.maxWidth = "400px";
list.style.margin = "20px 0";









