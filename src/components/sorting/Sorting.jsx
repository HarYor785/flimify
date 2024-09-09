import React, {useState} from 'react'
import { genreOptions, sortOptions, filterAndSortData} from '@/lib'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@/components/ui/Button'


const Sorting = ({data, setData}) => {

    const [selectedGenre, setSelectedGenre] = useState(genreOptions[0]);
    const [selectedSortOrder, setSelectedSortOrder] = useState(sortOptions[0]);

    const handleApply = () => {
        const sortedAndFilteredData = filterAndSortData(data, selectedGenre.value, selectedSortOrder.value);
        setData(sortedAndFilteredData);
    };

    return(
        <div className="w-full flex items-center justify-between pb-4 
        border-b border-primary">
            <div className='flex items-center gap-4'>
                {/* Genre Selection */}
                <Autocomplete
                value={selectedGenre}
                onChange={(event, newValue) => setSelectedGenre(newValue)}
                options={genreOptions}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => <TextField {...params} label="Select Genre" variant="outlined" />}
                />

                {/* Sort Order Selection */}
                <Autocomplete
                value={selectedSortOrder}
                onChange={(event, newValue) => setSelectedSortOrder(newValue)}
                options={sortOptions}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => <TextField {...params} label="Sort Order" variant="outlined" />}
                />
            </div>
            <Button title={'Apply'} onClick={handleApply}/>
        </div>
    )
}

export default Sorting