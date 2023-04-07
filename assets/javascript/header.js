const root = window.location.origin

const after =
    `
        <header class="header">   
            <div class="shead">
                <a href="${root}/index.html"><img src="${root}/assets/Images/LOGO.png" alt="Logo" height="80px" width="100px"></a>
                    <h1>ONLY HOME FOOD</h1>
                <a href="#" class="toggle-button">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a>    
            </div>
            <div class="head">
                <nav class="navbar">
                    <a class="navigation__link" href="${root}/index.html">Home</a>
                    <a class="navigation__link" href="${root}/Pages/Menu/menu.html">Menu</a>
                    <a class="navigation__link" href="${root}/Pages/Info/about us.html">About Us</a>
                    <a class="navigation__link" href="${root}/Pages/Info/contact us.html">Contact Us</a>
                </nav>
                <div class="Profile">
                    <a href="${root}/Pages/Cart/cart.html"><img src="${root}/assets/Images/cart-outline.svg" alt="Cart icon" height="30px" width="30px"></a>
                    <span class="count">0</span>
                    <a href="${root}/Pages/Login and Order/Profile.html"><img src="${root}/assets/Images/person-circle-outline.svg" alt="Profile icon" height="30px" width="30px"></a>
                </div>
            </div>
        </header>
`

const before =
    `
        <header class="header">   
            <div class="shead">
                <a href="${root}/index.html"><img src="${root}/assets/Images/LOGO.png" alt="Logo" height="80px" width="100px"></a>
                    <h1>ONLY HOME FOOD</h1>
                <a href="#" class="toggle-button">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a>    
            </div>
            <div class="head">
                <nav class="navbar">
                    <a class="navigation__link" href="${root}/index.html">Home</a>
                    <a class="navigation__link" href="${root}/Pages/Menu/menu.html">Menu</a>
                    <a class="navigation__link" href="${root}/Pages/Info/about us.html">About Us</a>
                    <a class="navigation__link" href="${root}/Pages/Info/contact us.html">Contact Us</a>
                </nav>
                <div class="Profile">
                    <a href="${root}/Pages/Login and Order/Login.html"><button type="submit" id="login_user">Login</button></a>    
                </div>
            </div>
        </header>
`

const userId = JSON.parse(localStorage.getItem("userId"));
if (userId) {
    document.body.insertAdjacentHTML("afterbegin", after);

    // To store the count in the cart //
    let span = document.querySelector('.Profile span');
    let foodCount = localStorage.getItem("food_count");
    span.textContent = foodCount;

    if (span.textContent == 0) {
        span.setAttribute("style", "display:none")
    }

    const toggleButton = document.querySelectorAll('.toggle-button')
    const navbarLinks = document.querySelector('.head')

    toggleButton.forEach(function(open){
        open.addEventListener("click", function(){
            navbarLinks.classList.toggle('active')
        })
    })
    
    const buttonLogout = document.getElementById("logout_user");
    buttonLogout?.addEventListener("click", () => {
        if (confirm("Are you sure?")) {
            localStorage.removeItem("userId");
            document.body.innerHTML = before;
            window.location.href = "../../index.html";
        }
    });
}
else {
    document.body.insertAdjacentHTML("afterbegin", before);
    const toggleButton = document.querySelectorAll('.toggle-button')
    const navbarLinks = document.querySelector('.head')

    toggleButton.forEach(function(open){
        open.addEventListener("click", function(){
            navbarLinks.classList.toggle('active')
        })
    })
    
    const buttonLogout = document.getElementById("logout_user");
    buttonLogout?.removeEventListener("click", () => document.body.innerHTML = after);
    localStorage.removeItem("userId");
}

