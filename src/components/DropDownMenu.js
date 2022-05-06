import "./DropDownMenu.css";
import { Link } from "react-router-dom";
function DropDownMenu() {
  return (
    <div class="dropdown">
      <Link to="/">
        <button class="dropbtn">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
            // xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            class="HeaderNavigationMenu__control-icon--36LlQ"
            data-tid="b8a9bef6"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17H4Z"
              fill="white"
              fill-opacity="0.6"
            ></path>
          </svg>
        </button>
      </Link>

      <div class="dropdown-content">
        <div className="main">
          <a href="/" className="mainSA1">
            Главная
          </a>
        </div>

        <div className="onlineS">
          <a href="https://hd.kinopoisk.ru/" className="mainSA1">
            Онлайн-кинотеатр
          </a>
        </div>

        <a href="#" className="mainSA1">
          Фильмы
        </a>

        <a href="#" className="mainSA1">
          Сериалы
        </a>

        <div className="ticketS">
          <a href="#" className="mainSA1">
            Билеты в кино
          </a>
        </div>

        <div className="mediaS">
          <a href="#" className="mainSA1">
            Медиа
          </a>
        </div>
      </div>
    </div>
  );
}
export default DropDownMenu;
