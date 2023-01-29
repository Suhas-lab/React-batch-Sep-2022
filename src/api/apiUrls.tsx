import axios from "axios";

// axios is third party lib which used to communicate with server. It will use GET, POST, DELETE, PUT, UPDATE.
// axios will not require to stringfy the request. It will convert requrest into strigify automatically.
// Generate promises. It wiil give either resolve or reject state.

const getinitialized = (contetType:any, responseType: any) =>{
    let api = axios.create({
        headers : {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Beare-Token': '2232saddasdasd'
        },
      });
      return api;
};
// It will give break me to avoid a cors error

export const getRequest = (url: any, headers: any) =>{
    return getinitialized('application/json', headers).get(url, headers).catch((error: any)=>{console.log(error)})
};

// this method will use to post data in database
export const postrequestMethod = (url: any, headers: any)=>{
  return getinitialized('application/json', headers).post(url, headers).catch((error: any)=>{
    console.log(error)
  })
}