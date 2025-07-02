"use client"

import { useState } from "react"

type Props = {
    onFilterChange: (category: string) => void;
    onSortChange: (sort:"asc" | "desc") => void;
};
export default function FilterSortBar({onFilterChange , onSortChange}:Props){
    const [category , setCategory] = useState("")
    const [sort , setSort] = useState<"asc" | "desc">("asc")

    return(
        <>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white rounded-md shadow mb-6">
            <select 
            value={category}
            onChange={(e)=>{
                setCategory(e.target.value)
                onFilterChange(e.target.value)
            }}
            className="border px-3 py-2 rounded"            
            >
                <option value="">All Categories</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Accessories">Accessories</option>
            </select>
            <select
             value={sort}
             onChange={(e)=>{
                const value = e.target.value as "asc" | "desc"
                setSort(value)
                onSortChange(value)
             }}
             className="border px-3 py-2 rounded"
             >
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select>
        </div>
        </>
    )

}