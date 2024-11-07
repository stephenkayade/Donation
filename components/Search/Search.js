import { View, TextInput, Pressable } from 'react-native';
import React, { useRef,useState } from 'react';
import style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { scaleFontSize } from '../../assets/styles/scaling';
import PropTypes from 'prop-types';

const Search = (props) => {

    const textInputRef = useRef(null);
    const [search, setSearch] = useState('');

    const handleFocus = () => {
        textInputRef.current.focus();
    };

    const handleSearch = (searchValue) => {
        setSearch(searchValue);
        props.onSearch(searchValue);
    };

    return (
        <Pressable
            onPress={handleFocus}
            style={style.searchInputContainer}
        >
            <FontAwesomeIcon icon={faSearch} color="#25c0ff" size={scaleFontSize(22)} />
            <TextInput
                ref={textInputRef}
                value={search}
                onChangeText={(value) => handleSearch(value)}
                style={style.searchInput}
                placeholder={props.placeholder}
                placeholderTextColor={'#686c7a'}
            />
        </Pressable>
    );
};

Search.default = {
    onSearch: () => {},
    placeholder: 'Search',
};

Search.propTypes = {
    onSearch: PropTypes.func,
    placeholder: PropTypes.string,
};

export default Search;
