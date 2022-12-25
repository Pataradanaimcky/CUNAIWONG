import 'react-slideshow-image/dist/styles.css'
import Searchbar from "../Component/searchbar"
import TitlebarBelowImageList from '../Component/titleimagelist'
import classes from "./item1.module.css"
import RateReviewIcon from '@mui/icons-material/RateReview';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Profilepic from '../Component/profilepic';
import BasicRating from '../Component/ratingstar';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Rating } from '@mui/material';

interface Content {
    userwhocomment: string;
    description: string;
    rating: number;
    _id: string;

}


export default function Item1() {
    const [contents,setContents] = useState<Content[]>([]);
    const [loading,setLoading] = useState(true)

    async function fetchContents() {
        const res = await axios.get("http://localhost:42069/review");
        setContents(res.data);
        setLoading(false);
        
    }
    
    useEffect(() => {
        fetchContents()
    }, []);
    const reverse_array = [...contents].reverse()

    if (loading) return <h1>Loading...</h1>;

    return (
        <>
            <Searchbar/>
            <TitlebarBelowImageList/>
            <div className={classes.container}>
                <h2 style={{marginLeft:15}}>เหนียวไก่</h2>
                    <div className={classes.flex_container}>
                        <a className={classes.button} href="/Engineer/item1/review">
                            <RateReviewIcon style={{marginLeft:10,width:25,height:20}}/>
                            Review
                        </a>
                        <a className={classes.button} href="">
                            <AddPhotoAlternateIcon style={{marginLeft:10,width:25,height:20}}/>
                            Add pic
                        </a>
                        <a className={classes.button} href="">
                            <LocationOnIcon style={{marginLeft:10,width:25,height:20}}/>
                            Location
                        </a>
                    </div>
            </div>
            {reverse_array.map((content) => (
                <div key={content._id}>
                    <div className={classes.container}> 
                        <div style={{alignItems:"center", display:"flex"}}>
                            <Profilepic/>
                            <a href="" style={{color:"black"}}>{content.userwhocomment}</a>
                        </div>
                        <div style={{marginLeft:15}}>
                            <Rating name="read-only" value={content.rating} readOnly />
                        </div>
                        <div>
                            <p>{content.description}</p>
                        </div>  

                    </div>
                </div>
            ))}
        </>
    )
}