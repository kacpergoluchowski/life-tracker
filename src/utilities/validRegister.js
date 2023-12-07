function validRegister(email, nickname, password, passwordAgain) {
    if(!emailRegex.test(email)) {
        setMessageData({title: "Email is incorrect!", content: "Please enter your email again", button: "Close"});
        setMessageVisible(true);
    }
    else if(nickname.length === 0) {
        setMessageData({title: "No nickname!", content: "Please enter your nickname", button: "Close"});
        setMessageVisible(true);
    }        
    else if(password.length === 0 || passwordAgain.length === 0) {
        setMessageData({title: "No password!", content: "Please enter your password", button: "Close"});
        setMessageVisible(true);
    }
    else if(password !== passwordAgain) {
        setMessageData({title: "Passwords are different!", content: "Enter the same passwords", button: "Close"});
        setMessageVisible(true);
    }        
}