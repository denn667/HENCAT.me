function SendOTP() {
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];

    let otp_val = Math.floor(Math.random() * 10000)

    let emailbody = `<h2>You OPT is</h2>$(otp_val)`;
    Email.send({
        SecureToken : "2fe947fc-8700-4f73-a3cb-9b9c0d68b2f9",
        To : email.value,
        From : "ozohenry123@gmail.com",
        Subject : "Email OTP in javascript",
        Body : emailbody,
    }).then(
    
        Message =>{
            if (Message === "OK"){
                alert("OPT sent to your email" + email.value);

                otpverify.style.display = "flex";
                const otp_inp = Document.getElementById('otp_inp');
                const otp_btn = Document.getElementById('otp_btn');

                otp_btn.addEventListner('click', () => {
                    if (otp_inp.value == otp_val){
                        alert("Email Address Verified...");
                    }
                    else{
                        alert("Invaild OTP");
                    }
                })
            }
        }
    );
}
