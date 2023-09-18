import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import axios from 'axios';

const ProductSection = () => {

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState("jewelery");
  const [filtered,setFiltered] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
    
      axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
    
  }, []);

  const handleCategory = (category:any)=>{
    setActive(category)
  }

  const filteredProducts = products.filter((product:any) => product?.category === active);

  return (
    <Box sx={styles.container}>
       <Box sx={styles.heading}>
        <Box>
        New Products
        </Box>
        <Box sx={styles.divider}>
          <Box sx={styles.star} component="img" src="/assets/starBlack.svg" alt="" />
        </Box>
        </Box>
       <Box sx={styles.arrows}>Arrows</Box>
       <Box sx={styles.categoryContainer}>
       {categories.map((category, index) => (
        <Box sx={category===active?styles.itemActive:styles.item} key={index} onClick = {()=>handleCategory(category)}>
          {category}
        </Box>
      ))}
       </Box>
       <Box sx={styles.cardContainer}>
       {products?.map((product:any) => (
        <Box sx={styles.card} key={product.id}>
          <Box sx={styles.cardImage} component="img" src={product.image} alt={product.title} />
          <Box sx={styles.cardTitle}>{product.title}</Box>
          <Box sx={styles.cardDescription}>{product.description}</Box>
          <Box>Price: ${product.price}</Box>
        </Box>
      ))}
       </Box>
    </Box>
  )
}

export default ProductSection