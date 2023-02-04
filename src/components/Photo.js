import {Box, Flex, Image, Text} from "@chakra-ui/react";
import {formatPhotoTitle} from "../utils/Utils";

export function Photo(props) {
    const photo = props.photo;
    const formattedTitle = formatPhotoTitle(props.searchString, photo?.title);

    return (
        <Box bg='secondary' color='primaryText' p={5} borderTop='2px'>
            <Flex flexDir='column' alignItems='center'>
                <Box border={'solid #035c9f 1px'}>
                    <Image src={photo?.thumbnailUrl} alt={photo?.title}/>
                </Box>
                <Box pt='6'>
                    <Box display='flex' alignItems='baseline'>
                        <Text borderRadius='full' px='2' colorScheme='teal' textAlign='center'>
                            {formattedTitle}
                        </Text>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
}