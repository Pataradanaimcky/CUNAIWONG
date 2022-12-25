import classes from "./searchbar.module.css"
import Data from "./mock-data"
import {useState} from "react"
import Mcky from '../../public/Mcky.png'

export default function Searchbar(){
    const [query, setQuery] = useState("")
    return( 
    <>
        <nav className = {classes.navbar}>
            <div className = {classes.container}>
                <div>
                    
                   <a className = {classes.site_title} href="/"><img style={{width:"50px",height:"50px",marginRight:"20px",alignContent:"center",verticalAlign:"sub"}} src={Mcky}/>CU naiwong</a> 
                </div>
                
                <div className={classes.app}>
                    <input className={classes.in}  placeholder="Search" onChange={event => setQuery(event.target.value)}/>
                        {query.length != 0 && (
                        <div className={classes.dataResult}>
                            {
                            Data.filter((post) => {
                                if (query == ""){
                                    return post;
                                } else if (post.first_name.toLowerCase().includes(query.toLowerCase())) {
                                    return post;
                                }
                            }).map((post) => {
                                return(
                                <div key={post.id}>
                                    <p>{post.first_name}</p>
                                </div>
                                );
                            })}
                        </div>
                        )}
            
                </div>
                <ul className={classes.nav}>
                    <li>
                        <a style = {{color: "white"}} href="/login">Sign in</a>
                    </li>
                    <li>
                        <a style = {{color: "#FEC5BB",backgroundColor:"white",padding:"10px 15px", borderRadius:"6px"}} href="/register">Sign up</a>
                    </li>
                </ul>
            </div> 
        </nav>
        
    </>
    
    
)}
