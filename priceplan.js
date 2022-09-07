module.exports = function Priceplan() {
    let nameMapping = {};
    function setUserValidation(name, plan) {
        let message ="";
        // let userVAlidation = ;
    
        if (name === "" && !plan ) {
        message = "Please enter a name and  select plan";
        } else if (!(/^[A-Za-z]+$/.test(name) )) {
          message = "Write name in the correct format";
        } else if (!plan) {
          message = "Please select plan";
        } else if (name === "") {
          message = "Please enter name";
        }
      
        return message;
      }
    
    
    let confirmationMessage = "";
    function allocatePlan(name, plan) {
        if ( plan === "smsplan") {
            confirmationMessage = `${name} you have chosen ${plan}`;
        }
        if (plan === "callplan") {
            confirmationMessage = `${name} you have chosen ${plan}`;
        }
        if (plan === "callWeekly") {
            confirmationMessage = `${name} you have chosen ${plan}`;
        }
      }

      function getAllocatedPlan() {
        return   confirmationMessage;
      }


    return{
allocatePlan,
setUserValidation,
getAllocatedPlan
    }
}
