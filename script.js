const menuItems = [
    { name:"Dosa", description:"Sour N Crape",price:60},
    { name:"Idly", description:"Fermented Steam Riceball",price:45},
];

function displayMenu(){
    const menuSection = document.getElementById("Menu");
    menuItems.forEach(item =>{
        const menuItem = document.createElement("div");
        menuItem.innerHTML = `
        <h2>${item.name}</h2>
        <p>${item.description}<p>
        <p>${item.price}<p>
        <button class="add-to-order">Add to Order</button>
        `;
        menuSection.appendChild(menuItem)
    });
}
displayMenu();