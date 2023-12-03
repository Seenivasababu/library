
import React from 'react'
import EditBook from '~/app/_components/EditBook'

const page = ({params}:{params:{id:string}}) => {
   console.log("params"+typeof(params.id));
  return (
    <div>
      <EditBook id={params.id}/>
    </div>
  )
}

export default page