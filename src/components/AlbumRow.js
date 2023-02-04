import {Link} from "react-router-dom";
import {Box, Text} from "@chakra-ui/react";

export function AlbumRow(props) {
    return (
        <Link to={'/albums/' + props.album?.id} state={{album: props.album}}>
            <Box borderTop='2px' borderColor='primary' bg='white' color='black'  w={280} h={280} display='flex' justifyContent='center'
                 alignItems='center'
                 _hover={{
                     background: "secondary",
                 }}
            >
                <Text textAlign='center' color={'primaryText'} fontSize='2xl'>
                    {props.album?.title}
                </Text>
            </Box>
        </Link>

    );
}