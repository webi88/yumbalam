// 17 artículos publicados en Círculo Político — en orden cronológico de publicación.
// Reflejan la evolución de la narrativa madre: conservar sin justicia social genera
// más daño ambiental que protección.

import { img } from "./images";

export type Articulo = {
  numero: number;            // orden de publicación
  titulo: string;
  resumen: string;           // 1–2 líneas
  url: string;
  imagen: string;
  capitulo: string;          // a qué grupo narrativo pertenece
};

export const ARTICULOS: Articulo[] = [
  {
    numero: 1,
    titulo: "Justicia territorial y futuro ambiental en Lázaro Cárdenas",
    resumen: "Cuando conservar sin desarrollar también pone en riesgo a la naturaleza.",
    url: "https://circulopoliticomx.com/justicia-territorial-y-futuro-ambiental-en-lazaro-cardenas-quintana-roo-cuando-conservar-sin-desarrollar-tambien-pone-en-riesgo-a-la-naturaleza/",
    imagen: img(0),
    capitulo: "diagnostico",
  },
  {
    numero: 2,
    titulo: "Cuando la exclusión social también es un problema ambiental",
    resumen: "Lázaro Cárdenas: la marginación estructural debilita la conservación del territorio.",
    url: "https://circulopoliticomx.com/lazaro-cardenas-cuando-la-exclusion-social-tambien-se-convierte-en-un-problema-ambiental/",
    imagen: img(1),
    capitulo: "diagnostico",
  },
  {
    numero: 3,
    titulo: "Pesca ilegal y caza furtiva: síntomas de la exclusión",
    resumen: "Lázaro Cárdenas, Q. Roo: cuando la falta de oportunidades empuja a actividades que dañan el ecosistema.",
    url: "https://circulopoliticomx.com/lazaro-cardenas-q-roo-pesca-ilegal-y-caza-furtiva-como-sintomas-de-la-exclusion-estructural-en-el-caribe-norte/",
    imagen: img(2),
    capitulo: "diagnostico",
  },
  {
    numero: 4,
    titulo: "Cuando el ambientalismo de veto debilita la conservación",
    resumen: "El conservacionismo que se opone a todo termina por minar la legitimidad social de la protección.",
    url: "https://circulopoliticomx.com/lazaro-cardenas-cuando-el-ambientalismo-de-veto-termina-debilitando-la-conservacion/",
    imagen: img(3),
    capitulo: "diagnostico",
  },
  {
    numero: 5,
    titulo: "Regular, incluir y fortalecer instituciones",
    resumen: "Vol. V — Tres claves para cuidar el territorio sin sacrificar a quienes lo habitan.",
    url: "https://circulopoliticomx.com/vol-v-regular-incluir-y-fortalecer-instituciones-para-cuidar-el-territorio/",
    imagen: img(4),
    capitulo: "marco",
  },
  {
    numero: 6,
    titulo: "Escuchar a la comunidad",
    resumen: "Vol. VI — Lo que el debate sobre desarrollo y ambientalismo nos está diciendo en Lázaro Cárdenas.",
    url: "https://circulopoliticomx.com/vol-vi-escuchar-a-la-comunidad-lo-que-el-debate-sobre-desarrollo-y-ambientalismo-nos-esta-diciendo-en-lazaro-cardenas/",
    imagen: img(5),
    capitulo: "marco",
  },
  {
    numero: 7,
    titulo: "Justicia territorial en el norte de Quintana Roo",
    resumen: "Desarrollo responsable y debate ambiental basado en evidencia, no en consignas.",
    url: "https://circulopoliticomx.com/justicia-territorial-en-el-norte-de-quintana-roo-desarrollo-responsable-y-debate-ambiental-con-evidencia/",
    imagen: img(6),
    capitulo: "marco",
  },
  {
    numero: 8,
    titulo: "Yum Balam: conservar mejor implica generar oportunidades",
    resumen: "La conservación efectiva requiere comunidades con futuro económico, no comunidades en abandono.",
    url: "https://circulopoliticomx.com/yum-balam-conservar-mejor-implica-generar-oportunidades/",
    imagen: img(7),
    capitulo: "yumbalam",
  },
  {
    numero: 9,
    titulo: "Proteger sin desarrollo también genera ilegalidad",
    resumen: "Yum Balam: cuando no hay opciones legales de vida, el territorio paga las consecuencias.",
    url: "https://circulopoliticomx.com/yum-balam-proteger-sin-desarrollo-tambien-genera-ilegalidad/",
    imagen: img(8),
    capitulo: "yumbalam",
  },
  {
    numero: 10,
    titulo: "Romper el cerco del conservacionismo neoliberal",
    resumen: "Lázaro Cárdenas: profundizar la transformación pasa por integrar bienestar y ecología.",
    url: "https://circulopoliticomx.com/lazaro-cardenas-romper-el-cerco-del-conservacionismo-neoliberal-para-profundizar-la-transformacion/",
    imagen: img(9),
    capitulo: "yumbalam",
  },
  {
    numero: 11,
    titulo: "Entre la función ecológica y la realidad del territorio",
    resumen: "Yum Balam — La distancia entre el papel del decreto y la vida concreta de las comunidades.",
    url: "https://circulopoliticomx.com/yum-balam-entre-la-funcion-ecologica-y-la-realidad-del-territorio/",
    imagen: img(10),
    capitulo: "yumbalam",
  },
  {
    numero: 12,
    titulo: "Entre la función ecológica y la realidad (II)",
    resumen: "Yum Balam — Segunda parte: lo que falta para que la protección sea verdaderamente sostenible.",
    url: "https://circulopoliticomx.com/yum-balam-entre-la-funcion-ecologica-y-la-realidad-del-territorio-2/",
    imagen: img(11),
    capitulo: "yumbalam",
  },
  {
    numero: 13,
    titulo: "Protección ecológica con desarrollo y justicia social",
    resumen: "Yum Balam — Una propuesta integral para el pueblo del norte de Quintana Roo.",
    url: "https://circulopoliticomx.com/yum-balam-proteccion-ecologica-con-desarrollo-y-justicia-social-para-el-pueblo-del-norte-de-quintana-roo/",
    imagen: img(12),
    capitulo: "yumbalam",
  },
  {
    numero: 14,
    titulo: "La voz del territorio: justicia ambiental con bienestar",
    resumen: "Yum Balam — Lo que la gente que vive ahí nombra como prioridad real.",
    url: "https://circulopoliticomx.com/yum-balam-y-la-voz-del-territorio-justicia-ambiental-con-bienestar-para-el-pueblo/",
    imagen: img(13),
    capitulo: "voz",
  },
  {
    numero: 15,
    titulo: "Ejidos en Quintana Roo: territorio y bienestar",
    resumen: "El desafío pendiente en Yum Balam: garantizar que los ejidos prosperen mientras cuidan.",
    url: "https://circulopoliticomx.com/ejidos-en-quintana-roo-territorio-bienestar-y-el-desafio-pendiente-en-yum-balam/",
    imagen: img(14),
    capitulo: "voz",
  },
  {
    numero: 16,
    titulo: "El debate pendiente sobre el futuro ejidal",
    resumen: "Yum Balam — La conversación que las comunidades ejidales merecen, sin tutelajes externos.",
    url: "https://circulopoliticomx.com/yum-balam-y-el-debate-pendiente-sobre-el-futuro-de-las-comunidades-ejidales/",
    imagen: img(15),
    capitulo: "voz",
  },
  {
    numero: 17,
    titulo: "Los ejidos y el derecho del pueblo al bienestar",
    resumen: "Yum Balam — Síntesis: la protección territorial solo es legítima si genera prosperidad compartida.",
    url: "https://circulopoliticomx.com/los-ejidos-en-yum-balam-y-el-derecho-del-pueblo-al-bienestar/",
    imagen: img(0),
    capitulo: "voz",
  },
];

// Capítulos de la narrativa madre — cada uno es una tab.
export type Capitulo = {
  id: "diagnostico" | "marco" | "yumbalam" | "voz";
  numero: string;
  titulo: string;
  bajada: string;
};

export const CAPITULOS: Capitulo[] = [
  {
    id: "diagnostico",
    numero: "I",
    titulo: "El diagnóstico",
    bajada:
      "La exclusión social y el conservacionismo de veto, lejos de proteger el territorio, lo debilitan. Cuatro artículos para entender el problema de raíz.",
  },
  {
    id: "marco",
    numero: "II",
    titulo: "El marco propuesto",
    bajada:
      "Regular, incluir y fortalecer instituciones. Tres entregas para escuchar a las comunidades y construir un debate ambiental con evidencia.",
  },
  {
    id: "yumbalam",
    numero: "III",
    titulo: "Yum Balam en el centro",
    bajada:
      "Conservar mejor implica generar oportunidades. Seis textos centrados en la realidad del Área Natural Protegida y su gente.",
  },
  {
    id: "voz",
    numero: "IV",
    titulo: "La voz del territorio",
    bajada:
      "Los ejidos y comunidades hablan. Cuatro artículos finales que recogen lo que el pueblo del norte de Quintana Roo nombra como prioridad.",
  },
];

export const articulosPorCapitulo = (id: Capitulo["id"]) =>
  ARTICULOS.filter((a) => a.capitulo === id);
