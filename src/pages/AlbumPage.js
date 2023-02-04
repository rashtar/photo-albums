import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAlbumPhotos} from "../utils/Api";
import {PhotoList} from "../components/PhotoList";
import {Photo} from "../components/Photo";
import {Flex} from "@chakra-ui/react";
import {Search} from "../components/Search";
import {useDispatch, useSelector} from "react-redux";
import {clearPhotos, loadPhotos} from "../app/state/photoSlice";

export function AlbumPage() {
    const photos = useSelector((state) => state.photos.value);
    const [searchString, setSearchString] = useState('');
    const {albumId} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        getAlbumPhotos(albumId).then((result) => {
            dispatch(loadPhotos(result));
        }).catch((error) => {
            console.log(error);
        });

        return () => {
            dispatch(clearPhotos())
        }
    }, [albumId, dispatch]);

    const handleSearch = (searchString) => {
        setSearchString(searchString);
    }

    const photoList = photos.filter(photo => photo.title.toLowerCase().includes(searchString.toLowerCase())).map(photo => {
        return (
            <Photo key={photo.id} photo={photo} searchString={searchString}/>
        )
    });

    return (
        <Flex flexDir='column' mx={20} gap={30}>
            <Search onSearch={handleSearch}/>
            <PhotoList albumId={albumId} photos={photoList} />
        </Flex>
    );
}
