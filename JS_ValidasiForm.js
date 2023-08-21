function validasi(){
    
    let usern = document.getElementById("panggilan").value
    let fulln = document.getElementById("nama").value
    let usermail = document.getElementById("mail").value
    let passw = document.getElementById("pw").value
    let useraddress = document.getElementById("alamat").value
    let ultah = document.getElementById("lahir").value
    let check = document.getElementById("centang").checked

    if(usern.length < 3){
        alert("Username must be at least 3 characters long");
        return false;
    } 

    if(fulln == ""){
        alert("Full name can't be empty");
        return false;
    }

    for(i=0; i<fulln.length; i++){
        if(!(fulln[i] >= 'a' && fulln[i] <= 'z' || fulln[i] >= 'A' && fulln[i] <= 'Z' || fulln[i] == " ")){
            alert("Full name only contains alphabets");
            return false;
        }
    }

    if(!usermail.endsWith(".com")){
        alert("Email must end with .com");
        return false;
    }

    if(passw.length < 7){
        alert("Password must be at least 7 characters long");
        return false;
    }

    if(useraddress == ""){
        alert("Address can't be empty");
        return false;
    }

    for(i=0; i<useraddress.length; i++){
        if(!(useraddress[i] >= 'a' && useraddress[i] <= 'z' || useraddress[i] >= 'A' && useraddress[i] <= 'Z' || useraddress[i] == " ")){
            alert("Address only contains alphabets");
            return false;
        }
    }

    if(ultah == ""){
        alert("Birthday can't be empty");
        return false;
    }

    if(check == false){
        alert("You must agree to the terms and conditions and the privacy policy to register");
        return false;
    }

    alert("You are successfully become the member of ADEX Legends");

}