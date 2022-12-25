import { EventRepeat, LineAxisOutlined } from "@mui/icons-material";
import { useRef } from "react";
import classes from "./review_style.module.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Rating, TextField } from "@mui/material";
import React from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function review(){
    const nameRef = useRef<HTMLInputElement>(null);
    const ratingRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const [value, setValue] = React.useState<number | null>(2);


    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(nameRef.current)
        const res = await axios.post("http://localhost:42069/rating",
        {
            userwhocomment: nameRef.current?.value,
            description: descriptionRef.current?.value,
            rating: value,
            id: "6356b15c0d3aee13d788b615"
        });
        navigate( "/Engineer/item1");
        
    }

    function refreshPage() {
        window.location.reload();
      }

    return (
        <div style={{backgroundColor: "#fcd5ce",padding:"150px"}}>
            <form className={classes.container} onSubmit={handleSubmit}>
                <a style={{fontSize:"20px"}} href="/Engineer/item1"><ArrowBackIcon style={{fontSize:"18px"}}/>Back</a>
                <TextField inputRef={nameRef} style={{marginTop:"20px"}}
                required
                label="Name"
                
                />
                <Rating style={{marginTop:"30px"}}
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                />
                <TextField inputRef={descriptionRef} style={{marginTop:"30px"}}
                required
                multiline
                rows={5}
                id="outlined-required"
                label="Description"
                
                />

                <Stack direction="row" spacing={2} style={{margin:"30px 100px"}}>
                    <Button onClick={refreshPage} variant="outlined" startIcon={<DeleteIcon />} style={{color:"#FEC5BB",borderColor:"#FFD7BA"}}>
                        Delete
                    </Button>
                    <Button variant="contained" endIcon={<SendIcon />} type="submit" style={{backgroundColor:"#FEC5BB",color:"gray"}}>
                        Submit
                    </Button>
                </Stack>
                
            </form>
        </div>
        
    )}