function rot13(str) {
    const cipherArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const textToCipher = str.split('');
    var newArr = [];
    for (let i = 0; i < textToCipher.length; i++) {
      var findIndex = cipherArr.indexOf(textToCipher[i]) + 13;
      if (findIndex >= 24) {
        newArr.push(cipherArr[findIndex - 26]);
      }
      if (/[^a-zA-Z0-9]/g.test(textToCipher[i])) {
        newArr.push(textToCipher[i])
      }
      else if (findIndex <= 26){
        newArr.push(cipherArr[findIndex])
      }
    }
    return newArr.join('');
  }
  
  console.log(rot13("SERR CVMMN!"));