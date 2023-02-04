import {Fragment} from "react";
import {SimpleGrid} from "@chakra-ui/react";

export function AlbumList(props) {
    return (
        <Fragment>
            <SimpleGrid minChildWidth='250px' spacing='40px' spacingX='40px' spacingY='40px'>
                {props.albums}
            </SimpleGrid >
        </Fragment>
    )
}