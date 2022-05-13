import ItemList from "./ItemList";
import { useState } from "react";

export default function ItemListContainer() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "andy",
      price: 1000,
      pictureUrl:
        "https://aprendelibvrefiles.blob.core.windows.net/aprendelibvre-container/course/creacion_de_sitios_web/image/imgscursoweb-01_xl.png",
    },
    {
      id: 2,
      title: "abuztinita",
      price: 5,
      pictureUrl:
        "https://www.aboutespanol.com/thmb/umAoYxm96W9BwWKmxOtWLrGe_Kw=/2124x1195/smart/filters:no_upscale()/URL_hires-56a01cfa3df78cafdaa02d91.jpg",
    },
    {
      id: 3,
      title: "lorenita",
      price: 500,
      pictureUrl:
        "https://c8.alamy.com/compes/c6bdwn/homepage-concepto-en-una-direccion-url-del-navegador-de-internet-c6bdwn.jpg",
    },
  ]);

  return (
    <ul style={{ alignItems: "center" }}>
      <ItemList items={items} />
      {/* <ItemList greeting={"componente 1"} />
      <ItemList greeting={"componente 2"} />
      <ItemList greeting={"componente 3"} /> */}
    </ul>
  );
}
