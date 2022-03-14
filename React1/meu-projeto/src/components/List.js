import Item from "./Item"
function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="psp"/>
                <Item marca="ps2"/>
                <Item marca="ps3"/>
                <Item marca="ps4"/>
            </ul>
        </>
    )
}
export default List