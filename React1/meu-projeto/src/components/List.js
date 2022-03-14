import Item from "./Item"
function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="psp" ano_lancamento={2005}/>
                <Item marca="ps2" ano_lancamento={2010}/>
                <Item marca="ps3" ano_lancamento={2015}/>
                <Item marca="ps4" ano_lancamento={2020}/>
            </ul>
        </>
    )
}
export default List