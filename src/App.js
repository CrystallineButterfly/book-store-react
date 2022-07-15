// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';
// import { Provider, useSelector } from 'react-redux';
// import Bookss from './Components/Bookss';
// import store from './Redux/configureStore';
// import Navbar from './Components/Navbar';
// import Catergories from './Components/Catergories';

// function App() {
//   const bookss = useSelector((state) => state.BookReducer);
//   return (
//     <Router className="route">
//       <Navbar />
//       <Provider store={store}>
//         <Routes>
//           <Route path="/" exact element={<Bookss books={bookss} />} />
//           <Route path="/catergories" element={<Catergories />} />
//         </Routes>
//       </Provider>
//     </Router>

//   );
// }

// export default App;
import { Routes, Route } from 'react-router-dom';
import Container from './components/Container';
import Form from './components/Form';
import { Category } from './components/Category';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route
            path="/"
            element={(
              <div>
                <Container />
                <Form />
              </div>
            )}
          />
          <Route path="/Category" element={<Category />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
