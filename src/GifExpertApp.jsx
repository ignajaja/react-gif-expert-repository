import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, onNewCategory] = useState(['']);

    const onAddCategory = (NewCategory) => {

        if (categories.includes(NewCategory)) return;

        onNewCategory([NewCategory, ...categories])

    }


    return (
        <>
            <h1> GifExpertApp </h1>

            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}

            />


            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}

