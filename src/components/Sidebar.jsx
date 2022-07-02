import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Sidebar = ({Reset, filterandSort, isChecked, handleCheck, handleCheck2, handleCheck3, handleCheck4, handleCheck5, handleCheck6, toggleMenu, toggleMenu2, toggleMenu3, toggleMenu4, toggleMenu5, toggleMenu6, sortCars, Make, FuelType, Year, NoOfCylinders, Transmission, PriceRange}) => {
    
    
    return (
        <div className="sidebar">
            <div className="sidebar__interior">
                
                    <div className="vehicles__header">
                        <button className="reset__btn"  onClick={Reset}>
                            Reset all Filters
                        </button>
                        <select defaultValue="DEFAULT" id="filter" onChange={(event) => sortCars(event.target.value)}>
                            <option value="DEFAULT">
                                Sort
                            </option>
                            <option value="LOW_TO_HIGH">Price, Low to High</option>
                            <option value="HIGH_TO_LOW">Price, High to Low</option>
                            <option value="RATING">Rating</option>
                            <option value="TOP_SPEED">Top Speed</option>
                            <option value="YEAR">Year</option>
                            <option value="CYLINDERS">Cylinders</option>
                            
                        </select>
                        <div className="sidebar__close">
                            <FontAwesomeIcon icon="times" onClick={filterandSort}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div id="filtercontainer">
                    
                        <div className="filter__list--container">
                            
                            <div className="filter" onClick={toggleMenu}>
                                
                                <h2 className="filter__h2">Cylinders</h2>
                                <FontAwesomeIcon icon="fa-angle-right"></FontAwesomeIcon>
                            </div>
                            <div className="filter" onClick={toggleMenu2}>
                                <h2 className="filter__h2">Year</h2>
                                <FontAwesomeIcon icon="fa-angle-right"></FontAwesomeIcon>
                            </div>
                            <div className="filter" onClick={toggleMenu3}>
                                <h2 className="filter__h2">Fuel</h2>
                                <FontAwesomeIcon icon="fa-angle-right"></FontAwesomeIcon>
                            </div>
                            <div className="filter" onClick={toggleMenu6}>
                                <h2 className="filter__h2">Make</h2>
                                <FontAwesomeIcon icon="fa-angle-right"></FontAwesomeIcon>
                            </div>
                            <div className="filter" onClick={toggleMenu4}>
                                <h2 className="filter__h2">Transmission</h2>
                                <FontAwesomeIcon icon="fa-angle-right"></FontAwesomeIcon>
                            </div>
                            <div className="filter" onClick={toggleMenu5}>
                                <h2 className="filter__h2">Price</h2>
                                <FontAwesomeIcon icon="fa-angle-right"></FontAwesomeIcon>
                            </div>
                            
                        </div>
                        <div className="filter__options--page">
                        <FontAwesomeIcon icon="arrow-left" onClick={toggleMenu} className="back"></FontAwesomeIcon>
                        {NoOfCylinders.map((item, index) => (
                            <div className="filter__option--options" key={index}>
                                <span className={isChecked(item)}>{item}</span>
                                <input name="numberOfCylinders" value={item} type="radio" onChange={(event) => handleCheck(event.target.value)} />
                                
                            </div>
                        ))}
                        </div>

                        <div className="filter__options--pageYear">
                        <FontAwesomeIcon icon="arrow-left" onClick={toggleMenu2} className="back"></FontAwesomeIcon>    
                        {Year.map((item, index) => (
                            <div className="filter__option--options" key={index}>
                                <span className={isChecked(item)}>{item}</span>
                                <input name="numberOfCylinders" value={item} type="radio" onChange={(event) => handleCheck2(event.target.value)} />
                                
                            </div>
                        ))}
                        </div>
                        <div className="filter__options--pageFuel">
                        <FontAwesomeIcon icon="arrow-left" onClick={toggleMenu3} className="back"></FontAwesomeIcon>
                        {FuelType.map((item, index) => (
                            <div className="filter__option--options" key={index}>
                                <span className={isChecked(item)}>{item}</span>
                                <input name="numberOfCylinders" value={item} type="radio" onChange={(event) => handleCheck3(event.target.value)} />
                                
                            </div>
                        ))}
                        </div>
                        <div className="filter__options--pageMake">
                        <FontAwesomeIcon icon="arrow-left" onClick={toggleMenu6} className="back"></FontAwesomeIcon>
                        {Make.map((item, index) => (
                            <div className="filter__option--options" key={index}>
                                <span className={isChecked(item)}>{item}</span>
                                <input name="numberOfCylinders" value={item} type="radio" onChange={(event) => handleCheck5(event.target.value)} />
                                
                            </div>
                        ))}
                        </div>
                        <div className="filter__options--pageTransmission">
                        <FontAwesomeIcon icon="arrow-left" onClick={toggleMenu4} className="back"></FontAwesomeIcon>
                        {Transmission.map((item, index) => (
                            <div className="filter__option--options" key={index}>
                                <span className={isChecked(item)}>{item}</span>
                                <input name="numberOfCylinders" value={item} type="radio" onChange={(event) => handleCheck4(event.target.value)} />
                                
                            </div>
                        ))}
                        </div>
                        <div className="filter__options--pagePrice">
                        <FontAwesomeIcon icon="arrow-left" onClick={toggleMenu5} className="back"></FontAwesomeIcon>
                        {PriceRange.map((item, index) => (
                            <div className="filter__option--options" key={index}>
                                <span className={isChecked(item)}>{item}</span>
                                <input name="numberOfCylinders" value={item} type="radio" onChange={(event) => handleCheck6(event.target.value)} />
                                
                            </div>
                        ))}
                        </div>
                    </div>
            </div>    
        </div>  
    );
}

export default Sidebar;
