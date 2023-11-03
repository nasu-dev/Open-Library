import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import Container from './Container';

const config = {
  url: "https://openlibrary.org/api/books?jscmd=data&format=json&bibkeys=",
  searchBtnId: "isbn-search-btn",
  searchInputId: "isbn-search",
};

function App() {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    statement: "",
    date: "",
    page: "",
    categories: "",
    img: "",
    isbn: "",
  });
  const [isbnInput, setIsbnInput] = useState("9784088725710");
  const [showContainer, setShowContainer] = useState(false);

  const fetchBookData = async () => {
    try {
      const response = await fetch(`${config.url}ISBN:${isbnInput}`);
      const json = await response.json();

      if (json[`ISBN:${isbnInput}`]) {
        const bookInfo = json[`ISBN:${isbnInput}`];
        console.log(bookInfo)
        const { publish_date, number_of_pages, by_statement, title, authors, cover, subjects,  } = bookInfo;
        console.log(authors)

        setBookData({
          date: publish_date || "",
          page: number_of_pages || "",
          statement: by_statement || "",
          title: title || "",
          author: authors?.[0]?.name || "",
          img: cover?.medium || "",
          categories: subjects?.map((subject) => subject.name).join(", ") || "",
          isbn: isbnInput || "",
        });

        setShowContainer(true); // データが見つかったらコンテナを表示
      } else {
        alert("データが見つかりませんでした");
        setShowContainer(false); // データが見つからなかったらコンテナを非表示
      }
    } catch (error) {
      alert("データの取得中にエラーが発生しました:", error);
      setShowContainer(false); // エラーが発生した場合もコンテナを非表示
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (isbnInput) {
      fetchBookData();
    }
  };

  return (
    <div className="">
      <Header
        isbnInput={isbnInput}
        onSearchChange={(e) => setIsbnInput(e.target.value)}
        onSearchSubmit={handleSearch}
      />
      <Container bookData={bookData} showContainer={showContainer} />
    </div>
  );
}

export default App;
