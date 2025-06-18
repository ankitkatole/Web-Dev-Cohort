import React, { useRef,useState } from 'react';
import Chat from "./Chat"
import Clock from "./Clock"

import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function App() {

  

  return <>
    <Chat />
    <Clock />
    </>
}

export default App;





// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Landing />} />
//             <Route path="neet/online-coaching-class-11" element={<Class11Program />} />
//             <Route path="neet/online-coaching-class-12" element={<Class12Program />} />
//             <Route path="*" element={<Error />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// function Layout() {
//   return (
//     <div>
//       <nav>
//         <Link to="/">Allen</Link> | 
//         <Link to="/neet/online-coaching-class-11">Class 11</Link> | 
//         <Link to="/neet/online-coaching-class-12">Class 12</Link>
//       </nav>
//       <hr />
//       <Outlet />
//     </div>
//   );
// }

// function Landing() {
//   return <div>Welcome to Allen</div>;
// }

// function Class11Program() {
//   return <div>NEET programs for Class 11th</div>;
// }

// function Class12Program() {
//   return <div>NEET programs for Class 12th</div>;
// }

// function Error() {
//   return <div>404: Page Not Found</div>;
// }

