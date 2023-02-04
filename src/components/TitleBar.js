import {Box, Heading} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {SunIcon} from "@chakra-ui/icons";
import React from "react";

export function TitleBar(props) {
    return (
        <Box bg={'primary'} mb={10}>
            <Link to={'/'}>
                <Heading mx={10} py={2} color={'white'} _hover={{color: 'secondary'}}
                         display={'flex'} alignItems={'center'} gap={3}>
                    <SunIcon></SunIcon> Albums {props.albumId}
                </Heading>
            </Link>
        </Box>
    )
}