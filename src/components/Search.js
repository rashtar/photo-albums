import {Box, Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import {useState} from "react";

export function Search(props) {
    const [value, setValue] = useState('')
    const handleChange = (event) => {
        setValue(event.target.value);
        props.onSearch(event.target.value);
    }

    return (
        <Box p={2} borderRadius='md' >
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='gray.300'/>}
                />
                <Input value={value} onChange={handleChange}
                       type='text' placeholder='Photo title'/>
            </InputGroup>
        </Box>
    );
}