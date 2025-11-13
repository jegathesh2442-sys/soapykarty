
// Navigation
function show(id){
    document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// Load Orders from localStorage
let orders = JSON.parse(localStorage.getItem("orders")) || [];

// Add Order to Local Storage
function addToOrders(product){
    orders.push({
        id: "OD" + Math.floor(Math.random() * 10000),
        name: product,
        status: "Processing 🔄"
    });

    localStorage.setItem("orders", JSON.stringify(orders));
    loadOrders();
    alert("Added to Orders ✅");
}

// Render Orders Table
function loadOrders(){
    let table = document.getElementById("orderTable");
    table.innerHTML = `
    <tr style='background:var(--primary);color:white;'>
        <th style='padding:10px;'>Order ID</th>
        <th style='padding:10px;'>Product</th>
        <th style='padding:10px;'>Status</th>
    </tr>
    `;

    orders.forEach(order => {
        table.innerHTML += `
        <tr>
            <td style='padding:10px;'>${order.id}</td>
            <td style='padding:10px;'>${order.name}</td>
            <td style='padding:10px;color:blue;'>${order.status}</td>
        </tr>`;
    });
}

// Login Validation
function loginCheck(){
    let email=document.getElementById("loginEmail").value;
    let pass=document.getElementById("loginPass").value;
    if(email==""||pass==""){alert("Fill all fields");return false;}
    alert("Login Successful ✅");
    return false;
}

// Register Validation
function regCheck(){
    let name=document.getElementById("regName").value;
    let email=document.getElementById("regEmail").value;
    let pass=document.getElementById("regPass").value;
    let address=document.getElementById("regAddress").value;
    if(name==""||email==""||pass==""||address==""){alert("Fill all fields");return false;}

    // Save registration info in localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({
        name:name,
        email:email,
        password:pass,
        address:address
    });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registered Successfully ✅");
    return false;
}

// Wishlist
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function addToWishlist(product){
    if(!wishlist.includes(product)){
        wishlist.push(product);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        loadWishlist();
        alert("Added to Wishlist ❤");
    } else {
        alert("Already in Wishlist ❤");
    }
}

function loadWishlist(){
    let container = document.getElementById("wishlistContainer");
    container.innerHTML = '';
    wishlist.forEach(item => {
        container.innerHTML += `
        <div class="card" style="width:200px;text-align:center;">
            <p>${item}</p>
            <button onclick="removeFromWishlist('${item}')" style="margin-top:5px;background:#e91e63;color:white;border:none;padding:8px;border-radius:8px;cursor:pointer;">❌ Remove</button>
        </div>`;
    });
}

function removeFromWishlist(product){
    wishlist = wishlist.filter(item => item !== product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    loadWishlist();
}

window.onload = () => {
    loadOrders();
    loadWishlist();
};