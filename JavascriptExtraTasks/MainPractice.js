var cartlist={
    list:{},
    add:function(key,itemname)
    {
        this.list[key]=itemname;
    },
    remove:function(key)
    {
        this.list[key]=null;
    },
    get:function(key)
    {
        return this.list[key];
    }
};
cartlist.add(5,"shirt");
cartlist.add(8,"trrousers");

// cartlist.remove(0);
// cartlist.get(0);
console.log(cartlist);

