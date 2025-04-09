/* eslint-disable no-loop-func */
/* eslint-disable no-unused-expressions */
import { useEffect, useState } from "react";
import React from "react";
import CarCard from "./Car-card";
import { useDispatch, useSelector } from "react-redux";
import {Increment,Decrement} from "../redux/Action/cauonterAction";
function Contaner() {
    const Data = useSelector((state) => state.Product);
    const cuonter = useSelector((state) => state.Counter);
    // const delet = useSelector((state) => state.Delet);
    const despatch=useDispatch()
    const [Cuonter,setCuonter]=useState(cuonter)
    const[product,setproduct]=useState(Data);
    const [btnCard,setbtnCard]=useState([]);
    const [btnTxt,setbtnTxt]=useState('Add to Car');
    const [dataCar,setdataCar]=useState(0);
    // const [newbtnTxt,setnewbtnTxt]=useState(Array(10).fill(0))
    const[data,setData]=useState([])
    const [TotalPrice,setTotalPrice]=useState(0)
    const cauntOfproduct=Cuonter
    const dataOfCar=product
    // useEffect(()=>{
    //     fetch("http://localhost:4000/product")
    //     .then((res)=>res.json())
    //     .then((data)=>setproduct(data))
    // },[]);

    useEffect(()=>{
        handelCar()
        handelDataCar()
        totalPrice()
        btnPro()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log([product]);
    },[Cuonter])
    const chainges=()=>{
        handelCar()
        handelDataCar()
        totalPrice()
        btnPro()
    }
    // Cuonter.onChange(chainges)
console.log(Data);
    function handelCar(){
       setdataCar(()=>{
        let car=0
        for (let i = 0; i < Cuonter.length; i++) {
            if(Cuonter[i]>0){
            car += Cuonter[i];
            }
        }
        // console.log(car);
            return car
    })
}

    function handelDataCar(){
        setData([])
        for (let i = 0; i < cauntOfproduct.length; i++) {
            if(cauntOfproduct[i]>0){
                setData((el)=>{
                    let data={
                        name : dataOfCar[i].name ,
                        img : dataOfCar[i].img ,
                        price : dataOfCar[i].amount,
                        caunt : Cuonter[i],
                        total :dataOfCar[i].amount*Cuonter[i]
                    }
                return el=[...el,data]
               })}}
}
    function totalPrice(){
        setTotalPrice(()=>{
            let total=0
            for (let i = 0; i < Cuonter.length; i++) {
                if(Cuonter[i]>0){
                    total+=Cuonter[i]*dataOfCar[i].amount;
                }

            }
            return total
        })

    }
    // console.log(TotalPrice);    
        function btnPro(elId) {  
            setbtnCard((prev) =>{
               return  [...prev, elId]
                });
        }

        function PLUS(id){
            despatch(Increment({
                type:'ICREMENT',
                paylod:id
            }))
            handelCar()
            handelDataCar()
            totalPrice()
            }
        function MINUS(id){
            despatch(Decrement({
                type:'DECREMENT',
                paylod:id
            }))
            handelCar()
            handelDataCar()
            totalPrice()
            console.log(TotalPrice);
        }
        // console.log(Data.Counter);

        //     const Delet=(index)=>{
        // // data.indexOf(index)
        //     // let newData=data.splice(data.indexOf(index),1)
        // }
    let card=product.map((el)=>{
        return(
        <div key={el.id} className={"cardPro"} >
            <img src={el.img} className={btnCard.includes(el.id) ?'newImg':"card-img-top-pro"} alt={el.name}/>
            <div className={"card-body divBtn"}>
                 <button  className={btnCard.includes(el.id) ? "active" : "btn-card"}
                   onClick={()=>{btnPro(el.id)}}>
                    <span onClick={()=>{MINUS(el.id)}} className={"minus span"}>-</span>

                    <img className={"carImg"}src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='20' fill='none' viewBox='0 0 21 20' style='display: block;'%3E%3Cg fill='%23C73B0F' clip-path='url(%23a)'%3E%3Cpath d='M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z'%3E%3C/path%3E%3Cpath d='M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z'%3E%3C/path%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M.333 0h20v20h-20z'%3E%3C/path%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E" alt={el.name}/>
                    <span className={"btntxt"}>{btnCard.includes(el.id) ? Cuonter[el.id-1] : btnTxt}</span>
                    <span onClick={()=>{PLUS(el.id)}} className="plus span">+</span>

                </button>
            </div>
                <p className={"card-title"}>{el.name}</p>
                <h6 className={"card-text"}>{el.dscreption}</h6>
                <span className={"amount-span"}>${el.amount}</span>
        </div>
        )
    }
)

 return(
        <main>
            <div className="contntiner">
            <h1 className="title">Desserts</h1>
        {card}
        </div>
        <div>
        <CarCard props={{dataCar,product,Cuonter,data,TotalPrice}}>
        </CarCard>
        </div>
        </main>
    )
    
}
export default Contaner