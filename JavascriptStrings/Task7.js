function capitalizeWords(str)
{
    const mySentence =str.toUpperCase().trim();
    var final='';

    const words = mySentence.split(" ");
    for (let i = 0; i < words.length; i++)
    {
   
        words[i] = words[i][0].toUpperCase()+ words[i].substr(1).toLowerCase();
        final=final+" "+words[i];
      
        
       
    }
    return final;
    
}
console.log(capitalizeWords("Hjs lFDS "));