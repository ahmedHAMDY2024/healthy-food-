/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import './conferm-pay.css';
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'
import {Delet} from '../redux/Action/cauonterAction'
function Conferm({props}){
    const cuonter = useSelector((state) => state.Counter);
    const [elet,setdelet]=useState(cuonter)
    const despatch=useDispatch()
    let data =props.props.data
    let product =props.props.product
    let alertPro={}
    let sidePro={}
    let Id = 0;
    const delet=(index)=>{
        for (let i = 0; i < product.length; i++) {
            if (product[i].name===index.name) {
                // console.log(product[i].id);
                Id=product[i].id
            }}

        // console.log(cuonter);
        despatch(Delet({ 
            type:'DELET',
            paylod:Id
        }))
        setdelet(cuonter)
    }
    if(props.props.data.length>0){
        alertPro=data.map(el=>{

            return(`
                <div  class="main">
                    <div class="nistedMain">
                         <div><img class="img"src=${el.img} alt=${el.name}/></div>
                         <div class="data">
                            <p class="name">${el.name}</p>
                            <span class="caunt">${el.caunt}x</span>
                            <span class="price">@$${el.price}</span>
                          </div>
                    </div>
                    <div>
                        <div class="total-price"><span class="name">$${el.price * el.caunt}</span></div>
                    </div>
                    </div>
                    <hr class="hr"/>
                    `)}).join('')}


    if(props.props.data.length>0){
        sidePro=props.props.data.map((el)=>{
       return(
            <div key={el.name}>
              <div  className="main">
                <div className="nistedMain">
                     <div className="data">
                        <p className="name">{el.name}</p>
                        <span className="caunt margen">{el.caunt}x</span>
                        <span className="price margen">@${el.price}</span>
                        <span className="name margen">${el.price * el.caunt}</span>
                      </div>
                </div>
                <div>
                <button className={'cancelOrder'} onClick={()=>delet(el)}>x</button>
                </div>
               </div>
                <hr className="hr"/>
            </div>
)})}

    props.confermValid===true&&Swal.fire({
        icon:"success",
        title: 'order confirmed',
        html:`  
            <p class='discrebtion'>we hope you enjoy your food</p> 
            <div class="continer" >
              ${alertPro}
                <div class="OrderTotal">
                    <span class="totalName">Order Total</span>
                    <span class="totalPraic">$${props.props.TotalPrice}</span>
                </div>
            </div>`,
        confirmButtonText:'Start New Order',
        customClass:{
            popup:'box',
            confirmButton:'confermBtn',
            icon:'icon',
            title:'titlecar'
        }
        // timer: 5000
        })
    return(
        <>
        {props.props.data.length>0&&sidePro}
        {props.props.data.length>0&&<div className="OrderTotal"><span className="totalName">Order Total</span><span className="totalPraic">${props.props.TotalPrice}</span></div>}


       </>
    )
}
export default Conferm