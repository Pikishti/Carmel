// =============================================================
// CARMEL Goods: site translations (English / Spanish)
// =============================================================
//
// HOW THIS FILE WORKS
// --------------------
// Every piece of translatable text on the site lives here, split into
// two objects: `es` (Spanish) and `en` (English). Each has the exact
// same shape, grouped by page/section (nav, common, whatsapp, home,
// products_page, about, contact).
//
// In the HTML, an element is tagged like:
//   <h2 data-i18n="home.featured_heading">Featured Products</h2>
// "home.featured_heading" is a dot-path into the objects below, e.g.
// `en.home.featured_heading` / `es.home.featured_heading`.
//
// TO EDIT WORDING: find the matching key below (the comments before each
// section name the page/area it belongs to) and change the text. You can
// freely include HTML inside a string (e.g. <span class="font-logo">).
// It will be inserted as real markup, not shown as text.
//
// TO ADD A NEW TRANSLATABLE ELEMENT: add a new key/value pair here in
// BOTH `es` and `en`, then add data-i18n="section.your_new_key" to the
// HTML element (or data-i18n-placeholder / data-i18n-aria for an input
// placeholder or an aria-label instead of visible text).
//
// Prices, sizes (ml/oz/g), and the "CARMEL Goods" brand name are treated
// as language-neutral and are NOT part of this dictionary. They're the
// same in both languages directly in the HTML.

window.CARMEL_TRANSLATIONS = {
  es: {
    nav: {
      home: "Inicio",
      products: "Productos",
      about: "Nosotros",
      contact: "Contacto",
    },

    common: {
      skip_link: "Saltar al contenido principal",
      nav_toggle_aria: "Abrir menú de navegación",
      footer_tagline:
        "Una marca de estilo de vida basada en vivir plenamente, empezando por una buena mañana.",
      footer_explore: "Explorar",
      footer_connect: "Síguenos",
      footer_rights: "Todos los derechos reservados.",
      instagram_aria: "Instagram",
      tag_syrup: "Jarabe",
      tag_butter: "Mantequilla",
    },

    whatsapp: {
      aria: "Chatea con CARMEL Goods por WhatsApp",
      message: "Hola Carmel Goods, quisiera preguntar sobre sus productos",
    },

    home: {
      hero_tagline:
        'Inspirada en el arte de saborear la vida, <span class="font-logo">Carmel</span> nació para quienes encuentran alegría en los momentos más simples y eligen vivirlos plenamente.',
      cta_shop: "Ver la Colección",
      cta_story: "Nuestra Historia",
      story_teaser:
        "Cada frasco y botella se hace en pequeños lotes, con el mismo cuidado que le darías a algo hecho para tu propia mesa. CARMEL Goods es para las mañanas tranquilas, las comidas compartidas y los momentos simples que vale la pena saborear, una gota, una untada a la vez.",
      fan_favorites: "Favoritos",
      featured_heading: "Productos Destacados",
      product_pumpkin_name: "Especias de Calabaza",
      product_pumpkin_desc:
        "Cálidas especias de otoño mezcladas con calabaza real y canela, ideales para lattes, repostería y waffles.",
      product_honeycinnamon_name: "Miel y Canela",
      product_honeycinnamon_desc:
        "Miel dorada infusionada lentamente con canela de Ceilán, perfecta tanto en café como en té.",
      product_garlicchili_name: "Ajo y Chile Crujiente",
      product_garlicchili_desc:
        "Ajo asado y hojuelas de chile crujiente mezcladas en una mantequilla cremosa, con un toque salado y crujiente.",
      product_mixedberries_name: "Frutos Rojos",
      product_mixedberries_desc:
        "Frutos rojos madurados al sol, cocidos a fuego lento hasta lograr un jarabe frutal y brillante para bebidas y postres.",
      cta_heading: "¿Listo para Saborear Algo Nuevo?",
      cta_text:
        "Explora toda la línea de jarabes y mantequillas saborizadas en pequeños lotes.",
      cta_button: "Ver Todos los Productos",
    },

    products_page: {
      eyebrow: "La Colección",
      heading: "Jarabes y Mantequillas",
      intro:
        "Hechos en pequeños lotes y pensados para saborear. Explora todos los sabores de la línea CARMEL Goods.",

      syrups_heading: "Jarabes",
      syrups_subtitle: "Jarabes para café, hechos con ingredientes reales",
      butters_heading: "Mantequillas",
      butters_subtitle: "Mantequillas saborizadas, hechas con ingredientes reales",

      pumpkin_name: "Especias de Calabaza",
      pumpkin_desc:
        "Cálidas especias de otoño mezcladas con calabaza real y canela, ideales para lattes, repostería y waffles.",
      brownsugar_name: "Azúcar Morena",
      brownsugar_desc:
        "Un dulzor profundo e intenso que transforma cualquier café, latte o waffle en algo especial.",
      honeycinnamon_name: "Miel y Canela",
      honeycinnamon_desc:
        "Miel dorada infusionada lentamente con canela de Ceilán, perfecta tanto en café como en té.",
      vanilla_name: "Vainilla",
      vanilla_desc:
        "Vainilla clásica de Madagascar, infusionada lentamente para un dulzor suave y aromático en cada taza.",
      mixedberries_syrup_name: "Frutos Rojos",
      mixedberries_syrup_desc:
        "Frutos rojos madurados al sol, cocidos a fuego lento hasta lograr un jarabe frutal y brillante para bebidas y postres.",

      garlicchili_name: "Ajo y Chile",
      garlicchili_desc:
        "Ajo asado y hojuelas de chile crujiente mezcladas en una mantequilla cremosa, con un toque salado y crujiente.",
      chimichurri_name: "Chimichurri",
      chimichurri_desc:
        "Perejil fresco, ajo y un toque de vinagre mezclados en una mantequilla cremosa, con un final herbal y ácido perfecto para carne, pan o vegetales.",
      coffee_name: "Café",
      coffee_desc:
        "Espresso intenso mezclado en una mantequilla cremosa, con un sabor audaz y sutilmente dulce, perfecto en tostadas o derretido sobre panqueques.",
      mixedberries_butter_name: "Frutos Rojos",
      mixedberries_butter_desc:
        "Frutos rojos madurados al sol, mezclados en una mantequilla batida para un sabor naturalmente dulce y frutal.",

      sample_pack_tag: "Paquete de Muestra",
      sample_pack_name: "Paquete de Muestra de Mantequillas",
      sample_pack_desc:
        "¿No puedes decidir? Elige 3 de nuestros 4 sabores de mantequilla en prácticos frascos de 1 oz, perfectos para probar algo nuevo o regalar.",
      flavor_picker_label: "Elige 3 sabores:",
      flavor_garlicchili: "Ajo y Chile",
      flavor_chimichurri: "Chimichurri",
      flavor_coffee: "Café Espresso",
      flavor_mixedberries: "Frutos Rojos",
      flavor_picker_note:
        "Este selector aún es solo visual. Indícanos tus 3 sabores al hacer tu pedido.",
      sample_size_label: "3 &times; frascos de 28g / 1oz",
    },

    about: {
      hero_eyebrow: "Nuestra Filosofía",
      hero_title: "Vive Plenamente.",
      hero_lead:
        '<span class="font-logo">Carmel</span> nació del amor por el desayuno y el ritual de la mañana. Se trata de disfrutar las cosas simples, ser agradecidos y vivir plenamente.',

      breakfast_eyebrow: "Dónde Empezamos",
      breakfast_title: "Todo Empezó con el Desayuno",
      breakfast_p1:
        'Luz de la mañana. Un café servido con calma. Pan tostado, calientito, esperando la mantequilla. Esa es la sensación alrededor de la cual se construyó <span class="font-logo">Carmel</span>.',
      breakfast_p2:
        "Pero el desayuno siempre fue solo el comienzo de la historia, no el límite de la marca.",

      origin_eyebrow: "El Origen",
      origin_title: "Un Sueño de Campo, Vivido en el Mundo Real",
      origin_p1:
        '<span class="font-logo">Carmel</span> comenzó como un sueño despierto: una casa en el campo, un jardín lleno de flores, una vida más lenta y deliciosa, hecha casi todo desde cero.',
      origin_p2:
        'Pero <span class="font-logo">Carmel</span> no romantiza escapar de la vida moderna. Combina ese sueño con la realidad de hoy: el teléfono, la comodidad, el estilo, la vida moderna.',
      origin_line1:
        "Simple y elegante. Cálido y moderno. Comodidad y estilo. Belleza y practicidad. Tradición y modernidad.",
      origin_line2:
        "El sueño no es recrear una vida a la antigua. Es traer esa sensación a la vida de hoy.",

      core_eyebrow: "La Creencia Central",
      core_title: "Los Pequeños Momentos Merecen Gran Atención",
      core_p:
        "Una vida hermosa no está hecha de eventos extraordinarios. Está hecha de pequeños momentos, notados y disfrutados a propósito.",
      core_line:
        "Una buena taza de café. Una vela favorita. Una mesa puesta con sencillez. Una mañana de domingo.",

      clear_eyebrow: "Seamos Claros",
      clear_title: 'Lo Que en Realidad Significa &ldquo;Vivir Plenamente&rdquo;',
      contrast1_not: "No es extravagancia",
      contrast1_is: "Es estar presente",
      contrast2_not: "No es comprar más",
      contrast2_is: "Es notar más",
      contrast3_not: "No es perseguir la perfección",
      contrast3_is: "Es disfrutar lo real",
      contrast4_not: "No es un truco de productividad",
      contrast4_is: "Es permiso para ir más despacio",

      personality_eyebrow: "Nuestra Personalidad",
      personality_title: 'Si <span class="font-logo">Carmel</span> Fuera una Persona',
      personality_p:
        "Imagina a la amiga de gusto impecable que hace que todo se sienta fácil, hermoso y un poco divertido, y que de alguna manera te hace sentir mejor con tu propia vida solo por estar cerca.",
      personality_line:
        "Audaz, pero cálida. Divertida, nunca infantil. Elegante, nunca ostentosa.",

      feeling_eyebrow: "La Sensación",
      feeling_title: "Me Lo Merezco.",
      feeling_signature: "Claro que puedo disfrutarlo.",
      feeling_p:
        "Ni culpa, ni exceso. Solo la tranquila confianza de saber que puedes disfrutar algo hermoso sin tener que explicarlo.",

      next_eyebrow: "Lo Que Viene",
      next_title: "Más Grande que el Desayuno",
      next_p:
        '<span class="font-logo">Carmel</span> es un mundo, no una categoría. Los productos pueden crecer con el tiempo, pero la sensación sigue siendo la misma.',
      next_line: "Comida. Bebidas. Hogar. Cerámica. Velas. Hospitalidad.",

      now_eyebrow: "Ahora Mismo",
      now_title: "Aquí es Donde Estamos Ahora",
      now_p:
        "Hoy, esa sensación vive en botellas de vidrio con jarabe y pequeños frascos de mantequilla, hechos en pequeños lotes.",

      value_smallbatch_title: "Pequeños Lotes",
      value_smallbatch_desc:
        "Hechos en cantidades limitadas para que cada lote reciba la atención que merece.",
      value_care_title: "Hecho con Cuidado",
      value_care_desc:
        "Cada jarabe se cocina a fuego lento y cada mantequilla se bate fresca, lote por lote.",
      value_ingredients_title: "Ingredientes Simples",
      value_ingredients_desc:
        "Ingredientes honestos y reconocibles que dejan que cada sabor brille por sí solo.",
      value_savoring_title: "Hecho para Saborear",
      value_savoring_desc:
        "Creado para las mañanas tranquilas y los momentos compartidos que vale la pena disfrutar sin prisa.",

      cta_heading: "¿Listo para Vivir un Poco Más Pleno?",
      cta_text: "Empieza con una buena taza de café y una botella de algo delicioso.",
      cta_button: "Ver la Colección",
    },

    contact: {
      eyebrow: "Contáctanos",
      title: "Nos Encantaría Saber de Ti",
      intro:
        "¿Tienes preguntas sobre un pedido, ventas al por mayor, o solo quieres saludar? Envíanos un mensaje.",
      label_name: "Nombre",
      placeholder_name: "Tu nombre",
      label_email: "Correo electrónico",
      placeholder_email: "tu@ejemplo.com",
      label_message: "Mensaje",
      placeholder_message: "¿Cómo podemos ayudarte?",
      submit_button: "Enviar Mensaje",
      submit_sending: "Enviando...",
      info_instagram: "Instagram",
      info_email: "Correo Electrónico",
      info_morelinks: "Más Enlaces",
      info_morelinks_text:
        "Espacio para enlaces adicionales: ventas al por mayor, prensa, o una página de enlaces.",
      status_success:
        "¡Gracias por escribirnos! Hemos recibido tu mensaje y te responderemos pronto.",
      status_error:
        "Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo o escríbenos directamente a info@carmelgoods.com.",
    },
  },

  en: {
    nav: {
      home: "Home",
      products: "Products",
      about: "About",
      contact: "Contact",
    },

    common: {
      skip_link: "Skip to main content",
      nav_toggle_aria: "Toggle navigation",
      footer_tagline:
        "A lifestyle brand built on living fully, starting with a good morning.",
      footer_explore: "Explore",
      footer_connect: "Connect",
      footer_rights: "All rights reserved.",
      instagram_aria: "Instagram",
      tag_syrup: "Syrup",
      tag_butter: "Butter",
    },

    whatsapp: {
      aria: "Chat with CARMEL Goods on WhatsApp",
      message: "Hi Carmel Goods, I'd like to ask about your products",
    },

    home: {
      hero_tagline:
        'Inspired by the art of savoring life, <span class="font-logo">Carmel</span> was created for those who find joy in life\'s simplest moments and choose to live it fully.',
      cta_shop: "Shop the Collection",
      cta_story: "Our Story",
      story_teaser:
        "Every jar and bottle is made in small batches, with the kind of care you'd give something made for your own kitchen table. CARMEL Goods is for slow mornings, shared meals, and the simple moments worth savoring, one pour, one spread at a time.",
      fan_favorites: "Fan Favorites",
      featured_heading: "Featured Products",
      product_pumpkin_name: "Pumpkin Spice",
      product_pumpkin_desc:
        "Warm autumn spice blended with real pumpkin and cinnamon for lattes, baking, and waffles.",
      product_honeycinnamon_name: "Honey Cinnamon",
      product_honeycinnamon_desc:
        "Golden honey slow-steeped with Ceylon cinnamon, equally at home in coffee or tea.",
      product_garlicchili_name: "Crispy Garlic and Chili",
      product_garlicchili_desc:
        "Roasted garlic and crispy chili flakes folded into rich, creamy butter for a savory, crunchy finish.",
      product_mixedberries_name: "Mixed Berries",
      product_mixedberries_desc:
        "Sun-ripened berries simmered down into a bright, fruity syrup for drinks and desserts.",
      cta_heading: "Ready to Savor Something New?",
      cta_text: "Explore the full lineup of small-batch syrups and flavored butters.",
      cta_button: "View All Products",
    },

    products_page: {
      eyebrow: "The Collection",
      heading: "Syrups &amp; Butters",
      intro:
        "Small-batch and made for savoring. Browse every flavor in the CARMEL Goods lineup.",

      syrups_heading: "Syrups",
      syrups_subtitle: "Coffee syrups, crafted with real ingredients",
      butters_heading: "Butters",
      butters_subtitle: "Flavored butters, crafted with real ingredients",

      pumpkin_name: "Pumpkin Spice",
      pumpkin_desc:
        "Warm autumn spice blended with real pumpkin and cinnamon for lattes, baking, and waffles.",
      brownsugar_name: "Brown Sugar",
      brownsugar_desc:
        "Deep, rich sweetness that turns any coffee, latte, or waffle stack into something special.",
      honeycinnamon_name: "Honey Cinnamon",
      honeycinnamon_desc:
        "Golden honey slow-steeped with Ceylon cinnamon, equally at home in coffee or tea.",
      vanilla_name: "Vanilla",
      vanilla_desc:
        "Classic Madagascar vanilla, slow-steeped for a smooth, fragrant sweetness in every cup.",
      mixedberries_syrup_name: "Mixed Berries",
      mixedberries_syrup_desc:
        "Sun-ripened berries simmered down into a bright, fruity syrup for drinks and desserts.",

      garlicchili_name: "Garlic and Chili",
      garlicchili_desc:
        "Roasted garlic and crispy chili flakes folded into rich, creamy butter for a savory, crunchy finish.",
      chimichurri_name: "Chimichurri",
      chimichurri_desc:
        "Fresh parsley, garlic, and a splash of vinegar swirled into creamy butter for a herby, tangy finish on steak, bread, or veggies.",
      coffee_name: "Coffee",
      coffee_desc:
        "Rich espresso folded into creamy butter for a bold, subtly sweet spread that's perfect on toast or melted over pancakes.",
      mixedberries_butter_name: "Mixed Berries",
      mixedberries_butter_desc:
        "Sun-ripened berries swirled into whipped butter for a naturally sweet, fruity spread.",

      sample_pack_tag: "Sample Pack",
      sample_pack_name: "Butter Sample Pack",
      sample_pack_desc:
        "Can't decide? Pick any 3 of our 4 butter flavors in convenient 1 oz jars, perfect for trying something new or gifting.",
      flavor_picker_label: "Choose 3 flavors:",
      flavor_garlicchili: "Garlic and Chili",
      flavor_chimichurri: "Chimichurri",
      flavor_coffee: "Espresso Coffee",
      flavor_mixedberries: "Mixed Berries",
      flavor_picker_note:
        "This selector is UI-only for now. Note your 3 flavors when you order.",
      sample_size_label: "3 &times; 28g / 1oz jars",
    },

    about: {
      hero_eyebrow: "Our Philosophy",
      hero_title: "Live Fully.",
      hero_lead:
        '<span class="font-logo">Carmel</span> began with a love of breakfast and the morning ritual. It\'s about enjoying the simple things, being thankful, and living fully.',

      breakfast_eyebrow: "Where We Began",
      breakfast_title: "It Started With Breakfast",
      breakfast_p1:
        'Morning light. A slow pour of coffee. Toast, warm, waiting for butter. That\'s the feeling <span class="font-logo">Carmel</span> was built around.',
      breakfast_p2:
        "But breakfast was only ever the beginning of the story, not the edge of the brand.",

      origin_eyebrow: "The Origin",
      origin_title: "A Country Dream, Lived in the Real World",
      origin_p1:
        '<span class="font-logo">Carmel</span> started as a daydream: a house in the country, a garden full of flowers, a slower and more delicious kind of life made mostly from scratch.',
      origin_p2:
        '<span class="font-logo">Carmel</span> doesn\'t romanticize escaping modern life. It combines that dream with the reality of today: the phone, convenience, style, modern life.',
      origin_line1:
        "Simple and elevated. Warm and modern. Comfort and style. Beauty and practicality. Tradition and modernity.",
      origin_line2:
        "The dream isn't to recreate an old-fashioned life. It's to bring that feeling into this one.",

      core_eyebrow: "The Core Belief",
      core_title: "Small Moments Deserve Big Attention",
      core_p:
        "A beautiful life isn't made of extraordinary events. It's made of little ones, noticed and enjoyed on purpose.",
      core_line:
        "A good cup of coffee. A favorite candle. A table set simply. A Sunday morning.",

      clear_eyebrow: "Let's Be Clear",
      clear_title: 'What &ldquo;Live Fully&rdquo; Actually Means',
      contrast1_not: "Not extravagance",
      contrast1_is: "Just presence",
      contrast2_not: "Not buying more",
      contrast2_is: "Noticing more",
      contrast3_not: "Not chasing perfect",
      contrast3_is: "Enjoying real",
      contrast4_not: "Not a productivity hack",
      contrast4_is: "Permission to slow down",

      personality_eyebrow: "Our Personality",
      personality_title: 'If <span class="font-logo">Carmel</span> Were a Person',
      personality_p:
        "Picture the friend with impeccable taste who makes everything feel easy, beautiful, and a little bit fun, and somehow makes you feel better about your own life just by being around.",
      personality_line: "Bold, yet warm. Playful, never childish. Stylish, never showy.",

      feeling_eyebrow: "The Feeling",
      feeling_title: "Me Lo Merezco.",
      feeling_signature: "Of course I can enjoy this.",
      feeling_p:
        "Not guilt, not indulgence. Just the quiet confidence that you're allowed to enjoy something beautiful without explaining yourself.",

      next_eyebrow: "What's Next",
      next_title: "Bigger Than Breakfast",
      next_p:
        '<span class="font-logo">Carmel</span> is a world, not a category. The products can grow over time, but the feeling stays the same.',
      next_line: "Food. Drinks. Home. Ceramics. Candles. Hospitality.",

      now_eyebrow: "Right Now",
      now_title: "Here's Where We Actually Are",
      now_p:
        "Today, that feeling lives in glass bottles of syrup and small jars of butter, made in small batches.",

      value_smallbatch_title: "Small-Batch",
      value_smallbatch_desc:
        "Made in limited quantities so every batch gets the attention it deserves.",
      value_care_title: "Made With Care",
      value_care_desc:
        "Every syrup simmers on the stove and every butter is whipped fresh, batch by batch.",
      value_ingredients_title: "Simple Ingredients",
      value_ingredients_desc:
        "Honest, recognizable ingredients that let each flavor shine on its own.",
      value_savoring_title: "Made for Savoring",
      value_savoring_desc:
        "Created for the slow mornings and shared moments worth lingering over.",

      cta_heading: "Ready to Live a Little Fuller?",
      cta_text: "Start with a good cup of coffee and a bottle of something delicious.",
      cta_button: "Shop the Collection",
    },

    contact: {
      eyebrow: "Get in Touch",
      title: "We'd Love to Hear From You",
      intro:
        "Questions about an order, wholesale, or just want to say hi? Send a message below.",
      label_name: "Name",
      placeholder_name: "Your name",
      label_email: "Email",
      placeholder_email: "you@example.com",
      label_message: "Message",
      placeholder_message: "How can we help?",
      submit_button: "Send Message",
      submit_sending: "Sending...",
      info_instagram: "Instagram",
      info_email: "Email",
      info_morelinks: "More Links",
      info_morelinks_text:
        "Placeholder for additional links: wholesale inquiries, press, or a link-in-bio page.",
      status_success:
        "Thanks for reaching out! We've received your message and will get back to you soon.",
      status_error:
        "Something went wrong sending your message. Please try again or email us directly at info@carmelgoods.com.",
    },
  },
};
