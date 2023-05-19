
const createAddress =
` 
<div class="new">
<div class="addressBox">
    <a href="../../index.html">
        <img src="../../assets/Images/LOGO.png" alt="logo">
    </a>
    <h1>Address</h1>
    <form role="form" name="address" id="address-form" method="get" autocomplete="off">

        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Jhon" pattern="[a-zA-Z ]+" title="Write your name properly"
            minlength="3" required>
        <label for="mobile_number">Mobile No</label>
        <input type="tel" id="mobile_number" placeholder="Mobile No" pattern="[6-9]{1}[0-9]{9}" maxlength="10"
            title="Write your 10-digit mobile number." required>
        <label for="addressSearch">Location</label>
        <input type="text" id="addressSearch" placeholder="Enter a location" required autocomplete="off">
        <label for="house_number">House no, Flat no, Street name</label>
        <input type="text" class="houseNumber" id="house_number" placeholder="No.7, C.L.V nagar" required />
        <label for="town_name">Town or Village Name</label>
        <input type="text" id="town_name" placeholder="Kanathur" required>
        <label for="city">City</label>
        <input type="text" id="city" placeholder="Chennai" required>
        <label for="pinCode">Pin Code</label>
        <input type="number" id="pinCode" name="pincode" min="600001" max="643253"
            pattern="[6]{1}[0-4]{2}[0-9]{4}" maxlength="6" placeholder="603112"
            title="Sorry! We are currently available only in Tamil Nadu" required />
        <label for="state">State</label>
        <input type="text" id="state" placeholder="TN" pattern="TN"
            title="Sorry! We are currently available only in Tamil Nadu" required />

        <p class="address-note">Note: Some fields may give improper inputs while autocomplete. Kindly check and
            fill the address properly.</p>
        <div class="default">
            <input type="checkbox" id="checkBox">
            <label for="checkBox">Set as default address</label>
        </div>

        <button type="submit" class="btn-secondary">Add address
        </button>
    </form>
</div>
</div>
`

const editAddress =
`
<div class="new">
<div class="addressBoxEdit">
    <a href="../../index.html">
        <img src="../../assets/Images/LOGO.png" alt="logo">
    </a>
    <h1>Edit Address</h1>
    <form role="form" name="address" id="address-save" method="get" autocomplete="off">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Jhon" pattern="[a-zA-Z ]+" title="Write your name properly"
            minlength="3" required>
        <label for="mobile_number">Mobile No</label>
        <input type="tel" id="mobile_number" placeholder="Mobile No" pattern="[6-9]{1}[0-9]{9}" maxlength="10"
            title="Write your 10-digit mobile number." required>
        <label for="addressSearch">Location</label>
        <input type="text" id="addressSearch" placeholder="Enter a location" required autocomplete="off">
        <label for="house_number">House no, Flat no, Street name</label>
        <input type="text" class="houseNumber" id="house_number" placeholder="No.7, C.L.V nagar" required />
        <label for="town_name">Town or Village Name</label>
        <input type="text" id="town_name" placeholder="Kanathur" required>
        <label for="city">City</label>
        <input type="text" id="city" placeholder="Chennai" required>
        <label for="pinCode">Pin Code</label>
        <input type="number" id="pinCode" name="pincode" min="600001" max="643253"
            pattern="[6]{1}[0-4]{2}[0-9]{4}" maxlength="6" placeholder="603112"
            title="Sorry! We are currently available only in Tamil Nadu" required />
        <label for="state">State</label>
        <input type="text" id="state" placeholder="TN" pattern="TN"
            title="Sorry! We are currently available only in Tamil Nadu" required />
            
        <button type="submit" class="btn-secondary">Save address
        </button>
    </form>
</div>
</div>
`

const url = window.location.search;
const urlParams = new URLSearchParams(url);
const addressFrom = urlParams.get("form");
const addressUniqueId = urlParams.get("id");

if(addressFrom === "CreateAddress"){
    document.body.insertAdjacentHTML("afterbegin", createAddress);

    document.querySelector("#address-form")
    .addEventListener("submit", function addressForm(e) {
        e.preventDefault();
        let name = document.getElementById("name").value.trim().split(/\s+/g).join(" ");
        let mobile_number = document.getElementById("mobile_number").value;
        let addressSearch = document.getElementById("addressSearch").value;
        let house_number = document.getElementById("house_number").value.trim().split(/\s+/g).join(" ");
        let town_name = document.getElementById("town_name").value.trim().split(/\s+/g).join(" ");
        let city = document.getElementById("city").value.trim().split(/\s+/g).join(" ");
        let pinCode = document.getElementById("pinCode").value;
        let state = document.getElementById("state").value.trim().split(/\s+/g).join(" ");
        let status = document.getElementById("checkBox").checked;
        let address_id = uuidv4();
        function validate() {
            if (/^\s*$/g.test(house_number) || /^\s*$/g.test(town_name) || /^\s*$/g.test(city) || /^\s*$/g.test(state) || /^\s*$/g.test(pinCode)) {
                alert("Write your information properly");
                reset();
            }
        }
        validate()
        let userId = JSON.parse(localStorage.getItem("userId")) || [];
        console.log(userId)

        let address = JSON.parse(localStorage.getItem("address")) || [];

        let userAddress = address.filter((data) => data.userId === userId);
        console.log(userAddress)

        let checkAddress = address.some((e) => e.location === addressSearch);

        if (!checkAddress) {
            if (userAddress.length === 0) {
                address.push({
                    name,
                    mobile_number,
                    location: addressSearch,
                    house_number,
                    town_name,
                    city,
                    pinCode,
                    state,
                    status: true,
                    userId,
                    address_id
                });
                localStorage.setItem("addressId", JSON.stringify(address_id));
            }
            else {
                if (status === true) {
                    let defaultAddress = userAddress.find((e) => e.status === true);
                    defaultAddress.status = false;
                    localStorage.setItem("address", JSON.stringify(address));
                    address.push({
                        name,
                        mobile_number,
                        location: addressSearch,
                        house_number,
                        town_name,
                        city,
                        pinCode,
                        state,
                        status: true,
                        userId,
                        address_id
                    });
                    localStorage.setItem("addressId", JSON.stringify(address_id));
                }
                else {
                    address.push({
                        name,
                        mobile_number,
                        location: addressSearch,
                        house_number,
                        town_name,
                        city,
                        pinCode,
                        state,
                        status,
                        userId,
                        address_id
                    });
                }
            }

            localStorage.setItem("address", JSON.stringify(address));
            document.querySelector("form").reset();
            alert("Your address has been submited");
            window.location.href = "../../Pages/Login and Order/List address.html?status=1";
        }
        else {
            alert("This address is already in your address book")
        }
    });
}

if(addressFrom === "EditAddress"){
    document.body.insertAdjacentHTML("afterbegin", editAddress);
    let userId = JSON.parse(localStorage.getItem("userId")) || [];
    let address = JSON.parse(localStorage.getItem("address")) || [];
    let userAddress = address.filter((data) => data.userId === userId && data.address_id === addressUniqueId);
    console.log(userAddress)

    document.getElementById("name").value = userAddress[0].name
    document.getElementById("mobile_number").value = userAddress[0].mobile_number
    document.getElementById("addressSearch").value = userAddress[0].location
    document.getElementById("house_number").value = userAddress[0].house_number
    document.getElementById("town_name").value = userAddress[0].town_name
    document.getElementById("city").value = userAddress[0].city
    document.getElementById("pinCode").value  = userAddress[0].pinCode
    document.getElementById("state").value = userAddress[0].state
}

let autocomplete;
let address1Field;
let address2Field;
let postalField;

function initAutocomplete() {
    address1Field = document.querySelector("#addressSearch");
    address2Field = document.querySelector("#house_number");
    postalField = document.querySelector("#pinCode");

    autocomplete = new google.maps.places.Autocomplete(address1Field, {
        componentRestrictions: { country: ["in"] },
        fields: ["address_components", "geometry"],
        types: ["address"],
    });
    address1Field.focus();

    autocomplete.addListener("place_changed", fillInAddress);
}

function fillInAddress() {

    const place = autocomplete.getPlace();
    console.log(place)
    let address1 = "";
    let postcode = "";
    let localityName;
    let administrativeAreaName;
    let subLocalityName;
    let subLocalityName2;
    
    for (const component of place.address_components) {
        const componentType = component.types[0];

        switch (componentType) {
            case "street_number": {
                address1 = `${component.long_name} ${address1}`;
                break;
            }
            case "route": {
                address1 += component.short_name;
                break;
            }
            case "postal_code": {
                postcode = `${component.long_name}${postcode}`;
                break;
            }
            case "postal_code_suffix": {
                postcode = `${postcode}-${component.long_name}`;
                break;
            }
            case "locality": {
                localityName = component.long_name;
                break;
            }
            case "sublocality_level_3": {
                subLocalityName2 = component.long_name;
                break;
            }
            case "sublocality_level_1" : {
                subLocalityName = component.long_name;
                break;
            }
            case "administrative_area_level_3":
                administrativeAreaName = component.long_name;
                document.querySelector("#city").value = component.long_name;
                break;
            case "administrative_area_level_1": {
                document.querySelector("#state").value = component.short_name;
                break;
            }  

        }
    }
    if(localityName === administrativeAreaName){
        document.querySelector("#town_name").value = subLocalityName;
    }
    else{
        document.querySelector("#town_name").value = localityName;            
    }
    address1Field.value = address1;
    postalField.value = postcode;
    
    if(subLocalityName2 !== undefined){
        address2Field.value = address1Field.value + ", " + subLocalityName2
    }
    else if(subLocalityName !== undefined){
        address2Field.value = address1Field.value + ", " + subLocalityName
    }
    else if(address1Field.value === subLocalityName){
        address2Field.value = address1Field.value
    }
    else{
        address2Field.value = address1Field.value
    }
    address2Field.focus();

}

window.initAutocomplete = initAutocomplete;