function ChildComponent(props){
    console.log("props",props)
    return (
        <>
        <h1>ChildComponent</h1>
        <h1>{props.lunchBox} <br/> {props.drink}</h1>
        </>
    )
};


export default ChildComponent;

