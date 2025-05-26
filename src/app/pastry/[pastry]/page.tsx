import { selectedMenu } from "@/data/data"
import { PastryType } from "@/types/type";

type ParamsProp = { params: { pastry: string } };

export default async function RecipePage ({params}: ParamsProp) { 
    const pastry =  await decodeURIComponent (params.pastry);
       const selectedPastry : PastryType | undefined = selectedMenu(pastry) 
       console.log(pastry)
       console.log(selectedPastry) 
    return(
        <>
        <p>{pastry}</p>
         <p>{selectedPastry?.description}</p> 
        </>
    )
}



