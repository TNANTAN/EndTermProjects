import "./Body.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="body">
      <div className="sideBar">
        <div className="sideBarContainer">
          <div className="mainS">
            <a className="mainSA">Главная</a>
          </div>

          <div className="onlineS">
            <a href="https://hd.kinopoisk.ru/" className="mainSA">
              Онлайн-кинотеатр
            </a>
          </div>

          <Link to="./Films" className="filmS">
            <a className="mainSA">Фильмы{"(Рабочая)"}</a>
          </Link>

          <Link to="" className="serialS">
            <a className="mainSA">Сериалы</a>
          </Link>

          <div className="ticketS">
            <a className="mainSA">Билеты в кино</a>
          </div>

          <div className="mediaS">
            <a className="mainSA">Медиа</a>
          </div>
        </div>
      </div>

      <div className="bodyContainer">
        <div className="bodyMainContent">
          <a className="mainContentGif"></a>
          <div className="mainContentContainer">
            <div className="mainContentDescriptionBlock">
              <a className="mainContentFilmName"></a>
              <a className="mainContentDescription">
                <label className="mainContentDescriptionText">
                  Произведение по одноименной ранобэ, фильм производства студии
                  «Kyoto Animation».{" "}
                </label>
                <label className="mainContentActorListText">
                  В главных ролях:
                </label>
                <label className="mainContentActorsNamesText">
                  Харухи Судзумия, Джон Смит, Ицки Коидзуми, Микуру Асахина, Юки
                  Нагато
                </label>
                <label className="mainContentDirectorText">Режисcеры:</label>
                <label className="mainContentDirectorNameText">
                  {" "}
                  Ясухиро Такэмото, Тацуя Исихара
                </label>
              </a>
              <div className="mainContentLinkText">Смотреть по ссылкам</div>
              <div className="mainContentLickContainer">
                <a
                  href="https://www.kinopoisk.ru/film/492569/"
                  className="mainContentLinkButtonKinopoinsk"
                >
                  Смотреть на Kinopoisk
                </a>
                <a
                  href="https://jut.su/suzumiya-haruhi/film-1.html"
                  className="mainContentLinkButtonJitsu"
                >
                  Смотреть на Jutsu
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bodyContentList">
          <div className="bodyContentListName">
            <a className="bodyContentListA">Билеты в кино</a>

            <div className="listContainer">
              <a
                href="https://www.kinopoisk.ru/film/492569/"
                className="cinemaContent1"
              >
                <div className="cinemaArt1"></div>
                <a className="cinemaName1">Исчезновение Харухи Судзумии</a>
                <a className="cinemaYear1">2010</a>
              </a>
              <a
                href="https://www.kinopoisk.ru/film/370/"
                className="cinemaContent2"
              >
                <div className="cinemaArt2"></div>
                <a className="cinemaName1">Унесённые призраками</a>
                <a className="cinemaYear1">2001</a>
              </a>
              <a
                href="https://www.kinopoisk.ru/film/718442/"
                className="cinemaContent3"
              >
                <div className="cinemaArt3"></div>
                <a className="cinemaName1">
                  Врата Штейна: Зона загрузки дежавю
                </a>
                <a className="cinemaYear1">2013</a>
              </a>
              <a
                href="https://www.kinopoisk.ru/series/957840/"
                className="cinemaContent4"
              >
                <div className="cinemaArt4"></div>
                <a className="cinemaName1">Город, в котором меня нет</a>
                <a className="cinemaYear1">2016</a>
              </a>
              <a
                href="https://www.kinopoisk.ru/series/406148/"
                className="cinemaContent5"
              >
                <div className="cinemaArt5"></div>
                <a className="cinemaName1">Тетрадь смерти</a>
                <a className="cinemaYear1">2006</a>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
