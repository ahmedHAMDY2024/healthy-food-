/* eslint-disable eqeqeq */
/* eslint-disable default-case */
import product from'/taskes/product-list-with-cart-main/product-list-with-cart/src/db.json'
let Counter=Array(product.product.length).fill(0)
const cuonterReducer=(stat=Counter,action)=>{
    const cuont=stat
    const id=action.paylod
    switch (action.type) {
        case 'INCREMENT':     
        cuont[id.paylod-1]+=1
        return stat=cuont;

        case 'DECREMENT':
        if (cuont[id.paylod-1]>0){
            cuont[id.paylod-1]-=1
        }
        return stat=cuont;
        case 'DELET':
            console.log(cuont);
            cuont[id.paylod-1]=0
            console.log(cuont);

            // let x=cuont[id.paylod-1]
            // console.log(x);
            // const result=cuont.filter(index=>index!=x,[id.paylod-1],cuont)
            // console.log(result);
            return stat=cuont;   
            
        default:
        return stat
    }
}
export default cuonterReducer