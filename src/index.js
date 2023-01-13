module.exports = function toReadable (number) {
  let primeNumber = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let tensNumber = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let firstTenNumber = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
  const hundreds = 'hundred';
  
  let result = '';
  let interimNumber = String(number);
  let arrayNumber = interimNumber.split('').reverse();
  console.log(arrayNumber);
  if (number == 0){
    return result += 'zero';
  }
  console.log(typeof arrayNumber[2])
  if (arrayNumber.length === 3){ 
    switch (arrayNumber[2]){
        case '1': result += primeNumber[0] + ' ' + hundreds + ' '; break;
        case '2': result += primeNumber[1] + ' ' + hundreds + ' '; break;
        case '3': result += primeNumber[2] + ' ' + hundreds + ' '; break;
        case '4': result += primeNumber[3] + ' ' + hundreds + ' '; break;
        case '5': result += primeNumber[4] + ' ' + hundreds + ' '; break;
        case '6': result += primeNumber[5] + ' ' + hundreds + ' '; break;
        case '7': result += primeNumber[6] + ' ' + hundreds + ' '; break;
        case '8': result += primeNumber[7] + ' ' + hundreds + ' '; break;
        case '9': result += primeNumber[8] + ' ' + hundreds + ' '; break;
        
    }; 
    if(arrayNumber[1] == 1){
            switch(arrayNumber[0]){
                    case '0': result += firstTenNumber[0]; break;
                    case '1': result += firstTenNumber[1]; break;
                    case '2': result += firstTenNumber[2]; break;
                    case '3': result += firstTenNumber[3]; break;
                    case '4': result += firstTenNumber[4]; break;
                    case '5': result += firstTenNumber[5]; break;
                    case '6': result += firstTenNumber[6]; break;
                    case '7': result += firstTenNumber[7]; break;
                    case '8': result += firstTenNumber[8]; break;
                    case '9': result += firstTenNumber[9]; break;
                }
            } else if(arrayNumber[1] != 1 ){
            switch(arrayNumber[1]){
                case '0': result + ' '; break;
                case '2': result += tensNumber[0] + ' '; break;
                case '3': result += tensNumber[1] + ' '; break;
                case '4': result += tensNumber[2] + ' '; break;
                case '5': result += tensNumber[3] + ' '; break;
                case '6': result += tensNumber[4] + ' '; break;
                case '7': result += tensNumber[5] + ' '; break;
                case '8': result += tensNumber[6] + ' '; break;
                case '9': result += tensNumber[7] + ' '; break;
            
        }
        switch (arrayNumber[0]){
            case '0': result; break;
            case '1': result += primeNumber[0]; break;
            case '2': result += primeNumber[1]; break;
            case '3': result += primeNumber[2]; break;
            case '4': result += primeNumber[3]; break;
            case '5': result += primeNumber[4]; break;
            case '6': result += primeNumber[5]; break;
            case '7': result += primeNumber[6]; break;
            case '8': result += primeNumber[7]; break;
            case '9': result += primeNumber[8]; break;
            
        };
       
    }
    
   }else if (arrayNumber.length === 2){ 
        if(arrayNumber[1] == 1){
            switch(arrayNumber[0]){
                    case '0': result += firstTenNumber[0]; break;
                    case '1': result += firstTenNumber[1]; break;
                    case '2': result += firstTenNumber[2]; break;
                    case '3': result += firstTenNumber[3]; break;
                    case '4': result += firstTenNumber[4]; break;
                    case '5': result += firstTenNumber[5]; break;
                    case '6': result += firstTenNumber[6]; break;
                    case '7': result += firstTenNumber[7]; break;
                    case '8': result += firstTenNumber[8]; break;
                    case '9': result += firstTenNumber[9]; break;
                }
            } else if(arrayNumber[1] > 1 ){
            switch(arrayNumber[1]){
                case '2': result += tensNumber[0] + ' '; break;
                case '3': result += tensNumber[1] + ' '; break;
                case '4': result += tensNumber[2] + ' '; break;
                case '5': result += tensNumber[3] + ' '; break;
                case '6': result += tensNumber[4] + ' '; break;
                case '7': result += tensNumber[5] + ' '; break;
                case '8': result += tensNumber[6] + ' '; break;
                case '9': result += tensNumber[7] + ' '; break;
            
        }
        switch (arrayNumber[0]){
            case '0': result; break;
            case '1': result += primeNumber[0]; break;
            case '2': result += primeNumber[1]; break;
            case '3': result += primeNumber[2]; break;
            case '4': result += primeNumber[3]; break;
            case '5': result += primeNumber[4]; break;
            case '6': result += primeNumber[5]; break;
            case '7': result += primeNumber[6]; break;
            case '8': result += primeNumber[7]; break;
            case '9': result += primeNumber[8]; break;
            
        };
    }; 
    // ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
} else if(arrayNumber.length === 1){
    switch (arrayNumber[0]){
        case '0': result + ' '; break;
        case '1': result += primeNumber[0]; break;
        case '2': result += primeNumber[1]; break;
        case '3': result += primeNumber[2]; break;
        case '4': result += primeNumber[3]; break;
        case '5': result += primeNumber[4]; break;
        case '6': result += primeNumber[5]; break;
        case '7': result += primeNumber[6]; break;
        case '8': result += primeNumber[7]; break;
        case '9': result += primeNumber[8]; break;
        
    };
}
let finalRes = result.trim();
  return finalRes;
}

console.log(module.exports(15));