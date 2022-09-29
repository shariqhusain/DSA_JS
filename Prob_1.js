var arr=[10,-5,6,28,56,12,456];
function getHighestVal(acc,curval){
    if(curval>acc){
        acc=curval;
    }
    return acc;
}
   var ans=arr.reduce(getHighestVal)
   console.log(ans);