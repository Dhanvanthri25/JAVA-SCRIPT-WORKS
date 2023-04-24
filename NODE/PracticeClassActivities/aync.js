function resloveAfter25seconds(){
    return new Promise(reslove => {
        setTimeout(()=> {
            //console.log('resolved')
            reslove('resloved');
            },2000);
        });
    }
    async function asyncCall(){
        console.log('calling');
        const result = await resloveAfter25seconds();
        console.log(result);
        //Expect output: "resloved"
    }
    asyncCall();