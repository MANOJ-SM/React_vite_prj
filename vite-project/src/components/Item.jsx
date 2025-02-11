// conditionally rendering the items -> if, else 

// function Item(props){
//     if(props.isPacked){
//         return (
//             <>
//             <li>{props.name} ✓ </li>
//             </>
//         );
//     }else {
//         return <li>{props.name}</li>
//     }
// }

// export default Item;



// comnditionally render the items with null 

// function Item(props){
//     if(props.isPacked){
//         return (
//             <>
//             <li>{props.name} ✓ </li>
//             </>
//         );
//     }else {
//         return <li>{props.name}</li>
//     }
// }

// export default Item;



// conditional ternery operator

// function Item(props){
//     return <li> { props.isPacked ? props.name + " ✓" : props.name } </li>;
// }

// export default Item;


// logical and   -> &&

// function Item(props){
//     return (
//         <li>
//             {props.name}
//             {props.isPacked && "✓"}
//         </li>
//     )
// }

// export default Item;


// rendring  items through array of obj's

function Item(props){
    return (
        <li>
            {props.data.name}
            {props.data.isPacked && "✓"}
        </li>
    )
}

export default Item;

