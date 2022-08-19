function palindrome(str) {
    let result = false
    let palinArr = str.replace(/\W/gi, '').replace(/_/g, '').toLowerCase().split('')
    while (palinArr.length > 1) {
      if (palinArr.shift() == palinArr.pop()){
        result = true
        palinArr.shift()
        palinArr.pop()
      } else {
        return false
      }
    };
    return result
  }
  
  palindrome("My age is 0, 0 si ega ym.");