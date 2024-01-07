import './Home.css';
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import CardComponent from '../../Components/Cards/Card';

function Home() {
        const [data, setData] = useState(null);
        const [category, setCategory] = useState(null);
        const [search, setSearch] = useState("");


        function filterByCategory(data, category) {

                var data = data.type.find(type => type.category_id === category);
                var data = data.car_type
                if (search !== "") {
                        data = data.filter(car_type => car_type.vehicle.toLowerCase().includes(search.toLowerCase()));
                }

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
        
        console.log(search)
        return (
                <div className="Home">
                        <div className='heroWrapper'>
                                <h1 className='heroTitle'>Welcome to BlueBird</h1>
                                <Button className='btnHero' variant="primary" as='a' href='#search'>Book Now</Button>
                        </div>
                        <div className='searchWrapper' id='search'>
                        <input type='text' value={search} onChange={(e) => setSearch(e.target.value)}></input>
                        <div className='buttonContainer'>
                            {data && data.category.map(category => (
                                    <Button className='btnHome' key={category.id} variant="primary" onClick = {() => setCategory(category.id)}>{category.name}</Button>
                            ))}
                        </div>
                        <div className='contentsWrapper'>
                                {category&& <h1 className='categoryTitle'>{data.category[category-1].name}</h1>}
                                {category && <div className='CardsWrapper'>
                                        {filterByCategory(data, category).map(data => (
                                                <CardComponent key={data.id} data={data} />
                                        )
                                        )}
                                </div>}
                        </div>
                        </div>
                </div>
        );
}

export default Home;