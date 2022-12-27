import React, {useEffect} from 'react';
import $ from "jquery";

interface Props
    {
       col: string;
        colortheme: object
    }

const Category: React.FC<Props> = ({col, colortheme}) => {

    // @ts-ignore
    const hovercolor: string = colortheme.color

    useEffect(() =>
    {
        $('.slideDown').hide()
        $('.slideDown').slideDown(500)
    })
    // @ts-ignore
    return (
        <div className={'slideDown'} style={colortheme}>
            <div className={hovercolor == 'white' ? 'categoryWhiteList':'categoryList'}>
                <h1>{col}</h1>
                <hr/>
                <ul>
                    <li>All</li>
                    <li>Collections</li>
                    <li>Coats & Jackets</li>
                    <li>Dresses</li>
                    <li>Pants</li>
                    <li>Jumpsuits & Rompers</li>
                    <li>Shorts</li>
                    <li>Skirts</li>
                    <li>Sweater</li>
                    <li>Swimwear</li>
                    <li>Tops</li>
                    <li>Shoes</li>
                </ul>
            </div>
            <div className={hovercolor == 'white' ? 'categoryWhiteList':'categoryList'}>
                <h1>Collections</h1>
                <hr/>
                <ul>
                    <li>Our Favorites</li>
                    <li>New Arrivals</li>
                    <li>New Collections</li>
                    <li>Brands</li>
                    <li>Trends</li>
                    <li>New Names at Neiman's</li>
                    <li>Luxe Essentials</li>
                    <li>Exclusives</li>
                </ul>
            </div>
            <div className={hovercolor == 'white' ? 'categoryWhiteList':'categoryList'}>
                <h1>Brands</h1>
                <hr/>
                <ul>
                    <li>Akris</li>
                    <li>Alice + Olivia</li>
                    <li>Brunello Cucinelli</li>
                    <li>CHANEL</li>
                    <li>Dolce & Gabbana</li>
                    <li>Eileen Fisher</li>
                    <li>Giorgio Armani</li>
                    <li>Gucci</li>
                    <li>Johnny Was</li>
                    <li>Lafayette 148 New York</li>
                    <li>Theory</li>
                </ul>
            </div>

        </div>
    );
}

export default Category;