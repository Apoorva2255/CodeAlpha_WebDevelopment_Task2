function calculateAge() {
    var birthDate = new Date(document.getElementById("birthDate").value);
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById("result").innerHTML = "Your age is " + age + " years.";
}