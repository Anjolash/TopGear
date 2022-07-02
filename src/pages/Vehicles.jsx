import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import FeaturedCar from '../components/ui/FeaturedCar';
import { useParams } from 'react-router-dom';

const Vehicles = ({cars: initialCars, addToCart, cart}) => {
    const [cars, setCars] = useState(initialCars);
    let isMenuOpen = false;
    const [checked, setChecked] = useState([]);
    const NoOfCylinders = [1, 2, 3, 4, 6, 8];
    const Year = ["2022", "2021", "2020", "2019", "2018", "2017"];
    const FuelType = ["Petrol", "Diesel", "Electric", "Gas", "Hybrid"];
    const Make = ["Audi", "BMW", "Chevrolet", "Dodge", "Ford", "Hyundai", "Land Rover", "Mercedes-Benz", "Toyota", "Tesla", "Porsche"];
    const Transmission = ["Automatic", "Manual 5 Speed", "Manual 6 Speed"];
    const PriceRange = ["100000+", "80000 - 99999", "55000 - 79999", "40000 - 54999", "<40000"];

    const { id } = useParams();
    
    
       
    let isfilterandsortOpen = false;
        
    function filterandSort(){
        if (isfilterandsortOpen){
            isfilterandsortOpen = false;
          return document.body.classList.remove("sidebar--open")
      
        }
      
        isfilterandsortOpen = true;
        document.body.classList += " sidebar--open";
      }
    
        
    
    const chbx = document.getElementsByName("numberOfCylinders");
    
    function Reset() {
        for(let i=0; i < chbx.length; i++) {
            chbx[i].checked = false;
        }
            setCars(initialCars)
        }

        

        

    function sortCars(filter) {
        console.log(filter)
        if( filter === 'LOW_TO_HIGH'){
            setCars(cars
                .slice()
                .sort((a,b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)))
        }

        if( filter === 'HIGH_TO_LOW'){
            setCars(cars
                .slice()
                .sort((a,b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)))
        }

        if( filter === 'RATING'){
            setCars(cars
                .slice()
                .sort((a,b) => b.rating - a.rating))
        }

        if( filter === 'TOP_SPEED'){
            setCars(cars
                .slice()
                .sort((a,b) => b.topSpeed - a.topSpeed))
        }

        if( filter === 'YEAR'){
            setCars(cars
                .slice()
                .sort((a,b) => b.year - a.year))
        }

        if( filter === 'CYLINDERS'){
            setCars(cars
                .slice()
                .sort((a,b) => b.cylinders - a.cylinders ))
        }
    }

    function toggleMenu() {
        if (isMenuOpen){
            isMenuOpen = false;
            return document.body.classList.remove("filter__options--open" , "open")
          }
        
          isMenuOpen = true;
        
        document.body.classList += " open filter__options--open"
        
    }

    function toggleMenu2() {
        if (isMenuOpen){
            isMenuOpen = false;
            return document.body.classList.remove("filter__options--open2" , "open")
          }
        
          isMenuOpen = true;
        
        document.body.classList += " open filter__options--open2"
        
    }

    function toggleMenu3() {
        if (isMenuOpen){
            isMenuOpen = false;
            return document.body.classList.remove("filter__options--open3" , "open")
          }
        
          isMenuOpen = true;
        
        document.body.classList += " open filter__options--open3"
        
    }

    function toggleMenu4() {
        if (isMenuOpen){
            isMenuOpen = false;
            return document.body.classList.remove("filter__options--open4" , "open")
          }
        
          isMenuOpen = true;
        
        document.body.classList += " open filter__options--open4"
        
    }

    function toggleMenu5() {
        if (isMenuOpen){
            isMenuOpen = false;
            return document.body.classList.remove("filter__options--open5" , "open")
          }
        
          isMenuOpen = true;
        
        document.body.classList += " open filter__options--open5"
        
        
    }

    function toggleMenu6() {
        if (isMenuOpen){
            isMenuOpen = false;
            return document.body.classList.remove("filter__options--open6" , "open")
          }
        
          isMenuOpen = true;
        
        document.body.classList += " open filter__options--open6"
        
        
    }

    const handleCheck = (item) => {
        console.log(item)
        if( item === item){
            setCars(initialCars
                .slice()
                .filter((a) => a.cylinders == item))
                
        }
      };

      const handleCheck2 = (item) => {
        console.log(item)
        if( item === item){
            setCars(initialCars
                .slice()
                .filter((a) => a.year == item))
                
        }
      };

      const handleCheck3 = (item) => {
        console.log(item)
        if( item === item){
            setCars(initialCars
                .slice()
                .filter((a) => a.fuelType == item))
                
        }
      };

      const handleCheck4 = (item) => {
        console.log(item)
        if( item === item){
            setCars(initialCars
                .slice()
                .filter((a) => a.gearType == item))
                
        }
      };

      const handleCheck5 = (item) => {
        console.log(item)
        if( item === item){
            setCars(initialCars
                .slice()
                .filter((a) => a.Make == item))
                
        }
      };

      const handleCheck6 = (item) => {
        console.log(item)
        if( item === "100000+"){
            setCars(initialCars
                .slice()
                .filter((a) => 100000 <= (a.salePrice || a.originalPrice)  ))
               
                
        }

        if( item === "80000 - 99999"){
            setCars(initialCars
                .slice()
                .filter((a) => 80000 <= (a.salePrice || a.originalPrice) && (a.salePrice || a.originalPrice) < 100000 ))
               
                
        }

        if( item === "55000 - 79999"){
            setCars(initialCars
                .slice()
                .filter((a) => 55000 <= (a.salePrice || a.originalPrice) && (a.salePrice || a.originalPrice) < 80000 ))
               
                
        }

        if( item === "40000 - 54999"){
            setCars(initialCars
                .slice()
                .filter((a) => 40000 <= (a.salePrice || a.originalPrice) && (a.salePrice || a.originalPrice) < 55000 ))
               
                
        }

        if( item === "<40000"){
            setCars(initialCars
                .slice()
                .filter((a) => (a.salePrice || a.originalPrice) <= 40000 ))
               
                
        }
      };

      
    
      // Generate string of checked items
      const checkedItems = checked.length
        ? checked.reduce((total, item) => {
            return total + ", " + item;
          })
        : "";
    
      // Return classes based on whether item is checked
      var isChecked = (item) =>
        checked.includes(item) ? "checked-it" : "not-checked-item";
    

        
    



    return (
        <div>
            <div id="vehicles__body">
                <main id="vehicles__main">
                    <section>
                        <div className="container">
                            <div className="sticky__header">
                                        <div className="search__controls">
                                            <button className='search__control search__control--filter' onClick={filterandSort}>FILTER & SORT</button>
                                            <button className="reset__btn "  onClick={Reset}>
                                                Reset all Filters
                                            </button>
                                        </div>
                            </div>
                            <div className="vehicles-row">
                               
                                <div id="main-grid">
                                    <Sidebar cars={cars}  Reset={Reset} filterandSort={filterandSort} isChecked={isChecked} handleCheck={handleCheck} handleCheck2={handleCheck2} handleCheck3={handleCheck3} handleCheck4={handleCheck4} handleCheck5={handleCheck5} handleCheck6={handleCheck6} checked={checked}  isMenuOpen={isMenuOpen} sortCars={sortCars} toggleMenu={toggleMenu}  toggleMenu2={toggleMenu2} toggleMenu3={toggleMenu3} toggleMenu4={toggleMenu4} toggleMenu5={toggleMenu5} toggleMenu6={toggleMenu6} NoOfCylinders={NoOfCylinders} Year={Year} FuelType={FuelType} Make={Make} Transmission={Transmission} PriceRange={PriceRange} />
                                    
                                       
                                    <div id="results">
                                        <div id="search__results--header">
                                            <h1 title="Available Cars">Available Cars</h1>
                                        </div>
                                        <div className="vehicles-wrapper">
                                            {cars.map((car) => (
                                                <FeaturedCar car={car} key={car.id}  />
                                                
                                            ))}
                                        </div>
                                    </div>    
                                </div>    
                            </div>
                        </div>
                    </section>
                </main>
            
            </div>
        </div>
    );
}

export default Vehicles;
