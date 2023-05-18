const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_days = document.querySelector(".output-days");
const submit_btn = document.querySelector(".submit-btn");

let isValid = false;
const input_year = document.querySelector("#year");
const input_month = document.querySelector("#month");
const input_days = document.querySelector("#day");
//const submit_btn = document.querySelector(".submit-btn");

const error_year = document.querySelector(".error-year");
const error_month = document.querySelector(".error-month");
const error_day = document.querySelector(".error-day");

submit_btn.addEventListener('click', CalculateDate)

input_days.addEventListener('input', e=>{
    if(+input_days.value >31){
        error_day.textContent = "Must be a valid date";
        isValid = false;
        return;
    }else{
        isValid = true;
        error_day.textContent = "";
    }
    if(+input_days.value === 0){
        isValid = false;
        error_day.textContent = "This feild is required";
        isValid = false;
        return;
    }else{
        error_day.textContent="";
    }
})

input_month.addEventListener('input', e=>{
    if(+input_month.value >12){
        error_month.textContent = "Must be a valid date";
        isValid = false;
        return;
    }else{
        isValid = true;
        error_month.textContent = "";
    }
    if(+input_month.value === 0){
        isValid = false;
        error_month.textContent = "This feild is required";
        isValid = false;
        return;
    }else{
        error_month.textContent="";
    }
})

input_year.addEventListener('input', e=>{
    if(+input_year.value >2023){
        error_year.textContent = "Must be a valid date";
        isValid = false;
        return;
    }else{
        isValid = true;
        error_year.textContent = "";
    }
    if(+input_year.value === 0){
        isValid = false;
        error_year.textContent = "This feild is required";
        isValid = false;
        return;
    }else{
        error_year.textContent="";
    }
})


function CalculateDate(){
    if(isValid){
        let birthDate = `${input_month.value}/${input_days.value}/${input_year.value}`;
        let birthDateObj = new Date(birthDate);
        let ageDifferent = Date.now() - birthDateObj;
        let age = new Date(ageDifferent);
        let ageYears = age.getUTCFullYear() -1970;
        let ageMonth = age.getUTCMonth();
        let ageDay = age.getUTCDay()-1;
        output_days.textContent = ageDay;
        output_month.textContent = ageMonth;
        output_year.textContent = ageYears;
    }else{
        alert("error");
    }
}
