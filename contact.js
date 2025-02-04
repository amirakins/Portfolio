function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };
    
      //const serviceID = "service_het46lc";
      const serviceID = "service_agw2gng";
      const templateID = "template_ihh63ke";
    
        emailjs.send(serviceID, templateID, params)
        .then(res=>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully!!")
    
        })
        .catch(err=>console.log(err));
}

