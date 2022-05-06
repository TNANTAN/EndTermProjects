import "./Films_header.css";
import { Link } from "react-router-dom";

const Films_header = () => {
  return (

    <div className="Films_header_main_conteiner">
      <div className="Films_header_main_spisok">
        <div className="Films_header_main_spisok_conteiner">
          <h1 className="Films_header_main_spisok_conteiner_h1">Списки</h1>
          <ul className="Films_header_main_spisok_conteiner_ul">
            <li className="Films_header_main_spisok_conteiner_li">Ожидаемые</li>
            <li className="Films_header_main_spisok_conteiner_li">
              Рекомендации
            </li>
            <li className="Films_header_main_spisok_conteiner_li">Календарь</li>
            <li className="Films_header_main_spisok_conteiner_li">Награды</li>
            <li className="Films_header_main_spisok_conteiner_li">Бокс-офис</li>
            <li className="Films_header_main_spisok_conteiner_li">Навигатор</li>
          </ul>
        </div>
      </div>

      <div className="Films_header_main_categories">
        <div className="Films_header_main_categories_conteiner">
          <Link
            to="Films_main"
            className="Films_header_main_categories_conteiner_spisok"
          >
            Фильмы
          </Link>
          <div className="Films_header_main_categories_conteiner_spisok">
            Онлайн-кинотеатр
          </div>
          <Link
            to="Genres"
            className="Films_header_main_categories_conteiner_spisok"
          >
            Жанры
          </Link>
          <div className="Films_header_main_categories_conteiner_spisok">
            Страны
          </div>
          <div className="Films_header_main_categories_conteiner_spisok">
            Годы
          </div>
          <div className="Films_header_main_categories_conteiner_spisok">
            Критика
          </div>
          <Link to="../Carousel">
            <div className="Films_header_main_categories_conteiner_spisok">
              Сериалы
            </div>
          </Link>
          <div className="Films_header_main_categories_conteiner_spisok">
            Сборы
          </div>
          <div className="Films_header_main_categories_conteiner_spisok">
            Премии
          </div>
          <div className="Films_header_main_categories_conteiner_spisok">
            Направления
          </div>
        </div>
      </div>
    </div>
  );
};

export default Films_header;
