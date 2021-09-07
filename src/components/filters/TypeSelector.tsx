import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { Dispatch, SetStateAction } from 'react-native/node_modules/@types/react';
type PropsType = {
    type: string,
    setType: Dispatch<SetStateAction<string>>
}
export const TypeSelector = ({ type, setType }: PropsType) => {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { label: 'Отель', value: 'Отель' },
        { label: 'Гостиница', value: 'Гостиница' },
        { label: 'Апартаменты', value: 'Апартаменты' },
        { label: 'Хостел', value: 'Хостел' },
        { label: 'Курорт', value: 'Курорт' }
    ]);

    return (
        <DropDownPicker
            open={open}
            value={type}
            items={items}
            placeholder="Тип"
            setOpen={setOpen}
            setValue={setType}
            setItems={setItems}
        />
    );
}