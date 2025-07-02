"use client"
import ProductCard from "@/components/ProductCard";
import { ProductProps } from "@/types/product";
import FilterSortBar from "@/components/FilterSidebar";
import { fetchProducts } from "@/lib/api";
import { useState , useEffect } from "react";

export default function Home() {
  const[products , setProducts] = useState([])
  const[filtered , setFiltered] = useState([])

  const fetch = async()=>{
    const data = await fetchProducts()
    setProducts(data)
    setFiltered(data)
  };

  useEffect(() =>{
    fetch()
  }, [])

  const handleFilterChange = (category: string)=>{
    const filteredProducts = category? products.filter((p:any) => p.category === category) : products;
    setFiltered(filteredProducts)
  };

  const handleSortChange = (order: "asc" | "desc") => {
    const sortedProducts = [...filtered].sort((a: any , b: any) =>{
      return order === "asc" ? a.price - b.price : b.price - a.price 
    })
    setFiltered(sortedProducts)
  }

  return (
    <>
    <main className="p-6">

      <FilterSortBar onFilterChange={handleFilterChange} onSortChange={handleSortChange}/>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {filtered.map((product:ProductProps)=>(
          <ProductCard key={product.id} {...product}/>
      ))}
    </div>
    </main>
    </>
  );
}
