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