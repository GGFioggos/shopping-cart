import React, { useState } from 'react';
import bmw_m5 from '../images/bmw_m5.png';
import bmw_m2 from '../images/bmw_m2.png';
import bmw_8_series from '../images/bmw_8_series.png';
import bmw_8_series_normal from '../images/bmw_8_series_normal.png';
import '../styles/CarsDisplay.css';

import CarCard from './CarCard';

const CarsDisplay = (props) => {
    let cars_info = [
        {
            name: 'BMW M5 Competition',
            image: bmw_m5,
            description:
                'The BMW M5 has 1 Petrol Engine on offer. The Petrol engine is 4395 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the M5 has a mileage of 9.12 kmpl . The M5 is a 5 seater 8 cylinder car and has length of 4983mm, width of 2126mm and a wheelbase of 2982mm.',
            price: 120000,
        },
        {
            name: 'BMW M2 Competition',
            image: bmw_m2,
            description:
                'The M2 Coupe was first launched in 2016, and its based on the 2 Series (which in turn is the two-door version of the 1 Series hatchback). But the M2 has a specification more in common with the higher spec M3 and M4 models, as it uses performance parts taken from these two models, including the twin-turbo straight-six engine, and both manual and DCT gearbox options. Power from the 3.0-litre engine is a huge 404bhp, and theres 550Nm of torque, too, making the M2 a powerful package.',
            price: 82000,
        },
        {
            name: 'BMW 8 Series Cabrio',
            image: bmw_8_series,
            description:
                'The 2023 BMW 8 Series Convertible has many additional options for increased convenience, entertainment, and performance. Explore packages like the Driving Assistance Professional Package, which adds innovative technology like Active Cruise Control with Stop & Go.',
            price: 95000,
        },
        {
            name: 'BMW 8 Series',
            image: bmw_8_series_normal,
            description:
                'BMW 8 Series is a 5 seater Coupe available at a price of ₹ 1.62 Crore. It is available in 1 variant, 2998 cc engine option and 1 transmission option : Automatic (TC). Other key specifications of the 8 Series include a Ground Clearance of 128 mm, Kerb Weight of 1875 kg and Bootspace of 440 litres.',
            price: 87000,
        },
    ];

    const [cars, setCars] = useState(cars_info);

    return (
        <div className="cars-container">
            {cars.map((car) => (
                <CarCard
                    addToCart={props.addToCart}
                    car={car}
                    key={car.name}
                ></CarCard>
            ))}
        </div>
    );
};

export default CarsDisplay;
