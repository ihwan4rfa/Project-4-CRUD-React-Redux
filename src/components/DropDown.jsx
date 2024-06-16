import React, { useState, useEffect } from 'react';

const Dropdown = (props) => {
    const [selectedOption, setSelectedOption] = useState('lastAdded');
    const { selectedOption2, setSelectedOption2 } = props;
    const [dropDownHidden, setDropDownHidden] = useState(true);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setSelectedOption2(option);
        setDropDownHidden(!dropDownHidden);
    };

    const handleDropDownToggle = () => {
        setDropDownHidden(!dropDownHidden);
        selectedOption === '' ? setSelectedOption(selectedOption2) : setSelectedOption('');
    };


    return (
        <div className="relative flex text-[13px] font-medium">
            <div className='z-20'>
                <button onClick={handleDropDownToggle} className="flex px-3 py-[2px] bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-md w-32 items-center justify-between">
                    <h1>{selectedOption ? `${selectedOption === 'lastAdded' ? 'Last Added' : 'Oldest Added'}` : 'Sort by'}</h1>
                    <h1><i class="fa-solid fa-caret-down"></i></h1>
                </button>
            </div>
            <div className={`absolute z-10 mt-8 w-32 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-md ${dropDownHidden ? 'hidden' : ''}`}>
                <div className="py-1">
                    <button
                        onClick={() => handleOptionChange('lastAdded')} className='flex w-full justify-between items-center px-3 py-1 hover:bg-white dark:hover:bg-slate-900'>
                        <h1>Last Added</h1>
                        <h1 className={`text-[10px] ${selectedOption2 === 'lastAdded' ? '' : 'hidden'}`}><i class="fa-solid fa-check"></i></h1>
                    </button>
                    <button
                        onClick={() => handleOptionChange('oldestAdded')} className='flex w-full justify-between items-center px-3 py-1 hover:bg-white dark:hover:bg-slate-900'>
                        <h1>Oldest Added</h1>
                        <h1 className={`text-[10px] ${selectedOption2 === 'oldestAdded' ? '' : 'hidden'}`}><i class="fa-solid fa-check"></i></h1>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;