
import CategoriesFilter from '../../components/CategoriesFilter/CategoriesFilter'
import Product from '../../components/Product/Product'

import faker from "faker"
let acc = []
let i = 0
while(i <= 12) {
    acc = [...acc, {
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.image.people(),     
    }]
    i++
}

const Categories = () => {
    return (
        <div className="container-fluid">
            <div className="row border">
                <div className="col-3">
                    <CategoriesFilter />
                </div>
                <div className="col-4">
                    {acc.map(e => <Product name={e.name} price={e.price} image={e.image}/>)} 
                </div>
            </div>
            
        </div>
    )
}

export default Categories