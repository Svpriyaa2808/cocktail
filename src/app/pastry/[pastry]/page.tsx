import { selectedMenu } from "@/data/data"



// const RecipePage =  ({params}: {params:{pastry:string}}) =>{ 
//     const pastry =  decodeURIComponent(params.pastry);

//         // const slugify = (text: string):string => {
//         //     return text.toLowerCase().replace(/\s+/g, '-')           // Replace spaces with -       // Remove all non-word chars
           
//         //    }
        
//         //   console.log("hi")
//         //  
//         //   const slug = slugify(pastry) 
//         //   console.log(selectedMenu(params.replace(/\s+/g, '-')))
         
//     return(
//         <p>{pastry}</p>
//     )
// }

// export default RecipePage

import { pastryMenu } from "@/data/data";

type Props = {
    params: {
      pastry: string;
    };
  };
  
  export default async function Page({ params }: Props) {
    return <div>Pastry: {params.pastry}</div>;
  }
  
  export async function generateStaticParams() {
    return pastryMenu.map((item) => ({
      pastry: item.name.toLowerCase(),
    }));
  }