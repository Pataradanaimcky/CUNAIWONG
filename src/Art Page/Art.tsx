import classes from "./art_style.module.css"
import Searchbar from "../Component/searchbar"
import Footer from "../Component/footer"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { useState, useEffect } from "react";

interface Content {
    name: string;
    price: string;
    category: string;
    nresponse: number;
    rating: number
  }

export default function Art(){
    const [contents,setContents] = useState<Content[]>([]);
    const [loading,setLoading] = useState(true)

    async function fetchContents() {
        const res = await axios.get("http://localhost:42069/FOOD");
        setContents(res.data);
        setLoading(false);
        
    }
    
    useEffect(() => {
        fetchContents()
    }, []);
    const reverse_array = [...contents].reverse()
    const first_con = reverse_array[0]
    if (loading) return <h1>Loading...</h1>;
    return( 
        
    <>
        <Searchbar/>
        <header> 
            <div className={classes.title_container}>
                <h1 className={classes.title}>Art</h1>
            </div>
        </header>

        <body>
            <div className={classes.container}>
                <a className={classes.item} href="/Art/item1">
                    <img src="https://thaicaliente.com/wp-content/uploads/2022/06/Moo-Kratiem-Feature.jpg" />
                    <div>Moo kra tiem</div>
                    <Rating style={{marginLeft:"20px"}} name="half-rating-read" value={first_con.rating} precision={0.5} readOnly />
                </a>
                <div className={classes.item}>
                    <img src='https://www.seriouseats.com/thmb/X1BG71ogUD5RNR9Y7Eit-4TGaDc=/1125x1125/smart/filters:no_upscale()/khao-soi-gai-northern-thai-coconut-curry-noodle-soup-recipe-laksa-hero-whitebowl-58fb7baced8f4949a995dc61d2dc3e3b.JPG'/>
                    <div>Kao soi</div>
                    <Rating style={{marginLeft:"20px"}} name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                </div>
                <div className={classes.item}>
                    <img src='https://f.ptcdn.info/245/041/000/o4ltd7e5hpKoUA34xsP-o.jpg'/>
                    <div>Chicken with sticky rice</div>
                    <Rating style={{marginLeft:"20px"}} name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                </div>
                <div className={classes.item}>
                    <img src='https://i0.wp.com/goodlifeupdate.com/app/uploads/2021/04/image-131-edited.png'/>
                    <div>Noodle</div>
                    <Rating style={{marginLeft:"20px"}} name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                </div>
                <div className={classes.item}>
                    <img src='https://www.thespruceeats.com/thmb/GTLnZh7amJRKOo1XvWRTlxqtP0Q=/2667x2000/smart/filters:no_upscale()/thai-khao-man-gai-4767706-hero-01-08fec21125fe4d3bbd00d53ab95de058.jpg'/>
                    <div>Kao man gai</div>
                    <Rating style={{marginLeft:"20px"}} name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                </div>
                <div className={classes.item}>
                    <img src='https://www.alldayieat.com/wp-content/uploads/2017/10/Pad-Kra-Pao-Moo-Stir-Fried-Pork-with-Thai-Holy-Basil-4.jpg'/>
                    <div>Kra pao moo</div>
                    <Rating style={{marginLeft:"20px"}} name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
                </div>
            </div>
        </body>
        <Footer/>
       
    </>
)}