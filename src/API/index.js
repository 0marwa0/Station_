// /** @format */

import { Host } from "./Config";
// import axios from "axios";
let host = `https://station-test-api.herokuapp.com/dash/v1/`;

export const LoadData = (query, onSuccess, onFailure) => {
  // let data ;spaces
  fetch(`${Host}${query}`, {
    headers: {
      token:
        // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZXhwIjoxNTkzNDAzODI2MTQ5LCJpYXQiOjE1OTM0MDM4MjB9.4x1MBn-UnDXl-s83r0U4FBk2lYO9FMzkKBVjfCPUeUQ",
        localStorage.getItem("station_token"),
    },
  })
    .then((resp) => resp.json())
    .then((jsonData) => {
      onSuccess(jsonData.errMsg, jsonData);
    })
    .catch((err) => {
      onFailure(err.message);
    });
};
export const LoadDataByID = (query, onSuccess, onFailure) => {
  fetch(`${Host}${query}`, {
    headers: {
      token:
        // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZXhwIjoxNTkzNDAzODI2MTQ5LCJpYXQiOjE1OTM0MDM4MjB9.4x1MBn-UnDXl-s83r0U4FBk2lYO9FMzkKBVjfCPUeUQ",
        localStorage.getItem("station_token"),
    },
  })
    .then((resp) => resp.json())
    .then((jsonData) => {
      onSuccess(jsonData.errMsg, jsonData);
    })
    .catch((err) => {
      onFailure(err.message);
    });
};

export const LoadBooking = (onSuccess) => {
  let data = [];

  fetch(`${Host}books/home`, {
    headers: {
      token:
        // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZXhwIjoxNTkzNDAzODI2MTQ5LCJpYXQiOjE1OTM0MDM4MjB9.4x1MBn-UnDXl-s83r0U4FBk2lYO9FMzkKBVjfCPUeUQ",
        localStorage.getItem("station_token"),
    },
  })
    .then((resp) => resp.json())
    .then((jsonData) => {
      let info = [];
      jsonData.data.map((item) => {
        LoadDataByID(
          `book/${item.id}`,
          (err, data) => {
            info.push(data.data);
            console.log("let see ");
            onSuccess(info);
          },
          () => {}
        );
      });

      // onSuccess(jsonData.errMsg, jsonData);
    })
    .catch((err) => {
      // onFailure(err.message);
    });
};
export const Login = (data, onSuccess, onFailure) => {
  let myHeaders = new Headers();
  let raw = JSON.stringify(data);
  // console.log(raw, "login data");
  myHeaders.append("Content-Type", "application/json");
  let requestOptions = {
    method: "POST",
    headers: myHeaders,

    body: raw,
    redirect: "follow",
  };
  fetch(`${Host}/login`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      localStorage.setItem("station_token", result.token);

      onSuccess(result.status, result.errMsg, result);
      console.log(result, "login success");
    })

    .catch((error) => {
      console.log(error.message, "login failed");
      // onFailure(error.message);
    });
};

// export const removeItem = (query, id, onSuccess, onFailure) => {
//   fetch(`${Config.host}${query}/${id}`, {
//     method: "delete",
//     headers: {
//       token: localStorage.getItem("step_token"),
//       "Content-Type": "application/json",
//     },
//   })
//     .then((resp) => resp.json())
//     .then((jsonData) => {
//       onSuccess(jsonData.errMsg, jsonData);
//     })
//     .catch((err) => {
//       onFailure(err.message);
//     });
// };

// export const removeItems = (query, ids, onSuccess, onFailure) => {
//   fetch(`${Config.host}${query}`, {
//     method: "delete",
//     headers: {
//       token: localStorage.getItem("step_token"),
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(ids),
//   })
//     .then((resp) => resp.json())
//     .then((jsonData) => {
//       onSuccess(jsonData.errMsg, jsonData);
//     })
//     .catch((err) => {
//       onFailure(err.message);
//     });
// };

// export const addData = (query, data, onSuccess, onFailure) => {
//   if (data.price) {
//     data.price = Number(data.price);
//   }
//   // console.log(data,"product data sended ");
//   let options = {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//       token: localStorage.getItem("step_token"),
//     },
//     body: JSON.stringify(data),
//   };

//   if (query === "product") {
//     var formdata = new FormData();
//     formdata.append("name", data.name);
//     formdata.append("price", data.price);
//     formdata.append("description", data.description);
//     formdata.append("subgroup", data.subgroup);
//     formdata.append("components", data.components);
//     formdata.append("image", data.image);

//     options = {
//       method: "post",
//       body: formdata,
//       headers: {
//         token: localStorage.getItem("step_token"),
//       },
//     };
//   } else {
//   }

//   fetch(`${Config.host}${query}`, options)
//     .then((resp) => resp.json())
//     .then((jsonData) => {
//       // console.log(jsonData.errMsg, jsonData, "on Success");
//       onSuccess(jsonData.errMsg, jsonData);
//       // console.log("data sended", data);
//     })
//     .catch((err) => {
//       // console.log(err, "add error");
//       onFailure(err.message);
//     });
// };

// export const editData = (query, data, id, onSuccess, onFailure) => {
//   if (data.price) {
//     data.price = Number(data.price);
//   }

//   let options = {
//     method: "put",
//     headers: {
//       "Content-Type": "application/json",
//       token: localStorage.getItem("step_token"),
//     },
//     body: JSON.stringify(data),
//   };
//   // console.log(data, "editable data");
//   // if (query === "product") {
//   //   var formdata = new FormData();
//   //   formdata.append("name", data.name);
//   //   formdata.append("price", data.price);
//   //   formdata.append("components", data.components);
//   //   options = {
//   //     method: "put",
//   //     body: formdata,
//   //     headers: {
//   //       token: localStorage.getItem("step_token"),
//   //     },
//   //   };
//   // } else {
//   // }
//   fetch(`${Config.host}${query}/${id}`, options)
//     .then((resp) => resp.json())
//     .then((jsonData) => {
//       // console.log(jsonData);
//       onSuccess(jsonData.errMsg, jsonData);
//     })

//     .catch((err) => {
//       console.log(err);
//       onFailure(err.message);
//     });
// };

// export const changeImage = (query, data, id, onSuccess, onFailure) => {
//   // var formdata = new FormData();
//   // formdata.append("image", data.image);
//   // let options = {
//   //   method: "put",
//   //   body: formdata,
//   //   headers: {
//   //     token: localStorage.getItem("step_token"),
//   //   },
//   // };
//   let options = {
//     method: "put",
//     headers: {
//       "Content-Type": "application/json",
//       token: localStorage.getItem("step_token"),
//     },
//     body: JSON.stringify(data),
//   };

//   fetch(`${Config.host}${query}/${id}`, options)
//     .then((resp) => resp.json())
//     .then((jsonData) => {
//       onSuccess(jsonData.errMsg, jsonData);
//       // console.log(jsonData, "change image");
//     })
//     .catch((err) => {
//       onFailure(err.message);
//     });
// };
// export const addProduct = (query, data, onSuccess, onFailure) => {
//   var myHeaders = new Headers();
//   myHeaders.append(
//     "token",
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEsInR5cGUiOiJhZG1pbiIsImlhdCI6MTU5NTYyNzUwMX0.JWR_qBXWzXyDCQ1tOQBZnMawnSACrd0OdYhrMcbRPJc"
//   );

//   var formdata = new FormData();
//   formdata.append("name", "");
//   formdata.append("image", data.image);
//   formdata.append("description", "description test");
//   formdata.append("price", 55);
//   formdata.append("subgroup", 51);
//   formdata.append("components", []);

//   var requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: formdata,
//     redirect: "follow",
//   };

//   fetch("https://step-copy.herokuapp.com/dash/v1/product", requestOptions)
//     .then((resp) => resp.json())
//     .then((jsonData) => {
//       onSuccess(jsonData.errMsg, jsonData);
//     })
//     .catch((err) => {
//       onFailure(err.message);
//     });
// };
