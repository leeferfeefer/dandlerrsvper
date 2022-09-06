import { herokuInstance } from "./axios.service";

export const sendRSVP = async () => {
  let response;
  try {
    response = await herokuInstance.get('/sendemail');
    return response.data;
  } catch (error) {
    console.log("ERROR: ", JSON.stringify(error));    
  }
  return response; 
};