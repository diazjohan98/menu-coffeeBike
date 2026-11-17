export const MENU_CATEGORIES = [
  {
    id: "espresso-leche",
    title: "Café Espresso",
    subtitle: "Con Leche",
    shortDesc: "Capuccinos, lattes y más",
    items: [
      {
        name: "Macchiato",
        price: "$6.000",
        desc: "Espresso cortado con un toque de espuma de leche.",
      },
      {
        name: "Capuccino",
        price: "$9.000",
        desc: "Balance clásico de espresso, leche vaporizada y espuma.",
      },
      {
        name: "Latte",
        price: "$10.000",
        desc: "Suave, cremoso y con leche microtexturizada.",
      },
      {
        name: "Mocaccino",
        price: "$11.000",
        desc: "Fusión perfecta de espresso, chocolate y leche.",
      },
      {
        name: "Capuccino Doble",
        price: "$13.000",
        desc: "Doble carga de espresso para mayor intensidad.",
      },
      {
        name: "Capuccino Grande",
        price: "$15.000",
        desc: "Nuestro clásico capuccino en presentación grande.",
      },
      {
        name: "Capuccino + Licor",
        price: "$15.000",
        desc: "Capuccino de especialidad con un toque de licor.",
      },
      {
        name: "Capuccino con Leche de Almendras",
        price: "$12.000",
        desc: "Preparado con bebida vegetal de almendras.",
      },
    ],
  },
  {
    id: "espresso-sin-leche",
    title: "Café Espresso",
    subtitle: "Sin Leche",
    shortDesc: "Extracción pura y americanos",
    items: [
      {
        name: "Espresso Sencillo",
        price: "$5.000",
        desc: "Extracción pura y concentrada de café de especialidad.",
      },
      {
        name: "Espresso Doble",
        price: "$8.000",
        desc: "Doble shot con cuerpo intenso y crema dorada.",
      },
      {
        name: "Americano Sencillo",
        price: "$6.000",
        desc: "Espresso suavizado con agua caliente purificada.",
      },
      {
        name: "Americano Doble",
        price: "$9.000",
        desc: "Doble carga de espresso en agua caliente.",
      },
    ],
  },
  {
    id: "filtrados",
    title: "Métodos de Filtrado",
    subtitle: "Extracción Manual",
    shortDesc: "Chemex, V60, Syphon, Prensa",
    items: [
      {
        name: "Prensa Francesa (x1)",
        price: "$8.000",
        desc: "Inmersión total, cuerpo robusto y aceites naturales.",
      },
      {
        name: "Melitta (x1)",
        price: "$8.000",
        desc: "Filtrado tradicional limpio y balanceado.",
      },
      {
        name: "V60 (x2)",
        price: "$18.000",
        desc: "Filtrado cónico que resalta notas florales y frutales.",
      },
      {
        name: "Syphon (x3)",
        price: "$27.000",
        desc: "Extracción al vacío de alta pureza y aroma.",
      },
      {
        name: "Chemex (x3)",
        price: "$27.000",
        desc: "Taza cristalina, sedosa y sin sedimentos.",
      },
    ],
  },
  {
    id: "otras-bebidas",
    title: "Otras Bebidas",
    subtitle: "Calientes e Infusiones",
    shortDesc: "Té Chai, aromáticas y cacao",
    items: [
      {
        name: "Aromática de Fruta",
        price: "$8.000",
        desc: "Infusión natural con trozos de fruta fresca.",
      },
      {
        name: "Infusiones",
        price: "$4.500",
        desc: "Selección de hierbas aromáticas relajantes.",
      },
      {
        name: "Té Chai",
        price: "$12.000",
        desc: "Especias aromáticas infusionadas en leche cremosa.",
      },
      {
        name: "Milo",
        price: "$8.000",
        desc: "Bebida caliente tradicional de malta y cacao.",
      },
      {
        name: "Chocolate en Agua",
        price: "$6.000",
        desc: "Chocolate artesanal tradicional batido en agua.",
      },
      {
        name: "Chocolate en Leche",
        price: "$8.000",
        desc: "Cremoso chocolate artesanal batido en leche.",
      },
    ],
  },
  {
    id: "bebidas-frias",
    title: "Bebidas Frías",
    subtitle: "Refrescantes y Granizados",
    shortDesc: "Granizados, sodas y cervezas",
    footerNote: "Adicional: Michelar cualquier bebida o cerveza por + $3.000",
    items: [
      {
        name: "Affogato",
        price: "$12.000",
        desc: "Helado artesanal ahogado en espresso caliente.",
      },
      {
        name: "Latte Frío",
        price: "$11.000",
        desc: "Espresso sobre leche fría y hielo.",
      },
      {
        name: "Granizado de Café o Milo",
        price: "$12.000",
        desc: "Frappé cremoso a elección entre café o Milo.",
      },
      {
        name: "Granizado de Oreo",
        price: "$13.000",
        desc: "Mezcla helada con trozos de galleta Oreo.",
      },
      {
        name: "Granizado Té Chai",
        price: "$14.000",
        desc: "Refrescante granizado especiado de té chai.",
      },
      {
        name: "Granizado Maracuyá o Lulo",
        price: "$12.000",
        desc: "Fruta tropical frappé de acidez refrescante.",
      },
      {
        name: "Malteada de Café o Milo",
        price: "$16.000",
        desc: "Cremosa malteada de helado a elección.",
      },
      {
        name: "Limonada Cerezada",
        price: "$12.000",
        desc: "Limonada granizada con cerezas dulces.",
      },
      {
        name: "Limonada Natural Granizada",
        price: "$10.000",
        desc: "Refrescante zumo de limón recién exprimido.",
      },
      {
        name: "Soda Frutos Rojos",
        price: "$15.000",
        desc: "Soda saborizada con reducción artesanal de frutos rojos.",
      },
      {
        name: "Soda Frutos Amarillos",
        price: "$15.000",
        desc: "Soda burbujeante con maracuyá, mango y piña.",
      },
      {
        name: "Jugo en Agua",
        price: "$7.000",
        desc: "Jugo natural de fruta fresca en agua.",
      },
      {
        name: "Jugo en Leche",
        price: "$9.000",
        desc: "Jugo natural cremoso batido en leche.",
      },
      {
        name: "Milo Frío",
        price: "$8.000",
        desc: "Milo frío batido con hielo.",
      },
      {
        name: "Guarapo Artesanal",
        price: "$13.000",
        desc: "Bebida tradicional fermentada artesanalmente.",
      },
      { name: "Botella Agua", price: "$4.000", desc: "Agua pura embotellada." },
      {
        name: "Bretaña Botella",
        price: "$4.000",
        desc: "Agua mineral con gas.",
      },
      { name: "Coca-Cola", price: "$6.000", desc: "Gaseosa bien fría." },
      {
        name: "Club Colombia",
        price: "$6.000",
        desc: "Cerveza nacional premium.",
      },
      {
        name: "Cerveza Corona",
        price: "$8.000",
        desc: "Cerveza importada bien fría.",
      },
    ],
  },
  {
    id: "postres",
    title: "Postres Artesanales",
    subtitle: "Repostería de Autor",
    shortDesc: "Milhojas, cheesecakes y tortas",
    items: [
      {
        name: "Milhoja de Arequipe",
        price: "$12.000",
        desc: "Hojaldre crujiente con capas de arequipe artesanal.",
      },
      {
        name: "Milhoja de Arequipe de Café",
        price: "$13.000",
        desc: "Nuestra milhoja insignia con crema de café de especialidad.",
      },
      {
        name: "Milhoja de Arequipe y Frutos Rojos",
        price: "$14.000",
        desc: "Contraste perfecto entre dulce arequipe y frutos rojos frescos.",
      },
      {
        name: "Cheesecake Frutos Rojos",
        price: "$12.000",
        desc: "Cheesecake horneado con coulis de frutos del bosque.",
      },
      {
        name: "Cheesecake Maracuyá",
        price: "$12.000",
        desc: "Cheesecake horneado con reducción tropical de maracuyá.",
      },
      {
        name: "Cheesecake Coco",
        price: "$12.000",
        desc: "Suave cheesecake horneado con notas de coco.",
      },
      {
        name: "Cheesecake Nutella",
        price: "$12.000",
        desc: "Cheesecake horneado con crema de avellanas y cacao.",
      },
      {
        name: "Torta de Zanahoria",
        price: "$12.000",
        desc: "Bizcocho húmedo especiado con nueces y frosting.",
      },
      {
        name: "Torta de Arándano y Banano",
        price: "$9.000",
        desc: "Torta artesanal suave de banano maduro y arándanos.",
      },
    ],
  },
  {
    id: "pizzas",
    title: "Pizzas al Horno",
    subtitle: "Masa Delgada Artesanal",
    shortDesc: "De 4 y 6 porciones al horno",
    footerNote: "Opción Pizza Mixta (2 sabores) + $2.000",
    items: [
      {
        name: "Hawaiana",
        desc: "Jamón, piña calada y queso mozzarella fundido en masa delgada.",
        variants: [
          { label: "4 Porciones", price: "$20.000" },
          { label: "6 Porciones", price: "$30.000" },
        ],
      },
      {
        name: "Pepperoni",
        desc: "Generosas rodajas de pepperoni madurado sobre mozzarella y salsa napolitana.",
        variants: [
          { label: "4 Porciones", price: "$22.000" },
          { label: "6 Porciones", price: "$32.000" },
        ],
      },
      {
        name: "Margarita",
        desc: "Salsa de tomate artesanal, queso mozzarella y hojas de albahaca fresca.",
        variants: [
          { label: "4 Porciones", price: "$20.000" },
          { label: "6 Porciones", price: "$30.000" },
        ],
      },
      {
        name: "Pollo Champiñones",
        desc: "Pechuga de pollo desmechada, champiñones salteados y queso mozzarella.",
        variants: [
          { label: "4 Porciones", price: "$22.000" },
          { label: "6 Porciones", price: "$32.000" },
        ],
      },
    ],
  },
  {
    id: "sandwich",
    title: "Sandwich Gourmet",
    subtitle: "Panadería Artesanal",
    shortDesc: "Masa madre y recetas de la casa",
    items: [
      {
        name: "Serrano",
        price: "$18.000",
        desc: "Jamón Serrano, queso, tomate horneado y albahaca.",
      },
      {
        name: "Pollo Champi",
        price: "$18.000",
        desc: "Pechuga, champiñones salteados, queso y tomate horneado.",
      },
      {
        name: "Ceviche de Chorizo",
        price: "$18.000",
        desc: "Chorizo adobado, pico de gallo fresco y salsa especial.",
      },
      {
        name: "Ranchero",
        price: "$18.000",
        desc: "Tocineta o pepperoni, queso, vegetales y salsa de la casa.",
      },
      {
        name: "Ranchero con Todo",
        price: "$28.000",
        desc: "Tocineta, jamón y pepperoni, queso, vegetales, piña y salsa de la casa.",
      },
      {
        name: "Porción Pan Masa Madre",
        price: "$15.000",
        desc: "2 tajadas de pan de masa madre, tomate cherry horneado, pesto y parmesano.",
      },
      {
        name: "Sandwich en Pan Masa Madre",
        price: "$20.000",
        desc: "Preparación gourmet servida en nuestro pan artesanal de masa madre.",
      },
    ],
  },
];
