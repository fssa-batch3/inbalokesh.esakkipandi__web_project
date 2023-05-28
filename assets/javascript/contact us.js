
// Contact Us form //
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#feedback_form").addEventListener("submit", function mail(e) {
        e.preventDefault();
        let details = {
            name: document.getElementById("name").value,
            number: document.getElementById("number").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        const serviceId = "service_tgnewnh";
        const templateId = "template_jntl1gg";

        emailjs.send(serviceId, templateId, details)
            .then((res) => {
                document.getElementById("name").value = "";
                document.getElementById("number").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                // document.querySelector("form").reset();
                console.log(res)
                alert("Your message is sent sucessfully");
            })
            .catch((err) => console.log(err));
    }
    );
});





