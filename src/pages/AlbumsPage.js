import React from "react";
import {AlbumRow} from "../components/AlbumRow";
import {AlbumList} from "../components/AlbumList";
import {Flex} from "@chakra-ui/react";

function AlbumsPage(props) {
    const albumList = props.albums?.map((album) => {
        return (
            <AlbumRow key={album.id} album={album}/>
        );
    });
    return (
        <Flex flexDir='column' mx={20}>
            <AlbumList albums={albumList}/>
        </Flex>
    );
}


export default AlbumsPage;