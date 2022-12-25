import classes from "./home_style.module.css"
import Searchbar from "../Component/searchbar"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './home.css'
import Card1 from "./card1";
import Card2 from "./card2";
import Card3 from "./card3";
import EngineeringIcon from '@mui/icons-material/Engineering';
import SchoolIcon from '@mui/icons-material/School';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import BrushIcon from '@mui/icons-material/Brush';
import GavelIcon from '@mui/icons-material/Gavel';
import DomainIcon from '@mui/icons-material/Domain';
import Footer from "../Component/footer";
import HomeIcon from '@mui/icons-material/Home';
import Art from '../../public/IMG_6801.jpg';
import Banner1 from '../../public/12.jpg';
import Banner2 from '../../public/13.jpg';
import Banner3 from '../../public/14.jpg';

export default function Home(){
    
    return(
    <>
        <Searchbar/>
        <div style={{boxShadow:"gba(0,0,0,0.20) 0px 2px 3px;"}}>
            <Fade onChange={function noRefCheck(){}} duration={4000}>
                <div className={classes.each_slide}>
                    <div>
                    <img
                        alt="First image"
                        src={Banner3}
                    />
                    </div>
                </div>
                <div className={classes.each_slide}>
                    <div>
                    <img
                        alt="Second image"
                        src={Banner1}
                    />
                    </div>
                </div>
                <div className={classes.each_slide}>
                    <div>
                    <img
                        alt="Third image"
                        src={Banner2}
                    />
                    </div>
                </div>
            </Fade>
        </div>
        <div className={classes.flex_container}>
            <a className={classes.Engineer} href="/Engineer">
                <EngineeringIcon style={{width:20,height:20}}/>
                Engineer
            </a>
            <a className={classes.Teacher} href="/Education">
                <SchoolIcon style={{width:20,height:20}}/>
                Education
            </a>
            <a className={classes.Politic} href="/Politic">
                <AssuredWorkloadIcon style={{width:20,height:20}}/>
                Politic
            </a>
            <a className={classes.Art} href="Art">
                <BrushIcon style={{width:20,height:20}}/>
                Art
            </a>
            <a className={classes.Law} href="/Law">
                <GavelIcon style={{width:20,height:20}}/>
                Law
            </a>
            <a className={classes.Dom} href="/Dom">
                <DomainIcon style={{width:20,height:20}}/>
                Dom
            </a>
        </div>
        <div style={{display:"flex", justifyContent:"center",textAlign:"center"}}>
            <Carousel showArrows={true} width="50%" autoPlay>
                <div>
                    <img src={Art} />
                </div>
                <div>
                    <img src={Art} />
                </div>
                <div>
                    <img src={Art} />
                </div>
                <div>
                    <img src={Art} />
                </div>
                <div>
                    <img src={Art} />
                </div>
                <div>
                    <img src={Art} />
                </div>
            </Carousel>
        </div>
        <h1 className={classes.top}>Top 3 visited restaurant</h1>
        <div className={classes.card}>
            <Card1/>
            <Card2/>
            <Card3/>
        </div>

        <Footer/>
        

        
    </>
)}

