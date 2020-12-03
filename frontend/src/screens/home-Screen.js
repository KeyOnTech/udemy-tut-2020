                                                  // import React, { useEffect, useState } from 'react';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
/*** this is the old container --- start */
import {listProducts} from '../actions/product-Actions';
/*** this is the old container --- end */
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';
function HomeScreen() {
                                                  // const [products, setProducts] = useState([]);
                                                  // const [loading, setLoading] = useState([false]);
                                                  // const [error, setError] = useState('');
                                                  // useEffect(() => {
                                                  //   const fetchData = async () => {
                                                  //     try {
                                                  //       setLoading(true);
                                                  //       const {data} = await axios.get('/api/products');
                                                  //       setProducts(data);
                                                  //       setLoading(false);
                                                  //     } catch (err) {
                                                  //       setError(err.message);
                                                  //       setLoading(false);  
                                                  //     }
                                                  //   };
                                                  //   fetchData();
                                                  // }, [])

    /*** this is the old container --- start */
    const dispatch = useDispatch();
    const productsList = useSelector((state) => state.productsList);
    const {loading, error, products} = productsList;
    /*** this is the old container --- end */

    /*** this is the old componentDidMount - aka onLoad - you can have multiple useEffects --- start */
    useEffect(() => {
      dispatch(listProducts());
    }, [dispatch]);
    /*** this is the old componentDidMount - aka onLoad - you can have multiple useEffects --- end */

    return (
      <div>
        {loading? (
          <LoadingBox />
        )
        :
        error? (
          <MessageBox variant="danger">{error}</MessageBox>
        )
        : 
        (
          <div className="row center">
            {
              products.map(product => (
                <Product key={product._id} product={product} />                              
              ))
            }
          </div>
        )}
      </div>
    )
}
export default HomeScreen
