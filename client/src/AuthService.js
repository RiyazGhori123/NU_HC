// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// async function CheckAccessRights(inputName){
//     // const [records, setRecords] = useState([]);
//     var role;
//     var hasAccess;
//     console.log("Input",inputName);
//     useEffect(() => {
//         axios.get('http://localhost:5000/access')
//             .then((response) => {
//               console.log(response.data);
//             //   console.log("printed data");
//             //   setRecords(response.data);
//               var data1 = response.data
//               //   console.log(records);
//             //   console.log(data);
//             //   console.log("===============================");
//                 for (let index = 0; index < data1.length; index++) {
//                     const element = data1[index];
//                     console.log(element.name);
//                     if (element.name  === inputName) {
//                         return element.role
//                     }
                    
//                 }
//             //   console.log(hasAccess);
//             //   return hasAccess;
//             //   role = hasAccess ? records[0].role : null;
//             })
//             .catch((error) => {
//               console.log(error);
//             });
//       }, []);

//     // return role
// }

// export default CheckAccessRights;

export const user = {
    name: "Riyaz Shaik",
    role:{
      name: "Admin"
    }
  }