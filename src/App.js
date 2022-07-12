// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import Books from 'Books';
// import configureStore from './redux/configureStore';
// import Catergories from './redux/catergories/Catergories';

// function BookStore() {
//   return (
//     <Provider store={configureStore}>
//       <div>
//         <h1>Book Store</h1>
//         <ul>
//           <li>
//             <Link to="/books">Books</Link>
//           </li>
//           <li>
//             <Link to="/catergories">Catergories</Link>
//           </li>
//         </ul>
//         <hr />
//         <Routes>
//           <Route exact path="/books" element={<Books />} />
//           <Route path="/catergories" element={<Catergories />} />
//         </Routes>
//       </div>
//     </Provider>
//   );
// }

// export default BookStore;

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Books from './components/books/Books';
import Catergories from './redux/catergories/Catergories';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="/categories" element={<Catergories />} />
      </Routes>
    </>
  );
}
export default App;
