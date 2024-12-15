import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext'; // Adjusted path
import Item from '../../Components/Items/Item'; // Adjusted path
import './Shopcategory.css';

const Shopcategory = (props) => {
    const { allproduct } = useContext(ShopContext);

    if (!allproduct || allproduct.length === 0) return <div>Loading...</div>;

    return (
        <div className='shop-category'>
            <div className="shopcategory-indexSort">
                
                <div className="shopcategory-products">
                    {allproduct.map((item) => {
                        if (props.category === item.category) {
                            return (
                                <Item
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    image={item.image}
                                    new_price={item.new_price}
                                    old_price={item.old_price}
                                />
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Shopcategory;

