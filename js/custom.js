const ipAddress = document.querySelector('#ipvalidator');
const displayIpAddress = document.querySelector('#display');

ipAddress.addEventListener('keypress', show);
function show(){
    let ipAdress = ipAddress.value;
    let ipRegEx = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}?/; 
    if(ipRegEx.test(ipAdress)){				
        displayIpAddress.innerHTML= "Ip address valid";
        displayIpAddress.style.color = "green";
    }
    else{				
        displayIpAddress.innerHTML= "Please check your ip address and type again";
        displayIpAddress.style.color = "red";
    }
}

