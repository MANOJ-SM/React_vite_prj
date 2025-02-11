// import Item from "./Item"

// function PackingList(){
//     return (
//         <>
//         <h1>list of Packing Items</h1>
//             <Item  name="clothes" isPacked={false}/>
//             <Item  name="watch" isPacked={true} />
//             <Item  name="sunglases" isPacked={false} />
//             <Item  name="moisture" isPacked={true}/>

//         </>
//     )
// }


// export default PackingList;

import Item from "./Item"


const items = [
    {
        id : 1,
        name : "clothes",
        isPacked : true
    },
    {
        id : 2,
        name : "watch",
        isPacked : false
    },
    {
        id : 3,
        name : "sunglases",
        isPacked : true
    },
    {
        id : 4,
        name : "moisture",
        isPacked : false
    }
];


function PackingList(){
    return (
        <>
        <h1>list of Packing Items</h1>

            {/* <Item  name="clothes" isPacked={false}/>
            <Item  name="watch" isPacked={true} />
            <Item  name="sunglases" isPacked={false} />
            <Item  name="moisture" isPacked={true}/> */}


            {  items.map( item => {
                return <Item  key={item.id}  data = {item} />   // item.id -> to track each item in list 
            })
            }

        </>
    )
}


export default PackingList;