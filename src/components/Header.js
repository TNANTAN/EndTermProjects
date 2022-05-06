import "./Header.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="headerContainer">
        <div className="headerLogo" >
          <a className="headerLogoA" href="/" > <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTY0IiBoZWlnaHQ9IjM2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTguODU5IDE4YzAtNS44ODkgMi45NTQtMTAuNiA4LjI4MS0xMC42IDUuMzI4IDAgOC4yODEgNC43MTEgOC4yODEgMTAuNiAwIDUuODktMi45NTQgMTAuNi04LjI4IDEwLjYtNS4zMjggMC04LjI4Mi00LjcxLTguMjgyLTEwLjZabTguMjgxIDcuNjZjMi4wNzIgMCAyLjk1NC0zLjUzNCAyLjk1NC03LjY1MiAwLTQuMTItLjg4OS03LjY1Mi0yLjk1NC03LjY1Mi0yLjA2NSAwLTIuOTU0IDMuNTMzLTIuOTU0IDcuNjUyLS4wMDcgNC4xMTguODgyIDcuNjUyIDIuOTU0IDcuNjUyWk0zLjg0MyA3Ljd2NS41OTZoLjI5NEw3Ljk4IDcuN2g1LjMybC03LjA5OCA2LjQ3NC4yOTQuMjkzTDE5LjUxIDcuNjkzdjQuNzExTDcuOTczIDE2LjUyM3YuMjkybDExLjUzNy0xLjAyOHY0LjQxOUw3Ljk3MyAxOS4xNzh2LjI5M2wxMS41MzcgNC4xMTh2NC43MTJMNi40OTYgMjEuNTI2bC0uMjk0LjI5MyA3LjA5OCA2LjQ3NEg3Ljk4bC0zLjg0My01LjU5NmgtLjI5NHY1LjU5NkgwVjcuNjg2aDMuODQzVjcuN1ptMTkuMjMgMEgyOC4xbC0uMjk0IDEyLjM2M2guMjk0TDM0LjAxNSA3LjdoNC40Mzh2MjAuNjA4aC01LjAyNmwuMjk0LTEyLjM2NGgtLjI5NEwyNy41MSAyOC4zMDloLTQuNDM4VjcuN1ptMjMuOTU1IDBoLTUuMDI2djIwLjYwOGg1LjAyNnYtOS4xM2g0LjEzN3Y5LjEzaDUuMDI2VjcuN2gtNS4wMjZ2Ny45NTJoLTQuMTM3VjcuN1ptNDUuMjUgMGgtMTQuMTl2MjAuNjA4aDUuMDI3VjExLjIzM2g0LjEzN3YxNy4wNzVoNS4wMjZWNy43Wm0yLjY2IDEwLjNjMC01Ljg4OSAyLjk1NC0xMC42IDguMjgyLTEwLjYgNS4zMiAwIDguMjgxIDQuNzExIDguMjgxIDEwLjYgMCA1Ljg5LTIuOTU0IDEwLjYtOC4yODEgMTAuNi01LjMyIDAtOC4yODItNC43MS04LjI4Mi0xMC42Wm04LjI4MiA3LjY2YzIuMDcyIDAgMi45NTQtMy41MzQgMi45NTQtNy42NTIgMC00LjEyLS44ODktNy42NTItMi45NTQtNy42NTItMi4wNzIgMC0yLjk1NCAzLjUzMy0yLjk1NCA3LjY1MiAwIDQuMTE4Ljg4MiA3LjY1MiAyLjk1NCA3LjY1MlpNMTE5LjE4NyA3LjdoLTUuMDI2djIwLjYwOGg0LjQzOGw1LjkxNi0xMi4zNjRoLjI5NGwtLjI5NCAxMi4zNjRoNS4wMjZWNy43aC00LjQzOGwtNS45MTYgMTIuMzYzaC0uMjk0bC4yOTQtMTIuMzYzWm0yMy42NjkgMTMuNTQxIDQuNzMyLjU4NWMtLjg4OSA0LjEyLTIuOTU0IDYuNzc0LTcuMzY0IDYuNzc0LTUuMzIgMC04LjAxNi00LjcxLTguMDE2LTEwLjYgMC01Ljg4OSAyLjY4OS0xMC42IDguMDE2LTEwLjYgNC4zMTcgMCA2LjQ3NSAyLjY0OSA3LjM2NCA2LjQ3NWwtNC43MzIgMS4xNzdjLS4yOTQtMi4wNjMtMS4xNTUtNC43MS0yLjYzMi00LjcxLTEuNzcxIDAtMi42ODkgMy41MzMtMi42ODkgNy42NTEgMCA0LjA5LjkxOCA3LjY1MiAyLjY4OSA3LjY1MiAxLjQ0OS4wMTUgMi4zMy0yLjM0MSAyLjYzMi00LjQwNFptMTEuODMtMTMuNTRoLTQuNzMydjIwLjYwN2g0LjczMnYtOS4xM2guMjk0bDMuNTQ5IDkuMTNIMTY0bC01LjE3Ny0xMC42TDE2My44NDkgNy43aC01LjAyNmwtMy44NDMgOS4xM2gtLjI5NFY3LjdaIiBmaWxsPSIjZmZmIi8+PC9zdmc+Cg==" /></a>
        </div>
     
        <div className="headerButtonOnlineCinema">
          <a href="https://hd.kinopoisk.ru/" className="headerOnlineA">
              <img src="https://kinopoisk-ru.clstorage.net/Q1e64U164/7e7fecP0ca-Y/sSa6i1K46HZG6TPnIoesEBVh5MV1q2Mptq_g6K7-YS64rfb94vEDbAU56BO1ftIXhInJcA25oYDW4gPTUEWbycSna3tj7fyzF_gyIueW-LSFJBHFMN6yqZQY4ortmUP8yt80Pid1Zw1g_P3nsS53xqF4fUEeWnXF0CSWE9UiHjqFw2xpM6gaF8V6pfZRhYpjtzKn5YbtUbsli9LJbJqDT1gPJyxXJEX4AexNhVAMl9ahH8xSDivzZcMHtDEHoN2bt7MtKAF4KRaV-UV287b6gbbyNyQUz2HaldmQ221YI256vWXPhse2S6FNXKdwbCZWoZ7PMxz6sFeT5hfzJgJ9uXQRDhsQiEpVBzlkBKJ2SdAEQxRktT4TSybakbteqvFP2F7FnLQ2dxlTzW53wp7EBLM8X8KMKtElocYlYTQSr-u2sm5YcSoYtNTK5ydiVtjCF5MUtgceAtmnWdDaTJjj3wge141FFkdaoj8v5CJeN-Xgn77DXqvi1dJF9gB2kg3axZM96mE7qAVVW5SlMHT6o5UTdHSk3dE5V3nwqA7KQ376bOUutxZ02hF9XZfDTCbFo2w8M0-YgMbRleXC5nONOMZQvokjCssFxkp3t2C0W8KXM6fEpUyTuIZqAQv9KxNfaiwH7KV1ZSgBbP3FEJ_EJ6L8bLAPuQD30bc2ciYB_cumII1YE7uLFRSJBDWA1PoTRyJUVAQMktqneYAoDvhxjIru1Q2EZ1TIohxft4EedFeBPE6xX-jAhVEn9sHVgB0JdqBvSCLqSLSma5XVQFbqwxZz1pYmriPY1sqDy796YD2Y_RTt1BbnaoFOH2WSnPe0462_4u9LooXTp2WAVnP-u6aj7fkAmliUlTiFVuPmWJO0Q0fUdqzROkdroAu-OiCfiz1WbNeFBVgTT15XgF-W98JPjzCOuUOXYCdUkCZxTgvUAzypgRnLpJaKZifiVhuAlGF15adsIfrVCcA7b0sx7citFi9kZGSp4i1NJOFdx8aQT43xb5vjF2GnZ6HFwa74l-BfS8E7-_b3WSQlA9bJoqcDxZUGj-OrVcsjm6-b0e-qXnTuZxW36VEN7SZxPZTUsE5-kx_K0vdBJvTBtfCMSAXRXEvCmBnk5SsmR3I2qfF0UUWURU-haVe5A5jdCDA_iC-XPCc25RuSro4VMU8lZUGtzIIu-5Enc8W0c5YDvYoFAv4oIMjpVtbYJEVzRwtitwBGF8acEQhF-3JqLevSXIpcdL5HlncoIX3ttwLe1EVS_Z0h7Imj5AB1RBHVAdzZxYD-GyLruqQF6XXlUZS4cVQiBsXU70HapbphuV44QIyYbRRMVMVV6aMcPCWBjBQVgl2ck1zK8wbhluawd2GsazSzHzuiqVgEhxsXRLOFmLMH8JW0dayTGVRognif6ZNMqL0H_BcU13tCXI434r6VZPH8DHEcigLXoceXceWQzAiGM9wbEWmIZIRrBYch5stRRGGH5QTvI0m06kG57_ohHElMVj_3dYZrcs7uNgDvBcaRjnyRD3kzpCFVxrO0kC0KBaCO62HJq7YnO1cUkKeJgqYhVAWm7tBI1whwiXzJ0K857acsFsSlCWPsTabTj6UGoJwOQt65k4VhB5VhBjFuK6fzDxhAyIuUZvpl9GKEiBHnQcaUZ23yuQUKk6vvanMfqs3VzEbm9XjhDc9U0A42R8GujNE9iuDloifncEVSr8j3oK1aIPpJdXe4ZdSztAuj5ePXJIeNEVtGicGaTjrRvnpdtm3Gd3QLQq58RVD_1lXR_v9DfbtR9QM3ddHkEYzJxGEuWEGq6ValKvaEs4X6cqbhlFVXbcK5VvnSGX0IEp2o7OU9pzSXSiAN7BYiDRUGot49Qw670NTiZTYg1AIPCqYwfyjg2FnEpSjEdYPnGDKlsgZX1n_Qq1WIQZmNOCA-au7GTYVmt1kDH89mEz3HFjLeHtL960EHIOVWMmXxvtqXon3a4ciolQb5hFfgFAnzxhAmZ_aukXi2iGK53PgQXnstBnx0p2VoIg6-ltLdJ9VxnD7ADbrjFdDXJsE2oq8Z1KDM6tEri6UEqXeVIIZLwCWzh4c3rLEqxNowGN-ZgK6IjzcPRWS3KMHvLiYRHPW1AO8d8UzbwoVgFMQB5FLeKsWA3BngSHiWxNonV4BVCKGVg0cHtzzhunTbIdicG5OMy031DiVGNNri7X0l0q-FJILOLJHMyKMWoFV1o9cDzrsl0XxZoIgJdWX49lbCJTgQ5iBW1WRNkTlVOWDqHqrgPLlP5F60V7UJ4o0MRuFOtwexjvwxHqgiR1Dlx5DXUe06pYPMSYEom9dW6XRXs7aqUaWxVpfmrsJLhVuzmK0J0ByZLjYfRrdGG0D8TlYRjZdFM64t4yyZwRczFBQjpdCs-bRg_1uzmXvEtLrElyJFq_LG0HbUtM0jiPUKsencukNP-w013fTG9EnADk824U-kJrFe7fCPOqPXkFUUknazz4nVom9YIanqFqZJJFWCVkgiBVN2d0etErs3eZOo7jvBLfs-RPxFVodq0A8vdOKP52ehvGyxTTmRlsMmp3MHEG8bZ9JtC7Epi4bVCCQ14qcaoLcDVdU3HWOLhutQOnypMe6I3yb9hyWXO-CMLIQw7BX3Iv79ALyKwVYDVaQCZFI_CdST7vnCeltUt7r3JRHm2OFVMdQ0Nj_BSEcLcFjf26JM2C4XPfS2BttwHB1GMX_kFdFO3JLNW-Nns8SEMNQhzOkE4Hz7oVoqtweIZgcw1Tog1SPEZ8VPQopn-mLrb6rhX2ivlz9Ex0aogn8upXLf5-bxHo7RPruztsAV9MP1s42rVaIOqVP4SkUFenQlo2eJY3QhNCWVjxNJdZuA-c9a050ZHZQtRsclCTJ_bWYiX4ZEoM4cMm_aoaSiNJXDhYBviJUg3TmjmLt2N3qXJNP1q9DHoKRVBO1DKqXYcZju6PPNmyxXj4TWpzrAnT1lkuzX5JCsbNINuzNnY"/>
            Онлайн-кинотеатр
          </a>
          <a
            href="https://www.kinopoisk.ru/special/smarttv_instruction/?utm_source=kinopoisk&utm_medium=selfpromo_kp&utm_campaign=button_header"
            className="headerSetupA"
          >
              <img src="https://kinopoisk-ru.clstorage.net/Q1e64U164/7e7fecP0ca-Y/sSa6i1K46HZG6TPnIoesEBVh5MV1q2Mptq_g6K7-YS64rfb94vFDfIUpKfLQDsIyAdkcUFi84eXGZ-bmAAV7ycSiW1tT_cwz0ugyR9KWuLSwdGSx1R7juhQZAorcSEItej_UTbd1Ypkw3I32QN4WZyUtvTO-XYGW0GdmU2fATZjFoFwLMzvYpOVq9qSx1ArDxtJkJ-b98QuHKUEL34jxv6osxj3mV5f4IGzvF2I-BmdCnK4jz9shhfNFRIHlA-yqteEdOeMI2fRminYGgqTowgZCpbXEzZC71WtTCh0o0J0YbiXsBaQkWIF9zTcCj4Znw5_PMR6YE9US5oagR6POaRfCLigTa5pmpqsEV0IXuXC3YeUUNb8BCNZqMznv-vE_-8523vRldqoBTx2F8G3UdWEPPqHO-WHnMtQUsldxnKu0om1JsTl7tVUoJ5dihqtjZ2E3phWuk4lVK1Ir3ehh77vcZy_UVTVb8w6OZTCeNSbC7j9zT8qRlLEHdfDX063YlfHfWaCJyjTEW6XFQKTK4ecB9QXWfXN5dQsgaY9IwB3J7sTd1Ga16LF8_YQijxVlMWzPYnyogpdhFLdgNlNP21ZyvBuR6sqn1bi3lYAFq-PH0kUERz_yqGb6g5puGOGNiQwGz7d3R_ig3K9X8W33ZKE8TCJdKLOXQ8cHoEQjvLsmQW0rIKradRbLNXXgpHoz1iHVpQc-kIl1e6BpvXoybUve5-6lRqdb0H7dxnDdh0dhHk1yDOjBF9MHtFPFw35rpqN9GnFpe8f0WtW1YrSqYoejF4elj5L4xnhD2D9rg39YHwe-1PUFeII-D9XyXmQl8O8ewq-KwZVTlPXQNiDMu6UhzDgBeVv0p0pWFtIG-sC3MlXXp31waWdbg9l_KyFsmF2GvUcXN-qDfz3HMT8nBBLfzKNda9Mm06XloDSQfMkF8Jy5gupr9xWpJxdiRenglQBkBmeNsPsFO7MIDjpTLwgdxQ6mdsYb4WxOpjNuFlYS3Q1Cf8tTJ1OW1EOEcI-K5pN--aDaOZbG6yX24pfL0_ewFKeET-F7x9gTyN7aUU37fwQN16WGqMHMTDZTPQR2Ey5vMi76swfSBbQztVI_GNeQfvoDOCuEtOlHhwL3mAClMBXkRA0jebX4ELpNO4FvipzWTfT3dGtir392IYy1h_CcfgMfuWM1MUUGEEZj_RgEMh0YU8iZt0frRYZzVQvD9DOWZ5e9Qmv3ieJKrtnibfl_VC1UZUfYsczdRbB9lZSgzd3BbYugRoG1ZFNEAq7YhjIuGnCba2R2uuWkoOYYINZzRHXk7ZCLtpoxOX1LMn_IH6Y-B0eGWtAdT8bivcVEAMxvcS7bQqdiF8XxJHIcKbXTDpoyecvmhNhERrHG2nME4DXUpz9TemR58PismPJPGAwWfdbFFLuQr12l0Dy0N6FcjTFuKpPnM2YEY9USf5s1EC4p8qmr5fTKh9TSlTgwlfJkpeSPA5rmujGIvyqiruld1Z23lASLAs9cR4GsFlfTLG0inRvgZ6E3xjLV830YpkLeWVKKeUakmBRlk9fr0tUhhAflfAL5BIsBG4zbEd5IrMZ8BrdmmiBszJThDNZmwV6-8127wSfzZBSAdLBcuvXDLXhTqlsHZar0l7DWeJO1sxXGZl7zKwZoI4gveKFNaN4mLCTnFxjB7j6XYJ-XB_PcLRBuyKHk0xYFwxdxv-qmYW8YYWi6Fieq1EaAVcqRF6KlJoa9EWiFOhIpf9oAnfi9h6y1ZmS7Yl0vF5F_hRejr79QX3mxRcOEpGJUUr7ZZ-JteTHImcS1OYRGsaQb0hXh1PZmbvN49SmRGk0ZI09J7tfN9oUl2cHNfGVjvNZkg22_I1_4kKSRx1VSR9F9uzazHdhDeAvEtwt1dtNGW9FGc9Z3dHzhe4S6Eep9K4CNS82n76SlNvrT7gxUU27G9INOLtAPaUNmEadH47RgrYqkse_ZU4laZ2ZLVxUgV5qy5FPmV6U9MpiEmTG7vRvgnIgNlh5ldwfbwp_8lbOOBbfBbjwgXstRliPXtLDncW7JpgDf6bCqamU2uJXVshWpUUfyBpanHWDq1suQuNyLEG8qPOUvpqVHOCMPTFZyXGXGsk0NYT_qwSbgNXRiFwBd2IYQLNjTWVmlRehXdWFWyOF3MoYWN03wWtfaUPtemDIs6P7kT4QmtRshXE-VwSz0RJN8beEsi1LmoYTWUUYQzDjXsGyYEyi6BGc5VjcRZnmS1CNUxUY9c3s1m2J57-uCXurvtN6Vp2YbQS0spiAe13fTrM0zTAoDFhE25VEUM024hQB8ubO6GDd2u1dGgvQ40UUjFkelbgGrV0gQykzbon6LPfUsdVR0uTBvPFbjPpX1830fAX3pU3Xg5VYjlXKOqWYzbosCWgvVJQuX13H1m7IkA1UVxo_C2wZKYbv_SPEcqD43ngTmJjnCblymIQ32dwO9DKLei5PWoeXn8PYR_siko20ZMsvZx9brVXdiFktxpwP25qa-8Rl1aCCJfsqTHJtPFi-UlQUpww4epeFOt2fhPE1g3bnShdJWBoFVsWx61KE-ibKqSbSX6zUXk0TJw_cgVJYWz8Go56uyG-w6UG96LRft54VUGUAN7neCvCfko638kW7pEkWhVXfiF-F-yZUizPrhepvWJTgl5NKGiCHFobWXNG0CaQeL0LieqfI_ixzXnnQUtInQPCx2EU3FFxOMbuC_yyP1MHVFUmQSnhnmsM6ZwQt4ZhepB8XhZEmh17HmZETuwEn2mWMI7-rhjwqc1S4FVMd7sw_PNbFONjdD3i0TX5vyhuEFtnP2U9xIpMKca2NrimTluyVWU9cKANVBpDSEvwNbl3txqB_YI_64n8csBTdmy7NMDGUxL5Rmk0zOQj6J4OTAZLYDxbH_iCYRDJsDmrlW5VgkJsH1ubNU0dSl5u9gi9SKEImt-HN8iVxl7hS1VTlRHA_Vgn40VvE8LiBfGyMns"/>
            Установить на ТВ
          </a>
        <div className="headerSearchContainer">
          <input
            className="headerSerchInput"
            placeholder="Фильмы, Сериалы "
          ></input>
        </div>
      </div>
      <div className="headerSignUp">
        <div className="headerButtonSignUp">
          <a
            href="https://passport.yandex.ru/auth?origin=kinopoisk&retpath=https%3A%2F%2Fsso.passport.yandex.ru%2Fpush%3Fretpath%3Dhttps%253A%252F%252Fwww.kinopoisk.ru%252Fapi%252Fprofile-pending%252F%253Fretpath%253Dhttps%25253A%25252F%25252Fwww.kinopoisk.ru%25252F%26uuid%3D1d6edb0e-91c8-4042-b8a2-7b7a6df666c8"
            className="headerSignUpA"
          >
            Войти
          </a>
        </div>

        <a
          href="https://hd.kinopoisk.ru/?source=kinopoisk_head_button"
          className="headerButtonYandex"
        ></a>
      </div>
      </div>
    </header>
  );
};

export default Header;
