module.exports = (number)=>{ 
    if(number.length == 11){
        if(number.includes("0809") || number.includes("0909") ||
            number.includes("0817") || number.includes("0818") ||
            number.includes("0908")){
    
          var network = "9Mobile";
          return network;
    
        }else if(number.includes("'0806") || number.includes("0803") ||
            number.includes("0816") || number.includes("0813") ||
            number.includes("0810") || number.includes("0814") ||
            number.includes("0903") || number.includes("0906") ||
            number.includes("0703") || number.includes("0706")){
    
          var network = "MTN";
          return network;
    
        }else if(number.includes("0805") || number.includes("0705") ||
            number.includes("0905") || number.includes("0807") ||
            number.includes("0815")){
    
            var network = "GLO";
            return network;
    
    
        }else if(number.includes("0802") || number.includes("0902") ||
            number.includes("0701") || number.includes("0808") ||
            number.includes("0708") || number.includes("0812") ||
            number.includes("0907")){
    
            var network = "Airtel";
            return network;
    
    
    
        }else if(number.includes("07028") || number.includes("07029") ||
            number.includes("0819")){
    
            var network = "Starcomms";
            return network;
    
    
    
        }else if(number.includes("07025") || number.includes("07026") ||
            number.includes("0704")){
    
            var network = "Visafone";
            return network;
    
    
        }else if(number.includes("07027") || number.includes("0709")){
    
            var network = "Multilinks";
            return network;
    
        }else if(number.includes("0707")){
    
            var network = "Zoom";
            return network;
    
        }else if(number.includes("0804")){
    
            var network = "ntel";
            return network;

    
    
        }else if(number.includes("0702")){
    
            var network = "Smile";
            return network;

    
    
        }else{
    
            var message = "Something is not right";

            return message;
            
        }
        
      }else{
        var message = "The number is not upto 11 digits";
        return message;
      }
};