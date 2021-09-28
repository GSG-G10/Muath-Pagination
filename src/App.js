import {useState,useEffect} from 'react'
import {Card} from 'antd';
import './App.css';

const { Meta } = Card;
function App() {
  const [data,setData] = useState([])
  const [numberOfPage,setNumberOfPage] = useState(0)

  useEffect(() => {
    
  fetch(`https://api.unsplash.com/search/collections?page=${numberOfPage}&limit=50&query=cat&client_id=kQ_rA8Dd9Tb-JZ80Nx6RyFBtaoIFyaP5kdLn5EmGkVM`)
  .then((res) => res.json())
  .then((data) => data.results)
  .then((result) => {
    console.log(result);
    result.map((e) => {
      <Card 
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={result.preview_photos[0].urls} />}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
      
        
      </Card>
// preview_photos
    })
  })
    return () => {
      console.log('hi');
    }
  }, [numberOfPage]);
  return (
    <div className="App">
      
      <Card 
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
      
        
      </Card>
    </div>
  );
}

export default App;
