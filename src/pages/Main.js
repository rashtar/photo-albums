import {Route, Routes} from "react-router-dom";
import React, {Fragment, useEffect} from "react";
import {getAlbums} from "../utils/Api";
import AlbumsPage from "./AlbumsPage";
import {AlbumPage} from "./AlbumPage";
import {useDispatch, useSelector} from "react-redux";
import {loadAlbums} from "../app/state/albumSlice";
import {TitleBar} from "../components/TitleBar";

function Main() {
    const albums = useSelector((state) => state.albums.value);
    const dispatch = useDispatch();

    useEffect(() => {
        getAlbums()
            .then(
                (result) => {
                    dispatch(loadAlbums(result));
                }
            ).catch((error) => {
                console.log(error);
        });
    }, [dispatch])

    return (
        <Fragment>
            <TitleBar />
            <Routes>
                <Route path="*" element={<AlbumsPage albums={albums}/>}/>
                <Route path='/albums/:albumId' element={<AlbumPage/>}/>
            </Routes>
        </Fragment>
    )
}

export default Main;