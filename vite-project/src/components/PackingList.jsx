import Item from "./Item"

function PackingList(){
    return (
        <>
        <h1>list of Packing Items</h1>
            <Item  name="clothes" isPacked={true}/>
            <Item  name="watch" isPacked={true} />
            <Item  name="sunglases" isPacked={false} />
            <Item  name="moisture" isPacked={true}/>

        </>
    )
}


export default PackingList;