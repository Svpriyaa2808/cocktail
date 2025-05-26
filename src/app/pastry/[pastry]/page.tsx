import { selectedMenu } from "@/data/data"

const RecipePage = async ({params}: {params:{pastry:string}}) =>{ 
    const pastry = await decodeURIComponent(params.pastry);

        // const slugify = (text: string):string => {
        //     return text.toLowerCase().replace(/\s+/g, '-')           // Replace spaces with -       // Remove all non-word chars
           
        //    }
        
        //   console.log("hi")
        //  
        //   const slug = slugify(pastry) 
        //   console.log(selectedMenu(params.replace(/\s+/g, '-')))
         
    return(
        <p>{pastry}</p>
    )
}

export default RecipePage