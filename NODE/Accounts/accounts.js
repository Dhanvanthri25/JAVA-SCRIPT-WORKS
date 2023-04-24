'use strict'

module.exports.CheckDetails=async function(firstArray,secondArray)
{
    console.log('test');
    var p={};
    var a=[];
    for(let i=0;i<firstArray.length;i++)
    {
            for(let j=0;j<secondArray.length;j++)
            {
                if(firstArray[i]==secondArray[j])
                {
                    p={
                        no:firstArray[i],
                        DoneBy:"Meera"
                    }
                    a.push(p);
                }
                    
            }
    }
    return a;
    
}