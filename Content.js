
import ItemList from "./ItemList"

const Content = ({items, handleCheck, handleDelete}) => {
        
  return (
    <>
        {/* render message when list is empty1 */}
        {items.length ? (

            <ItemList
                items =  {items}
                handleCheck = {handleCheck}
                handleDelete = {handleDelete}
            />
        // render message when list is empty2
        ) :(
            <p style ={{marginTop: "2rem" }}>Your list is empty</p>
        )}

    </>
  )
}

export default Content