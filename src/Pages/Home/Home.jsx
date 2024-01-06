import './Home.css';
import axios from "axios";
import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";

function Home() {
        const [data, setData] = useState(null);

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
                        <h1>Welcome to Bluebird Group</h1>
                        <div className='buttonContainer'>
                            {data && data.category.map(category => (
                                    <Button className='btnHome' key={category.id} variant="primary">{category.name}</Button>
                            ))}
                        </div>
                </div>
        );
}

export default Home;