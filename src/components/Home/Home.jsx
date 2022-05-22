import { useNavigate } from "react-router-dom"
export const Home =()=>{
    const navigate = useNavigate()
    return(
       <>
        <div>
            Home Page
        </div>
        {/* //second param  {replace:true}==> if you want to go back khales to the browser */}
        <button onClick={()=>{navigate("order-summary")}} >Place Order</button>
       </>
    )
}