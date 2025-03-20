import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

/* Страница главная */
export const Home = () => {
  return (
    <>
      <div className="banner-bg mt-5">
        <div className="container py-5">
          <div className="row mb-5 py-5 justify-content-around">
            <div className="col-md-6 py-4">
              <div className="text-start">
                <h1 className="fw-bold py-1 display-5">
                  Cloud Barry
                </h1>
                <h2 className="fw-bold py-1 display-5">
                  Осадки в виде файлов
                </h2>
                <p className="py-1 fs-5">
                  Загрузить в облако свои фото, видео и контакты
                  <br />
                  стало ещё проще
                </p>
              </div>
              <div className="d-flex justify-content-start py-4">
                <Link className="w-100 " to="/login">
                  <button type="button" className="btn btn-primary btn-lg w-50" to="/login">
                    Загрузить файлы
                  </button>
                </Link>
              </div>
              <div className="row mb-5 py-5">
                <div className="col">
                  <Link to="https://www.apple.com/app-store/">
                    <img
                      src="img/download-appstore.svg?v=1"
                      alt="AppStore"
                      className="img-fluid rounded mb-2"
                    />
                  </Link>
                </div>

                <div className="col">
                  <Link to="https://play.google.com/store/games?hl=ru&pli=1">
                    <img
                      src="img/download-google-play.svg?v=1"
                      alt="Google Play"
                      className="img-fluid rounded mb-2"
                    />
                  </Link>
                </div>
                <div className="col">
                  <Link to="https://consumer.huawei.com/ru/mobileservices/appgallery/">
                    <img
                      src="img/download-appgallery.svg?v=1"
                      alt="AppGallery"
                      className="img-fluid rounded mb-2"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <img
                src="img/hand@2x.png?v=1"
                alt="hand"
                className="img-fluid rounded mb-2"
              />
            </div>
          </div>
        </div>
        <div className="container py-5">
          <h3 className="fw-bold">Что умеет Cloud Barry?</h3>
        </div>
        <div className="row align-items-center justify-content-center mb-1 py-5">
          <div className="col-md-6">
            <h4 className="mb-2 fw-bold">Бережно хранит все ваши книги</h4>
            <p className="small mb-1">
              Все книги в одном месте и можно выгрузить в телефон одним касанием!
            </p>
            <h4 className="mb-2 fw-bold">Восстановление данных</h4>
            <p className="small mb-1">Легко восстанавливайте удаленные файлы</p>
            <h4 className="mb-2 fw-bold">Экономия пространства</h4>
            <p className="small mb-1">
              Переносите фото в облако и освобождайте память устройства одним касание</p>
          </div>
        </div>
      </div>
    </>
  );
};
