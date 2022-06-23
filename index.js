class Formatter {

  static capitalize(string) {
   return string.charAt(0).toUpperCase() + string.substring(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string){
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and' , 'for' , 'at' , 'by', 'from']
    const stringSplit = string.split(' ')
    const remainderWords = stringSplit.slice(1)
    const firstWord = stringSplit.slice(0,1)

    const firstWordCap = firstWord.map(word => word.charAt(0).toUpperCase() + word.substring(1))
    
     const firstWordRemoved = 
     remainderWords.map(word => {
      if(exceptions.includes(word)) {
        return word.toLowerCase()
      } else {
        return word.charAt(0).toUpperCase() + word.substring(1)
      }
    })
    return [...firstWordCap,...firstWordRemoved].join(' ')
   
  } 
  
  

}