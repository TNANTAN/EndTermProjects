import "./Films.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Films_header from "./Films_components/Films_header";
import Films_main from "./Films_components/Films_main";
import Films_footer from "./Films_components/Films_footer";
import Genres from "./Films_components/Genres";
import Comedy from "./Films_components/Comedy";
import DropDownMenu from "../DropDownMenu";
const Films = () => {
  return (
    <div className="Films">
      <DropDownMenu />
      <div className="Films_main">
        <Films_header />
        <Routes>
          <Route exact path="/" element={<Films_main />}></Route>
          <Route exact path="Films_main/*" element={<Films_main />}></Route>
          <Route exact path="Genres/*" element={<Genres />}></Route>
        </Routes>
        <Films_footer />
      </div>
    </div>
  );
};

export default Films;
