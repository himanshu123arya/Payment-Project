document.getElementById("payment-form").addEventListener("submit",function(event){
    event.preventDefault();
    
     let cardnumber = document.getElementById("card-number").Value;
      
     let cvv = document.getElementById("cvv").value;

     if(cardnumber.length !==16 || isNan(cardnumber)){
        alert("please enter a valid 16-digit card number");
        return;

     }
     if(cvv.length !== 3 || isNan(cvv)){
        alert("please enter a vallid 3-digit cvv");
        return;
     }
     alert("payment successfully");
    });
}