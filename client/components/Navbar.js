import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { logout } from '../../app/store';

const Navbar = () => {
  // const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const logoutAndRedirectHome = () => {
  //   dispatch(logout());
  //   navigate("/login");
  // };

//   return (
//     <div>
//       <h1>Coloring - Stackathon</h1>
//       <nav>
//         {isLoggedIn ? (
//           <div>
//             {/* The navbar will show these links after you log in */}
//             <Link to="/home">Home</Link>
//             <Link to="/products">Products</Link>
//             <Link to={"/cart"}>
//               {" "}
//               My Cart
//               {/* (
//               {cartItems && cartItems.length
//                 ? cartItems.reduce(
//                     (acc, item) => acc + item.order_product.quantity,
//                     0
//                   )
//                 : 0}
//               ) */}
//             </Link>
//             <button type="button" onClick={logoutAndRedirectHome}>
//               Logout
//             </button>
//           </div>
//         ) : (
//           <div>
//             {/* The navbar will show these links before you log in */}
//             <Link to="/products">Products</Link>
//             <Link to="/cart">My Cart</Link>
//             <Link to="/login">Login</Link>
//             <Link to="/signup">Sign Up</Link>
//           </div>
//         )}
//       </nav>
//       <hr />
//     </div>
//   );
// };

  return (
    <div id='navbar'>
      <h1>Coloring - Stackathon</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/colors">Colors</Link>
      </nav>
    </div>
  );
};

export default Navbar;
