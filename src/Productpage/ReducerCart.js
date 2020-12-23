const ReducerCart=(state,action)=>{
    const {totalprice,allproducts,Cartpg,qty,Cartprdctpginfo,Cartprdctpg,cartdiv,activecreateacc,sidebarinfo,inputfield}=state
  
    switch(action.type){

        case"click":
       
       
        const clickedproduct=action.product
        const clickedproductprice=clickedproduct.price
        clickedproduct['qty2']=1
        const updatedclickedproduct=clickedproduct['qty2']                    
        const match=allproducts.find(filtered=>filtered.name===clickedproduct.name)
      

        if(match){
        return{
        allproducts:allproducts,totalprice:totalprice,qty:qty,Cartprdctpginfo:Cartprdctpginfo,Cartpg:Cartpg,Cartprdctpg:Cartprdctpg,cartdiv:cartdiv,activecreateacc:activecreateacc}}

        else{
        return{
        allproducts:[clickedproduct,...allproducts],totalprice:clickedproductprice+totalprice,qty:qty,Cartprdctpginfo:Cartprdctpginfo,Cartpg:Cartpg,Cartprdctpg:Cartprdctpg,cartdiv:cartdiv,activecreateacc:activecreateacc}}
        break;
        
        case"deleteitem":
        
        const deletitem=allproducts.filter((filteralproduct)=>(action.State.name!==filteralproduct.name))
        return{allproducts:deletitem,totalprice:totalprice-action.State.price,qty:qty,Cartprdctpginfo:Cartprdctpginfo,Cartprdctpg:Cartprdctpg,cartdiv:cartdiv,activecreateacc:activecreateacc}
        break;

        case"Cartpg":
        return {Cartpg:true,allproducts:allproducts,totalprice:totalprice,qty:qty,Cartprdctpginfo:Cartprdctpginfo,cartdiv:cartdiv,activecreateacc:activecreateacc}
        break;

        case"Cartpgback":
        return {Cartpg:false,allproducts:allproducts,totalprice:totalprice,qty:qty,Cartprdctpginfo:Cartprdctpginfo,cartdiv:false,activecreateacc:activecreateacc}
        break;


        case "inc":
           const product= action.State
           product.qty2=action.quantity+1
           allproducts[action.index]=product
           return {allproducts:[...allproducts],totalprice:totalprice+product.price,Cartpg:Cartpg,qty:qty,Cartprdctpginfo:Cartprdctpginfo,cartdiv:cartdiv,activecreateacc:activecreateacc}
        break;


        case 'dec':
            const product2= action.State
           product2.qty2=action.quantity-1
           
            allproducts[action.index]=product2
            return {qty:qty,allproducts:[...allproducts],totalprice:totalprice-product2.price,Cartpg:Cartpg,Cartprdctpginfo:Cartprdctpginfo,cartdiv:cartdiv,activecreateacc:activecreateacc}

        break;
        
        case"deleteitemcartpg":
        const deletitem2=allproducts.filter((filteralproduct)=>(action.State.name!==filteralproduct.name))
        return{allproducts:deletitem2,totalprice:totalprice- action.quantity*action.price,qty:qty,Cartpg:true,Cartprdctpginfo:Cartprdctpginfo,Cartprdctpg:Cartprdctpg,cartdiv:cartdiv,activecreateacc:activecreateacc}
        break;

        case"Cartprdctpg":
        const cartpgproduct=action.produc
       
        return{allproducts:allproducts,totalprice:totalprice,qty:qty,Cartpg:Cartpg,Cartprdctpg:true,Cartprdctpginfo:cartpgproduct,cartdiv:false,activecreateacc:activecreateacc}
        
        case"cartdiv":
        return{allproducts:allproducts,totalprice:totalprice,qty:qty,Cartpg:Cartpg,Cartprdctpg:Cartprdctpg,Cartprdctpginfo:Cartprdctpginfo,cartdiv:true,activecreateacc:activecreateacc}

        case"cartdivback":
        return{allproducts:allproducts,totalprice:totalprice,qty:qty,Cartpg:Cartpg,Cartprdctpg:Cartprdctpg,Cartprdctpginfo:Cartprdctpginfo,cartdiv:!cartdiv,activecreateacc:activecreateacc}



        case"activecreateacc":
        return{allproducts:allproducts,totalprice:totalprice,qty:qty,Cartpg:Cartpg,Cartprdctpg:Cartprdctpg,Cartprdctpginfo:Cartprdctpginfo,cartdiv:cartdiv,activecreateacc:!activecreateacc}

        case"sidebarinfo":
        return{allproducts:allproducts,totalprice:totalprice,Cartprdctpginfo:Cartprdctpginfo,activecreateacc:activecreateacc,sidebarinfo:action.info,qty:qty,Cartpg:Cartpg,Cartprdctpg:Cartprdctpg}

        case"inputfield":
        return{allproducts:allproducts,totalprice:totalprice,Cartprdctpginfo:Cartprdctpginfo,activecreateacc:activecreateacc,inputfield:action.info,qty:qty,Cartpg:Cartpg,Cartprdctpg:Cartprdctpg}





    }


}
export default ReducerCart