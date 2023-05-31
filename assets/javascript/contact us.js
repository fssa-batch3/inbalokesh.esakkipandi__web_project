
// Contact Us form //
document.querySelector("#feedback_form").onclick("submit", function mail(e) {
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
            document.querySelector("form").reset();
            alert("Your message is sent sucessfully");
        })
        .catch((err) => console.log(err));
}
);





