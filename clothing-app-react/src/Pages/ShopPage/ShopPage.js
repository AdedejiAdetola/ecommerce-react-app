import ShopCollection from "./ShopCollectionComponent/ShopCollectionComponent";
import SHOP_DATA from "./ShopData";

const ShopPage = () => {
    const data = {
        collection: SHOP_DATA
    };
    return ( 
        <div>
            <p>Shop Page</p>
            <br/>
            
            <div>
                {
                        data.collection.map(({ id, ...otherProps}) => (
                            <ShopCollection key={id} { ...otherProps }/>
                        ))
                }
            </div>
        </div>
     );
}
 
export default ShopPage;