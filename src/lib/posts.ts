export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "yum-balam-nuestra-casa",
    title: "Yum Balam es nuestra casa: por eso la defendemos y la queremos desarrollar",
    excerpt:
      "Los ejidatarios y comunidades de Holbox, Chiquila y Kantunilkín no se oponen al progreso. Se oponen al progreso que los excluye. Este comunicado explica nuestra postura.",
    category: "Comunicado",
    date: "20 May 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1200&q=80",
    author: "Frente Pro Yum Balam",
    content: `<h2>Quiénes somos y de dónde hablamos</h2>
<p>Somos ejidatarios, pescadores, milperos y familias que llevamos generaciones viviendo a la orilla de la Laguna Yalahau, en los manglares de Quintana Roo, en los cerros y playas que rodean la Reserva de la Biosfera Yum Balam. No somos ambientalistas de escritorio ni activistas de ciudad. Somos la gente que trabaja aquí, que aquí come, que aquí entierra a sus muertos.</p>
<h2>Lo que queremos</h2>
<p>Queremos que nuestros hijos no tengan que irse a Cancún a buscar trabajo. Queremos que el turismo que llega a Holbox, a Punta Allen, a toda la región, deje una parte justa en las manos de quienes cuidan este territorio. Queremos acceso a servicios de salud, escuelas dignas, caminos en condiciones. Eso es desarrollo. No lo estamos inventando: lo estamos pidiendo.</p>
<h2>Lo que no queremos</h2>
<p>No queremos proyectos que lleguen de fuera sin consultar a las comunidades. No queremos que la reserva se convierta en un parque de diversiones para turistas de alto poder adquisitivo mientras los ejidatarios terminan de empleados en el estacionamiento. No queremos que "desarrollo sustentable" sea un slogan para justificar despojos disfrazados de ecología.</p>
<h2>El camino que proponemos</h2>
<p>El Frente Pro Yum Balam existe para construir una propuesta propia: turismo comunitario, producción agroecológica, pesca responsable, acceso a mercados para los productos del monte y el mar. Desarrollo que parte de nosotros, que beneficia a nosotros, que no destruye lo que nos da de comer.</p>`,
  },
  {
    slug: "modelo-turismo-comunitario",
    title: "El modelo de turismo comunitario que estamos construyendo en la región",
    excerpt:
      "Tres ejidos de la zona norte de Quintana Roo están desarrollando un modelo de turismo de bajo impacto que genera ingresos sin sacrificar la laguna ni el monte.",
    category: "Propuesta",
    date: "12 May 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80",
    author: "Frente Pro Yum Balam",
    content: `<h2>Tres ejidos, una visión compartida</h2>
<p>Los ejidos de Holbox, Chiquila y Kantunilkín llevan dos años trabajando en conjunto para desarrollar un modelo de turismo que sea compatible con la conservación de Yum Balam. Lo que hemos aprendido en ese proceso es la base de este artículo.</p>
<h2>Capacidad de carga: la clave que nadie quiere discutir</h2>
<p>El primer principio del modelo es la capacidad de carga. Holbox ya rebasó hace años su límite de turistas sostenibles. El resultado es visible: basura en la playa, estrés sobre los flamencos, motocicletas donde antes había silencio. El turismo comunitario que proponemos empieza por definir cuántos visitantes puede recibir cada sitio sin degradarse.</p>
<h2>Infraestructura propia, ingresos propios</h2>
<p>El segundo principio es que la infraestructura turística debe ser propiedad de las comunidades locales. Cabañas, lanchas, guías de naturaleza, cocinas comunitarias. Cuando el dinero del turista se queda en la comunidad, la comunidad tiene incentivos para cuidar el territorio que atrae al turista.</p>`,
  },
  {
    slug: "manglar-economia-invisible",
    title: "El manglar: la economía invisible que protegemos sin que nadie nos pague por hacerlo",
    excerpt:
      "Los manglares de Yum Balam generan servicios ambientales valuados en miles de millones de pesos al año. Quienes los cuidan siguen esperando reconocimiento.",
    category: "Medio Ambiente",
    date: "5 May 2026",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80",
    author: "Frente Pro Yum Balam",
    content: `<h2>¿Cuánto vale un manglar?</h2>
<p>Un estudio de la UNAM publicado en 2023 estimó que los ecosistemas de manglar en México generan servicios ambientales por encima de los 50,000 pesos por hectárea al año en términos de captura de carbono, protección costera y producción pesquera. La reserva Yum Balam tiene cerca de 50,000 hectáreas de manglares.</p>
<h2>¿Quién paga por cuidarlos?</h2>
<p>Nadie. Los ejidatarios y comunidades que impiden la tala, que vigilan las costas, que denuncian cuando alguien llega a cortar sin permiso, hacen ese trabajo de manera voluntaria o con recursos propios mínimos. El mercado de carbono existe, pero sus beneficios rara vez llegan a las comunidades que realmente guardan el bosque.</p>
<h2>Lo que pedimos al gobierno</h2>
<p>Un programa serio de pago por servicios ambientales que reconozca el trabajo real de las comunidades guardianas. No un programa de papel sino uno que deposite recursos directamente a los ejidos con mecanismos claros de verificación y sin intermediarios innecesarios.</p>`,
  },
  {
    slug: "pesca-responsable-yalahau",
    title: "La pesca responsable en la Laguna Yalahau: lo que los ejidatarios ya hacen bien",
    excerpt:
      "Antes de que lleguen los consultores a decirnos cómo pescar, vale la pena documentar las prácticas que las comunidades ya tienen para cuidar el recurso.",
    category: "Comunidad",
    date: "27 Abr 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1200&q=80",
    author: "Frente Pro Yum Balam",
    content: `<h2>El conocimiento que ya existe</h2>
<p>Las familias pesqueras de la Laguna Yalahau llevan décadas practicando vedas informales, rotando zonas de pesca, evitando ciertas áreas en épocas de reproducción. Este conocimiento no está escrito en ningún manual técnico porque nunca nadie se tomó el tiempo de documentarlo con rigor.</p>
<h2>Lo que estamos sistematizando</h2>
<p>El Frente Pro Yum Balam está trabajando con pescadores de tres localidades para registrar estas prácticas tradicionales de manejo pesquero. El objetivo es doble: fortalecer las normas comunitarias y crear evidencia técnica que respalde la gestión local frente a autoridades e inversionistas.</p>`,
  },
  {
    slug: "carta-inversionistas-responsables",
    title: "Carta abierta a los inversionistas que quieran venir a Yum Balam a hacer las cosas bien",
    excerpt:
      "No estamos cerrados al capital externo. Estamos cerrados al capital que llega a extraer sin compartir. Si quieres invertir aquí, empieza por leer esto.",
    category: "Comunicado",
    date: "18 Abr 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    author: "Frente Pro Yum Balam",
    content: `<h2>El capital es bienvenido, con condiciones</h2>
<p>Entendemos que el desarrollo de la región requiere inversión. No tenemos los recursos para construir la infraestructura que necesitamos solos. Por eso esta carta no es un rechazo al capital: es una invitación a los inversionistas que estén dispuestos a trabajar de otra manera.</p>
<h2>Las condiciones no negociables</h2>
<p>Primero: consulta previa, libre e informada con las comunidades antes de cualquier proyecto. Segundo: participación accionaria o de utilidades para los ejidatarios cuyos territorios se utilicen. Tercero: contratación preferente de mano de obra local. Cuarto: compromiso de capacidad de carga y plan de mitigación ambiental validado por la comunidad, no solo por las autoridades.</p>
<h2>Lo que ofrecemos a cambio</h2>
<p>Seguridad jurídica basada en el consentimiento comunitario. Sin eso, cualquier proyecto es vulnerable a conflictos que cuestan más que lo que se ahorró en no consultar. Con eso, un proyecto tiene el respaldo de la gente que mejor conoce el territorio y que tiene interés directo en que funcione.</p>`,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
