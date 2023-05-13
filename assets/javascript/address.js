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
    let address1 = "";
    let postcode = "";

    for (const component of place.address_components) {
        // @ts-ignore remove once typings fixed
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
                document.querySelector("#town_name").value = component.long_name;
            }
            case "administrative_area_level_3":
                document.querySelector("#city").value = component.long_name;
                break;
            case "administrative_area_level_1": {
                document.querySelector("#state").value = component.short_name;
                break;
            }     
        }
    }
    address1Field.value = address1;
    postalField.value = postcode;

    address2Field.focus();
}

window.initAutocomplete = initAutocomplete;