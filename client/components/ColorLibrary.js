import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import { fetchColorLibrary, selectColorLibrary } from '../features/colorLibrarySlice';

const ColorLibrary = () => {
  const dispatch = useDispatch();
  const colorLibrary = useSelector(selectColorLibrary);
  // const userId = useSelector((state) => state.auth.me.id);
  // const [memoCartItems, setMemoCartItems] = useState(cartItems);

  // const guestUserJSON = window.localStorage.getItem("guestUser");
  // const guestUser = guestUserJSON ? JSON.parse(guestUserJSON) : null;

  //todo loading screen for transition between user to logged out
  // const navigate = useNavigate();

  // const handleCheckout = async (event) => {
  //   event.preventDefault();
  //   if (userId && !guestUser) {
  //     await dispatch(handleCheckoutAsync({ userId }));
  //     await dispatch(fetchCartItemsAsync(userId));
  //   } else if (guestUser && !userId) {
  //     console.log(guestUser.userId);
  //     await dispatch(handleCheckoutAsync({ userId: guestUser.userId }));
  //     await dispatch(fetchCartItemsAsync(guestUser.userId));
  //   }
  //   navigate("/checkout");
  // };

  // useEffect(
  //   () => {
  //     if (userId && !guestUser) {
  //       dispatch(fetchCartItemsAsync(userId));
  //     } else if (guestUser && !userId) {
  //       console.log(guestUser.userId);
  //       dispatch(fetchCartItemsAsync(guestUser.userId));
  //     }
  //   },
  //   [dispatch, userId],
  //   guestUser
  // );
  useEffect(() => {
    dispatch(fetchColorLibrary());
  }, [dispatch]);

  // const handleRemove = (productId, event) => {
  //   event.preventDefault();
  //   if (userId && !guestUser) {
  //     dispatch(removeCartItem({ userId, productId, remove: true, }));
  //   } else if (guestUser && !userId) {
  //     dispatch(removeCartItem({ userId: guestUser.userId, productId, remove: true }));
  //   }
  // };

  // useEffect(() => {
  //   setMemoCartItems(cartItems);
  // }, [cartItems]);

  // const handleQuantityChange = (productId, quantity) => {
  //   if (userId && !guestUser) {
  //     dispatch(updateCartAsync({ userId, productId, quantity })).then(() => {
  //       const itemIndex = memoCartItems.findIndex(
  //         (item) => item.id === productId
  //       );
  //       if (itemIndex !== -1) {
  //         const updatedCartItems = [...memoCartItems];
  //         updatedCartItems[itemIndex] = {
  //           ...updatedCartItems[itemIndex],
  //           order_product: {
  //             ...updatedCartItems[itemIndex].order_product,
  //             quantity,
  //           },
  //         };
  //         setMemoCartItems(updatedCartItems);
  //       }
  //     });
  //   } else if (guestUser && !userId) {
  //     dispatch(updateCartAsync({ userId: guestUser.userId, productId, quantity })).then(() => {
  //       const itemIndex = memoCartItems.findIndex(
  //         (item) => item.id === productId
  //       );
  //       if (itemIndex !== -1) {
  //         const updatedCartItems = [...memoCartItems];
  //         updatedCartItems[itemIndex] = {
  //           ...updatedCartItems[itemIndex],
  //           order_product: {
  //             ...updatedCartItems[itemIndex].order_product,
  //             quantity,
  //           },
  //         };
  //         setMemoCartItems(updatedCartItems);
  //       }
  //     });
  //   }
  // };

  // return (
  //   <div id="cart">
  //     <h2 className="products-header">Shopping Cart</h2>
  //     {memoCartItems && memoCartItems.length ? (
  //       <div>
  //         {memoCartItems.map((item) => (
  //           <div className="cart-item" key={item.id}>
  //             <Link to={`/products/${item.id}`}>
  //               <h3>{item.name}</h3>
  //             </Link>
  //             <div className="cart-container">
  //               <div className="image-column">
  //                 <img
  //                   src={item.imageUrl}
  //                   alt={item.name}
  //                   style={{ width: "100px", height: "100px" }}
  //                 />
  //                 {item.stock && item.stock > 0 ? (
  //                   <p>{item.stock} in stock</p>
  //                 ) : (
  //                   <p>Out of stock</p>
  //                 )}
  //               </div>
  //               <div className="price-column">
  //                 <span style={{ margin: "10px" }}>
  //                   <button
  //                     type="button"
  //                     className="small-quantity-button"
  //                     disabled={item.order_product.quantity <= 1 && true}
  //                     onClick={() => {
  //                       handleQuantityChange(
  //                         item.id,
  //                         item.order_product.quantity - 1
  //                       );
  //                     }}
  //                   >
  //                     -
  //                   </button>
  //                   <span>
  //                     &nbsp;&nbsp;Quantity: {item.order_product.quantity}
  //                     &nbsp;&nbsp;
  //                   </span>
  //                   <button
  //                     type="button"
  //                     className="small-quantity-button"
  //                     onClick={() => {
  //                       handleQuantityChange(
  //                         item.id,
  //                         item.order_product.quantity + 1
  //                       );
  //                     }}
  //                   >
  //                     +
  //                   </button>
  //                 </span>
  //                 <p>Price: ${item.order_product.price}</p>
  //                 <button onClick={(event) => handleRemove(item.id, event)}>
  //                   Remove from Cart
  //                 </button>
  //               </div>
  //             </div>
  //             <hr />
  //           </div>
  //         ))}
  //         <h3 style={{ textAlign: "center" }}>
  //           Subtotal: $
  //           {memoCartItems
  //             .reduce(
  //               (acc, item) =>
  //                 acc + item.order_product.price * item.order_product.quantity,
  //               0
  //             )
  //             .toFixed(2)}
  //         </h3>
  //       </div>
  //     ) : (
  //         <p style={{ textAlign: "center" }}>Your cart is empty</p>
  //     )}
  //     <div id="checkout-column">
  //       {memoCartItems && memoCartItems.length ? (
  //         <Link to={`/checkout/`}>
  //           <button onClick={handleCheckout}>Checkout</button>
  //         </Link>
  //       ) : null}
  //       <Link to="/products">
  //         <p style={{ fontSize: "20px" }}>Continue shopping</p>
  //       </Link>
  //       <br />
  //       <br />
  //     </div>
  //   </div>
  // );

  const rgb = (color) => `rgb(${color.value[0]},${color.value[1]},${color.value[2]})`;

  return (
    <div>
      <h2>Color Library</h2>
      <div id='color-library'>
        {colorLibrary && colorLibrary.length
        ? colorLibrary.map(color => (
          <div 
            className='cell'
            key={color.id}
            style={{ backgroundColor: rgb(color)}}
          />
        ))
        : null}
      </div>
    </div>
  );
};

export default ColorLibrary;
