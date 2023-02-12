import React from "react";
import { IProduct } from "../models";
import { useState } from "react";

interface ProductProps {
    product: IProduct;
}


export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState<boolean>(false);

    const btnBgClassName = details ? ' bg-yellow-400 ' : 'bg-blue-400'
    const btnClasses = ['py-2 px-4 border', btnBgClassName]
    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} className="w-1/6 " alt={product.title} />
            <p> {product.title}</p>
            <span className="font-bold"> {product.price}</span>
            {<p>{product.description}</p>}

            <button
                className={btnClasses.join(' ')}
                onClick={() => setDetails((prev) => !prev)}
            >
                {details ? 'Hide details' : "show Details "}
            </button>

            {details &&
                <div>
                    <p>{product.description}</p>
                    <p>{product.title}</p>
                </div>
            }    </div>
    );
}
