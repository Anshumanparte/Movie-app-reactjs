import { useParams } from "react-router-dom"


const Single = () => {


  const { id } = useParams()
  console.log(id)

  return (
    <>
    <div>
      Our single Movie {id}
    </div>


    </>
  )
}

export default Single