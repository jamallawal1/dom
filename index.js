const form = document.getElementById("form");

console.log(form);
form.addEventListener("submit",function(e){
    e.preventDefault();

    console.log(form.element);
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const country = document.getElementById("country");
    const week = document.getElementById("week");
    const pull = document.getElementById("pull");
    const switchs = document.getElementById("switchs");
    const security = document.getElementById("security");
    
    // button.addEventListener("click",function()){
    //     confirm("are you sure you want to submit")
    // }

    if (firstname.value == "" ||lastname.value === ""|| country.value === ""){
        alert("please fill the form");
        firstname.value = "";
        lastname.value = "";
        country.value = "";
    }
    else{
        alert("form submitted")
    }

    console.log(firstname.value, lastname.value, country.value,range.value);
    console.log(week.checked,pull.checked,switchs.checked,);
}); 
console.log("firstname:",firstname.checked);
console.log("last name:",lastname.checked);
console.log("country:",country.checked);
console.log("pull:",pull.checked);
console.log("switchs:",switchs.checked);
console.log("security:",security.checked);