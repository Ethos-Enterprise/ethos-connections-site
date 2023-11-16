import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

const Dropdown = ({ label, options, selectedValue, updateSelectedValue }) => {
    const [selectedOption, setSelectedOption] = useState(selectedValue);

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    //adiciona o isOpen
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        if (updateSelectedValue) {
            updateSelectedValue(option);
        }
    };

    //verifica se o click foi fora do dropdown(pra fechar a caixa de options)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setSelectedOption(selectedValue);
    }, [selectedValue]);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <div className="dropdown-select" onClick={toggleDropdown}>
                <div>
                    {selectedOption === '' ? label : selectedOption}

                </div>

                <i className="fa-solid fa-caret-down"></i>

            </div>

            {/* se a pessoa clicar no dropdown esta caixa recebera isOpen e aparecera */}
            {isOpen && (
                <div className="dropdown-options">

                    {options.map((option, index) => (
                        <div
                            key={index}
                            className="dropdown-option"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </div>
                    ))}

                </div>
            )}
        </div>
    );
};

export default Dropdown;
