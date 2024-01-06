import './Home.css';
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import CardComponent from '../../Components/Cards/Card';

function Home() {
        const [data, setData] = useState(null);
        const [category, setCategory] = useState(null);

        function filterByCategory(data, category) {
                var data = data.type.find(type => type.category_id === category);
                var data = data.car_type

                return data;
        }
        

        useEffect(() => {
                axios.get('https://private-f2fbfb-ridecar2.apiary-mock.com/vehicles')
                    .then(response => {
                        setData(response.data);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }, []);
        
        
        return (
                <div className="Home">
                        <div className='heroWrapper'>
                                <h1 className='heroTitle'>Welcome to BlueBird</h1>
                        </div>
                        <div className='buttonContainer'>
                            {data && data.category.map(category => (
                                    <Button className='btnHome' key={category.id} variant="primary" onClick = {() => setCategory(category.id)}>{category.name}</Button>
                            ))}
                        </div>
                        <div className='contentsWrapper'>
                                {category && <h1 className='categoryTitle'>{data.category[category-1].name}</h1>}
                                {category && <div className='CardsWrapper'>
                                        {filterByCategory(data, category).map(data => (
                                                <CardComponent key={data.id} data={data} />
                                        )
                                        )}
                                </div>}
                        </div>
                </div>
        );
}

export default Home;