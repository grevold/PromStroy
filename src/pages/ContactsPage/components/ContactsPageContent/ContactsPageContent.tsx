import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import s from "./ContactsPageContent.module.css";

export function ContactsPageContent() {
  return (
    <YMaps>
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.map_container}>
            <div className={s.text_container}>
              <h1 className={s.header}>Контакты</h1>
              <h2 className={s.sub_header}>Наше местоположение:</h2>
              <div className={s.text_addresses}>
                <div className={s.row_addresses}>
                  <span className={s.address_head}>Офис:</span>
                  <span className={s.address}>
                    г.Челябинск, ул.Курчатова, д.23-Б, оф.901
                  </span>
                </div>
                <div className={s.row_addresses}>
                  <span className={s.address_head}>Склад:</span>
                  <span className={s.address}>
                    Станция "Челябинск-Грузовой" ЮУЖД, код станции: 800101, код
                    предприятия: 1610
                  </span>
                </div>
                <div className={s.row_addresses}>
                  <span className={s.address_head}>Дла автомобилей:</span>
                  <span className={s.address}>
                    проходная напротив Троицкий тр. 21-Б, (поворот на дорогу к
                    станции после Троицкого тр. 21 (ТК "Челси"), если ехать от
                    центра.)
                  </span>
                </div>
              </div>
            </div>
            <Map
              defaultState={{ center: [55.150859, 61.385872], zoom: 10 }}
              className={s.map}
            >
              <div className={s.placemark_container}>
                <Placemark
                  geometry={[55.150859, 61.385872]}
                  properties={{ iconCaption: "Офис" }}
                />
                <Placemark
                  geometry={[55.09348, 61.381579]}
                  properties={{ iconCaption: "Склад" }}
                />
              </div>
            </Map>
          </div>
        </div>
      </div>
    </YMaps>
  );
}
