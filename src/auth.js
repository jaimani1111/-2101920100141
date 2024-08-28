import axios from 'axios';

const AUTH_URL = 'http://20.244.56.144/test/auth';

export const getAuthToken = async () => {
  const authData = {
    companyName: "goMart",
    clientID: "7c0492b2-a8fa-4c94-92f8-1a976148179d",
    clientSecret: "QrmNDghGpjjAGdPa",
    ownerName: "jaimani choudhary",
    ownerEmail: "cse21003@glbitm.ac.in",
    rollNo: "2101920100141"
  };

  try {
    const response = await axios.post(AUTH_URL, authData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching the token:', error);
    return null;
  }
};
