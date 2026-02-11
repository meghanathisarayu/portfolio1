(function() {
    emailjs.init("sz7_oYLI54TA3htG5");
})();

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            emailjs.sendForm("service_qh9l3yh", "template_02f5itj", this)
                .then(function() {
                    alert(" Message sent successfully!");
                }, function(error) {
                    alert("❌ Failed: " + error.text);
                });

            form.reset();
        });
    }
});