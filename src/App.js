import React from 'react';
import {Routes , Route} from 'react-router-dom';
import { Home } from './components/Home/Home';
// import {About} from './components/About/About';

import {Navbar} from './components/Navbar/Navbar';
import { OrderSummary } from './components/OrderSummary/OrderSummary';
import{NotMatched} from './components/NotMatched/NotMatched';
import {Products} from './components/Products/Products';
import {FeaturedProducts} from './components/FeaturedProducts/FeaturedProducts';
import {NewProducts} from './components/NewProducts/NewProducts';
import {Users} from './components/Users/Users';
import {UserDetails} from './components/UserDetails/UserDetails';
import {Admin} from './components/Admin/Admin';
import {Profile} from './components/Profile/Profile';
// import {AuthProvider} from './components/Auth/Auth'
import { Login } from './components/Login/Login';
//LazyLoading
const LazyAobut = React.lazy(()=>import('./components/About/About'));
function App() {
  return (
//  <AuthProvider>
<>
      <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<React.Suspense fallback='loading...'>
                                      <LazyAobut/>
                                    </React.Suspense>
                                  }/>
      <Route path='order-summary' element={<OrderSummary/>} />
      <Route path='products' element={<Products/>}> 
      {/* if you want to see <FeaturedProducts/> by default after opening <Products/> */}
      <Route index element={<FeaturedProducts/>} />
         <Route path="featured" element={<FeaturedProducts/>} />
         <Route path="new" element={<NewProducts/>} />
      </Route>
      <Route path='users' element={<Users/>} >
      <Route path=":userId" element={<UserDetails/>} />
      <Route path="admin" element={<Admin/>} />
      </Route>
      <Route path='profile' element={<Profile/>}/>
      <Route path='login' element={<Login/>}/>

      <Route path="*" element={<NotMatched/>}/>
    </Routes>
    </>
//  </AuthProvider>
  );
}

export default App;
