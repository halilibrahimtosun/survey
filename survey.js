const answerYes= document.getElementById("q-licence-yes");
const selectLicence = document.querySelector(".select-licence");
const answerNo = document.getElementById("q-licence-no");
answerYes.addEventListener("input" , function(){
 selectLicence.classList.remove("invisible");
});
answerNo.addEventListener("input", function(){
    selectLicence.classList.add("invisible");
});