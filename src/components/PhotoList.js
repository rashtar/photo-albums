import {Fragment} from "react";
import {SimpleGrid} from "@chakra-ui/react";

export function PhotoList(props) {
    return (
        <Fragment>
            <SimpleGrid minChildWidth='200px' spacing='40px' spacingX='40px' spacingY='40px'>
                {props.photos}
            </SimpleGrid >
        </Fragment>
    );
}
