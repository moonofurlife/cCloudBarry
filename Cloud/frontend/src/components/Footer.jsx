import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4">
            <h5 className="fw-bold">О нас</h5>
            <p className="text-start">
            Cloud Barry — это инновационный облачный сервис, который позволяет удобно хранить фотографии, видео, документы и контакты. 
            Он автоматически загружает файлы и обеспечивает их надежное хранение на защищённых серверах.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold">Контакты</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="mailto:support@cloudbarry.com"
                  className="text-white text-decoration-none"
                >
                  support@cloudbarry.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+79999999999"
                  className="text-white text-decoration-none"
                >
                  +7 (999) 999-99-99
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold">Соцсети</h5>
            <div className="d-flex justify-content-center">
              <a
                href="https://facebook.com"
                className="text-white mx-2 text-decoration-none"
              >
                <i className="bi bi-facebook"></i> Facebook
              </a>
              <a
                href="https://twitter.com"
                className="text-white mx-2 text-decoration-none"
              >
                <i className="bi bi-twitter"></i> Twitter
              </a>
              <a
                href="https://instagram.com"
                className="text-white mx-2 text-decoration-none"
              >
                <i className="bi bi-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center text-start mt-4">
          <p className="mb-0">
            &copy; 2025 Cloud Barry - предвидятся осадки. Проект не предназначен для коммерческого
            применения
            <br />
            и является проектной работой для закрепления теоретических знаний
            <br />
            полученных в процессе обучения.
          </p>
        </div>
      </div>
    </footer>
  );
};
