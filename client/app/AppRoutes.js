import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import AuthForm from '../components/AuthForm';
import Home from '../components/Home';
import ColorLibrary from '../components/ColorLibrary';
import { me } from './store';

/**
 * COMPONENT
 */

const AppRoutes = () => {
  // const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, [dispatch]);

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     if (!localStorage.getItem("guestUser")) {
  //       createGuestUser();
  //     }
  //   }
  // }, [isLoggedIn]);

  // if (isLoggedIn && localStorage.getItem("guestUser")) {
  //   localStorage.removeItem("guestUser");
  // }

  // return (
  //   <div>
  //     {isLoggedIn ? (
  //       <Routes>
  //         <Route path="/*" element={<Home />} />
  //         <Route to="/home" element={<Home />} />
  //         <Route path="/products" element={<Products />} />
  //         <Route path="/cart" element={<MyCart />} />
  //         <Route path="/products/:id" element={<SingleProduct />} />
  //         {isAdmin && <Route path="/addProduct" element={<AddProduct />} />}
  //         {isAdmin && <Route path="/editProduct" element={<EditProduct />} />}
  //         {isAdmin && <Route path="/allUsers" element={<AllUsers />} />}
  //         {isAdmin && <Route path="/cart/orders" element={<AllOrders />} />}
  //         <Route path="/checkout" element={<Checkout />} />
  //       </Routes>
  //     ) : (
  //       <Routes>
  //         <Route
  //           path="/*"
  //           element={<AuthForm name="login" displayName="Login" />}
  //         />
  //         <Route
  //           path="/login"
  //           element={<AuthForm name="login" displayName="Login" />}
  //         />
  //         <Route
  //           path="/signup"
  //           element={<AuthForm name="signup" displayName="Sign Up" />}
  //         />
  //         <Route path="/products" element={<Products />} />
  //         <Route path="/cart" element={<MyCart />} />
  //         <Route path="/checkout" element={<Checkout />} />
  //         <Route path="/products/:id" element={<SingleProduct />} />
  //       </Routes>
  //     )}
  //   </div>
  // );

  return (
    <div>
      <Routes>
      {/* <Route
        path="/*"
        element={<AuthForm name="login" displayName="Login" />}
      />
      <Route
        path="/login"
        element={<AuthForm name="login" displayName="Login" />}
      />
      <Route
        path="/signup"
        element={<AuthForm name="signup" displayName="Sign Up" />}
      /> */}
        <Route path='/*' element={<Home />} />
        <Route path='/colors' element={<ColorLibrary />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
