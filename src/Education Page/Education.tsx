import classes from "./education_style.module.css"
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

export default function Education(){
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
                <h1 className={classes.title}>Education</h1>
            </div>
        </header>

        <body>
            <div className={classes.container}>
                <a className={classes.item} href="/Engineer/item1">
                    <img src="https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Crispy-Fried-Chicken_EXPS_TOHJJ22_6445_DR%20_02_03_11b.jpg" />
                    <div>Fried Chicken</div>
                    <Rating style={{marginLeft:"20px"}} name="half-rating-read" value={first_con.rating} precision={0.5} readOnly />
                </a>
                <div className={classes.item}>
                    <img src='https://img.wongnai.com/p/1920x0/2017/09/16/bee9b3e752c54e04acfd4799ccc77be2.jpg'/>
                    <div>Parabola</div>
                    <Rating style={{marginLeft:"20px"}} name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                </div>
                <div className={classes.item}>
                    <img src='https://wfg32p.s3.amazonaws.com/media/dishes/pad_krapow_moo_krob_kai_dao_4796-reg.jpg'/>
                    <div>Kra pao moo krob</div>
                    <Rating style={{marginLeft:"20px"}} name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                </div>
                <div className={classes.item}>
                    <img src='https://images.immediate.co.uk/production/volatile/sites/30/2020/12/Noodles-with-chilli-oil-eggs-6ec34e9.jpg?resize=768,574'/>
                    <div>Noodle</div>
                    <Rating style={{marginLeft:"20px"}} name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                </div>
                <div className={classes.item}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg'/>
                    <div>Waffle</div>
                    <Rating style={{marginLeft:"20px"}} name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                </div>
                <div className={classes.item}>
                    <img src='https://www.uncledeng.com/wp-content/uploads/2017/07/28-700x460.jpg'/>
                    <div>Steak</div>
                    <Rating style={{marginLeft:"20px"}} name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
                </div>
            </div>
        </body>
        <Footer/>
       
    </>
)}