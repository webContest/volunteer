function sendEmail() {
    var params ={ 
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }
    const serviceId = "service_np9pqjj";
    const templateId = "template_qqqcxev";
    emailjs.send(serviceId,templateId,params).then((res) => {
     document.getElementById("name").value ="";
      document.getElementById("email").value="";
      document.getElementById("message").value="";
      console.log(res);
      alert("Your Message sent successfully")
      
    }).catch((err) => { console.log(err)
      
    });
  }