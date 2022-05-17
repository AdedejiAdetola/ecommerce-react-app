import SHOP_DATA from "./ShopData";

const ShopPage = () => {
    const data = {
        collection: SHOP_DATA
    };
    return ( 
        <div style={{color: 'red'}}>
            <p>Shop Page</p>
            <br/>
            <div>
                {
                        data.collection.map(item => (
                            <div>
                                <h1>{item.title}</h1>
                                <p>{item.items.map(one => (
                                    <div key={one.id}>{one.name}</div>
                                ))}</p>
                            </div>
                        ))
                }
            </div>
        </div>
     );
}
 
export default ShopPage;