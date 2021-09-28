import { useState, useEffect } from "react";

import { Image, Pagination, Input, Space, Empty } from "antd";
import "antd/dist/antd.css";

import "./App.css";

const { Search } = Input;
function App() {
  const [data, setData] = useState([]);
  const [numberOfPage, setNumberOfPage] = useState(0);
  const [search, setSearch] = useState("");
  const [thereIsData, setThereIsData] = useState(false);

  useEffect(() => {
    setThereIsData(false);
    fetch(
      `https://api.unsplash.com/search/collections?page=${numberOfPage}&limit=100&query=${search}&client_id=kQ_rA8Dd9Tb-JZ80Nx6RyFBtaoIFyaP5kdLn5EmGkVM`
    )
      .then((res) => res.json())
      .then((data) => data.results)
      .then((result) =>
        result.map((e) => {
          setThereIsData(true);
          return { url: e.cover_photo.urls.regular, title: "title" };
        })
      )
      .then((data) => setData(data));
    return () => {
      console.log("hi");
    };
  }, [numberOfPage, search]);

  return (
    <>
      <header className='header'>
        <Space direction="vertical" style={{ width: "30%" }}>
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={(v) => setSearch(v)}
          />
        </Space>
      </header>
      <main className='main'>
        {thereIsData ? (
          data.map((e) => <Image width={"25%"} src={e.url} />)
        ) : (
          <Empty
            description="Search to find picturs"
            image="https://image.freepik.com/free-psd/3d-female-character-looking-online-with-help-search-bar_23-2148938909.jpg"
          />
        )}
      </main>

      <footer className='footer'>
        <Pagination
          total={100}
          showTotal={(total) => `Total ${total} items`}
          defaultPageSize={20}
          defaultCurrent={1}
          onChange={(e) => setNumberOfPage(e)}
        />
      </footer>
    </>
  );
}

export default App;
