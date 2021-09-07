import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { Dispatch, SetStateAction } from 'react-native/node_modules/@types/react';
type PropsType = {
    country: string,
    setCountry: Dispatch<SetStateAction<string>>
}
export const SearchableInput = ({country, setCountry}: PropsType) =>  {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { label: 'Греция', value: 'Греция' },
        { label: 'Италия', value: 'Италия' },
        { label: 'Франция', value: 'Франция' },
        { label: 'Германия', value: 'Германия' },
        { label: 'Англия', value: 'Англия' },
        { label: 'Россия', value: 'Россия' }
    ]);

    return (
        <DropDownPicker
            searchable
            open={open}
            value={country}
            items={items}
            placeholder="Страна"
            setOpen={setOpen}
            setValue={setCountry}
            setItems={setItems}
        />
    );
}