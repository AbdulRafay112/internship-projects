import Image from "next/image";
import {Card , CardContent , CardHeader , CardTitle} from "@/components/ui/card"
import { ProductProps } from "@/types/product";


export default function ProductCard({name , price , image , category}:ProductProps){
    return(
        <Card className="w-full max-w-sm shadow-md hover:shadow-lg transition duration-300">
            <CardHeader>
                <Image src={image}
                alt={name}
                width={300}
                height={300}
                className="rounded-md object-cover"/>
            </CardHeader>
            <CardContent>
                <CardTitle className="text-lg">{name}</CardTitle>
                <div className="text-sm text-muted-foreground">Category: {category}</div>
                <div className="text-primary font-semibold">${price}</div>
            </CardContent>

        </Card>
    )
}