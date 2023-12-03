

import ViewBook from "~/app/_components/ViewBook";




const page = ({params}:{params:{id:string}}) => {
   console.log("params is checking  "+typeof(params.id));
   
   return (
     <div>
       <ViewBook id={params.id}/>
     </div>
   )
 }
 
 export default page
