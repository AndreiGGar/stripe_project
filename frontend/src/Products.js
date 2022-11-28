
import AcerNitro5Image from "./assets/images/acer-nitro-5.jpg";
import AsusROGStrixG17Image from "./assets/images/asus-rog-strix-g17.jpg";
import AsusROGZephyrusM16Image from "./assets/images/asus-rog-zephyrus-m16.jpg";
import LenovoIdeapadGaming3Image from "./assets/images/lenovo-ideapad-gaming-3.jpg";
import MsiGF63ThinImage from "./assets/images/msi-gf63-thin.jpg";
import RazerBlade17Image from "./assets/images/razer-blade-17.jpg";

const arrayProducts = [
  {
    id: "price_1M8udcJ3u0rP0PhpqmbRutTf",
    name: "Acer Nitro 5",
    price: 829.99,
    image: AcerNitro5Image,
  },
  {
    id: "price_1M8uf5J3u0rP0PhpgzgGL2k2",
    name: "Asus ROG Strix G17",
    price: 2659,
    image: AsusROGStrixG17Image,
  },
  {
    id: "price_1M8ufUJ3u0rP0PhpblBNKOkW",
    name: "Asus ROG Zephyrus M16",
    price: 2839,
    image: AsusROGZephyrusM16Image,
  },
  {
    id: "price_1M8ufwJ3u0rP0Php0iRvz5Rs",
    name: "Lenovo IdeaPad Gaming 3",
    price: 829.19,
    image: LenovoIdeapadGaming3Image,
  },
  {
    id: "price_1M8ugHJ3u0rP0PhpJZtUvM2F",
    name: "MSI GF63 Thin",
    price: 949,
    image: MsiGF63ThinImage,
  },
  {
    id: "price_1M8ugcJ3u0rP0PhpCldvaoZv",
    name: "Razer Blade 17",
    price: 2299,
    image: RazerBlade17Image,
  },
];

function getProductData(id) {
  let productData = arrayProducts.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product not found for id: " + id);
    return undefined;
  }

  return productData;
}

export { arrayProducts, getProductData };
