let options={
    title:"meera",
    //width:100,
    height:500
}

// let{title,width,height}=options;

let{title:ti,...rest}=options;


//let{width=70,height:ht}=options;
// console.log(width);
console.log(rest.height);

