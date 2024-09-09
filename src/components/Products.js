import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, InputAdornment, TextField } from "@mui/material";
import ImgMediaCard from "./ImgMediaCard";
const Products = () => {
const [data, setData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [debounceTimeout,setDebounceTimeout] = useState(null);
  const [productNotFound, updateProductNotFound] = useState(false)

  

  const debounceSearch = (event, debounceTimeout) => {
    if(debounceTimeout){
      clearTimeout(debounceTimeout);
    }
    let timerId = setTimeout(() => {     
    //   performSearch(event.target.value);
    },800)
    setDebounceTimeout(timerId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.escuelajs.co/api/v1/products");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
        <Grid container spacing={3} justifyContent="center" className="parent">
            {data.map((item) => (
                <Grid item xs={12} sm={6} md={4} lg={3} mt={2} mb={2} key={item.id} >
                <ImgMediaCard data={item} />
                </Grid>
            ))}
        </Grid>
    </div>
  );
}
export default Products;