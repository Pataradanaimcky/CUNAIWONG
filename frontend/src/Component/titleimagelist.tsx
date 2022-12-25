
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarBelowImageList() {
  return (
    <ImageList style={{borderRadius:"10px",borderColor:"black",margin:"20px",boxShadow:"#000000 0px 0px 3px"}} sx={{ width: "full", height: 450 }} cols={3} gap={6}>
      {itemData.map((item) => (
        <ImageListItem style={{margin:"15px"}} key={item.title}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar style={{backgroundColor:"whitesmoke",boxShadow: "rgba(0, 0, 0, 0.15) 0px 1px 1px"}}
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://f.ptcdn.info/245/041/000/o4ltd7e5hpKoUA34xsP-o.jpg',
    title: 'เหนียวไก่',
    author: '@artinmyvein',
  },
  {
    img: 'https://img.bester-global.com/report_images/large/144141.jpg',
    title: 'เหนียวไก่ร้อนๆ',
    author: '@NongPanda',
  },
  {
    img: 'https://img.wongnai.com/p/1920x0/2021/12/01/461b8dcb4db84a169ce9293346930cea.jpg',
    title: 'เหนียวไก่ที่ปล่อยเอาไว้จนเย็นชืด',
    author: '@Barbikorn',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];
