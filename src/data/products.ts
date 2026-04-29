import antarcticaboa from "@/assets/product-antarctica-boa.png";
import brahma473 from "@/assets/product-brahma-473.png";
import brahmaduplomalte from "@/assets/product-brahma-duplo-malte.png";
import beatsgreen from "@/assets/product-beats-green.png";
import beatsred from "@/assets/product-beats-red.png";
import beatsgt from "@/assets/product-beats-gt.png";
import beatssense from "@/assets/product-beats-senses.png";
import cocamini from "@/assets/product-coca-mini.png";
import cocazero from "@/assets/product-coca-zero.png";
import coca from "@/assets/product-coca.png";
import corona from "@/assets/product-corona-garrafa.png";
import fantaguarana from "@/assets/product-fanta-guarana.png";
import fantalaranja from "@/assets/product-fanta-laranja.png";
import fantauva from "@/assets/product-fanta-uva.png";
import fantamaracuja from "@/assets/product-fanta-maracuja.png";
import guarana from "@/assets/product-guarana.png";
import heinekenpq from "@/assets/product-heineken-269.png";
import heinekengd from "@/assets/product-heineken-473.png";
import heinekengarrafa from "@/assets/product-heineken-garrafa.png";
import heinekengarrafa0 from "@/assets/product-heineken-garrafa-00.png";
import iceacai from "@/assets/product-ice-acai.png";
import icebalada from "@/assets/product-ice-balada.png";
import icefruit from "@/assets/product-ice-fruit-mix.png";
import icekiwi from "@/assets/product-ice-kiwi.png";
import icelimao from "@/assets/product-ice-limao.png";
import icemaracuja from "@/assets/product-ice-maracuja.png";
import imperiopq from "@/assets/product-imperio-269.png";
import imperiogd from "@/assets/product-imperio-473.png";
import imperiogarrafa from "@/assets/product-imperio-garrafa.png";
import ipa from "@/assets/product-ipa.png";
import kapocaju from "@/assets/product-kapo-caju.png";
import kapolaranja from "@/assets/product-kapo-laranja.png";
import kapomaca from "@/assets/product-kapo-maca.png";
import kapomaracuja from "@/assets/product-kapo-maracuja.png";
import kapouva from "@/assets/product-kapo-uva.webp";
import lindoiacgas from "@/assets/product-lindoia-com-gas.png";
import lindoiasg from "@/assets/product-lindoia-sem-gas.png";
import mambawater from "@/assets/product-mamba-water.png";
import minalbasg from "@/assets/product-minalba-sem-gas.png";
import monsterdragonlemontea from "@/assets/product-monster-dragon-lemon-tea.png";
import monsterkhaosjuice from "@/assets/product-monster-khaos-juice.png";
import monstermango from "@/assets/product-monster-mango.png";
import monsterpacificpunch from "@/assets/product-monster-pacific-punch.png";
import monsterrio from "@/assets/product-monster-rio.png";
import monsterultramango from "@/assets/product-monster-ultra-mango.png";
import monsterultrapeachy from "@/assets/product-monster-ultra-peachy.png";
import monstraultraviolet from "@/assets/product-monster-ultra-violet.png";
import monsterultrawatermelon from "@/assets/product-monster-ultra-watermelon.png";
import pepsiblack from "@/assets/product-pepsi-black.png";
import pepsi from "@/assets/product-pepsi.png";
import schweppescitrus from "@/assets/product-schweppes-citrus.png";
import schweppesmaracuja from "@/assets/product-schweppes-maracuja.png";
import schweppesspritz from "@/assets/product-schweppes-spritz.png";
import schweppesvodka from "@/assets/product-schweppes-vodka.png";
import sprite from "@/assets/product-sprite.png";
import spritezero from "@/assets/product-sprite-zero.png";
import sucolaranja from "@/assets/product-suco-laranja.png";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  { id: "1", name: "Suco de Laranja Natural One 2L", category: "Sucos", price: 22.9, image: sucolaranja },
  { id: "2", name: "Cerveja IPA Artesanal", category: "Cervejas", price: 14.9, image: ipa },
  { id: "3", name: "Cerveja Antarctica BOA 473ml", category: "Cervejas", price: 6.5, image: antarcticaboa },
  { id: "4", name: "Cerveja Brahma 473ml", category: "Cervejas", price: 5.9, image: brahma473 },
  { id: "5", name: "Cerveja Brahma Duplo Malte 350ml", category: "Cervejas", price: 6.5, image: brahmaduplomalte },
  { id: "6", name: "Beats Green 473ml", category: "Drinks Prontos", price: 11.9, image: beatsgreen },
  { id: "7", name: "Beats Red 473ml", category: "Drinks Prontos", price: 11.9, image: beatsred },
  { id: "8", name: "Beats GT 473ml", category: "Drinks Prontos", price: 11.9, image: beatsgt },
  { id: "9", name: "Beats Sense 473ml", category: "Drinks Prontos", price: 11.9, image: beatssense },
  { id: "10", name: "Refrigerante Coca-Cola Mini 220ml", category: "Refrigerantes", price: 4.5, image: cocamini },
  { id: "11", name: "Refrigerante Coca-Cola Zero 350ml", category: "Refrigerantes", price: 9.9, image: cocazero },
  { id: "12", name: "Refrigerante Coca-Cola 350ml", category: "Refrigerantes", price: 9.9, image: coca },
  { id: "13", name: "Cerveja Corona Garrafa 355ml", category: "Cervejas", price: 8.5, image: corona },
  { id: "14", name: "Refrigerante Fanta Guaraná 350ml", category: "Refrigerantes", price: 4.5, image: fantaguarana },
  { id: "15", name: "Refrigerante Fanta Laranja 350ml", category: "Refrigerantes", price: 4.5, image: fantalaranja },
  { id: "16", name: "Refrigerante Fanta Uva 350ml", category: "Refrigerantes", price: 4.5, image: fantauva },
  { id: "17", name: "Refrigerante Fanta Maracujá 350ml", category: "Refrigerantes", price: 4.5, image: fantamaracuja },
  { id: "18", name: "Refrigerante Guaraná Antarctica 350ml", category: "Refrigerantes", price: 4.5, image: guarana },
  { id: "19", name: "Cerveja Heineken Pilsen 269ml", category: "Cervejas", price: 6.5, image: heinekenpq },
  { id: "20", name: "Cerveja Heineken Pilsen 473ml", category: "Cervejas", price: 9.9, image: heinekengd },
  { id: "21", name: "Cerveja Heineken Garrafa 600ml", category: "Cervejas", price: 12.5, image: heinekengarrafa },
  { id: "22", name: "Cerveja Heineken Garrafa 600ml Zero Álcool", category: "Cervejas", price: 12.5, image: heinekengarrafa0 },
  { id: "23", name: "Ice Açaí 473ml", category: "Drinks Prontos", price: 11.9, image: iceacai },
  { id: "24", name: "Ice Balada 473ml", category: "Drinks Prontos", price: 11.9, image: icebalada },
  { id: "25", name: "Ice Fruit Mix 473ml", category: "Drinks Prontos", price: 11.9, image: icefruit },
  { id: "26", name: "Ice Kiwi 473ml", category: "Drinks Prontos", price: 11.9, image: icekiwi },
  { id: "27", name: "Ice Limão 473ml", category: "Drinks Prontos", price: 11.9, image: icelimao },
  { id: "28", name: "Ice Maracujá 473ml", category: "Drinks Prontos", price: 11.9, image: icemaracuja },
  { id: "29", name: "Cerveja Império Pilsen 269ml", category: "Cervejas", price: 6.5, image: imperiopq },
  { id: "30", name: "Cerveja Império Pilsen 473ml", category: "Cervejas", price: 9.9, image: imperiogd },
  { id: "31", name: "Cerveja Império Garrafa 600ml", category: "Cervejas", price: 12.5, image: imperiogarrafa },
  { id: "32", name: "Suco Kapo Caju 350ml", category: "Sucos", price: 4.5, image: kapocaju },
  { id: "33", name: "Suco Kapo Laranja 350ml", category: "Sucos", price: 4.5, image: kapolaranja },
  { id: "32", name: "Suco Kapo Maçã 350ml", category: "Sucos", price: 4.5, image: kapomaca },
  { id: "33", name: "Suco Kapo Maracujá 350ml", category: "Sucos", price: 4.5, image: kapomaracuja },
  { id: "34", name: "Suco Kapo Uva 350ml", category: "Sucos", price: 4.5, image: kapouva },
  { id: "35", name: "Água Mineral Lindóia com Gás 500ml", category: "Água", price: 3.5, image: lindoiacgas },
  { id: "36", name: "Água Mineral Lindóia sem Gás 500ml", category: "Água", price: 3.5, image: lindoiasg },
  { id: "37", name: "Água Mineral Mamba Water 500ml", category: "Água", price: 3.5, image: mambawater },
  { id: "38", name: "Água Mineral Minalba sem Gás 500ml", category: "Água", price: 3.5, image: minalbasg },
  { id: "39", name: "Energético Monster Dragon Lemon Tea 473ml", category: "Energéticos", price: 11.9, image: monsterdragonlemontea },
  { id: "40", name: "Energético Monster Khaos Juice 473ml", category: "Energéticos", price: 11.9, image: monsterkhaosjuice },
  { id: "41", name: "Energético Monster Mango 473ml", category: "Energéticos", price: 11.9, image: monstermango },
  { id: "42", name: "Energético Monster Pacific Punch 473ml", category: "Energéticos", price: 11.9, image: monsterpacificpunch },
  { id: "43", name: "Energético Monster Rio 473ml", category: "Energéticos", price: 11.9, image: monsterrio },
  { id: "44", name: "Energético Monster Ultra Mango 473ml", category: "Energéticos", price: 11.9, image: monsterultramango },
  { id: "45", name: "Energético Monster Ultra Peachy 473ml", category: "Energéticos", price: 11.9, image: monsterultrapeachy },
  { id: "46", name: "Energético Monster Ultra Violet 473ml", category: "Energéticos", price: 11.9, image: monstraultraviolet },
  { id: "47", name: "Energético Monster Ultra Watermelon 473ml", category: "Energéticos", price: 11.9, image: monsterultrawatermelon },
  { id: "48", name: "Refrigerante Pepsi Black 350ml", category: "Refrigerantes", price: 9.9, image: pepsiblack },
  { id: "49", name: "Refrigerante Pepsi 350ml", category: "Refrigerantes", price: 9.9, image: pepsi },
  { id: "50", name: "Refrigerante Schweppes Citrus 350ml", category: "Refrigerantes", price: 4.5, image: schweppescitrus },
  { id: "51", name: "Drink Schweppes Maracujá 350ml", category: "Drinks Prontos", price: 4.5, image: schweppesmaracuja },
  { id: "52", name: "Drink Schweppes Spritz 350ml", category: "Drinks Prontos", price: 4.5, image: schweppesspritz },
  { id: "53", name: "Drink Schweppes Vodka 350ml", category: "Drinks Prontos", price: 4.5, image: schweppesvodka },
  { id: "54", name: "Refrigerante Sprite 350ml", category: "Refrigerantes", price: 9.9, image: sprite },
  { id: "55", name: "Refrigerante Sprite Zero 350ml", category: "Refrigerantes", price: 9.9, image: spritezero },
];
