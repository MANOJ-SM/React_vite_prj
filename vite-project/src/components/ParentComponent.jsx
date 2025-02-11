import ChildComponent from "./ChildComponent";

function ParentComponent(){
    return (
        <>
        <h1>ParentComponent</h1>
        <ChildComponent lunchBox='roti' drink='jira' />
        </>
    )
};

export default ParentComponent;