
export async function fetchProducts(){
    const res = await fetch("http://localhost:3001/products",{
        next:{revalidate:5}
    })
    if(!res.ok)
        throw new Error("failed to fetch products")
    return res.json()
}