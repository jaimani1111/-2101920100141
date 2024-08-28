import axios from 'axios';


const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzI0ODI0ODMyLCJpYXQiOjE3MjQ4MjQ1MzIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjdjMDQ5MmIyLWE4ZmEtNGM5NC05MmY4LTFhOTc2MTQ4MTc5ZCIsInN1YiI6ImNzZTIxMDAzQGdsYml0bS5hYy5pbiJ9LCJjb21wYW55TmFtZSI6ImdvTWFydCIsImNsaWVudElEIjoiN2MwNDkyYjItYThmYS00Yzk0LTkyZjgtMWE5NzYxNDgxNzlkIiwiY2xpZW50U2VjcmV0IjoiUXJtTkRnaEdwampBR2RQYSIsIm93bmVyTmFtZSI6ImphaW1hbmkgY2hvdWRoYXJ5Iiwib3duZXJFbWFpbCI6ImNzZTIxMDAzQGdsYml0bS5hYy5pbiIsInJvbGxObyI6IjIxMDE5MjAxMDAxNDEifQ.GRBz2Rwd4JT8dz3FZ88UqKAekWs2y4190lasC-hjivg';
const BASE_URL = 'http://20.244.56.144/test/companies';

export const fetchProducts = async (company, category, top, minPrice, maxPrice) => {
  const url = `${BASE_URL}/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
  const response = await axios.get(url, {
    headers: {
      'Authorization': `Bearer ${AUTH_TOKEN}`,
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};
