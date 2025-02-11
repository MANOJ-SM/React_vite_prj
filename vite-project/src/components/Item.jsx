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

/*

comnditionally render the items with null 

function Item(props){
    if(props.isPacked){
        return (
            <>
            <li>{props.name} ✓ </li>
            </>
        );
    }else {
        return <li>{props.name}</li>
    }
}

export default Item;

*/



// conditional terrnoruy operator

function Item(props){
    return  <li> { props.isPacked ? props.name + "✓" : props.name } </li>;

}

export default Item;

