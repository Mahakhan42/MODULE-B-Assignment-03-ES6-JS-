let arr = [
{
brand: "Samsung",
model: "SamsungA30",
price: "40000",
camera: "40px",
ram: "8gb",
rom : "128gb",
image : "https://solaroidenergy.com/wp-content/uploads/2023/08/1690026208_41I4K9AfcBL._AC_.jpg",

},
{
brand: "Samsung",
model: "SamsungA10",
price: "40000",
camera: "40px",
ram: "4gb",
rom : "128gb",
image : "https://files.refurbed.com/pi/samsung-galaxy-a10-1590646211.jpg?t=resize&h=630&w=1200",

},
{
brand: "Samsung",
model: "SamsungA20",
price: "40000",
camera: "40px",
ram: "4gb",
rom : "128gb",
image : "https://cdn.homeshopping.pk/product_images/a/609/samsung-a20-red__86638_zoom.jpg",

},
{
brand: "Vivo",
model: "VivoY20",
price: "20000",
camera: "40px",
ram: "2gb",
rom : "32gb",
image : "https://pricehut.pk/image/vivo-v20-price-in-pakistan.webp",

},
{
brand: "Vivo",
model: "VivoY11",
price: "20000",
camera: "40px",
ram: "3gb",
rom : "32gb",
image : "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-y11-2019-1.jpg",

},
{
brand: "Vivo",
model: "VivoY15",
price: "30000",
camera: "40px",
ram: "4gb",
rom : "64gb",
image : "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-y15s-02.jpg",

},
{
brand: "Motorola",
model: "Motorola123",
price: "5000",
camera: "2px",
ram: "2gb",
rom : "32gb",
image : "https://lscdn.blob.core.windows.net/products/mobiles/images/motorola/motorola-c123.jpg",
},
{
brand: "Iphone",
model: "Iphone12",
price: "300000",
camera: "40px",
ram: "8gb",
rom : "128gb",
image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTecYSMYGm_ikrIa2rJ5SByYui9NHNpcsWYdXazdrl5cZTJWcr6V5isMX2eT37huDIkxQ&usqp=CAU",

},
{
brand: "Iphone",
model: "Iphone13",
price: "300000",
camera: "40px",
ram: "8gb",
rom : "128gb",
image : "https://i0.wp.com/cliktodeal.com/wp-content/uploads/2022/11/iphone-13-pro-256gb-x1000.jpg?fit=1000%2C1000&ssl=1",

},
{
brand: "Iphone",
model: "IphoneX",
price: "300000",
camera: "40px",
ram: "8gb",
rom : "128gb",
image : "https://philnews.ph/wp-content/uploads/2021/02/Apple-iPhone-X.jpg",
},
]

console.log(arr);

function searchItems(){
const dropdownSearch = document.getElementById("dropdownSearchbar").value;
const searchInput = document.getElementById("searchInput").value;

const filterMobileSearch = arr.filter(mobileItems =>{
const value = mobileItems[dropdownSearch].toLowerCase();
return  value.includes(searchInput);  
});
displayResult(filterMobileSearch)
}
function displayResult(results){
const ShowResult = document.getElementById("result");
ShowResult.innerHTML = "";
if(results.length === 0){
ShowResult.innerHTML = 'Result Not Found....';
return;
}

const createList = document.createElement("ul");
    results.map(mobileItem => {
        const { brand, model, camera, ram, rom, price, image } = mobileItem; // destructuring
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        <br><img width="150" src="${image}" alt="${brand} Image"><br><br>
        ${brand} - ${model} - ${camera} - ${ram} - ${rom} - ${price}`;
        createList.appendChild(listItem);
    });
    ShowResult.appendChild(createList);
}
