import { useEffect , useState } from "react";

function currencyConverterinfo(currency){
    const [data , setData] = useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/d77f86f577c1d103dd9d4917/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=> setData(res.conversion_rates))
        console.log("######" ,data);
    } , [currency])
    return data   
}
export default currencyConverterinfo