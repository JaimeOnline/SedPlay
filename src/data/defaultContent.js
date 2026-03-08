/**
 * Contenido por defecto del juego:
 * - type: "truth" | "dare" | "card"
 * - category: "rompehielos" | "romantico" | "picante" | "extremo" | "locuras"
 * - intensity: "suave" | "medio" | "alto"
 */

export const defaultItems = [
    // VERDADES - SUAVE
    {
        id: "t1",
        type: "truth",
        category: "rompehielos",
        intensity: "suave",
        text: "¿Cuál fue tu primer crush famoso?",
    },
    {
        id: "t2",
        type: "truth",
        category: "romantico",
        intensity: "suave",
        text: "¿Te gusta más dar abrazos o recibirlos?",
    },
    // RETOS - SUAVE
    {
        id: "d1",
        type: "dare",
        category: "rompehielos",
        intensity: "suave",
        text: "Imita la risa de alguien del grupo durante 10 segundos.",
    },
    {
        id: "d2",
        type: "dare",
        category: "romantico",
        intensity: "suave",
        text: "Mira a los ojos a la persona de tu elección durante 15 segundos sin reír.",
    },
    // VERDADES - MEDIO
    {
        id: "t3",
        type: "truth",
        category: "picante",
        intensity: "medio",
        text: "¿Cuál ha sido el lugar más raro donde has besado a alguien?",
    },
    {
        id: "t4",
        type: "truth",
        category: "locuras",
        intensity: "medio",
        text: "¿Has enviado alguna vez fotos subidas de tono?",
    },
    // RETOS - MEDIO
    {
        id: "d3",
        type: "dare",
        category: "picante",
        intensity: "medio",
        text: "Dale un beso en la mejilla a la persona que tú elijas.",
    },
    {
        id: "d4",
        type: "dare",
        category: "locuras",
        intensity: "medio",
        text: "Susurra algo picante al oído de la persona que tengas a la derecha.",
    },
    // VERDADES - ALTO (recuerda mantener tú el tono que quieras)
    {
        id: "t5",
        type: "truth",
        category: "extremo",
        intensity: "alto",
        text: "¿Cuál ha sido tu fantasía más atrevida que aún no has cumplido?",
    },
    // RETOS - ALTO
    {
        id: "d5",
        type: "dare",
        category: "extremo",
        intensity: "alto",
        text: "Cuenta al grupo, con detalle, una experiencia sexual que recuerdes mucho.",
    },

    // CARTAS - mezcla de acciones/preguntas
    {
        id: "c1",
        type: "card",
        category: "rompehielos",
        intensity: "suave",
        text: "Todos cuentan una anécdota divertida que les haya pasado en una cita.",
    },
    {
        id: "c2",
        type: "card",
        category: "romantico",
        intensity: "suave",
        text: "Di en voz alta tres cosas que te parezcan atractivas de la persona que tienes a tu derecha.",
    },
    {
        id: "c3",
        type: "card",
        category: "picante",
        intensity: "medio",
        text: "Cada jugador dice una palabra que asocie con 'placer'. Si alguien repite palabra, bebe un trago.",
    },
    {
        id: "c4",
        type: "card",
        category: "locuras",
        intensity: "medio",
        text: "El grupo inventa un reto para ti. Puedes aceptarlo o beber dos tragos.",
    },
    {
        id: "c5",
        type: "card",
        category: "extremo",
        intensity: "alto",
        text: "Elige a alguien y cuéntale en privado una fantasía que hayas tenido con él/ella o que podrías tener.",
    },

    /* ---------- ROMPEHIELOS – SUAVE ---------- */
    {
        id: "t_rompehielos_suave_1", type: "truth", category: "rompehielos", intensity: "suave",
        text: "¿Cuál fue tu primera impresión cuando nos conocimos?"
    },
    {
        id: "t_rompehielos_suave_2", type: "truth", category: "rompehielos", intensity: "suave",
        text: "¿Tienes alguna mascota? ¿Cómo se llama?"
    },
    {
        id: "t_rompehielos_suave_3", type: "truth", category: "rompehielos", intensity: "suave",
        text: "¿Cuál es tu comida favorita y por qué?"
    },
    {
        id: "t_rompehielos_suave_4", type: "truth", category: "rompehielos", intensity: "suave",
        text: "¿Qué canción siempre te pone de buen humor?"
    },
    {
        id: "t_rompehielos_suave_5", type: "truth", category: "rompehielos", intensity: "suave",
        text: "¿Cuál es tu serie o película de comedia favorita?"
    },
    {
        id: "t_rompehielos_suave_6", type: "truth", category: "rompehielos", intensity: "suave",
        text: "¿Qué hobby te gustaría probar pero aún no lo has hecho?"
    },
    {
        id: "t_rompehielos_suave_7", type: "truth", category: "rompehielos", intensity: "suave",
        text: "Si pudieras viajar a cualquier lugar del mundo, ¿a dónde irías?"
    },
    {
        id: "t_rompehielos_suave_8", type: "truth", category: "rompehielos", intensity: "suave",
        text: "¿Tienes algún talento oculto?"
    },
    {
        id: "t_rompehielos_suave_9", type: "truth", category: "rompehielos", intensity: "suave",
        text: "¿Cuál fue tu último sueño y cómo lo recuerdas?"
    },
    {
        id: "t_rompehielos_suave_10", type: "truth", category: "rompehielos", intensity: "suave",
        text: "¿Qué app en tu móvil usas más?"
    },

    {
        id: "d_rompehielos_suave_1", type: "dare", category: "rompehielos", intensity: "suave",
        text: "Haz una mueca graciosa y manténla 5 segundos."
    },
    {
        id: "d_rompehielos_suave_2", type: "dare", category: "rompehielos", intensity: "suave",
        text: "Cuenta un chiste y trata de que la otra persona ría."
    },
    {
        id: "d_rompehielos_suave_3", type: "dare", category: "rompehielos", intensity: "suave",
        text: "Imita a tu personaje favorito de una serie durante 10 seg."
    },
    {
        id: "d_rompehielos_suave_4", type: "dare", category: "rompehielos", intensity: "suave",
        text: "Da vuelta a la habitación con los ojos vendados y toca un objeto; la otra persona debe adivinar qué es."
    },
    {
        id: "d_rompehielos_suave_5", type: "dare", category: "rompehielos", intensity: "suave",
        text: "Haz 3 respiraciones profundas mientras miras a la otra persona a los ojos."
    },
    {
        id: "d_rompehielos_suave_6", type: "dare", category: "rompehielos", intensity: "suave",
        text: "Menciona 5 cosas que te gustan de la persona que tienes al lado."
    },
    {
        id: "d_rompehielos_suave_7", type: "dare", category: "rompehielos", intensity: "suave",
        text: "Dibuja una carita feliz en la palma de la mano de tu pareja."
    },
    {
        id: "d_rompehielos_suave_8", type: "dare", category: "rompehielos", intensity: "suave",
        text: "Canta el estribillo de tu canción favorita (no hace falta la letra completa)."
    },
    {
        id: "d_rompehielos_suave_9", type: "dare", category: "rompehielos", intensity: "suave",
        text: "Haz una pequeña coreografía de 5 segundos usando solo los brazos."
    },
    {
        id: "d_rompehielos_suave_10", type: "dare", category: "rompehielos", intensity: "suave",
        text: "Cuenta algo que te haya hecho reír mucho esta semana."
    },

    /* ---------- ROMPEHIELOS – MEDIO ---------- */
    {
        id: "t_rompehielos_medio_1", type: "truth", category: "rompehielos", intensity: "medio",
        text: "¿Cuál es la cosa más vergonzosa que te ha pasado en una cita?"
    },
    {
        id: "t_rompehielos_medio_2", type: "truth", category: "rompehielos", intensity: "medio",
        text: "¿Alguna vez has tenido un crush con alguien del mismo grupo de amigos?"
    },
    {
        id: "t_rompehielos_medio_3", type: "truth", category: "rompehielos", intensity: "medio",
        text: "¿Qué hábito tuyo te gustaría cambiar?"
    },
    {
        id: "t_rompehielos_medio_4", type: "truth", category: "rompehielos", intensity: "medio",
        text: "¿Cuál fue la última mentira piadosa que contaste?"
    },
    {
        id: "t_rompehielos_medio_5", type: "truth", category: "rompehielos", intensity: "medio",
        text: "¿Te ha sorprendido alguna vez el final de una película?"
    },
    {
        id: "t_rompehielos_medio_6", type: "truth", category: "rompehielos", intensity: "medio",
        text: "¿Hay alguna canción que te haga ponerte nostálgico/a?"
    },
    {
        id: "t_rompehielos_medio_7", type: "truth", category: "rompehielos", intensity: "medio",
        text: "¿Cuál fue tu peor caso de resaca?"
    },
    {
        id: "t_rompehielos_medio_8", type: "truth", category: "rompehielos", intensity: "medio",
        text: "¿Has fingido alguna vez estar enfermo para evitar una responsabilidad?"
    },
    {
        id: "t_rompehielos_medio_9", type: "truth", category: "rompehielos", intensity: "medio",
        text: "¿Cuál es el recuerdo más embarazoso que tienes de la infancia?"
    },
    {
        id: "t_rompehielos_medio_10", type: "truth", category: "rompehielos", intensity: "medio",
        text: "¿Alguna vez has enviado un mensaje al destinatario equivocado?"
    },

    {
        id: "d_rompehielos_medio_1", type: "dare", category: "rompehielos", intensity: "medio",
        text: "Baila 15 segundos al ritmo de la canción que suene en este momento."
    },
    {
        id: "d_rompehielos_medio_2", type: "dare", category: "rompehielos", intensity: "medio",
        text: "Haz un selfie gracioso y envíalo a la otra persona sin decir por qué."
    },
    {
        id: "d_rompehielos_medio_3", type: "dare", category: "rompehielos", intensity: "medio",
        text: "Imita la forma de hablar de tu mejor amigo durante 20 seg."
    },
    {
        id: "d_rompehielos_medio_4", type: "dare", category: "rompehielos", intensity: "medio",
        text: "Cuenta una anécdota totalmente inventada pero con mucho detalle; la otra persona debe decidir si es real o no."
    },
    {
        id: "d_rompehielos_medio_5", type: "dare", category: "rompehielos", intensity: "medio",
        text: "Haz una mini presentación de 30 seg. sobre ti como si fueras un anuncio de televisión."
    },
    {
        id: "d_rompehielos_medio_6", type: "dare", category: "rompehielos", intensity: "medio",
        text: "Cierra los ojos y deja que la otra persona te toque la mejilla; adivina qué parte del cuerpo es."
    },
    {
        id: "d_rompehielos_medio_7", type: "dare", category: "rompehielos", intensity: "medio",
        text: "Recita un poema (puede ser inventado) mientras la otra persona te aplaude al final."
    },
    {
        id: "d_rompehielos_medio_8", type: "dare", category: "rompehielos", intensity: "medio",
        text: "Desliza tu mano por la espalda de la otra persona durante 5 seg sin decir nada."
    },
    {
        id: "d_rompehielos_medio_9", type: "dare", category: "rompehielos", intensity: "medio",
        text: "Dile a la otra persona cuál es tu mayor miedo y por qué."
    },
    {
        id: "d_rompehielos_medio_10", type: "dare", category: "rompehielos", intensity: "medio",
        text: "Mira a la otra persona fijamente durante 10 seg sin parpadear (puedes parpadear una vez tras terminar)."
    },

    /* ---------- ROMPEHIELOS – ALTO ---------- */
    {
        id: "t_rompehielos_alto_1", type: "truth", category: "rompehielos", intensity: "alto",
        text: "¿Has tenido alguna vez una relación secreta sin que lo supiera nadie?"
    },
    {
        id: "t_rompehielos_alto_2", type: "truth", category: "rompehielos", intensity: "alto",
        text: "¿Cuál es la fantasía más atrevida que jamás le has confesado a alguien?"
    },
    {
        id: "t_rompehielos_alto_3", type: "truth", category: "rompehielos", intensity: "alto",
        text: "¿Has mentido alguna vez para salir de una situación íntima?"
    },
    {
        id: "t_rompehielos_alto_4", type: "truth", category: "rompehielos", intensity: "alto",
        text: "¿Alguna vez has enviado fotos íntimas y te arrepentiste?"
    },
    {
        id: "t_rompehielos_alto_5", type: "truth", category: "rompehielos", intensity: "alto",
        text: "¿Cuál es el lugar más público donde has tenido intimidad?"
    },
    {
        id: "t_rompehielos_alto_6", type: "truth", category: "rompehielos", intensity: "alto",
        text: "¿Has usado alguna vez juguetes eróticos? ¿Cuál?"
    },
    {
        id: "t_rompehielos_alto_7", type: "truth", category: "rompehielos", intensity: "alto",
        text: "¿Te has arrepentido alguna vez de haber compartido algo demasiado personal?"
    },
    {
        id: "t_rompehielos_alto_8", type: "truth", category: "rompehielos", intensity: "alto",
        text: "¿Has tenido alguna vez una experiencia sexual que aún no has contado?"
    },
    {
        id: "t_rompehielos_alto_9", type: "truth", category: "rompehielos", intensity: "alto",
        text: "¿Cuál es la fantasía que nunca has logrado cumplir?"
    },
    {
        id: "t_rompehielos_alto_10", type: "truth", category: "rompehielos", intensity: "alto",
        text: "¿Te atrae la idea de explorar el intercambio de roles?"
    },

    {
        id: "d_rompehielos_alto_1", type: "dare", category: "rompehielos", intensity: "alto",
        text: "Besa la mano de la otra persona y mantén la mirada durante 5 seg."
    },
    {
        id: "d_rompehielos_alto_2", type: "dare", category: "rompehielos", intensity: "alto",
        text: "Realiza una caricia ligera en la zona lumbar de tu pareja durante 10 seg."
    },
    {
        id: "d_rompehielos_alto_3", type: "dare", category: "rompehielos", intensity: "alto",
        text: "Dile a la otra persona algo que nunca le habías contado antes."
    },
    {
        id: "d_rompehielos_alto_4", type: "dare", category: "rompehielos", intensity: "alto",
        text: "Susurra “te deseo” al oído de tu pareja con la voz más suave posible."
    },
    {
        id: "d_rompehielos_alto_5", type: "dare", category: "rompehielos", intensity: "alto",
        text: "Permite que la otra persona te dé una ligera presión con los dedos en la nuca durante 15 seg."
    },
    {
        id: "d_rompehielos_alto_6", type: "dare", category: "rompehielos", intensity: "alto",
        text: "Haz un masaje de 30 seg en la mano de la otra persona."
    },
    {
        id: "d_rompehielos_alto_7", type: "dare", category: "rompehielos", intensity: "alto",
        text: "Colócate de espaldas y permite que la otra persona tire suavemente de tu camiseta (solo un tirón)."
    },
    {
        id: "d_rompehielos_alto_8", type: "dare", category: "rompehielos", intensity: "alto",
        text: "Mira intensamente a los ojos de tu pareja durante 10 seg sin parpadear (puedes cerrar los ojos al final)."
    },
    {
        id: "d_rompehielos_alto_9", type: "dare", category: "rompehielos", intensity: "alto",
        text: "Dale una palmada ligera en la parte posterior de la cabeza de tu pareja y di “bien hecho”.",
    },
    {
        id: "d_rompehielos_alto_10", type: "dare", category: "rompehielos", intensity: "alto",
        text: "Permite que tu pareja te roce el cuello con los labios por 5 seg.",
    },

    /* ---------- ROMANTICO – SUAVE ---------- */
    {
        id: "t_romantico_suave_1", type: "truth", category: "romantico", intensity: "suave",
        text: "¿Cuál es tu recuerdo favorito de una cita con tu pareja?"
    },
    {
        id: "t_romantico_suave_2", type: "truth", category: "romantico", intensity: "suave",
        text: "¿Qué gesto romántico te hace derretirte al instante?"
    },
    {
        id: "t_romantico_suave_3", type: "truth", category: "romantico", intensity: "suave",
        text: "¿Prefieres una cena a la luz de las velas o una caminata bajo la luna?"
    },
    {
        id: "t_romantico_suave_4", type: "truth", category: "romantico", intensity: "suave",
        text: "¿Cuál es la canción que asocias con tu relación?"
    },
    {
        id: "t_romantico_suave_5", type: "truth", category: "romantico", intensity: "suave",
        text: "¿Qué detalle pequeño pero significativo te ha hecho sentir amado/a?"
    },
    {
        id: "t_romantico_suave_6", type: "truth", category: "romantico", intensity: "suave",
        text: "¿Te gustan más los abrazos largos o los besos rápidos?"
    },
    {
        id: "t_romantico_suave_7", type: "truth", category: "romantico", intensity: "suave",
        text: "¿Qué película romántica quisieras que fuera como tu historia?"
    },
    {
        id: "t_romantico_suave_8", type: "truth", category: "romantico", intensity: "suave",
        text: "¿Cuál es tu flor favorita y por qué?"
    },
    {
        id: "t_romantico_suave_9", type: "truth", category: "romantico", intensity: "suave",
        text: "Si pudieras escribir una carta de amor, ¿qué dirías al inicio?"
    },
    {
        id: "t_romantico_suave_10", type: "truth", category: "romantico", intensity: "suave",
        text: "¿Cuál fue el primer detalle que notaste de tu pareja?"
    },

    {
        id: "d_romantico_suave_1", type: "dare", category: "romantico", intensity: "suave",
        text: "Da un abrazo de 30 segundos y susúrrale algo bonito al oído."
    },
    {
        id: "d_romantico_suave_2", type: "dare", category: "romantico", intensity: "suave",
        text: "Haz una pequeña serenata cantando (o tarareando) la canción que más les gusta."
    },
    {
        id: "d_romantico_suave_3", type: "dare", category: "romantico", intensity: "suave",
        text: "Escribe en una hoja 3 cosas que te encantan de tu pareja y entrégasela."
    },
    {
        id: "d_romantico_suave_4", type: "dare", category: "romantico", intensity: "suave",
        text: "Coloca una rosa en la mano de la otra persona y mantén contacto visual durante 5 seg."
    },
    {
        id: "d_romantico_suave_5", type: "dare", category: "romantico", intensity: "suave",
        text: "Dile a la otra persona cuál es tu recuerdo favorito de los dos y descríbelo."
    },
    {
        id: "d_romantico_suave_6", type: "dare", category: "romantico", intensity: "suave",
        text: "Haz una caricia ligera en la mejilla de tu pareja durante 10 seg."
    },
    {
        id: "d_romantico_suave_7", type: "dare", category: "romantico", intensity: "suave",
        text: "Cierra los ojos, respira 5 veces profundo con la otra persona y abre los ojos al mismo tiempo."
    },
    {
        id: "d_romantico_suave_8", type: "dare", category: "romantico", intensity: "suave",
        text: "Cómprale una pequeña chocolatina y ofrécela como “premio” por algo que hizo bien."
    },
    {
        id: "d_romantico_suave_9", type: "dare", category: "romantico", intensity: "suave",
        text: "Haz una mirada cómplice a la otra persona durante 8 seg sin reírte."
    },
    {
        id: "d_romantico_suave_10", type: "dare", category: "romantico", intensity: "suave",
        text: "Dile a tu pareja cuál es la frase más romántica que has escuchado y por qué te gusta."
    },

    /* ---------- ROMANTICO – MEDIO ---------- */
    {
        id: "t_romantico_medio_1", type: "truth", category: "romantico", intensity: "medio",
        text: "¿Cuál ha sido el momento más emotivo que han compartido?"
    },
    {
        id: "t_romantico_medio_2", type: "truth", category: "romantico", intensity: "medio",
        text: "¿Te has puesto celoso/a alguna vez? ¿Por qué?"
    },
    {
        id: "t_romantico_medio_3", type: "truth", category: "romantico", intensity: "medio",
        text: "¿Cuál es el regalo más significativo que hayas recibido de tu pareja?"
    },
    {
        id: "t_romantico_medio_4", type: "truth", category: "romantico", intensity: "medio",
        text: "¿Qué es lo que más admiras en tu pareja?"
    },
    {
        id: "t_romantico_medio_5", type: "truth", category: "romantico", intensity: "medio",
        text: "¿Cuál es la película romántica que más te emociona?"
    },
    {
        id: "t_romantico_medio_6", type: "truth", category: "romantico", intensity: "medio",
        text: "¿Has pensado alguna vez en dar un “break” y por qué?"
    },
    {
        id: "t_romantico_medio_7", type: "truth", category: "romantico", intensity: "medio",
        text: "¿Cuál es la canción que te hace llorar cuando la escuchas con tu pareja?"
    },
    {
        id: "t_romantico_medio_8", type: "truth", category: "romantico", intensity: "medio",
        text: "¿Te gustaría vivir en otro país con tu pareja? ¿Cuál?"
    },
    {
        id: "t_romantico_medio_9", type: "truth", category: "romantico", intensity: "medio",
        text: "¿Qué es lo más loco que harías por amor?"
    },
    {
        id: "t_romantico_medio_10", type: "truth", category: "romantico", intensity: "medio",
        text: "¿Has escrito alguna carta de amor? ¿Qué decía?"
    },

    {
        id: "d_romantico_medio_1", type: "dare", category: "romantico", intensity: "medio",
        text: "Escribe una frase de amor en la palma de la mano de tu pareja y aléjala durante 10 seg."
    },
    {
        id: "d_romantico_medio_2", type: "dare", category: "romantico", intensity: "medio",
        text: "Dale un masaje de 45 seg en los hombros."
    },
    {
        id: "d_romantico_medio_3", type: "dare", category: "romantico", intensity: "medio",
        text: "Cierra los ojos y describe en detalle la última vez que se abrazaron."
    },
    {
        id: "d_romantico_medio_4", type: "dare", category: "romantico", intensity: "medio",
        text: "Haz un pequeño “baile” de 20 seg con la otra persona, sin música."
    },
    {
        id: "d_romantico_medio_5", type: "dare", category: "romantico", intensity: "medio",
        text: "Dile a tu pareja algo que nunca te atreviste a decir antes."
    },
    {
        id: "d_romantico_medio_6", type: "dare", category: "romantico", intensity: "medio",
        text: "Mira fijamente a los ojos de tu pareja durante 12 seg sin parpadear (una vez al final está bien)."
    },
    {
        id: "d_romantico_medio_7", type: "dare", category: "romantico", intensity: "medio",
        text: "Coloca la mano sobre el corazón de tu pareja y mantén la contacto durante 8 seg."
    },
    {
        id: "d_romantico_medio_8", type: "dare", category: "romantico", intensity: "medio",
        text: "Lee en voz alta la frase más romántica que recuerdes de cualquier canción."
    },
    {
        id: "d_romantico_medio_9", type: "dare", category: "romantico", intensity: "medio",
        text: "Crea un apodo cariñoso para la otra persona y úsalo por los próximos 5 minutos."
    },
    {
        id: "d_romantico_medio_10", type: "dare", category: "romantico", intensity: "medio",
        text: "Recita un poema inventado (mínimo 4 líneas) dedicado a tu pareja."
    },

    /* ---------- ROMANTICO – ALTO ---------- */
    {
        id: "t_romantico_alto_1", type: "truth", category: "romantico", intensity: "alto",
        text: "¿Alguna vez has pensado en casarte? ¿Qué te detiene?"
    },
    {
        id: "t_romantico_alto_2", type: "truth", category: "romantico", intensity: "alto",
        text: "¿Te gustaría mudarte con tu pareja? ¿A dónde?"
    },
    {
        id: "t_romantico_alto_3", type: "truth", category: "romantico", intensity: "alto",
        text: "¿Cuál es el gesto más romántico que has hecho por alguien?"
    },
    {
        id: "t_romantico_alto_4", type: "truth", category: "romantico", intensity: "alto",
        text: "¿Te sientes vulnerable al compartir tus sentimientos?"
    },
    {
        id: "t_romantico_alto_5", type: "truth", category: "romantico", intensity: "alto",
        text: "¿Alguna vez has escrito una lista de “cosas que amo de ti”?"
    },
    {
        id: "t_romantico_alto_6", type: "truth", category: "romantico", intensity: "alto",
        text: "¿Qué sacrificio harías por tu pareja?"
    },
    {
        id: "t_romantico_alto_7", type: "truth", category: "romantico", intensity: "alto",
        text: "¿Has pensado alguna vez en hacer un viaje largo sin saber cuándo volver?"
    },
    {
        id: "t_romantico_alto_8", type: "truth", category: "romantico", intensity: "alto",
        text: "¿Qué canción consideras el himno de vuestra relación?"
    },
    {
        id: "t_romantico_alto_9", type: "truth", category: "romantico", intensity: "alto",
        text: "Si tuvieras que describir a tu pareja con una sola palabra, ¿cuál sería?"
    },
    {
        id: "t_romantico_alto_10", type: "truth", category: "romantico", intensity: "alto",
        text: "¿Te gustaría vivir una experiencia romántica de “casa de árbol” con tu pareja?"
    },

    {
        id: "d_romantico_alto_1", type: "dare", category: "romantico", intensity: "alto",
        text: "Deja que tu pareja te dé una caricia suave en la espalda durante 20 seg."
    },
    {
        id: "d_romantico_alto_2", type: "dare", category: "romantico", intensity: "alto",
        text: "Susurra un deseo secreto al oído de tu pareja."
    },
    {
        id: "d_romantico_alto_3", type: "dare", category: "romantico", intensity: "alto",
        text: "Haz una promesa de 1 mes (ej.: “te daré un masaje cada viernes”)."
    },
    {
        id: "d_romantico_alto_4", type: "dare", category: "romantico", intensity: "alto",
        text: "Escribe un mini‑poema (máximo 6 líneas) en la mano de tu pareja y léelo en voz alta."
    },
    {
        id: "d_romantico_alto_5", type: "dare", category: "romantico", intensity: "alto",
        text: "Baila lentamente con tu pareja, sin música, solo con la respiración como ritmo."
    },
    {
        id: "d_romantico_alto_6", type: "dare", category: "romantico", intensity: "alto",
        text: "Cierra los ojos y permite que la otra persona te roze el cuello con una pluma o un dedo durante 15 seg."
    },
    {
        id: "d_romantico_alto_7", type: "dare", category: "romantico", intensity: "alto",
        text: "Dale a tu pareja un abrazo de cuerpo completo durante 40 seg."
    },
    {
        id: "d_romantico_alto_8", type: "dare", category: "romantico", intensity: "alto",
        text: "Pasa tus dedos suavemente por la espalda de tu pareja mientras le dices tres cosas que admiras de ella."
    },
    {
        id: "d_romantico_alto_9", type: "dare", category: "romantico", intensity: "alto",
        text: "Haz una mirada intensa a los ojos de tu pareja y, sin decir nada, transmite una emoción."
    },
    {
        id: "d_romantico_alto_10", type: "dare", category: "romantico", intensity: "alto",
        text: "Dale a tu pareja un beso en la frente y di “te cuido” en voz baja."
    },

    /* ---------- PICANTE – SUAVE ---------- */
    {
        id: "t_picante_suave_1", type: "truth", category: "picante", intensity: "suave",
        text: "¿Qué te gusta más, los besos suaves o los más apasionados?"
    },
    {
        id: "t_picante_suave_2", type: "truth", category: "picante", intensity: "suave",
        text: "¿Has sentido mariposas al ver a tu pareja?"
    },
    {
        id: "t_picante_suave_3", type: "truth", category: "picante", intensity: "suave",
        text: "¿Te gustaría que la primera cita fuera en un lugar romántico?"
    },
    {
        id: "t_picante_suave_4", type: "truth", category: "picante", intensity: "suave",
        text: "¿Cuál es tu parte favorita del cuerpo de tu pareja?"
    },
    {
        id: "t_picante_suave_5", type: "truth", category: "picante", intensity: "suave",
        text: "¿Prefieres los susurros al oído o los whistlers?"
    },
    {
        id: "t_picante_suave_6", type: "truth", category: "picante", intensity: "suave",
        text: "¿Cuál ha sido tu primer beso?"
    },
    {
        id: "t_picante_suave_7", type: "truth", category: "picante", intensity: "suave",
        text: "¿Te gustaría probar un masaje con aceites?"
    },
    {
        id: "t_picante_suave_8", type: "truth", category: "picante", intensity: "suave",
        text: "¿Has probado alguna vez los “cócteles afrodisíacos”?"
    },
    {
        id: "t_picante_suave_9", type: "truth", category: "picante", intensity: "suave",
        text: "¿Cuál es tu postura favorita para abrazar?"
    },
    {
        id: "t_picante_suave_10", type: "truth", category: "picante", intensity: "suave",
        text: "¿Te gusta más el calor del sol o el calor de una caricia?"
    },

    {
        id: "d_picante_suave_1", type: "dare", category: "picante", intensity: "suave",
        text: "Haz una caricia ligera en la mano de tu pareja durante 10 seg."
    },
    {
        id: "d_picante_suave_2", type: "dare", category: "picante", intensity: "suave",
        text: "Susurra una frase coqueta al oído de tu pareja."
    },
    {
        id: "d_picante_suave_3", type: "dare", category: "picante", intensity: "suave",
        text: "Dale un beso rápido en la mejilla y sonríe."
    },
    {
        id: "d_picante_suave_4", type: "dare", category: "picante", intensity: "suave",
        text: "Pasa tus dedos suaves por la muñeca de tu pareja durante 5 seg."
    },
    {
        id: "d_picante_suave_5", type: "dare", category: "picante", intensity: "suave",
        text: "Mira a tu pareja a los ojos y decile “me encantas” sin titubear."
    },
    {
        id: "d_picante_suave_6", type: "dare", category: "picante", intensity: "suave",
        text: "Haz una breve respiración sincronizada (inhala 3 seg, exhala 3 seg) con la otra persona."
    },
    {
        id: "d_picante_suave_7", type: "dare", category: "picante", intensity: "suave",
        text: "Dile a tu pareja cuál fue la primera cosa que notaste de ella."
    },
    {
        id: "d_picante_suave_8", type: "dare", category: "picante", intensity: "suave",
        text: "Coloca una pluma en la nuca de tu pareja y muévela suavemente por 7 seg."
    },
    {
        id: "d_picante_suave_9", type: "dare", category: "picante", intensity: "suave",
        text: "Haz una mini‑canción improvisada (2‑3 versos) dedicada a tu pareja."
    },
    {
        id: "d_picante_suave_10", type: "dare", category: "picante", intensity: "suave",
        text: "Da un abrazo corto pero firme y mantén la presión 6 seg."
    },

    /* ---------- PICANTE – MEDIO ---------- */
    {
        id: "t_picante_medio_1", type: "truth", category: "picante", intensity: "medio",
        text: "¿Has tenido alguna vez una fantasía que todavía no has cumplido?"
    },
    {
        id: "t_picante_medio_2", type: "truth", category: "picante", intensity: "medio",
        text: "¿Cuál es la zona más sensible de tu cuerpo?"
    },
    {
        id: "t_picante_medio_3", type: "truth", category: "picante", intensity: "medio",
        text: "¿Te gusta más ser quien da o quien recibe?"
    },
    {
        id: "t_picante_medio_4", type: "truth", category: "picante", intensity: "medio",
        text: "¿Alguna vez has enviado un mensaje atrevido que te arrepentiste?"
    },
    {
        id: "t_picante_medio_5", type: "truth", category: "picante", intensity: "medio",
        text: "¿Te atreverías a probar el juego de “verdad o reto” con premios íntimos?"
    },
    {
        id: "t_picante_medio_6", type: "truth", category: "picante", intensity: "medio",
        text: "¿Qué elemento (luz, música, aroma) consideras imprescindible para una noche íntima?"
    },
    {
        id: "t_picante_medio_7", type: "truth", category: "picante", intensity: "medio",
        text: "¿Has usado algún juguete erótico? ¿Cuál?"
    },
    {
        id: "t_picante_medio_8", type: "truth", category: "picante", intensity: "medio",
        text: "¿Te gustaría probar una sesión de masaje con aceites aromáticos?"
    },
    {
        id: "t_picante_medio_9", type: "truth", category: "picante", intensity: "medio",
        text: "¿Cuál es la palabra que más te excita escuchar?"
    },
    {
        id: "t_picante_medio_10", type: "truth", category: "picante", intensity: "medio",
        text: "¿Te emociona la idea de una cita a oscuras?"
    },

    {
        id: "d_picante_medio_1", type: "dare", category: "picante", intensity: "medio",
        text: "Dale un beso en el cuello y mantén el contacto 8 seg."
    },
    {
        id: "d_picante_medio_2", type: "dare", category: "picante", intensity: "medio",
        text: "Realiza una caricia lenta en la espalda de tu pareja durante 15 seg."
    },
    {
        id: "d_picante_medio_3", type: "dare", category: "picante", intensity: "medio",
        text: "Susurra al oído de tu pareja al menos 3 cosas que te hacen desearla."
    },
    {
        id: "d_picante_medio_4", type: "dare", category: "picante", intensity: "medio",
        text: "Coloca tus manos en el muslo de tu pareja durante 10 seg, sin presionar demasiado."
    },
    {
        id: "d_picante_medio_5", type: "dare", category: "picante", intensity: "medio",
        text: "Haz una mirada profunda a los ojos de tu pareja y mantén la tensión durante 12 seg."
    },
    {
        id: "d_picante_medio_6", type: "dare", category: "picante", intensity: "medio",
        text: "Dale a tu pareja una palmada suave en la parte interna del muslo y di “te deseo”. "
    },
    {
        id: "d_picante_medio_7", type: "dare", category: "picante", intensity: "medio",
        text: "Mueve tus labios a lo largo de su oreja sin besarla, solo rozándola, por 5 seg."
    },
    {
        id: "d_picante_medio_8", type: "dare", category: "picante", intensity: "medio",
        text: "Dile a tu pareja cuál es la posición que más te gustaría probar."
    },
    {
        id: "d_picante_medio_9", type: "dare", category: "picante", intensity: "medio",
        text: "Haz una suave presión con los dedos en la nuca de tu pareja durante 10 seg."
    },
    {
        id: "d_picante_medio_10", type: "dare", category: "picante", intensity: "medio",
        text: "Besa la mano de tu pareja y mantén la mirada durante 7 seg."
    },

    /* ---------- PICANTE – ALTO ---------- */
    {
        id: "t_picante_alto_1", type: "truth", category: "picante", intensity: "alto",
        text: "¿Has probado el “bondage” de forma ligera? ¿Qué te gustó?"
    },
    {
        id: "t_picante_alto_2", type: "truth", category: "picante", intensity: "alto",
        text: "¿Cuál es tu fantasía más atrevida que aún no le has contado a nadie?"
    },
    {
        id: "t_picante_alto_3", type: "truth", category: "picante", intensity: "alto",
        text: "¿Te gustaría experimentar con juguetes de vibración?"
    },
    {
        id: "t_picante_alto_4", type: "truth", category: "picante", intensity: "alto",
        text: "¿Has tenido alguna vez una experiencia íntima en un lugar público?"
    },
    {
        id: "t_picante_alto_5", type: "truth", category: "picante", intensity: "alto",
        text: "¿Qué perfil de erotismo (visual, auditivo, táctil) te excita más?"
    },
    {
        id: "t_picante_alto_6", type: "truth", category: "picante", intensity: "alto",
        text: "¿Has enviado alguna vez fotos íntimas? ¿Cómo te sentiste?"
    },
    {
        id: "t_picante_alto_7", type: "truth", category: "picante", intensity: "alto",
        text: "¿Cuál es la habitación o ambiente más excitante que has imaginado?"
    },
    {
        id: "t_picante_alto_8", type: "truth", category: "picante", intensity: "alto",
        text: "¿Te gustaría probar una sesión de juego de rol (p. ej. “maestro‑esclava”)?"
    },
    {
        id: "t_picante_alto_9", type: "truth", category: "picante", intensity: "alto",
        text: "¿Te excita la idea de ser dominado/a o de dominar?"
    },
    {
        id: "t_picante_alto_10", type: "truth", category: "picante", intensity: "alto",
        text: "¿Has pensado en grabar una escena íntima para verla después?"
    },

    {
        id: "d_picante_alto_1", type: "dare", category: "picante", intensity: "alto",
        text: "Besa suavemente el cuello de tu pareja durante 12 seg."
    },
    {
        id: "d_picante_alto_2", type: "dare", category: "picante", intensity: "alto",
        text: "Haz una caricia lenta y firme en la parte interna del muslo durante 20 seg."
    },
    {
        id: "d_picante_alto_3", type: "dare", category: "picante", intensity: "alto",
        text: "Susurra al oído de tu pareja al menos cinco cosas que te excitan."
    },
    {
        id: "d_picante_alto_4", type: "dare", category: "picante", intensity: "alto",
        text: "Coloca una lenteja de hielo (o objeto frío) sobre la piel de tu pareja durante 8 seg."
    },
    {
        id: "d_picante_alto_5", type: "dare", category: "picante", intensity: "alto",
        text: "Dale a tu pareja una palmada ligera en la parte baja de la espalda y di “te deseo”. "
    },
    {
        id: "d_picante_alto_6", type: "dare", category: "picante", intensity: "alto",
        text: "Mira fijamente a los ojos de tu pareja y, sin decir nada, transmite una orden “acércate”. "
    },
    {
        id: "d_picante_alto_7", type: "dare", category: "picante", intensity: "alto",
        text: "Realiza una respiración profunda sincronizada (inhala 4 seg, exhala 4 seg) con la otra persona durante 3 ciclos."
    },
    {
        id: "d_picante_alto_8", type: "dare", category: "picante", intensity: "alto",
        text: "Desliza tus dedos con movimiento en forma de “S” sobre la zona del pecho de tu pareja durante 10 seg."
    },
    {
        id: "d_picante_alto_9", type: "dare", category: "picante", intensity: "alto",
        text: "Chupa ligeramente el lóbulo de la oreja de tu pareja durante 6 seg."
    },
    {
        id: "d_picante_alto_10", type: "dare", category: "picante", intensity: "alto",
        text: "Dile a tu pareja una confesión sexual que nunca hayas compartido con nadie."
    },

    /* ---------- EXTREMO – SUAVE ---------- */
    {
        id: "t_extremo_suave_1", type: "truth", category: "extremo", intensity: "suave",
        text: "¿Te gustaría probar una sesión de 30 min de masajes en pareja?"
    },
    {
        id: "t_extremo_suave_2", type: "truth", category: "extremo", intensity: "suave",
        text: "¿Alguna vez has sentido curiosidad por el “sensual play” sin llegar al límite?"
    },
    {
        id: "t_extremo_suave_3", type: "truth", category: "extremo", intensity: "suave",
        text: "¿Crees que una luz tenue ayuda a crear más intimidad?"
    },
    {
        id: "t_extremo_suave_4", type: "truth", category: "extremo", intensity: "suave",
        text: "¿Te gusta más el contacto visual o el tacto al iniciar una escena íntima?"
    },
    {
        id: "t_extremo_suave_5", type: "truth", category: "extremo", intensity: "suave",
        text: "¿Has usado aceites perfumados en algún masaje?"
    },
    {
        id: "t_extremo_suave_6", type: "truth", category: "extremo", intensity: "suave",
        text: "¿Qué aroma te resulta más relajante?"
    },
    {
        id: "t_extremo_suave_7", type: "truth", category: "extremo", intensity: "suave",
        text: "¿Te gustaría probar una “cita a ciegas” con viernes de pelotas?"
    },
    {
        id: "t_extremo_suave_8", type: "truth", category: "extremo", intensity: "suave",
        text: "¿Te sientes cómodo/a con la ropa interior de seda?"
    },
    {
        id: "t_extremo_suave_9", type: "truth", category: "extremo", intensity: "suave",
        text: "¿Te atrae la idea de una canción lenta como fondo?"
    },
    {
        id: "t_extremo_suave_10", type: "truth", category: "extremo", intensity: "suave",
        text: "¿Has probado ya un juego de cartas “intimidad ligera”?"
    },

    {
        id: "d_extremo_suave_1", type: "dare", category: "extremo", intensity: "suave",
        text: "Da un abrazo amplio y mantén la presión 10 seg."
    },
    {
        id: "d_extremo_suave_2", type: "dare", category: "extremo", intensity: "suave",
        text: "Rozar suavemente la nuca de tu pareja con la punta de los dedos durante 7 seg."
    },
    {
        id: "d_extremo_suave_3", type: "dare", category: "extremo", intensity: "suave",
        text: "Haz una respiración profunda y exhala lentamente mientras mantienes contacto visual."
    },
    {
        id: "d_extremo_suave_4", type: "dare", category: "extremo", intensity: "suave",
        text: "Dale a tu pareja una caricia ligera en la espalda del hombro durante 8 seg."
    },
    {
        id: "d_extremo_suave_5", type: "dare", category: "extremo", intensity: "suave",
        text: "Coloca una pluma (real o ficticia) en la palma de su mano y muévela 5 seg."
    },
    {
        id: "d_extremo_suave_6", type: "dare", category: "extremo", intensity: "suave",
        text: "Susurra una frase tranquila al oído (“estoy contigo”) y mantén el silencio 4 seg."
    },
    {
        id: "d_extremo_suave_7", type: "dare", category: "extremo", intensity: "suave",
        text: "Haz una mirada profunda y sonríe ligeramente mientras mantienes la tensión ocular 6 seg."
    },
    {
        id: "d_extremo_suave_8", type: "dare", category: "extremo", intensity: "suave",
        text: "Masajea suavemente la palma de la mano de tu pareja durante 12 seg."
    },
    {
        id: "d_extremo_suave_9", type: "dare", category: "extremo", intensity: "suave",
        text: "Toca ligeramente la pierna interna de tu pareja con una mano, manteniendo contacto 5 seg."
    },
    {
        id: "d_extremo_suave_10", type: "dare", category: "extremo", intensity: "suave",
        text: "Coloca tus labios cerca del oído, sin besar, solo susurrar una palabra amorosa."
    },

    /* ---------- EXTREMO – MEDIO ---------- */
    {
        id: "t_extremo_medio_1", type: "truth", category: "extremo", intensity: "medio",
        text: "¿Te gustaría probar una sesión de “sensory deprivation” (ventas en los ojos)?"
    },
    {
        id: "t_extremo_medio_2", type: "truth", category: "extremo", intensity: "medio",
        text: "¿Has pensado en usar una venda para intensificar el tacto?"
    },
    {
        id: "t_extremo_medio_3", type: "truth", category: "extremo", intensity: "medio",
        text: "¿Cuál es la zona más sensible que aún no has explorado?"
    },
    {
        id: "t_extremo_medio_4", type: "truth", category: "extremo", intensity: "medio",
        text: "¿Te atrae la idea de usar aceites fríos (p. ej. menta)?"
    },
    {
        id: "t_extremo_medio_5", type: "truth", category: "extremo", intensity: "medio",
        text: "¿Has probado alguna vez una caricia con plumas?"
    },
    {
        id: "t_extremo_medio_6", type: "truth", category: "extremo", intensity: "medio",
        text: "¿Qué tan cómodo/a te sientes con la idea de usar cuerdas suaves?"
    },
    {
        id: "t_extremo_medio_7", type: "truth", category: "extremo", intensity: "medio",
        text: "¿Te gustaría experimentar con ligeros golpes (p. ej. palmadas)?"
    },
    {
        id: "t_extremo_medio_8", type: "truth", category: "extremo", intensity: "medio",
        text: "¿Has sentido curiosidad por el “edging” (juego de placer vs. culminación)?"
    },
    {
        id: "t_extremo_medio_9", type: "truth", category: "extremo", intensity: "medio",
        text: "¿Te excita la idea de combinar calor y frío en la piel?"
    },
    {
        id: "t_extremo_medio_10", type: "truth", category: "extremo", intensity: "medio",
        text: "¿Cuál sería tu límite máximo para una experiencia “extrema”?"
    },

    {
        id: "d_extremo_medio_1", type: "dare", category: "extremo", intensity: "medio",
        text: "Coloca una venda en los ojos de tu pareja y acaricia su mejilla con la punta de los dedos durante 10 seg."
    },
    {
        id: "d_extremo_medio_2", type: "dare", category: "extremo", intensity: "medio",
        text: "Usa una pluma o un objeto suave para rozar la parte interna del muslo de tu pareja 12 seg."
    },
    {
        id: "d_extremo_medio_3", type: "dare", category: "extremo", intensity: "medio",
        text: "Aplica aceite de menta en la parte baja de la espalda y masajea suavemente 15 seg."
    },
    {
        id: "d_extremo_medio_4", type: "dare", category: "extremo", intensity: "medio",
        text: "Dale a tu pareja una ligera palmada en la zona del pecho (no más de un golpe) y observa su reacción."
    },
    {
        id: "d_extremo_medio_5", type: "dare", category: "extremo", intensity: "medio",
        text: "Realiza una respiración profunda sincronizada (inhala 5 seg, exhala 5 seg) mientras susurras una palabra de deseo."
    },
    {
        id: "d_extremo_medio_6", type: "dare", category: "extremo", intensity: "medio",
        text: "Posiciona las manos en la zona de la cintura y mantén contacto firme 8 seg, luego suelta suavemente."
    },
    {
        id: "d_extremo_medio_7", type: "dare", category: "extremo", intensity: "medio",
        text: "Mueve lentamente la punta de tu lengua a lo largo del oído externo de tu pareja durante 6 seg."
    },
    {
        id: "d_extremo_medio_8", type: "dare", category: "extremo", intensity: "medio",
        text: "Usa tus uñas para dibujar pequeños círculos en la parte interna del antebrazo de tu pareja durante 7 seg."
    },
    {
        id: "d_extremo_medio_9", type: "dare", category: "extremo", intensity: "medio",
        text: "Coloca una pequeña bola de hielo en la parte interna del cuello y mantenla 5 seg antes de retirarla."
    },
    {
        id: "d_extremo_medio_10", type: "dare", category: "extremo", intensity: "medio",
        text: "Guarda silencio durante 20 seg mientras miras fijamente a tu pareja; al acabar, susurra tu deseo más intenso."
    },

    /* ---------- EXTREMO – ALTO ---------- */
    {
        id: "t_extremo_alto_1", type: "truth", category: "extremo", intensity: "alto",
        text: "¿Te atreverías a probar una sesión completa de bondage con cuerdas?"
    },
    {
        id: "t_extremo_alto_2", type: "truth", category: "extremo", intensity: "alto",
        text: "¿Has pensado en jugar a la “culpa” (es decir, “te he dicho que no” pero lo haces de todas formas)?"
    },
    {
        id: "t_extremo_alto_3", type: "truth", category: "extremo", intensity: "alto",
        text: "¿Cuál es la práctica más arriesgada que te gustaría probar?"
    },
    {
        id: "t_extremo_alto_4", type: "truth", category: "extremo", intensity: "alto",
        text: "¿Te excita la idea de que alguien más controle el ritmo?"
    },
    {
        id: "t_extremo_alto_5", type: "truth", category: "extremo", intensity: "alto",
        text: "¿Has usado o te gustaría usar dispositivos de vibración a distancia?"
    },
    {
        id: "t_extremo_alto_6", type: "truth", category: "extremo", intensity: "alto",
        text: "¿Qué límites has puesto y cuáles estarías dispuesto/a a mover?"
    },
    {
        id: "t_extremo_alto_7", type: "truth", category: "extremo", intensity: "alto",
        text: "¿Alguna vez has sentido curiosidad por el juego de “pain‑play” suave?"
    },
    {
        id: "t_extremo_alto_8", type: "truth", category: "extremo", intensity: "alto",
        text: "¿Te gustaría experimentar con temperatura (hielo, cera tibia)?"
    },
    {
        id: "t_extremo_alto_9", type: "truth", category: "extremo", intensity: "alto",
        text: "¿Alguna vez has considerado grabar un video íntimo con tu pareja?"
    },
    {
        id: "t_extremo_alto_10", type: "truth", category: "extremo", intensity: "alto",
        text: "¿Qué es lo más extremo que has hecho o quisieras hacer bajo ninguna condición?"
    },

    {
        id: "d_extremo_alto_1", type: "dare", category: "extremo", intensity: "alto",
        text: "Coloca una venda en los ojos de tu pareja y pásale una pluma y luego una pequeña gota de aceite caliente (cuidando que no queme) en la parte interna del muslo durante 10 seg."
    },
    {
        id: "d_extremo_alto_2", type: "dare", category: "extremo", intensity: "alto",
        text: "Haz una ligera presión con una cuerda de satén alrededor de la muñeca, dejándola suelta pero perceptible, durante 15 seg."
    },
    {
        id: "d_extremo_alto_3", type: "dare", category: "extremo", intensity: "alto",
        text: "Aplica una pequeña gota de aceite de menta en la zona del cuello y masajea lentamente durante 12 seg."
    },
    {
        id: "d_extremo_alto_4", type: "dare", category: "extremo", intensity: "alto",
        text: "Usa una bolita de hielo y pásala por la zona lumbar de tu pareja, alternando con caricias tibias de la mano, 8 seg cada una."
    },
    {
        id: "d_extremo_alto_5", type: "dare", category: "extremo", intensity: "alto",
        text: "Realiza una serie de 5 respiraciones profundas together, mientras mantienes la presión de la mano sobre el pecho de tu pareja."
    },
    {
        id: "d_extremo_alto_6", type: "dare", category: "extremo", intensity: "alto",
        text: "Durante 20 seg, susurra al oído de tu pareja varias palabras, subiendo gradualmente el tono hasta un susurro excitado."
    },
    {
        id: "d_extremo_alto_7", type: "dare", category: "extremo", intensity: "alto",
        text: "Toca la zona del abdomen con la punta de los dedos en forma de círculos, aumentando la presión poco a poco durante 15 seg."
    },
    {
        id: "d_extremo_alto_8", type: "dare", category: "extremo", intensity: "alto",
        text: "Haz que tu pareja se acurruque y, con la otra mano, frota suavemente la zona de la parte interna del muslo mientras mantienes contacto visual."
    },
    {
        id: "d_extremo_alto_9", type: "dare", category: "extremo", intensity: "alto",
        text: "Coloca una pelotita de masa de gel o “stress ball” entre la zona del pecho y la mano, presionando ligeramente durante 10 seg."
    },
    {
        id: "d_extremo_alto_10", type: "dare", category: "extremo", intensity: "alto",
        text: "Dile a tu pareja una frase de deseo y hazle un suave roce del borde de la nariz con los labios durante 5 seg."
    },

    /* ---------- LOCURAS – SUAVE ---------- */
    {
        id: "t_locuras_suave_1", type: "truth", category: "locuras", intensity: "suave",
        text: "Si pudieras ser un animal por un día, ¿cuál serías?"
    },
    {
        id: "t_locuras_suave_2", type: "truth", category: "locuras", intensity: "suave",
        text: "¿Cuál es el hábito más extraño que tienes?"
    },
    {
        id: "t_locuras_suave_3", type: "truth", category: "locuras", intensity: "suave",
        text: "¿Qué superpoder te gustaría tener por una hora?"
    },
    {
        id: "t_locuras_suave_4", type: "truth", category: "locuras", intensity: "suave",
        text: "¿Alguna vez te has puesto a cantar en la ducha?"
    },
    {
        id: "t_locuras_suave_5", type: "truth", category: "locuras", intensity: "suave",
        text: "¿Qué comida combinarías aunque a otras personas les parezca extraña?"
    },
    {
        id: "t_locuras_suave_6", type: "truth", category: "locuras", intensity: "suave",
        text: "¿Te atreverías a bailar en medio de la calle por 30 seg?"
    },
    {
        id: "t_locuras_suave_7", type: "truth", category: "locuras", intensity: "suave",
        text: "Si pudieras vivir en cualquier época, ¿cuál elegirías?"
    },
    {
        id: "t_locuras_suave_8", type: "truth", category: "locuras", intensity: "suave",
        text: "¿Has hecho alguna vez un TikTok o Reel sin que nadie lo viera?"
    },
    {
        id: "t_locuras_suave_9", type: "truth", category: "locuras", intensity: "suave",
        text: "¿Cuál es la película más absurda que has visto y te ha gustado?"
    },
    {
        id: "t_locuras_suave_10", type: "truth", category: "locuras", intensity: "suave",
        text: "Si pudieras comer solo una comida por el resto de tu vida, ¿cuál sería?"
    },

    {
        id: "d_locuras_suave_1", type: "dare", category: "locuras", intensity: "suave",
        text: "Da una vuelta completa a la habitación con los ojos cerrados."
    },
    {
        id: "d_locuras_suave_2", type: "dare", category: "locuras", intensity: "suave",
        text: "Imita a un animal (gato, perro, cangrejo) durante 10 seg."
    },
    {
        id: "d_locuras_suave_3", type: "dare", category: "locuras", intensity: "suave",
        text: "Pronuncia un trabalenguas 3 veces seguidas sin equivocarte."
    },
    {
        id: "d_locuras_suave_4", type: "dare", category: "locuras", intensity: "suave",
        text: "Canta el coro de tu canción favorita a todo pulmón."
    },
    {
        id: "d_locuras_suave_5", type: "dare", category: "locuras", intensity: "suave",
        text: "Haz un gesto de baile loco durante 8 seg."
    },
    {
        id: "d_locuras_suave_6", type: "dare", category: "locuras", intensity: "suave",
        text: "Haz 5 saltos en el sitio mientras dices “¡soy una estrella fugaz!”."
    },
    {
        id: "d_locuras_suave_7", type: "dare", category: "locuras", intensity: "suave",
        text: "Ríe a carcajadas durante 6 seg sin ninguna razón aparente."
    },
    {
        id: "d_locuras_suave_8", type: "dare", category: "locuras", intensity: "suave",
        text: "Haz una cara extraña y manténla 7 seg."
    },
    {
        id: "d_locuras_suave_9", type: "dare", category: "locuras", intensity: "suave",
        text: "Escoge una palabra aleatoria del diccionario y úsala en una frase romántica."
    },
    {
        id: "d_locuras_suave_10", type: "dare", category: "locuras", intensity: "suave",
        text: "Da un abrazo grupal (si hay más de dos personas) o un abrazo exagerado a la otra persona."
    },

    /* ---------- LOCURAS – MEDIO ---------- */
    {
        id: "t_locuras_medio_1", type: "truth", category: "locuras", intensity: "medio",
        text: "¿Alguna vez has hecho una apuesta absurda? ¿Cuál fue?"
    },
    {
        id: "t_locuras_medio_2", type: "truth", category: "locuras", intensity: "medio",
        text: "¿Qué harías si te encontraras con una lámpara mágica?"
    },
    {
        id: "t_locuras_medio_3", type: "truth", category: "locuras", intensity: "medio",
        text: "¿Te atreverías a comer algo considerado “peligroso” (p. ej. insectos)?"
    },
    {
        id: "t_locuras_medio_4", type: "truth", category: "locuras", intensity: "medio",
        text: "¿Cuál es el secreto más extraño que guardas?"
    },
    {
        id: "t_locuras_medio_5", type: "truth", category: "locuras", intensity: "medio",
        text: "¿Te has disfrazado alguna vez de forma completamente ridícula?"
    },
    {
        id: "t_locuras_medio_6", type: "truth", category: "locuras", intensity: "medio",
        text: "Si pudieras hacer un “challenge” viral, ¿qué harías?"
    },
    {
        id: "t_locuras_medio_7", type: "truth", category: "locuras", intensity: "medio",
        text: "¿Cuál ha sido el rumor más loco que se ha difundido sobre ti?"
    },
    {
        id: "t_locuras_medio_8", type: "truth", category: "locuras", intensity: "medio",
        text: "¿Te has comprado algo que nunca usarías sólo por la estética?"
    },
    {
        id: "t_locuras_medio_9", type: "truth", category: "locuras", intensity: "medio",
        text: "Si pudieras ser un personaje de cómic por un día, ¿quién serías?"
    },
    {
        id: "t_locuras_medio_10", type: "truth", category: "locuras", intensity: "medio",
        text: "¿Cuál es el mayor delito (pequeño) que cometiste en la infancia?"
    },

    {
        id: "d_locuras_medio_1", type: "dare", category: "locuras", intensity: "medio",
        text: "Haz una especie de “cambio de ropa” rápido usando solo lo que tienes a mano (20 seg)."
    },
    {
        id: "d_locuras_medio_2", type: "dare", category: "locuras", intensity: "medio",
        text: "Imita una escena dramática de película sin palabras durante 15 seg."
    },
    {
        id: "d_locuras_medio_3", type: "dare", category: "locuras", intensity: "medio",
        text: "Crea un “haiku” improvisado acerca de la persona que tienes al lado."
    },
    {
        id: "d_locuras_medio_4", type: "dare", category: "locuras", intensity: "medio",
        text: "Mantén los ojos cerrados y permite que la otra persona toque cualquier parte de tu brazo, sin adivinar dónde."
    },
    {
        id: "d_locuras_medio_5", type: "dare", category: "locuras", intensity: "medio",
        text: "Realiza una “caminata de pato” alrededor del espacio durante 12 seg."
    },
    {
        id: "d_locuras_medio_6", type: "dare", category: "locuras", intensity: "medio",
        text: "Dile a tu pareja una frase completa empezando con la letra “Q”."
    },
    {
        id: "d_locuras_medio_7", type: "dare", category: "locuras", intensity: "medio",
        text: "Haz una “tormenta de aplausos” de 8 seg mientras gritas “¡Somos los mejores!”."
    },
    {
        id: "d_locuras_medio_8", type: "dare", category: "locuras", intensity: "medio",
        text: "Mantén la postura de “árbol” (una pierna apoyada) durante 10 seg mientras cuentas un chiste."
    },
    {
        id: "d_locuras_medio_9", type: "dare", category: "locuras", intensity: "medio",
        text: "Haz una pausa dramática de 5 seg y luego grita “¡Eureka!” como si hubieras descubierto algo."
    },
    {
        id: "d_locuras_medio_10", type: "dare", category: "locuras", intensity: "medio",
        text: "Toma una hoja o papel y escribe la primera palabra que venga a tu mente, luego léela con tono de narrador épico."
    },

    /* ---------- LOCURAS – ALTO ---------- */
    {
        id: "t_locuras_alto_1", type: "truth", category: "locuras", intensity: "alto",
        text: "¿Alguna vez has hecho una travesura que todavía te avergüenza?"
    },
    {
        id: "t_locuras_alto_2", type: "truth", category: "locuras", intensity: "alto",
        text: "Si pudieras romper una regla social sin consecuencias, ¿cuál romperías?"
    },
    {
        id: "t_locuras_alto_3", type: "truth", category: "locuras", intensity: "alto",
        text: "¿Te has escapado alguna vez de una reunión sin avisar?"
    },
    {
        id: "t_locuras_alto_4", type: "truth", category: "locuras", intensity: "alto",
        text: "¿Cuál sería tu plan perfecto si un día despertaras sin responsabilidades?"
    },
    {
        id: "t_locuras_alto_5", type: "truth", category: "locuras", intensity: "alto",
        text: "¿Te atreverías a saltar en paracaídas o a bucear sin oxígeno?"
    },
    {
        id: "t_locuras_alto_6", type: "truth", category: "locuras", intensity: "alto",
        text: "¿Cuál es el mayor “riesgo” que has tomado por diversión?"
    },
    {
        id: "t_locuras_alto_7", type: "truth", category: "locuras", intensity: "alto",
        text: "Si pudieras desaparecer por una hora sin que nadie lo note, ¿qué harías?"
    },
    {
        id: "t_locuras_alto_8", type: "truth", category: "locuras", intensity: "alto",
        text: "¿Te has colado alguna vez en un evento al que no estabas invitado?"
    },
    {
        id: "t_locuras_alto_9", type: "truth", category: "locuras", intensity: "alto",
        text: "¿Qué harías si te encontraras con una cámara oculta que graba todo?"
    },
    {
        id: "t_locuras_alto_10", type: "truth", category: "locuras", intensity: "alto",
        text: "Si pudieras cambiar tu nombre por uno ridículo por un día, ¿qué elegirías?"
    },

    {
        id: "d_locuras_alto_1", type: "dare", category: "locuras", intensity: "alto",
        text: "Haz una coreografía inventada, con pasos extraños, durante 30 seg y anúnciala como “¡trend del día!”."
    },
    {
        id: "d_locuras_alto_2", type: "dare", category: "locuras", intensity: "alto",
        text: "Rómpete (de forma segura) una prenda de ropa y ofrécela como “souvenir” a tu pareja."
    },
    {
        id: "d_locuras_alto_3", type: "dare", category: "locuras", intensity: "alto",
        text: "Imita a tu personaje de ficción favorito, incluyendo voz, gestos y frase célebre, durante 20 seg."
    },
    {
        id: "d_locuras_alto_4", type: "dare", category: "locuras", intensity: "alto",
        text: "Crea una “cápsula del tiempo” con 3 objetos al azar (pueden ser de la habitación) y explica su significado."
    },
    {
        id: "d_locuras_alto_5", type: "dare", category: "locuras", intensity: "alto",
        text: "Dibuja un rostro en la palma de la mano de tu pareja usando solo el dedo índice y sin tinta, luego descríbelo como si fuera una obra de arte."
    },
    {
        id: "d_locuras_alto_6", type: "dare", category: "locuras", intensity: "alto",
        text: "Haz 10 flexiones o sentadillas mientras recitas una lista de 10 cosas que te hacen reír."
    },
    {
        id: "d_locuras_alto_7", type: "dare", category: "locuras", intensity: "alto",
        text: "Canta una canción conocida cambiando todas las palabras por sinónimos que rimen, sin perder el ritmo."
    },
    {
        id: "d_locuras_alto_8", type: "dare", category: "locuras", intensity: "alto",
        text: "Vístete con lo que tengas a mano (p. ej. una toalla) y haz una pasarela de 15 seg."
    },
    {
        id: "d_locuras_alto_9", type: "dare", category: "locuras", intensity: "alto",
        text: "Escribe en una hoja la palabra más larga que puedas formar con las letras de tu nombre y léela en tono de anunciador de vuelo."
    },
    {
        id: "d_locuras_alto_10", type: "dare", category: "locuras", intensity: "alto",
        text: "Dile a tu pareja que la amas en tres idiomas diferentes, sin usar traductor, solo con gestos y palabras que conozcas."
    },


    /* --------------------------- ROMPEHIELOS SUAVE  --------------------------- */
    {
        id: "c_rompehielos_suave_01", type: "card", category: "rompehielos", intensity: "suave",
        text: "Realiza un **masaje relajante** de 5 min en los hombros y cuello de tu pareja, usando presión ligera."
    },

    {
        id: "c_rompehielos_suave_02", type: "card", category: "rompehielos", intensity: "suave",
        text: "Acaricia suavemente **el cuero cabelludo** de tu pareja con la punta de los dedos, como si estuvieras peinándola."
    },

    {
        id: "c_rompehielos_suave_03", type: "card", category: "rompehielos", intensity: "suave",
        text: "Susúrrale al **oído** palabras dulces (“Me fascinas”, “Eres increíble”) durante 10 seg."
    },

    {
        id: "c_rompehielos_suave_04", type: "card", category: "rompehielos", intensity: "suave",
        text: "Dale un **beso lento y con intención** en los labios; mantén el contacto visual todo el tiempo."
    },

    {
        id: "c_rompehielos_suave_05", type: "card", category: "rompehielos", intensity: "suave",
        text: "Besále el **cuello** con un beso ligero, apenas rozando la piel."
    },

    {
        id: "c_rompehielos_suave_06", type: "card", category: "rompehielos", intensity: "suave",
        text: "Déjale un **beso en los ojos**, apenas rozando con los párpados cerrados."
    },

    {
        id: "c_rompehielos_suave_07", type: "card", category: "rompehielos", intensity: "suave",
        text: "Besále suavemente los **hombros**, descendiendo de forma lenta."
    },

    {
        id: "c_rompehielos_suave_08", type: "card", category: "rompehielos", intensity: "suave",
        text: "Pónganse **frente a frente** y acaríciense tiernamente con las manos, sin prisas."
    },

    {
        id: "c_rompehielos_suave_09", type: "card", category: "rompehielos", intensity: "suave",
        text: "Bailen **media canción** lo más pegados que puedan; mantengan los ojos cerrados."
    },

    {
        id: "c_rompehielos_suave_10", type: "card", category: "rompehielos", intensity: "suave",
        text: "Él se sienta con las piernas cruzadas; ella se sienta sobre él, rodeándolo con piernas y brazos para acariciarse mutuamente."
    },

    /* --------------------------- ROMPEHIELOS MEDIO  --------------------------- */
    {
        id: "c_rompehielos_medio_01", type: "card", category: "rompehielos", intensity: "medio",
        text: "Dale un **beso apasionado** en los labios, con la lengua jugando suavemente."
    },

    {
        id: "c_rompehielos_medio_02", type: "card", category: "rompehielos", intensity: "medio",
        text: "Masajea su **espalda** con movimientos firmes pero cuidadosos, recorriendo toda la zona."
    },

    {
        id: "c_rompehielos_medio_03", type: "card", category: "rompehielos", intensity: "medio",
        text: "Besa su **espalda y torso** con la boca, siguiendo la línea de los omóplatos hasta el pecho."
    },

    {
        id: "c_rompehielos_medio_04", type: "card", category: "rompehielos", intensity: "medio",
        text: "Muerde sus **orejas** ligeramente, dejando una sensación de hormigueo."
    },

    {
        id: "c_rompehielos_medio_05", type: "card", category: "rompehielos", intensity: "medio",
        text: "Muerde sus **labios** al iniciar un beso, manteniendo la presión breve y suave."
    },

    {
        id: "c_rompehielos_medio_06", type: "card", category: "rompehielos", intensity: "medio",
        text: "Muerde su **cuello** con la punta de los dientes, sin llegar a rozar la piel profundamente."
    },

    {
        id: "c_rompehielos_medio_07", type: "card", category: "rompehielos", intensity: "medio",
        text: "Muerde sus **hombros** de forma juguetona, como si fuera una pequeña mordida de placer."
    },

    {
        id: "c_rompehielos_medio_08", type: "card", category: "rompehielos", intensity: "medio",
        text: "**Quítale una prenda de vestir** (p.ej. la camiseta) con un movimiento sensual y sin prisas."
    },

    {
        id: "c_rompehielos_medio_09", type: "card", category: "rompehielos", intensity: "medio",
        text: "Tómale desde atrás y **besá su cuello** mientras la rodeas con los brazos."
    },

    {
        id: "c_rompehielos_medio_10", type: "card", category: "rompehielos", intensity: "medio",
        text: "Acuéstate **boca arriba** y acaricia su cuerpo con la palma, recorriendo lentamente cada zona."
    },

    /* --------------------------- ROMPEHIELOS ALTO  --------------------------- */
    {
        id: "c_rompehielos_alto_01", type: "card", category: "rompehielos", intensity: "alto",
        text: "**Hazle lo que quieras**: escoge cualquier acción que te apetezca y ejecútala sin preguntar."
    },

    {
        id: "c_rompehielos_alto_02", type: "card", category: "rompehielos", intensity: "alto",
        text: "Besense **con lengua eróticamente**; dejad que la lengua sea el hilo conductor del placer."
    },

    {
        id: "c_rompehielos_alto_03", type: "card", category: "rompehielos", intensity: "alto",
        text: "Da **10 besos en la zona íntima** (vagina o pene) de tu pareja **sobre la ropa interior**; cada beso debe ser profundo y sensual."
    },

    {
        id: "c_rompehielos_alto_04", type: "card", category: "rompehielos", intensity: "alto",
        text: "**Desvístanse mutuamente** y decidid si pasáis al siguiente nivel o permanecéis un rato más disfrutando del cuerpo del otro."
    },

    {
        id: "c_rompehielos_alto_05", type: "card", category: "rompehielos", intensity: "alto",
        text: "Besa todo su **cuerpo** con la boca, empezando por los pies y subiendo hasta el pecho, sin detenerte."
    },

    {
        id: "c_rompehielos_alto_06", type: "card", category: "rompehielos", intensity: "alto",
        text: "Susúrrale **palabras prohibidas** al oído mientras rozas con la mano la zona más sensible de su abdomen."
    },

    {
        id: "c_rompehielos_alto_07", type: "card", category: "rompehielos", intensity: "alto",
        text: "Realiza un **masaje erótico en las piernas** (muslos, pantorrillas) con aceites calientes y una presión firme."
    },

    {
        id: "c_rompehielos_alto_08", type: "card", category: "rompehielos", intensity: "alto",
        text: "Toma su mano y **arrástra** suavemente hacia la cama, guiándola a la posición que prefieras."
    },

    {
        id: "c_rompehielos_alto_09", type: "card", category: "rompehielos", intensity: "alto",
        text: "Presiona delicadamente su **zona perineal** (entre los genitales y el ano) con la punta de los dedos, alternando presión y caricias."
    },

    {
        id: "c_rompehielos_alto_10", type: "card", category: "rompehielos", intensity: "alto",
        text: "Muerde **su nuca** con mayor intensidad, dejando una sensación de cosquilleo que recorra el vértebras."
    },


    {
        id: "c_romantico_suave_01", type: "card", category: "romantico", intensity: "suave",
        text: "Masajea sus **nalgas y piernas** con movimientos lentos y presión ligera."
    },

    {
        id: "c_romantico_suave_02", type: "card", category: "romantico", intensity: "suave",
        text: "Recorre su cuerpo con tu **lengua** de forma suave, empezando por la nuca y bajando despacio."
    },

    {
        id: "c_romantico_suave_03", type: "card", category: "romantico", intensity: "suave",
        text: "Lame sus **dedos** de forma sensual mientras mantienes la mirada en sus ojos."
    },

    {
        id: "c_romantico_suave_04", type: "card", category: "romantico", intensity: "suave",
        text: "Besa sus **pies** de manera delicada; si lo deseas, frota con una crema ligera para mayor suavidad."
    },

    {
        id: "c_romantico_suave_05", type: "card", category: "romantico", intensity: "suave",
        text: "Frota tu pecho masculino sobre su **espalda** de forma erótica, sin presionar demasiado."
    },

    {
        id: "c_romantico_suave_06", type: "card", category: "romantico", intensity: "suave",
        text: "Acaricia sus **senos** con la palma de la mano, describiendo mentalmente lo que sientes."
    },

    {
        id: "c_romantico_suave_07", type: "card", category: "romantico", intensity: "suave",
        text: "Pasa tu lengua entre los **dedos de sus pies**, rozándolos con una crema hidratante si lo prefieres."
    },

    {
        id: "c_romantico_suave_08", type: "card", category: "romantico", intensity: "suave",
        text: "Besa su **espalda y torso** con la boca, siguiendo la línea de los omóplatos hasta el pecho."
    },

    {
        id: "c_romantico_suave_09", type: "card", category: "romantico", intensity: "suave",
        text: "Muerde suavemente la **parte posterior de sus rodillas**, apenas rozando la piel."
    },

    {
        id: "c_romantico_suave_10", type: "card", category: "romantico", intensity: "suave",
        text: "Decidan **ir al siguiente nivel** o permanecer un rato más; disfruten del momento sin prisa."
    },

    /* ====================  MEDIO (bocados y mordidas) ==================== */
    {
        id: "c_romantico_medio_01", type: "card", category: "romantico", intensity: "medio",
        text: "Lame sus **nalgas** con la lengua, haciendo pequeños círculos y variando la presión."
    },

    {
        id: "c_romantico_medio_02", type: "card", category: "romantico", intensity: "medio",
        text: "Muerde sus **nalgas** ligeramente, dejando un leve hormigueo que invite a más caricias."
    },

    {
        id: "c_romantico_medio_03", type: "card", category: "romantico", intensity: "medio",
        text: "Muerde sus **piernas** de forma juguetona mientras la abrazas con el resto del cuerpo."
    },

    {
        id: "c_romantico_medio_04", type: "card", category: "romantico", intensity: "medio",
        text: "Nalgueala: utiliza la palma de la mano para dar suaves golpecitos rítmicos en sus nalgas."
    },

    {
        id: "c_romantico_medio_05", type: "card", category: "romantico", intensity: "medio",
        text: "Pellizca sus **pezones** con los dedos, sin necesidad de ejercer demasiada fuerza."
    },

    {
        id: "c_romantico_medio_06", type: "card", category: "romantico", intensity: "medio",
        text: "Lame sus **pezones** alternando entre la punta de la lengua y pequeños suspiros."
    },

    {
        id: "c_romantico_medio_07", type: "card", category: "romantico", intensity: "medio",
        text: "Muerde sus **pezones** de forma sensual, soltando la mordida justo antes de que el dolor aparezca."
    },

    {
        id: "c_romantico_medio_08", type: "card", category: "romantico", intensity: "medio",
        text: "Besa, **lame y muerde** sus **muslos** mientras deslizas la mano por la parte interna."
    },

    {
        id: "c_romantico_medio_09", type: "card", category: "romantico", intensity: "medio",
        text: "Besa y **lame** las **axilas** de ella, explorando la zona con la lengua y los labios."
    },

    {
        id: "c_romantico_medio_10", type: "card", category: "romantico", intensity: "medio",
        text: "Hazle **lo que quieras** dentro de los límites que ambos hayan establecido; que la sorpresa sea total."
    },

    /* ====================  ALTO (acción muy erótica) ==================== */
    {
        id: "c_romantico_alto_01", type: "card", category: "romantico", intensity: "alto",
        text: "Recorre su cuerpo con tus **senos**, presionando ligeramente contra su pecho y abdomen mientras lo deslizas."
    },

    {
        id: "c_romantico_alto_02", type: "card", category: "romantico", intensity: "alto",
        text: "Lame su **perineo** con la lengua, haciendo movimientos lentos y circulares, prestando atención a su reacción."
    },

    {
        id: "c_romantico_alto_03", type: "card", category: "romantico", intensity: "alto",
        text: "Muerde sus **tobillos** con la punta de los dientes, manteniendo la presión justo antes de soltar."
    },

    {
        id: "c_romantico_alto_04", type: "card", category: "romantico", intensity: "alto",
        text: "Lame su **perineo** una segunda vez, ahora incrementando ligeramente la velocidad y la presión."
    },

    {
        id: "c_romantico_alto_05", type: "card", category: "romantico", intensity: "alto",
        text: "Besa sus **pies** y, si lo deseas, **frota** la zona con una crema perfumada para aumentar la sensibilidad."
    },

    {
        id: "c_romantico_alto_06", type: "card", category: "romantico", intensity: "alto",
        text: "Muerde con intención sus **nalgas** y, después, recorre la zona con la lengua, creando una combinación de presión y humectación."
    },

    {
        id: "c_romantico_alto_07", type: "card", category: "romantico", intensity: "alto",
        text: "Acaricia sus **senos** con la boca, alternando entre besos suaves y ligeros succionones."
    },

    {
        id: "c_romantico_alto_08", type: "card", category: "romantico", intensity: "alto",
        text: "Muerde la **parte posterior de sus rodillas** con más intensidad, dejando una sensación de hormigueo que recorra la pierna."
    },

    {
        id: "c_romantico_alto_09", type: "card", category: "romantico", intensity: "alto",
        text: "Recorre su cuerpo con tu **lengua** de arriba abajo, sin omitir ninguna zona, incluida la zona interna de los muslos y el perineo."
    },

    {
        id: "c_romantico_alto_10", type: "card", category: "romantico", intensity: "alto",
        text: "Vayan **al siguiente nivel** sin pausa: quítense toda la ropa y continúen la exploración sin restricciones."
    },


    /* ====================  SUAVE  ==================== */
    {
        id: "c_picante_suave_01", type: "card", category: "picante", intensity: "suave",
        text: "Utiliza una **pluma** para acariciar sus partes íntimas; deslízala suavemente sobre los pezones, labios y zona perineal."
    },

    {
        id: "c_picante_suave_02", type: "card", category: "picante", intensity: "suave",
        text: "Masajea sus **genitales** con una presión ligera y movimientos circulares, usando sólo tus manos."
    },

    {
        id: "c_picante_suave_03", type: "card", category: "picante", intensity: "suave",
        text: "Con un **hielo** en la punta de la lengua, lame sus **pezones** de forma delicada, alternando frío y calor."
    },

    {
        id: "c_picante_suave_04", type: "card", category: "picante", intensity: "suave",
        text: "Con un **hielo** en la mano, masajea sus **pechos** con suaves presiones, dejando que el frío recorra la piel."
    },

    {
        id: "c_picante_suave_05", type: "card", category: "picante", intensity: "suave",
        text: "Aplica una lubricación **fría o caliente**, aspira ligeramente y sopla alrededor de sus genitales sin introducir la lengua."
    },

    {
        id: "c_picante_suave_06", type: "card", category: "picante", intensity: "suave",
        text: "Lame sus **genitales** con la lengua, empezando por los bordes y avanzando lentamente hacia el centro."
    },

    {
        id: "c_picante_suave_07", type: "card", category: "picante", intensity: "suave",
        text: "Juega con los **labios mayores y el clítoris** usando la punta de los dedos y la lengua en movimientos circulares."
    },

    {
        id: "c_picante_suave_08", type: "card", category: "picante", intensity: "suave",
        text: "Masajea sus **testículos** con una ligera lubricación, rodándolos entre tus dedos."
    },

    {
        id: "c_picante_suave_09", type: "card", category: "picante", intensity: "suave",
        text: "Besa apasionadamente su **pene**, recorriendo la corona con la boca y dejando su aliento sobre la piel."
    },

    {
        id: "c_picante_suave_10", type: "card", category: "picante", intensity: "suave",
        text: "Masajea el **pene** de forma sensual, acariciando el eje y el glande con la mano."
    },

    {
        id: "c_picante_suave_11", type: "card", category: "picante", intensity: "suave",
        text: "Masajea el pene con tus **pies lubricados**; desliza suavemente el borde del pie contra el eje."
    },

    {
        id: "c_picante_suave_12", type: "card", category: "picante", intensity: "suave",
        text: "Masturba el pene con tus manos usando un ritmo constante y una presión moderada."
    },

    {
        id: "c_picante_suave_13", type: "card", category: "picante", intensity: "suave",
        text: "Masturba su **vagina** con tus dedos, usando movimientos de presión y rotación."
    },

    {
        id: "c_picante_suave_14", type: "card", category: "picante", intensity: "suave",
        text: "Masajea su vagina de forma erótica, recorriendo el interior de los labios y el punto G con la punta de los dedos."
    },

    {
        id: "c_picante_suave_15", type: "card", category: "picante", intensity: "suave",
        text: "Usa **las manos de él** para tocar tu cuerpo donde quieras; deja que él decida la zona."
    },

    {
        id: "c_picante_suave_16", type: "card", category: "picante", intensity: "suave",
        text: "Chúpale el pene lentamente, alternando succión y besos alrededor del glande."
    },

    {
        id: "c_picante_suave_17", type: "card", category: "picante", intensity: "suave",
        text: "Lame su **clítoris** con la punta de la lengua, manteniendo contacto suave y constante."
    },

    {
        id: "c_picante_suave_18", type: "card", category: "picante", intensity: "suave",
        text: "Lubrícale el pene con una crema a base de agua y acaricia la zona con la mano."
    },

    {
        id: "c_picante_suave_19", type: "card", category: "picante", intensity: "suave",
        text: "Lubrícale el clítoris antes de la estimulación oral para mayor deslizamiento."
    },

    {
        id: "c_picante_suave_20", type: "card", category: "picante", intensity: "suave",
        text: "Hazle sexo oral a ella, enfocándote en el clítoris y los labios mayores, sin penetración."
    },

    {
        id: "c_picante_suave_21", type: "card", category: "picante", intensity: "suave",
        text: "Hazle sexo oral a él; si derrama un poco de semen, saboreenlo juntos antes de tragar o limpiar."
    },

    {
        id: "c_picante_suave_22", type: "card", category: "picante", intensity: "suave",
        text: "Hazle sexo oral a ella, saborea sus fluidos vaginales, moja dos dedos y ofrécele a ella."
    },

    {
        id: "c_picante_suave_23", type: "card", category: "picante", intensity: "suave",
        text: "Lame el **ano** de ella, empezando por la zona exterior y avanzando suavemente hacia dentro."
    },

    {
        id: "c_picante_suave_24", type: "card", category: "picante", intensity: "suave",
        text: "Juega con el **ano** de ella usando la lengua y los dedos, sin penetración profunda."
    },

    {
        id: "c_picante_suave_25", type: "card", category: "picante", intensity: "suave",
        text: "Acuéstate sobre la barriga de él y acaricia su pene con tus manos y boca. Si derrama semen, saboreenlo juntos."
    },

    {
        id: "c_picante_suave_26", type: "card", category: "picante", intensity: "suave",
        text: "Acóstantévalos boca arriba, con sus cabezas opuestas; suban una pierna en el cuerpo del otro y acaricien piernas y genitales."
    },

    {
        id: "c_picante_suave_27", type: "card", category: "picante", intensity: "suave",
        text: "Deja que él te vea mientras tú misma te excitas tocándote el cuerpo y los genitales (auto‑estímulo frente a él)."
    },

    {
        id: "c_picante_suave_28", type: "card", category: "picante", intensity: "suave",
        text: "Deja que ella te vea mientras tú mismo te tocas el cuerpo y los genitales (auto‑estímulo frente a ella)."
    },

    {
        id: "c_picante_suave_29", type: "card", category: "picante", intensity: "suave",
        text: "Deja que ella guíe tus manos y dedos dentro de su vagina, siguiendo su ritmo."
    },

    {
        id: "c_picante_suave_30", type: "card", category: "picante", intensity: "suave",
        text: "Mastúrbalo a él delicadamente, usando una presión ligera y cambiando el ritmo cada pocos segundos."
    },

    {
        id: "c_picante_suave_31", type: "card", category: "picante", intensity: "suave",
        text: "Siéntate en la cama y deja que él te vea mientras tú misma te acaricias la vagina."
    },

    {
        id: "c_picante_suave_32", type: "card", category: "picante", intensity: "suave",
        text: "Ponte de pie, y deja que él te vea mientras te excitas tocándote los senos con la mano."
    },

    {
        id: "c_picante_suave_33", type: "card", category: "picante", intensity: "suave",
        text: "Ponte de perrito y deja que él te vea mientras te acaricias y metes un dedo en ti misma."
    },

    {
        id: "c_picante_suave_34", type: "card", category: "picante", intensity: "suave",
        text: "Deja que ella te vea mientras tú mismo te masturbas de pie."
    },

    {
        id: "c_picante_suave_35", type: "card", category: "picante", intensity: "suave",
        text: "Deja que ella te vea mientras tú mismo te masturbas sentado."
    },

    {
        id: "c_picante_suave_36", type: "card", category: "picante", intensity: "suave",
        text: "Mujer hace garganta profunda (deep throat) en el pene de él, sin pausa."
    },

    {
        id: "c_picante_suave_37", type: "card", category: "picante", intensity: "suave",
        text: "Lame su clítoris con **un** dedo dentro de la vagina, combinando presión y succión."
    },

    {
        id: "c_picante_suave_38", type: "card", category: "picante", intensity: "suave",
        text: "Bésalo a él por la entrepierna: labios en los testículos, perineo y luego el ano."
    },

    {
        id: "c_picante_suave_39", type: "card", category: "picante", intensity: "suave",
        text: "Bésala a ella por la entrepierna: labios en la entrada de la vagina y el ano."
    },

    {
        id: "c_picante_suave_40", type: "card", category: "picante", intensity: "suave",
        text: "Chúpale a él uno o varios dedos de la mano mientras lo masturbas con la otra mano."
    },

    {
        id: "c_picante_suave_41", type: "card", category: "picante", intensity: "suave",
        text: "Mete completamente sus testículos en tu boca y masajea con tu lengua, creando una sensación combinada de succión y humedad."
    },

    {
        id: "c_picante_suave_42", type: "card", category: "picante", intensity: "suave",
        text: "Mete **dos dedos** en la vagina y prueben ambos los fluidos vaginales, alternando succión y presión."
    },

    {
        id: "c_picante_suave_43", type: "card", category: "picante", intensity: "suave",
        text: "Mujer, lame solo la punta del pene, dejando la punta de la lengua en contacto durante varios segundos."
    },

    {
        id: "c_picante_suave_44", type: "card", category: "picante", intensity: "suave",
        text: "Lubrica el ano de ella y masajea desde fuera con dedos y lengua, sin penetración profunda."
    },

    {
        id: "c_picante_suave_45", type: "card", category: "picante", intensity: "suave",
        text: "Lubrica el ano de él y masajea desde fuera con dedos y lengua, manteniendo una presión delicada."
    },

    {
        id: "c_picante_suave_46", type: "card", category: "picante", intensity: "suave",
        text: "Mastrábense mutuamente, manteniendo contacto visual mientras se estimulan."
    },

    {
        id: "c_picante_suave_47", type: "card", category: "picante", intensity: "suave",
        text: "Besó de pie mientras se masturban, apoyándose en la pared para mantener el equilibrio."
    },

    {
        id: "c_picante_suave_48", type: "card", category: "picante", intensity: "suave",
        text: "Hazle la **paja rusa** (mastúrbalo con los senos), deslizando los pezones contra su pene mientras lo estimulas."
    },

    {
        id: "c_picante_suave_49", type: "card", category: "picante", intensity: "suave",
        text: "(Ella) Toca tus partes íntimas y después chúpate los dedos, mientras él te observa. Ofrece tus fluidos a él."
    },

    {
        id: "c_picante_suave_50", type: "card", category: "picante", intensity: "suave",
        text: "Utilizando un **hielo**, recorre sus pezones y hazle sexo oral a ella, alternando frío y calor."
    },

    {
        id: "c_picante_suave_51", type: "card", category: "picante", intensity: "suave",
        text: "Utilizando un **hielo** con tu boca, hazle sexo oral a ella, dejando que el frío recorra su clítoris."
    },

    {
        id: "c_picante_suave_52", type: "card", category: "picante", intensity: "suave",
        text: "Utilizando aceites de calor, masajea su pene y hazle sexo oral, combinando calor y humedad."
    },

    {
        id: "c_picante_suave_53", type: "card", category: "picante", intensity: "suave",
        text: "Vayan al siguiente nivel o permanezcan aquí un rato más; decidan si siguen sin ropa o siguen con juguetes."
    },

    {
        id: "c_picante_suave_54", type: "card", category: "picante", intensity: "suave",
        text: "Masajea el pene con la vagina sin penetración (estilo “coito seco” con la zona interna de la vulva)."
    },

    {
        id: "c_picante_suave_55", type: "card", category: "picante", intensity: "suave",
        text: "Mastúrbale mientras le comes una oreja, combinando estímulo auditivo y oral."
    },

    {
        id: "c_picante_suave_56", type: "card", category: "picante", intensity: "suave",
        text: "Ella acostada boca abajo (posición Kamasutra) mientras él practica sexo oral y anal simultáneo."
    },

    /* ====================  MEDIO  ==================== */
    {
        id: "c_picante_medio_01", type: "card", category: "picante", intensity: "medio",
        text: "Con ayuda de un **hielo**, lame sus **pezones** de forma más prolongada, manteniendo el frío por 10 seg."
    },

    {
        id: "c_picante_medio_02", type: "card", category: "picante", intensity: "medio",
        text: "Masajea sus **genitales** con una presión media y un lubricante con efecto de hormigueo."
    },

    {
        id: "c_picante_medio_03", type: "card", category: "picante", intensity: "medio",
        text: "Aplica lubricación **fría** y aspira ligeramente alrededor de los labios mayores, sin introducir la lengua, creando succión apenas perceptible."
    },

    {
        id: "c_picante_medio_04", type: "card", category: "picante", intensity: "medio",
        text: "Lame sus **genitales** y, al llegar al clítoris, intensifica el ritmo con la lengua."
    },

    {
        id: "c_picante_medio_05", type: "card", category: "picante", intensity: "medio",
        text: "Juega con los labios mayores y el clítoris usando dos dedos y la lengua al mismo tiempo."
    },

    {
        id: "c_picante_medio_06", type: "card", category: "picante", intensity: "medio",
        text: "Masajea sus **testículos** con lubricante caliente, realizando ligeros rodillos con la mano."
    },

    {
        id: "c_picante_medio_07", type: "card", category: "picante", intensity: "medio",
        text: "Besa **apasionadamente** su pene, deslizando la boca a lo largo del eje y terminando en el glande."
    },

    {
        id: "c_picante_medio_08", type: "card", category: "picante", intensity: "medio",
        text: "Masajea el pene con tus pies lubricados, usando la planta del pie para ejercer presión rítmica."
    },

    {
        id: "c_picante_medio_09", type: "card", category: "picante", intensity: "medio",
        text: "Masturba el pene con tus manos, combinando agarre firme y pulsaciones suaves."
    },

    {
        id: "c_picante_medio_10", type: "card", category: "picante", intensity: "medio",
        text: "Masturba su vagina con los dedos, introduciendo un dedo y ejerciendo presión en el punto G."
    },

    {
        id: "c_picante_medio_11", type: "card", category: "picante", intensity: "medio",
        text: "Usa **las manos de él** para tocar tu cuerpo; elige una zona erógena y pídele que la explore."
    },

    {
        id: "c_picante_medio_12", type: "card", category: "picante", intensity: "medio",
        text: "Chúpale el pene y, cuando llegue a la cabeza, **succiona** ligeramente para crear succión intermitente."
    },

    {
        id: "c_picante_medio_13", type: "card", category: "picante", intensity: "medio",
        text: "Lame su **clítoris** con la lengua, intensificando el ritmo cada 3 seg."
    },

    {
        id: "c_picante_medio_14", type: "card", category: "picante", intensity: "medio",
        text: "Lubrícale el pene y realiza movimientos de vaivén con la mano, añadiendo una ligera presión en la base."
    },

    {
        id: "c_picante_medio_15", type: "card", category: "picante", intensity: "medio",
        text: "Lubrícale el clítoris con un gel al calor y masajea con la punta de los dedos, alternando círculos y deslizamientos."
    },

    {
        id: "c_picante_medio_16", type: "card", category: "picante", intensity: "medio",
        text: "Hazle sexo oral a ella, manteniendo el foco principal en el clítoris y usando la lengua en forma de “8”. "
    },

    {
        id: "c_picante_medio_17", type: "card", category: "picante", intensity: "medio",
        text: "Hazle sexo oral a él; si llega al punto de eyaculación, saboreen los fluidos antes de tragar."
    },

    {
        id: "c_picante_medio_18", type: "card", category: "picante", intensity: "medio",
        text: "Hazle sexo oral a ella, saborea sus fluidos, moja dos dedos y ofrécele el sabor a ella antes de retirarte."
    },

    {
        id: "c_picante_medio_19", type: "card", category: "picante", intensity: "medio",
        text: "Lame el **ano** de ella, usando la lengua y los dedos, sin penetrar, solo estimulando la zona perianal."
    },

    {
        id: "c_picante_medio_20", type: "card", category: "picante", intensity: "medio",
        text: "Juega con el **ano** de ella usando la lengua y un dedo con lubricante, manteniendo un ritmo suave."
    },

    {
        id: "c_picante_medio_21", type: "card", category: "picante", intensity: "medio",
        text: "Acuéstate sobre la barriga de él y acaricia su pene con tus manos y boca, manteniendo el ritmo mientras él se excita."
    },

    {
        id: "c_picante_medio_22", type: "card", category: "picante", intensity: "medio",
        text: "Acóstantévalos boca arriba, con sus cabezas opuestas; suban una pierna en el cuerpo del otro y acaricien piernas y genitales, incrementando la presión."
    },

    {
        id: "c_picante_medio_23", type: "card", category: "picante", intensity: "medio",
        text: "Deja que él te vea mientras tú misma te excitas tocándote el cuerpo y los genitales, aumentas la velocidad cada 5 seg."
    },

    {
        id: "c_picante_medio_24", type: "card", category: "picante", intensity: "medio",
        text: "Deja que ella te vea mientras tú mismo te tocas el cuerpo y los genitales, manteniendo contacto visual."
    },

    {
        id: "c_picante_medio_25", type: "card", category: "picante", intensity: "medio",
        text: "Deja que ella guíe tus manos y dedos en su vagina, siguiendo su ritmo y profundidad."
    },

    {
        id: "c_picante_medio_26", type: "card", category: "picante", intensity: "medio",
        text: "Mastúrbalo a él delicadamente, usando una presión ligera y cambios de ritmo cada pocos segundos."
    },

    {
        id: "c_picante_medio_27", type: "card", category: "picante", intensity: "medio",
        text: "Siéntate en la cama y deja que él te vea mientras tú misma te acaricias la vagina, aumentando la estimulación con cada movimiento."
    },

    {
        id: "c_picante_medio_28", type: "card", category: "picante", intensity: "medio",
        text: "Ponte de pie y deja que él te vea mientras te excitas tocándote los senos con la mano, añadiendo ligeras palmadas."
    },

    {
        id: "c_picante_medio_29", type: "card", category: "picante", intensity: "medio",
        text: "Ponte de perrito y deja que él te vea mientras te acaricias y metes un dedo dentro de ti, manteniendo la vista."
    },

    {
        id: "c_picante_medio_30", type: "card", category: "picante", intensity: "medio",
        text: "Deja que ella te vea mientras tú mismo te masturbas de pie, usando ambas manos para variar la presión."
    },

    {
        id: "c_picante_medio_31", type: "card", category: "picante", intensity: "medio",
        text: "Deja que ella te vea mientras tú mismo te masturbas sentado, apoyado en una silla."
    },

    {
        id: "c_picante_medio_32", type: "card", category: "picante", intensity: "medio",
        text: "Mujer hace garganta profunda (deep throat) en el pene de él, manteniendo la respiración y la vista."
    },

    {
        id: "c_picante_medio_33", type: "card", category: "picante", intensity: "medio",
        text: "Lame su clítoris con **un** dedo dentro de la vagina, combinando succión y presión."
    },

    {
        id: "c_picante_medio_34", type: "card", category: "picante", intensity: "medio",
        text: "Bésalo a él por la entrepierna: labios sobre los testículos, perineo y finalizando con una ligera succión del ano."
    },

    {
        id: "c_picante_medio_35", type: "card", category: "picante", intensity: "medio",
        text: "Bésala a ella por la entrepierna: labios sobre la entrada de la vagina y el ano, manteniendo la respiración."
    },

    {
        id: "c_picante_medio_36", type: "card", category: "picante", intensity: "medio",
        text: "Chúpale a él uno o varios dedos de la mano mientras lo masturbas con la otra mano, alternando succión y presión."
    },

    {
        id: "c_picante_medio_37", type: "card", category: "picante", intensity: "medio",
        text: "Mete completamente sus testículos en tu boca y masajea con tu lengua, girando suavemente."
    },

    {
        id: "c_picante_medio_38", type: "card", category: "picante", intensity: "medio",
        text: "Mete **dos dedos** en la vagina y prueben ambos los fluidos vaginales, alternando extracción y succión."
    },

    {
        id: "c_picante_medio_39", type: "card", category: "picante", intensity: "medio",
        text: "Mujer, lame solo la punta del pene, manteniendo la lengua en contacto durante varios segundos."
    },

    {
        id: "c_picante_medio_40", type: "card", category: "picante", intensity: "medio",
        text: "Lubrica el ano de ella y masajea desde fuera con dedos y lengua, sin penetrar, manteniendo presión ligera."
    },

    {
        id: "c_picante_medio_41", type: "card", category: "picante", intensity: "medio",
        text: "Lubrica el ano de él y masajea desde fuera con dedos y lengua, variando el ritmo cada 4 seg."
    },

    {
        id: "c_picante_medio_42", type: "card", category: "picante", intensity: "medio",
        text: "Mastrábense mutuamente, manteniendo la vista y susurrando palabras de aliento."
    },

    {
        id: "c_picante_medio_43", type: "card", category: "picante", intensity: "medio",
        text: "Beso de pie mientras se masturban, apoyándose contra la pared para mayor estabilidad."
    },

    {
        id: "c_picante_medio_44", type: "card", category: "picante", intensity: "medio",
        text: "Hazle la paja rusa (mastúrbalo con los senos) incrementando la presión cada 5 seg."
    },

    {
        id: "c_picante_medio_45", type: "card", category: "picante", intensity: "medio",
        text: "(Ella) Toca tus partes íntimas y después chúpate los dedos, mientras él te observa. Ofrece tus fluidos a él al final."
    },

    {
        id: "c_picante_medio_46", type: "card", category: "picante", intensity: "medio",
        text: "Utilizando un **hielo**, recorre sus pezones y hazle sexo oral a ella, alternando frío y calor cada 2 seg."
    },

    {
        id: "c_picante_medio_47", type: "card", category: "picante", intensity: "medio",
        text: "Utilizando un **hielo** con tu boca, hazle sexo oral a ella, dejando que el hielo toque su clítoris intermitentemente."
    },

    {
        id: "c_picante_medio_48", type: "card", category: "picante", intensity: "medio",
        text: "Utilizando aceites de calor, masajea su pene y hazle sexo oral, combinando la sensación tibia con la humedad de la boca."
    },

    {
        id: "c_picante_medio_49", type: "card", category: "picante", intensity: "medio",
        text: "Vayan al siguiente nivel o permanezcan aquí un rato más; decidan si siguen con ropa o sin ella."
    },

    {
        id: "c_picante_medio_50", type: "card", category: "picante", intensity: "medio",
        text: "Masajea el pene con la vagina sin penetración, usando la zona interna de los labios mayores para crear fricción."
    },

    {
        id: "c_picante_medio_51", type: "card", category: "picante", intensity: "medio",
        text: "Mastúrbale mientras le comes una oreja, combinando la presión oral con el sonido de su respiración."
    },

    {
        id: "c_picante_medio_52", type: "card", category: "picante", intensity: "medio",
        text: "Ella acostada boca abajo (posición Kamasutra) mientras él practica sexo oral y anal simultáneamente, manteniendo el ritmo y la comunicación."
    },

    /* ====================  ALTO  ==================== */
    {
        id: "c_picante_alto_01", type: "card", category: "picante", intensity: "alto",
        text: "Utiliza **hielo** directamente sobre sus pezones, manteniéndolo en contacto 5 seg y luego realiza sexo oral a ella, combinando sensaciones de frío y calor."
    },

    {
        id: "c_picante_alto_02", type: "card", category: "picante", intensity: "alto",
        text: "Masajea sus genitales con **aceite caliente** y, sin pausa, hazle sexo oral profundo, incorporando pequeñas succiones y lamidos rápidos."
    },

    {
        id: "c_picante_alto_03", type: "card", category: "picante", intensity: "alto",
        text: "Aplica lubricación **caliente** y aspira fuertemente alrededor de sus labios mayores, introduciendo la lengua hasta el clítoris y sosteniendo la succión."
    },

    {
        id: "c_picante_alto_04", type: "card", category: "picante", intensity: "alto",
        text: "Lame sus genitales intensamente, varía la presión y el ritmo, culminando con una succión profunda del clítoris durante 10 seg."
    },

    {
        id: "c_picante_alto_05", type: "card", category: "picante", intensity: "alto",
        text: "Juega simultáneamente con los labios mayores, el clítoris y la zona perineal usando dos dedos y la lengua, sin parar."
    },

    {
        id: "c_picante_alto_06", type: "card", category: "picante", intensity: "alto",
        text: "Masajea sus testículos con lubricante caliente, rozando la zona con la palma y la base del pulgar, creando una sensación de calor pulsante."
    },

    {
        id: "c_picante_alto_07", type: "card", category: "picante", intensity: "alto",
        text: "Besa **apasionadamente** su pene, introduciendo la boca en el eje y realizando una succión rítmica y profunda."
    },

    {
        id: "c_picante_alto_08", type: "card", category: "picante", intensity: "alto",
        text: "Masajea el pene con tus pies lubricados, presionando la planta del pie contra el glande y el eje en movimiento pendular."
    },

    {
        id: "c_picante_alto_09", type: "card", category: "picante", intensity: "alto",
        text: "Masturba el pene con tus manos, utilizando agarre firme y movimientos de “bomba” que aumentan de velocidad cada 5 seg."
    },

    {
        id: "c_picante_alto_10", type: "card", category: "picante", intensity: "alto",
        text: "Masturba su vagina con los dedos, introduciendo dos o tres dedos y trabajando el punto G con presión alternada."
    },

    {
        id: "c_picante_alto_11", type: "card", category: "picante", intensity: "alto",
        text: "Usa **las manos de él** para tocar tu cuerpo; pídele que explore cualquier zona con firmeza y velocidad creciente."
    },

    {
        id: "c_picante_alto_12", type: "card", category: "picante", intensity: "alto",
        text: "Chúpale el pene con fuerza, succionando hasta la base y manteniendo contacto con la lengua para estimular la corona."
    },

    {
        id: "c_picante_alto_13", type: "card", category: "picante", intensity: "alto",
        text: "Lame su clítoris con la lengua, añadiendo vibración con la succión de la boca y manteniendo presión constante."
    },

    {
        id: "c_picante_alto_14", type: "card", category: "picante", intensity: "alto",
        text: "Lubrícale el pene con un gel especial y realiza movimientos de vaivén acelerados, acompañando con una ligera presión en la base."
    },

    {
        id: "c_picante_alto_15", type: "card", category: "picante", intensity: "alto",
        text: "Lubrícale el clítoris con aceite tibio y masajea con la punta de los dedos en círculos cada 2 seg, incrementando la intensidad."
    },

    {
        id: "c_picante_alto_16", type: "card", category: "picante", intensity: "alto",
        text: "Hazle sexo oral a ella, enfocándote en el clítoris y los labios mayores, alternando lamidos rápidos con una succión profunda."
    },

    {
        id: "c_picante_alto_17", type: "card", category: "picante", intensity: "alto",
        text: "Hazle sexo oral a él, llegando al punto de eyaculación; saboreen los fluidos antes de tragar y continúen con caricias."
    },

    {
        id: "c_picante_alto_18", type: "card", category: "picante", intensity: "alto",
        text: "Hazle sexo oral a ella, saborea sus fluidos, moja tres dedos y ofrécelos a ella para que los pruebe."
    },

    {
        id: "c_picante_alto_19", type: "card", category: "picante", intensity: "alto",
        text: "Lame el ano de ella de forma profunda, introduciendo la lengua unos 2 cm y combinando suaves succiones."
    },

    {
        id: "c_picante_alto_20", type: "card", category: "picante", intensity: "alto",
        text: "Juega con el ano de ella usando la lengua y un pequeño plug de silicona, manteniendo presión constante."
    },

    {
        id: "c_picante_alto_21", type: "card", category: "picante", intensity: "alto",
        text: "Acuéstate sobre su barriga y **acaricia su pene** con la boca y las manos, mientras él eyacula; saboreen los fluidos juntos."
    },

    {
        id: "c_picante_alto_22", type: "card", category: "picante", intensity: "alto",
        text: "Acóstantévalos boca arriba, con sus cabezas opuestas; suban una pierna en el cuerpo del otro y estimulen genitales con presión firme."
    },

    {
        id: "c_picante_alto_23", type: "card", category: "picante", intensity: "alto",
        text: "Deja que él te vea mientras tú misma te excitas, **aumentando la velocidad** de los movimientos y gritando suavemente."
    },

    {
        id: "c_picante_alto_24", type: "card", category: "picante", intensity: "alto",
        text: "Deja que ella te vea mientras tú mismo te tocas, manteniendo la respiración entrecortada y los gemidos."
    },

    {
        id: "c_picante_alto_25", type: "card", category: "picante", intensity: "alto",
        text: "Deja que ella guíe tus manos y dedos dentro de su vagina, presionando más fuerte en el punto G."
    },

    {
        id: "c_picante_alto_26", type: "card", category: "picante", intensity: "alto",
        text: "Mastúrbalo a él con fuerza, ejecutando **pompas** rítmicas y cambiando de agarre cada 3 seg."
    },

    {
        id: "c_picante_alto_27", type: "card", category: "picante", intensity: "alto",
        text: "Siéntate en la cama y deja que él te vea mientras tú misma **amasas** la vagina con movimientos profundos y circulares."
    },

    {
        id: "c_picante_alto_28", type: "card", category: "picante", intensity: "alto",
        text: "Ponte de pie y deja que él te vea mientras te excitas tocándote los senos con ambas manos, apretándolos firmemente."
    },

    {
        id: "c_picante_alto_29", type: "card", category: "picante", intensity: "alto",
        text: "Ponte de perrito y deja que él te vea mientras **penetras** con un dedo y estimulas el punto P simultáneamente."
    },

    {
        id: "c_picante_alto_30", type: "card", category: "picante", intensity: "alto",
        text: "Deja que ella te vea mientras tú mismo te masturbas de pie, manteniendo contacto visual y gritando su nombre."
    },

    {
        id: "c_picante_alto_31", type: "card", category: "picante", intensity: "alto",
        text: "Deja que ella te vea mientras tú mismo te masturbas sentado, apoyándote contra la pared para mayor estabilidad."
    },

    {
        id: "c_picante_alto_32", type: "card", category: "picante", intensity: "alto",
        text: "Mujer hace garganta profunda (deep throat) en el pene de él, manteniendo la vista y respiración controlada."
    },

    {
        id: "c_picante_alto_33", type: "card", category: "picante", intensity: "alto",
        text: "Lame su clítoris con **un** dedo dentro de la vagina, succionando y girando al mismo tiempo para mayor estimulación."
    },

    {
        id: "c_picante_alto_34", type: "card", category: "picante", intensity: "alto",
        text: "Bésalo a él por la entrepierna, enfocándote en los testículos, el perineo y finalizando con una succión ligera del ano."
    },

    {
        id: "c_picante_alto_35", type: "card", category: "picante", intensity: "alto",
        text: "Bésala a ella por la entrepierna, pasando la lengua por la entrada de la vagina y el ano, creando una sensación de humectación."
    },

    {
        id: "c_picante_alto_36", type: "card", category: "picante", intensity: "alto",
        text: "Chúpale a él uno o varios dedos de la mano mientras lo masturbas con la otra mano, manteniendo succión constante."
    },

    {
        id: "c_picante_alto_37", type: "card", category: "picante", intensity: "alto",
        text: "Mete **completamente** sus testículos en tu boca y masajea con tu lengua, girando y succionando al mismo tiempo."
    },

    {
        id: "c_picante_alto_38", type: "card", category: "picante", intensity: "alto",
        text: "Mete **dos dedos** en la vagina y prueben juntos los fluidos, alternando extracción y succión profunda."
    },

    {
        id: "c_picante_alto_39", type: "card", category: "picante", intensity: "alto",
        text: "Mujer, lame **solo la punta del pene** con la lengua, manteniendo presión constante y un pequeño tirón al terminar."
    },

    {
        id: "c_picante_alto_40", type: "card", category: "picante", intensity: "alto",
        text: "Lubrica el ano de ella y masajea desde fuera con dedos y lengua, incrementando la presión y la velocidad cada 3 seg."
    },

    {
        id: "c_picante_alto_41", type: "card", category: "picante", intensity: "alto",
        text: "Lubrica el ano de él y masajea desde fuera con dedos y lengua, aumentando la intensidad hasta que empiece a gemir."
    },

    {
        id: "c_picante_alto_42", type: "card", category: "picante", intensity: "alto",
        text: "Mastrábense mutuamente, manteniendo **mirada fija** y susurrando fantasías cada vez que alcanzan un orgasmo."
    },

    {
        id: "c_picante_alto_43", type: "card", category: "picante", intensity: "alto",
        text: "Besó de pie mientras se masturban, cruzando una pierna sobre el hombro del otro para mayor contacto."
    },

    {
        id: "c_picante_alto_44", type: "card", category: "picante", intensity: "alto",
        text: "Hazle la paja rusa (mastúrbalo con los senos) usando ambos pechos para comprimir el pene y crear succión simultánea."
    },

    {
        id: "c_picante_alto_45", type: "card", category: "picante", intensity: "alto",
        text: "(Ella) Toca tus partes íntimas y luego **chúpate los dedos**, mientras él te observa; ofrece tus fluidos como “regalo”."
    },

    {
        id: "c_picante_alto_46", type: "card", category: "picante", intensity: "alto",
        text: "Usando un **hielo**, recorre sus pezones y hazle sexo oral a ella, alternando el contacto frío con lamidos calientes."
    },

    {
        id: "c_picante_alto_47", type: "card", category: "picante", intensity: "alto",
        text: "Usando un **hielo** con la boca, hazle sexo oral a ella, dejando que el hielo toque su clítoris mientras lo lamides."
    },

    {
        id: "c_picante_alto_48", type: "card", category: "picante", intensity: "alto",
        text: "Usando aceites de calor, masajea su pene y hazle sexo oral, combinando la presión caliente del aceite con la succión de la boca."
    },

    {
        id: "c_picante_alto_49", type: "card", category: "picante", intensity: "alto",
        text: "Vayan al siguiente nivel o permanezcan aquí un rato más; quítense toda la ropa y pasen a la etapa sin limites."
    },

    {
        id: "c_picante_alto_50", type: "card", category: "picante", intensity: "alto",
        text: "Masajea el pene con la vagina sin penetración, usando la zona interna de los labios menores para crear fricción fuerte."
    },

    {
        id: "c_picante_alto_51", type: "card", category: "picante", intensity: "alto",
        text: "Mastúrbale mientras le comes una oreja, alternando succión y mordiscos suaves en la oreja mientras su pene vibra."
    },

    {
        id: "c_picante_alto_52", type: "card", category: "picante", intensity: "alto",
        text: "Ella acostada boca abajo (posición Kamasutra) mientras él practica sexo oral y anal simultáneo, manteniendo contacto visual y respiración sincronizada."
    },


    /* ====================  SUAVE  ==================== */
    /* Acciones que siguen siendo “picantes”, pero con ritmo lento,
       poca penetración profunda o solo juego visual.                */
    {
        id: "c_extremo_suave_01", type: "card", category: "extremo", intensity: "suave",
        text: "Sientate sobre el pecho de ella y **mastúrbate** con movimientos lentos, sin presión sobre su piel."
    },

    {
        id: "c_extremo_suave_02", type: "card", category: "extremo", intensity: "suave",
        text: "Sientate sobre el pecho de él y **mastúrbate** mientras mantienes contacto visual."
    },

    {
        id: "c_extremo_suave_03", type: "card", category: "extremo", intensity: "suave",
        text: "Mujer, **mastúrbate en cuatro**; hombre, **mastúrbate de pie**, sin tocar al otro."
    },

    {
        id: "c_extremo_suave_04", type: "card", category: "extremo", intensity: "suave",
        text: "Coloca lubricación **fría o caliente**, aspira y sopla alrededor de sus genitales de forma muy suave; avanza solo hasta que te pida que pares."
    },

    {
        id: "c_extremo_suave_05", type: "card", category: "extremo", intensity: "suave",
        text: "Mete **un dedo suavemente** en la vagina de ella, sin moverlo, solo para sentir."
    },

    {
        id: "c_extremo_suave_06", type: "card", category: "extremo", intensity: "suave",
        text: "Golpea sus senos con tu pene de forma ligera, como un toque, sin penetrar."
    },

    {
        id: "c_extremo_suave_07", type: "card", category: "extremo", intensity: "suave",
        text: "Golpea su clítoris con tu pene, apenas rozando, sin presión."
    },

    {
        id: "c_extremo_suave_08", type: "card", category: "extremo", intensity: "suave",
        text: "Sientate sobre la cara de él y frota tu vagina y ano según tu placer, manteniendo la cabeza de él inmóvil."
    },

    {
        id: "c_extremo_suave_09", type: "card", category: "extremo", intensity: "suave",
        text: "Sientate sobre la cara de ella y frota tu pene, testículos y ano según tu placer, sin empujar."
    },

    {
        id: "c_extremo_suave_10", type: "card", category: "extremo", intensity: "suave",
        text: "Ponte en cuatro y deja que él te dé una **lamida de ano** suave y lenta."
    },

    {
        id: "c_extremo_suave_11", type: "card", category: "extremo", intensity: "suave",
        text: "Ponte en cuatro y deja que ella te dé una **lamida de ano** suave."
    },

    {
        id: "c_extremo_suave_12", type: "card", category: "extremo", intensity: "suave",
        text: "Ponte en cuatro y deja que él te dé una **chupada de vagina** ligera."
    },

    {
        id: "c_extremo_suave_13", type: "card", category: "extremo", intensity: "suave",
        text: "Sienta­te, él de pie, y **mastúrbalo** hasta que suelte un poco de semen en tu mano o cara (sin llegar al eyaculado completo)."
    },

    {
        id: "c_extremo_suave_14", type: "card", category: "extremo", intensity: "suave",
        text: "Hazle sexo oral hasta que suelte un poco de semen en tu mano o cara (sin eyaculación completa)."
    },

    {
        id: "c_extremo_suave_15", type: "card", category: "extremo", intensity: "suave",
        text: "Sienta­te con ella de pie, pon una pierna sobre tus hombros y **hazle sexo oral** hasta que te pida que pares."
    },

    {
        id: "c_extremo_suave_16", type: "card", category: "extremo", intensity: "suave",
        text: "Hazle sexo oral a él **masajeando su ano** con la mano, sin penetración."
    },

    {
        id: "c_extremo_suave_17", type: "card", category: "extremo", intensity: "suave",
        text: "Hazle sexo oral a ella **masajeando su ano** con la mano, sin penetrar."
    },

    {
        id: "c_extremo_suave_18", type: "card", category: "extremo", intensity: "suave",
        text: "Usen algún **juguete sexual** (vibrador, anillo, etc.) sin penetración profunda."
    },

    {
        id: "c_extremo_suave_19", type: "card", category: "extremo", intensity: "suave",
        text: "Hombre, intenta **lamer el clítoris**, meter un dedo en la vagina y **besar el ano y los senos** al mismo tiempo, sin presión."
    },

    {
        id: "c_extremo_suave_20", type: "card", category: "extremo", intensity: "suave",
        text: "Posición **69 de lado** (ambos acostados de lado) – mantengan la actividad ligera y sin ritmo rápido."
    },

    {
        id: "c_extremo_suave_21", type: "card", category: "extremo", intensity: "suave",
        text: "Con tu boca, **excita a ella** tanto, pero detente antes de que alcance el orgasmo."
    },

    {
        id: "c_extremo_suave_22", type: "card", category: "extremo", intensity: "suave",
        text: "Con tu boca, **excita a él** tanto, pero detente antes de que alcance el orgasmo; si derrama un poco de semen, saboreenlo juntos."
    },

    {
        id: "c_extremo_suave_23", type: "card", category: "extremo", intensity: "suave",
        text: "Ponte de pie, él sentado frente a ti, **tócale por la cabeza** para que te haga sexo oral con la intensidad que quieras."
    },

    {
        id: "c_extremo_suave_24", type: "card", category: "extremo", intensity: "suave",
        text: "Ponte de pie, ella arrodillada frente a ti, **tócale por la cabeza** para que te haga sexo oral; si derrama semen, saboreenlo juntos."
    },

    {
        id: "c_extremo_suave_25", type: "card", category: "extremo", intensity: "suave",
        text: "Lubrica las nalgas de ella y **frota tu pene** sin penetrar, solo roce."
    },

    {
        id: "c_extremo_suave_26", type: "card", category: "extremo", intensity: "suave",
        text: "Lubrica el ano de ella y **masajea desde fuera con el pene**, sin penetrar."
    },

    {
        id: "c_extremo_suave_27", type: "card", category: "extremo", intensity: "suave",
        text: "Lubrica el ano de él y **masajea con uno o dos dedos** externos, sin ingreso."
    },

    {
        id: "c_extremo_suave_28", type: "card", category: "extremo", intensity: "suave",
        text: "Lubrica el ano de ella y **masajea con un dedo o un plug anal**, sin presión excesiva."
    },

    {
        id: "c_extremo_suave_29", type: "card", category: "extremo", intensity: "suave",
        text: "Lubrica el ano de él y **masajea cuidadosamente** con dedo o plug anal, sin penetración profunda."
    },

    {
        id: "c_extremo_suave_30", type: "card", category: "extremo", intensity: "suave",
        text: "Hazle sexo oral a ella **mientras masajéas su ano con un dedo**; mantén la presión ligera."
    },

    {
        id: "c_extremo_suave_31", type: "card", category: "extremo", intensity: "suave",
        text: "Vayan al **siguiente nivel** o permanezcan aquí un rato más; pueden decidir seguir sin ropa."
    },

    {
        id: "c_extremo_suave_32", type: "card", category: "extremo", intensity: "suave",
        text: "Penetrala **profundamente sin que ambos se muevan**; sólo presiona y mantén contacto total."
    },

    {
        id: "c_extremo_suave_33", type: "card", category: "extremo", intensity: "suave",
        text: "Introduce el pene en su vagina y **masajea con un dedo su ano**; sin movimiento de la pelvis."
    },

    {
        id: "c_extremo_suave_34", type: "card", category: "extremo", intensity: "suave",
        text: "Realicen **5 penetraciones suaves** con fuerza moderada; elijan posición y zona."
    },

    {
        id: "c_extremo_suave_35", type: "card", category: "extremo", intensity: "suave",
        text: "Plug anal para la mujer (uso externo, sin inserción profunda)."
    },

    {
        id: "c_extremo_suave_36", type: "card", category: "extremo", intensity: "suave",
        text: "Plug anal para el hombre (uso externo, sin inserción profunda)."
    },

    {
        id: "c_extremo_suave_37", type: "card", category: "extremo", intensity: "suave",
        text: "Hombre, **fotografía a la mujer** con un dildo en la vagina (solo la foto, sin penetración)."
    },

    {
        id: "c_extremo_suave_38", type: "card", category: "extremo", intensity: "suave",
        text: "Mastúrbense mutuamente de pie, mirándose a los ojos, sin contacto corporal."
    },

    /* ====================  MEDIO  ==================== */
    /* Acciones más intensas: penetraciones cortas, golpes leves,
       uso de juguetes en forma activa, fotografías con acción.       */
    {
        id: "c_extremo_medio_01", type: "card", category: "extremo", intensity: "medio",
        text: "Mete **el pene cinco veces** en la vagina de forma rítmica, sin pausa mayor."
    },

    {
        id: "c_extremo_medio_02", type: "card", category: "extremo", intensity: "medio",
        text: "Mete **el pene siete veces** en la vagina, aumentando la velocidad cada inserción."
    },

    {
        id: "c_extremo_medio_03", type: "card", category: "extremo", intensity: "medio",
        text: "Mete **el pene diez veces** en la vagina, manteniendo ritmo constante y firme."
    },

    {
        id: "c_extremo_medio_04", type: "card", category: "extremo", intensity: "medio",
        text: "Sienta­te sobre la cara de él y **frota tu vagina y ano** al ritmo que desees, dejando que él respire."
    },

    {
        id: "c_extremo_medio_05", type: "card", category: "extremo", intensity: "medio",
        text: "Sienta­te sobre la cara de ella y **frota tu pene, testículos y ano** siguiendo su respiración."
    },

    {
        id: "c_extremo_medio_06", type: "card", category: "extremo", intensity: "medio",
        text: "Ponte en cuatro y permite que él te dé una **lamida de ano** más profunda, usando la lengua y los labios."
    },

    {
        id: "c_extremo_medio_07", type: "card", category: "extremo", intensity: "medio",
        text: "Ponte en cuatro y permite que ella te dé una **lamida de ano** más intensa, con succión."
    },

    {
        id: "c_extremo_medio_08", type: "card", category: "extremo", intensity: "medio",
        text: "Ponte en cuatro y deja que él te dé una **chupada de vagina** con un agarre más firme."
    },

    {
        id: "c_extremo_medio_09", type: "card", category: "extremo", intensity: "medio",
        text: "Sienta­te, él de pie, y **mastúrbalo** hasta que suelte un poco de semen en tu cara o mano (no eyaculación completa)."
    },

    {
        id: "c_extremo_medio_10", type: "card", category: "extremo", intensity: "medio",
        text: "Hazle sexo oral hasta que suelte un poco de semen en tu cara o mano (sin llegar al pico)."
    },

    {
        id: "c_extremo_medio_11", type: "card", category: "extremo", intensity: "medio",
        text: "Sienta­te con ella de pie, pon una pierna sobre tus hombros y **hazle sexo oral** hasta que te indique que pares."
    },

    {
        id: "c_extremo_medio_12", type: "card", category: "extremo", intensity: "medio",
        text: "Hazle sexo oral a él **masajeando su ano** con dos dedos, alternando presión."
    },

    {
        id: "c_extremo_medio_13", type: "card", category: "extremo", intensity: "medio",
        text: "Hazle sexo oral a ella **masajeando su ano** con dos dedos, sin penetrar."
    },

    {
        id: "c_extremo_medio_14", type: "card", category: "extremo", intensity: "medio",
        text: "Usen algún juguete sexual (vibrador o anillo) **activamente** mientras ambos quedan sin ropa."
    },

    {
        id: "c_extremo_medio_15", type: "card", category: "extremo", intensity: "medio",
        text: "Hombre, **lamer el clítoris**, meter un dedo en la vagina y **besar** el ano y los senos al mismo tiempo, con presión moderada."
    },

    {
        id: "c_extremo_medio_16", type: "card", category: "extremo", intensity: "medio",
        text: "Fotos: **pene en mano / vagina abierta en cuatro** – muéstralas y luego penetra cinco veces."
    },

    {
        id: "c_extremo_medio_17", type: "card", category: "extremo", intensity: "medio",
        text: "Fotos: **pene en mano / vagina abierta en misionero** – muéstralas y luego penetra cinco veces."
    },

    {
        id: "c_extremo_medio_18", type: "card", category: "extremo", intensity: "medio",
        text: "Fotos: **pene en su boca** – muéstralas, luego en el siguiente turno realiza la penetración."
    },

    {
        id: "c_extremo_medio_19", type: "card", category: "extremo", intensity: "medio",
        text: "Fotos: **bolas en su boca** – muéstralas, después en el siguiente turno ejecuta la penetración con el plug."
    },

    {
        id: "c_extremo_medio_20", type: "card", category: "extremo", intensity: "medio",
        text: "Fotos: **oral a ella** – muéstralas, después realiza una posición oral con ella."
    },

    {
        id: "c_extremo_medio_21", type: "card", category: "extremo", intensity: "medio",
        text: "Fotos: **masturbándote** – muestra la foto y luego realiza una masturbación mutua."
    },

    {
        id: "c_extremo_medio_22", type: "card", category: "extremo", intensity: "medio",
        text: "Foto: **él boca arriba, ella sobre su pene** mirando sus pies; después, penetren 5 veces de pie."
    },

    {
        id: "c_extremo_medio_23", type: "card", category: "extremo", intensity: "medio",
        text: "Penétrate **5 veces de pie**, manteniendo el ritmo y sin detenerse."
    },

    {
        id: "c_extremo_medio_24", type: "card", category: "extremo", intensity: "medio",
        text: "Posición **69** – ella arriba y él abajo; mantengan el ritmo medio durante 2 min."
    },

    {
        id: "c_extremo_medio_25", type: "card", category: "extremo", intensity: "medio",
        text: "Posición **69** – él arriba y ella abajo; mantengan la respiración sincronizada."
    },

    {
        id: "c_extremo_medio_26", type: "card", category: "extremo", intensity: "medio",
        text: "Juega con tu pene **golpeando alrededor de su vagina** con ritmo moderado, sin penetrar."
    },

    {
        id: "c_extremo_medio_27", type: "card", category: "extremo", intensity: "medio",
        text: "Introduce solo la **cabeza del pene** en su vagina y muévela suavemente sobre sus paredes, sin profundidad."
    },

    {
        id: "c_extremo_medio_28", type: "card", category: "extremo", intensity: "medio",
        text: "Con tu boca, **excita a ella** hasta que esté al borde del orgasmo, pero detente en el último segundo."
    },

    {
        id: "c_extremo_medio_29", type: "card", category: "extremo", intensity: "medio",
        text: "Con tu boca, **excita a él** hasta que esté al borde del orgasmo; si derrama un poco de semen, saboreenlo juntos."
    },

    {
        id: "c_extremo_medio_30", type: "card", category: "extremo", intensity: "medio",
        text: "Ponte de pie, él sentado frente a ti, **tócale por la cabeza** para que te haga sexo oral, elige la intensidad que prefieras."
    },

    {
        id: "c_extremo_medio_31", type: "card", category: "extremo", intensity: "medio",
        text: "Ponte de pie, ella arrodillada frente a ti, **tócale por la cabeza** para que te haga sexo oral; si derrama semen, saboreenlo juntos."
    },

    {
        id: "c_extremo_medio_32", type: "card", category: "extremo", intensity: "medio",
        text: "Lubrica las nalgas de ella y **frota tu pene** sin penetrar, manteniendo presión moderada."
    },

    {
        id: "c_extremo_medio_33", type: "card", category: "extremo", intensity: "medio",
        text: "Lubrica el ano de ella y **masajea desde fuera con el pene**, usando movimientos circulares leves."
    },

    {
        id: "c_extremo_medio_34", type: "card", category: "extremo", intensity: "medio",
        text: "Lubrica el ano de él y **masajea con uno o dos dedos**, sin penetración profunda."
    },

    {
        id: "c_extremo_medio_35", type: "card", category: "extremo", intensity: "medio",
        text: "Lubrica el ano de ella y **masajea con un dedo o un plug anal**; usa presión ligera."
    },

    {
        id: "c_extremo_medio_36", type: "card", category: "extremo", intensity: "medio",
        text: "Lubrica el ano de él y **masajea cuidadosamente** con dedo o plug anal; sin presión excesiva."
    },

    {
        id: "c_extremo_medio_37", type: "card", category: "extremo", intensity: "medio",
        text: "Hazle sexo oral a ella **mientras masajeas su ano con un dedo**; mantén el ritmo medio."
    },

    {
        id: "c_extremo_medio_38", type: "card", category: "extremo", intensity: "medio",
        text: "Vayan al **siguiente nivel** o permanezcan aquí un rato más; ahora pueden usar lubricante extra y ropa interior."
    },

    {
        id: "c_extremo_medio_39", type: "card", category: "extremo", intensity: "medio",
        text: "Penetrala **profundamente sin que ambos se muevan**, manteniendo la presión constante."
    },

    {
        id: "c_extremo_medio_40", type: "card", category: "extremo", intensity: "medio",
        text: "Introduce el pene en su vagina y **masajea su ano con un dedo**; sin movimiento de la pelvis."
    },

    {
        id: "c_extremo_medio_41", type: "card", category: "extremo", intensity: "medio",
        text: "Realicen **5 penetraciones con fuerza**; elijan cómo y dónde impactar, girando la posición después de cada una."
    },

    {
        id: "c_extremo_medio_42", type: "card", category: "extremo", intensity: "medio",
        text: "Plug anal para la mujer – úsalo con lubricante y **presión media**, sin inserción total."
    },

    {
        id: "c_extremo_medio_43", type: "card", category: "extremo", intensity: "medio",
        text: "Plug anal para el hombre – úsalo con lubricante y **presión media**, sin inserción total."
    },

    {
        id: "c_extremo_medio_44", type: "card", category: "extremo", intensity: "medio",
        text: "Hombre, **fotografía a la mujer** con un dildo en la vagina; la foto será mostrada antes de la siguiente penetración."
    },

    {
        id: "c_extremo_medio_45", type: "card", category: "extremo", intensity: "medio",
        text: "Mastúrbense mutuamente de pie, mirándose a los ojos, mientras se estimulan con la mano opuesta."
    },

    /* ====================  ALTO  ==================== */
    /* Acciones intensas, repetitivas y/o con mayor presión, uso de
       varios juguetes, fotografías explícitas y combinaciones.          */
    {
        id: "c_extremo_alto_01", type: "card", category: "extremo", intensity: "alto",
        text: "Mete **el pene cinco veces** en la vagina con ritmo rápido y con presión máxima."
    },

    {
        id: "c_extremo_alto_02", type: "card", category: "extremo", intensity: "alto",
        text: "Mete **el pene siete veces** en la vagina, aumentando la fuerza en cada inserción."
    },

    {
        id: "c_extremo_alto_03", type: "card", category: "extremo", intensity: "alto",
        text: "Mete **el pene diez veces** en la vagina, sin pausa y con movimientos bruscos."
    },

    {
        id: "c_extremo_alto_04", type: "card", category: "extremo", intensity: "alto",
        text: "Sienta­te sobre la cara de él y **frota tu vagina y ano** al ritmo de tu respiración, empujando con fuerza."
    },

    {
        id: "c_extremo_alto_05", type: "card", category: "extremo", intensity: "alto",
        text: "Sienta­te sobre la cara de ella y **frota tu pene, testículos y ano** con presión firme, sin detenerte."
    },

    {
        id: "c_extremo_alto_06", type: "card", category: "extremo", intensity: "alto",
        text: "Ponte en cuatro y permite que él te dé una **lamida de ano** profunda, usando la lengua y los labios para crear succión."
    },

    {
        id: "c_extremo_alto_07", type: "card", category: "extremo", intensity: "alto",
        text: "Ponte en cuatro y permite que ella te dé una **lamida de ano** vigorosa, alternando succión y lamidos."
    },

    {
        id: "c_extremo_alto_08", type: "card", category: "extremo", intensity: "alto",
        text: "Ponte en cuatro y deja que él te dé una **chupada de vagina** con succión completa y presión en el interior."
    },

    {
        id: "c_extremo_alto_09", type: "card", category: "extremo", intensity: "alto",
        text: "Sienta­te, él de pie, y **mastúrbalo** hasta que suelte semen en tu cara o mano, permitiendo que eyacule parcialmente."
    },

    {
        id: "c_extremo_alto_10", type: "card", category: "extremo", intensity: "alto",
        text: "Hazle sexo oral **hasta que suelte semen** en tu cara o mano, sin que llegue al clímax total."
    },

    {
        id: "c_extremo_alto_11", type: "card", category: "extremo", intensity: "alto",
        text: "Sienta­te con ella de pie, pon una pierna sobre tus hombros y **hazle sexo oral** hasta que te pida que pares; controla la intensidad."
    },

    {
        id: "c_extremo_alto_12", type: "card", category: "extremo", intensity: "alto",
        text: "Hazle sexo oral a él **masajeando su ano** con dos dedos y la lengua, manteniendo presión firme."
    },

    {
        id: "c_extremo_alto_13", type: "card", category: "extremo", intensity: "alto",
        text: "Hazle sexo oral a ella **masajeando su ano** con dos dedos y la lengua, sin pausa."
    },

    {
        id: "c_extremo_alto_14", type: "card", category: "extremo", intensity: "alto",
        text: "Usen **juguetes sexuales** intensos (vibrador potente, dildo de gran calibre) y realicen juegos de penetración simultánea."
    },

    {
        id: "c_extremo_alto_15", type: "card", category: "extremo", intensity: "alto",
        text: "Hombre, **lamer el clítoris**, meter un dedo en la vagina y **besar simultáneamente el ano y los senos** con presión fuerte."
    },

    {
        id: "c_extremo_alto_16", type: "card", category: "extremo", intensity: "alto",
        text: "Fotos: **pene en mano / vagina abierta en cuatro** – muéstralas y luego penetra **cinco veces** sin pausa."
    },

    {
        id: "c_extremo_alto_17", type: "card", category: "extremo", intensity: "alto",
        text: "Fotos: **pene en mano / vagina abierta en misionero** – muéstralas y penetra **cinco veces** con ritmo rápido."
    },

    {
        id: "c_extremo_alto_18", type: "card", category: "extremo", intensity: "alto",
        text: "Fotos: **pene en su boca** – muestra la foto y luego en el siguiente turno **penetración profunda**."
    },

    {
        id: "c_extremo_alto_19", type: "card", category: "extremo", intensity: "alto",
        text: "Fotos: **bolas en su boca** – muestra la foto y luego **penetración anal** con el plug."
    },

    {
        id: "c_extremo_alto_20", type: "card", category: "extremo", intensity: "alto",
        text: "Fotos: **oral a ella** – muestra la foto y después realiza una **sesión oral intensiva**."
    },

    {
        id: "c_extremo_alto_21", type: "card", category: "extremo", intensity: "alto",
        text: "Fotos: **masturbándote** – muestra la foto y luego ambos se masturban con fuerza, mirándose a los ojos."
    },

    {
        id: "c_extremo_alto_22", type: "card", category: "extremo", intensity: "alto",
        text: "Foto: **él boca arriba, ella sobre su pene** mirando sus pies; después realicen **penetración de pie cinco veces** con fuerte impulso."
    },

    {
        id: "c_extremo_alto_23", type: "card", category: "extremo", intensity: "alto",
        text: "Posición **69** – ella arriba y él abajo; mantengan un ritmo rápido y cambien de ángulo cada 30 seg."
    },

    {
        id: "c_extremo_alto_24", type: "card", category: "extremo", intensity: "alto",
        text: "Posición **69** – él arriba y ella abajo; intensifiquen la presión en la zona anal mientras mantienen el beso."
    },

    {
        id: "c_extremo_alto_25", type: "card", category: "extremo", intensity: "alto",
        text: "Juega con tu pene **golpeando alrededor de su vagina** con fuerza, alternando golpecitos rápidos y presiones."
    },

    {
        id: "c_extremo_alto_26", type: "card", category: "extremo", intensity: "alto",
        text: "Introduce solo la **cabeza del pene** en su vagina y muévela **rápidamente** sobre sus paredes, sin profundizar pero con fricción intensa."
    },

    {
        id: "c_extremo_alto_27", type: "card", category: "extremo", intensity: "alto",
        text: "Con tu boca, **excita a ella** hasta el punto de orgasmo y detente justo antes; luego repite con mayor intensidad."
    },

    {
        id: "c_extremo_alto_28", type: "card", category: "extremo", intensity: "alto",
        text: "Con tu boca, **excita a él** hasta el punto de orgasmo; si derrama semen, saboreenlo juntos y continúen con caricias."
    },

    {
        id: "c_extremo_alto_29", type: "card", category: "extremo", intensity: "alto",
        text: "Ponte de pie, él sentado frente a ti, **tócale por la cabeza** y permite que te haga sexo oral con la máxima intensidad posible."
    },

    {
        id: "c_extremo_alto_30", type: "card", category: "extremo", intensity: "alto",
        text: "Ponte de pie, ella arrodillada frente a ti, **tócale por la cabeza** y permite que te haga sexo oral; si derrama semen, saboreenlo juntos."
    },

    {
        id: "c_extremo_alto_31", type: "card", category: "extremo", intensity: "alto",
        text: "Lubrica las nalgas de ella y **frota tu pene** sin penetrar, aumentando la presión hasta que ella sienta pulsaciones fuertes."
    },

    {
        id: "c_extremo_alto_32", type: "card", category: "extremo", intensity: "alto",
        text: "Lubrica el ano de ella y **masajea desde fuera con el pene**, aplicando presión firme y movimientos circulares intensos."
    },

    {
        id: "c_extremo_alto_33", type: "card", category: "extremo", intensity: "alto",
        text: "Lubrica el ano de él y **masajea con uno o dos dedos** aplicando presión fuerte, sin penetrar."
    },

    {
        id: "c_extremo_alto_34", type: "card", category: "extremo", intensity: "alto",
        text: "Lubrica el ano de ella y **masajea con un dedo o un plug anal** usando una presión profunda y sostenida."
    },

    {
        id: "c_extremo_alto_35", type: "card", category: "extremo", intensity: "alto",
        text: "Lubrica el ano de él y **masajea cuidadosamente** con dedo o plug anal, aplicando una presión intensa y constante."
    },

    {
        id: "c_extremo_alto_36", type: "card", category: "extremo", intensity: "alto",
        text: "Hazle sexo oral a ella **mientras masajeas su ano con un dedo**, alternando succión y presión fuerte."
    },

    {
        id: "c_extremo_alto_37", type: "card", category: "extremo", intensity: "alto",
        text: "Vayan al **siguiente nivel** o permanezcan aquí un rato más; ahora se permite el uso de lubricantes de alta viscosidad y ropa interior de látex."
    },

    {
        id: "c_extremo_alto_38", type: "card", category: "extremo", intensity: "alto",
        text: "Penetrala **profundamente sin que ambos se muevan**, manteniendo una presión constante y respiración sincronizada."
    },

    {
        id: "c_extremo_alto_39", type: "card", category: "extremo", intensity: "alto",
        text: "Introduce el pene en su vagina y **masajea su ano con un dedo**, sin mover la pelvis, aplicando presión máxima."
    },

    {
        id: "c_extremo_alto_40", type: "card", category: "extremo", intensity: "alto",
        text: "Realicen **5 penetraciones con fuerza**; elijan posición (de pie, de rodillas, 69) y varíen el ángulo cada vez."
    },

    {
        id: "c_extremo_alto_41", type: "card", category: "extremo", intensity: "alto",
        text: "Plug anal **para la mujer** – inserción completa, con movimiento de vaivén durante 2 min."
    },

    {
        id: "c_extremo_alto_42", type: "card", category: "extremo", intensity: "alto",
        text: "Plug anal **para el hombre** – inserción completa, con vibración interna y presión constante."
    },

    {
        id: "c_extremo_alto_43", type: "card", category: "extremo", intensity: "alto",
        text: "Hombre, **fotografía a la mujer** con un dildo en la vagina; la foto será mostrada antes de la siguiente penetración intensiva."
    },

    {
        id: "c_extremo_alto_44", type: "card", category: "extremo", intensity: "alto",
        text: "Mastúrbense mutuamente de pie, mirándose a los ojos, mientras la respiración se vuelve entrecortada y los gemidos aumentan."
    },

    {
        id: "c_extremo_alto_45", type: "card", category: "extremo", intensity: "alto",
        text: "**Vayan al siguiente nivel** de forma irreversible: quítense la ropa, usen lubricante caliente y ejecuten una posición de dominación total (por ejemplo, “reina sobre el trono”)."
    },


    /* ====================  SUAVE  ==================== */
    /* Posiciones divertidas, sin presión de tiempo ni fuerza. */
    {
        id: "c_locuras_suave_01", type: "card", category: "locuras", intensity: "suave",
        text: "Penetración en **3 poses diferentes** – 20 segundos cada posición, sin prisa."
    },

    {
        id: "c_locuras_suave_02", type: "card", category: "locuras", intensity: "suave",
        text: "Mastúrbate rogándole que te penetren donde quieras; deja que ella decida el punto."
    },

    {
        id: "c_locuras_suave_03", type: "card", category: "locuras", intensity: "suave",
        text: "Ella boca arriba, monta sus piernas en los hombros de él mientras lo penetra suavemente."
    },

    {
        id: "c_locuras_suave_04", type: "card", category: "locuras", intensity: "suave",
        text: "Él boca arriba, ella se gira hacia sus pies, se deja penetrar mientras él admira su espalda y nalgas."
    },

    {
        id: "c_locuras_suave_05", type: "card", category: "locuras", intensity: "suave",
        text: "Ella boca arriba, con las rodillas apoyadas en sus senos; él con la cabeza opuesta la penetra despacio."
    },

    {
        id: "c_locuras_suave_06", type: "card", category: "locuras", intensity: "suave",
        text: "Él sentado, ella se sienta abrazándolo con la pierna, dejándose penetrar con ritmo lento."
    },

    {
        id: "c_locuras_suave_07", type: "card", category: "locuras", intensity: "suave",
        text: "Ella boca arriba, piernas totalmente estiradas, mientras él la penetra con calma."
    },

    {
        id: "c_locuras_suave_08", type: "card", category: "locuras", intensity: "suave",
        text: "Él sentado en una silla, ella sentada sobre él; penetren sin prisas."
    },

    {
        id: "c_locuras_suave_09", type: "card", category: "locuras", intensity: "suave",
        text: "Ella acostada boca abajo sobre una cama Kamasutra; él la penetra por la vagina suavemente."
    },

    {
        id: "c_locuras_suave_10", type: "card", category: "locuras", intensity: "suave",
        text: "Ella acostada boca arriba sobre una cama Kamasutra; él la penetra por la vagina sin prisa."
    },

    {
        id: "c_locuras_suave_11", type: "card", category: "locuras", intensity: "suave",
        text: "Él acostado boca arriba sobre una cama Kamasutra; ella lo cabalga lentamente."
    },

    {
        id: "c_locuras_suave_12", type: "card", category: "locuras", intensity: "suave",
        text: "Ella sentada en el borde de una mesa o cama; él la penetra de pie, manteniendo contacto visual."
    },

    {
        id: "c_locuras_suave_13", type: "card", category: "locuras", intensity: "suave",
        text: "En el piso, practicar la posición del **perrito** de forma relajada."
    },

    {
        id: "c_locuras_suave_14", type: "card", category: "locuras", intensity: "suave",
        text: "En el piso, practicar la posición del **misiónero** sin apuro."
    },

    {
        id: "c_locuras_suave_15", type: "card", category: "locuras", intensity: "suave",
        text: "Ella boca abajo, piernas abiertas; él la penetra por detrás (vagina) con movimientos suaves."
    },

    {
        id: "c_locuras_suave_16", type: "card", category: "locuras", intensity: "suave",
        text: "Ella con el pecho en la cama, piernas sobre una silla; él de pie entre cama y silla la penetra sujetándola por la cintura."
    },

    {
        id: "c_locuras_suave_17", type: "card", category: "locuras", intensity: "suave",
        text: "Ella con los brazos en el piso; él le sujeta las piernas como carretilla y la penetra suavemente."
    },

    {
        id: "c_locuras_suave_18", type: "card", category: "locuras", intensity: "suave",
        text: "Él boca arriba, ella gira su cuerpo hacia un costado de él y se deja penetrar con ritmo calmado."
    },

    {
        id: "c_locuras_suave_19", type: "card", category: "locuras", intensity: "suave",
        text: "Posición de **cucharita** – ambos abrazados, sin presión."
    },

    {
        id: "c_locuras_suave_20", type: "card", category: "locuras", intensity: "suave",
        text: "Elijan la posición que deseen y disfruten de ella sin límite de tiempo."
    },

    {
        id: "c_locuras_suave_21", type: "card", category: "locuras", intensity: "suave",
        text: "Pueden acabar ahora si lo desean; basta con una señal y se detienen."
    },

    {
        id: "c_locuras_suave_22", type: "card", category: "locuras", intensity: "suave",
        text: "Si deseas, eyacula en cualquier parte de tu cuerpo (cara, boca, manos, vagina, nalgas, senos) – elige y actúa."
    },

    {
        id: "c_locuras_suave_23", type: "card", category: "locuras", intensity: "suave",
        text: "Pueden hacer una pausa cuando quieran; el silencio también es juego."
    },

    {
        id: "c_locuras_suave_24", type: "card", category: "locuras", intensity: "suave",
        text: "Él boca arriba. Acuéstate sobre sus piernas y déjate penetrar mientras le muestras tus nalgas y mantienes la mirada."
    },

    /* ====================  MEDIO  ==================== */
    /* Más tiempo, más repeticiones, introducción de pequeñas variaciones. */
    {
        id: "c_locuras_medio_01", type: "card", category: "locuras", intensity: "medio",
        text: "Penetración en **3 poses diferentes** – 30 segundos cada posición, con cambios de ritmo."
    },

    {
        id: "c_locuras_medio_02", type: "card", category: "locuras", intensity: "medio",
        text: "Mastúrbate rogándole que te penetre en **donde quieras**, aumentando la presión cada 10 seg."
    },

    {
        id: "c_locuras_medio_03", type: "card", category: "locuras", intensity: "medio",
        text: "Ella boca arriba, monta sus piernas en los hombros de él y penétalo **5 veces** sin pausa."
    },

    {
        id: "c_locuras_medio_04", type: "card", category: "locuras", intensity: "medio",
        text: "Él boca arriba, ella se gira hacia sus pies, admira su espalda y nalgas mientras se **penetran 4 veces**."
    },

    {
        id: "c_locuras_medio_05", type: "card", category: "locuras", intensity: "medio",
        text: "Ella boca arriba, rodillas en sus senos; él con la cabeza opuesta la penetra **6 veces** con ritmo medio."
    },

    {
        id: "c_locuras_medio_06", type: "card", category: "locuras", intensity: "medio",
        text: "Él sentado, ella abraza con la pierna y se deja penetrar **8 veces**, alternando la profundidad."
    },

    {
        id: "c_locuras_medio_07", type: "card", category: "locuras", intensity: "medio",
        text: "Ella boca arriba, piernas estiradas, él la penetra **7 veces** incrementando la velocidad cada tres penetraciones."
    },

    {
        id: "c_locuras_medio_08", type: "card", category: "locuras", intensity: "medio",
        text: "Él sentado en silla, ella sentada sobre él; **10 penetraciones** sin detenerse."
    },

    {
        id: "c_locuras_medio_09", type: "card", category: "locuras", intensity: "medio",
        text: "Ella acostada boca abajo en cama Kamasutra; él la penetra por la vagina **5 veces** con movimientos firmes."
    },

    {
        id: "c_locuras_medio_10", type: "card", category: "locuras", intensity: "medio",
        text: "Ella acostada boca arriba en cama Kamasutra; él la penetra por la vagina **5 veces**, cambiando de ángulo cada tres."
    },

    {
        id: "c_locuras_medio_11", type: "card", category: "locuras", intensity: "medio",
        text: "Él acostado boca arriba; ella lo cabalga **6 veces**, manteniendo el contacto visual."
    },

    {
        id: "c_locuras_medio_12", type: "card", category: "locuras", intensity: "medio",
        text: "Ella en el borde de mesa o cama; él la penetra de pie **8 veces**, girando la cadera al final."
    },

    {
        id: "c_locuras_medio_13", type: "card", category: "locuras", intensity: "medio",
        text: "Practiquen la posición del **perrito** en el piso, con **10 penetraciones** rítmicas."
    },

    {
        id: "c_locuras_medio_14", type: "card", category: "locuras", intensity: "medio",
        text: "Practiquen la posición del **misiónero** en el piso, con **8 penetraciones** y cambio de ritmo cada 2 seg."
    },

    {
        id: "c_locuras_medio_15", type: "card", category: "locuras", intensity: "medio",
        text: "Ella boca abajo, piernas abiertas; él la penetra por detrás (vagina) con **6 penetraciones** y pequeños golpecitos."
    },

    {
        id: "c_locuras_medio_16", type: "card", category: "locuras", intensity: "medio",
        text: "Ella con el pecho en la cama, piernas sobre una silla; él de pie entre cama y silla la penetra sujetándola por la cintura **7 veces**."
    },

    {
        id: "c_locuras_medio_17", type: "card", category: "locuras", intensity: "medio",
        text: "Ella con los brazos en el piso; él le sujeta las piernas como carretilla y la penetra **8 veces** con movimientos de vaivén."
    },

    {
        id: "c_locuras_medio_18", type: "card", category: "locuras", intensity: "medio",
        text: "Él boca arriba, ella gira su cuerpo hacia un costado de él y se deja penetrar **5 veces** con ritmo moderado."
    },

    {
        id: "c_locuras_medio_19", type: "card", category: "locuras", intensity: "medio",
        text: "Posición de **cucharita** – 10 min de caricias y penetración ligera, sin detenerse."
    },

    {
        id: "c_locuras_medio_20", type: "card", category: "locuras", intensity: "medio",
        text: "Elijan la posición que deseen y **realicen 12 penetraciones** sin límite de tiempo."
    },

    {
        id: "c_locuras_medio_21", type: "card", category: "locuras", intensity: "medio",
        text: "Pueden acabar ahora si lo desean, pero antes de parar **realicen 3 gemidos** sincronizados."
    },

    {
        id: "c_locuras_medio_22", type: "card", category: "locuras", intensity: "medio",
        text: "Si deseas, hazlo eyacular en cualquier parte de tu cuerpo *a tu elección* (cara, boca, manos, vagina, nalgas, senos) y luego **besa la zona**."
    },

    {
        id: "c_locuras_medio_23", type: "card", category: "locuras", intensity: "medio",
        text: "Puede hacer una pausa de 30 seg antes de continuar; durante la pausa, miren sus cuerpos y susurren lo que más les excite."
    },

    {
        id: "c_locuras_medio_24", type: "card", category: "locuras", intensity: "medio",
        text: "Él boca arriba. Acuéstate sobre sus piernas, muestra tus nalgas y **penetráte 4 veces** mientras él te mira."
    },

    /* ====================  ALTO  ==================== */
    /* Posiciones intensas, múltiples repeticiones y combinaciones de acciones. */
    {
        id: "c_locuras_alto_01", type: "card", category: "locuras", intensity: "alto",
        text: "Penetración en **3 poses diferentes** – 45 segundos cada posición, con **cambio de ritmo y fuerza** al final de cada fase."
    },

    {
        id: "c_locuras_alto_02", type: "card", category: "locuras", intensity: "alto",
        text: "Mastúrbate rogándole que te penetre **donde quieras**, incrementando la presión cada 5 seg hasta el clímax."
    },

    {
        id: "c_locuras_alto_03", type: "card", category: "locuras", intensity: "alto",
        text: "Ella boca arriba, monta sus piernas en los hombros de él y penétalo **10 veces** sin pausa, manteniendo la respiración sincronizada."
    },

    {
        id: "c_locuras_alto_04", type: "card", category: "locuras", intensity: "alto",
        text: "Él boca arriba, ella se gira hacia sus pies, admira su espalda y nalgas mientras se **penetra 12 veces** con intensidad creciente."
    },

    {
        id: "c_locuras_alto_05", type: "card", category: "locuras", intensity: "alto",
        text: "Ella boca arriba, con las rodillas en sus senos; él con la cabeza opuesta la penetra **15 veces**, variando la profundidad."
    },

    {
        id: "c_locuras_alto_06", type: "card", category: "locuras", intensity: "alto",
        text: "Él sentado, ella abraza con la pierna y se deja penetrar **12 veces**, presionando el suelo con fuerza."
    },

    {
        id: "c_locuras_alto_07", type: "card", category: "locuras", intensity: "alto",
        text: "Ella boca arriba, piernas totalmente estiradas, él la penetra **14 veces** con ritmo alternado rápido‑lento."
    },

    {
        id: "c_locuras_alto_08", type: "card", category: "locuras", intensity: "alto",
        text: "Él sentado en silla, ella sentada sobre él; realicen **20 penetraciones** sin detenerse, cambiando de ángulo cada 5."
    },

    {
        id: "c_locuras_alto_09", type: "card", category: "locuras", intensity: "alto",
        text: "Ella acostada boca abajo en cama Kamasutra; él la penetra por la vagina **12 veces** con fuerza y pequeños golpecitos."
    },

    {
        id: "c_locuras_alto_10", type: "card", category: "locuras", intensity: "alto",
        text: "Ella acostada boca arriba en cama Kamasutra; él la penetra por la vagina **12 veces**, girando la pelvis cada tres penetraciones."
    },

    {
        id: "c_locuras_alto_11", type: "card", category: "locuras", intensity: "alto",
        text: "Él acostado boca arriba; ella lo cabalga **15 veces**, manteniendo el contacto visual sin interrupciones."
    },

    {
        id: "c_locuras_alto_12", type: "card", category: "locuras", intensity: "alto",
        text: "Ella en el borde de una mesa o cama; él la penetra de pie **15 veces**, levantando la pierna de él en cada tercera penetración."
    },

    {
        id: "c_locuras_alto_13", type: "card", category: "locuras", intensity: "alto",
        text: "Practiquen la posición del **perrito** en el piso con **20 penetraciones** rítmicas, usando la mano para estimular el clítoris al mismo tiempo."
    },

    {
        id: "c_locuras_alto_14", type: "card", category: "locuras", intensity: "alto",
        text: "Practiquen la posición del **misiónero** en el piso con **18 penetraciones**, alternando presión fuerte y ligera cada tres movimientos."
    },

    {
        id: "c_locuras_alto_15", type: "card", category: "locuras", intensity: "alto",
        text: "Ella boca abajo, piernas abiertas; él la penetra por detrás (vagina) **14 veces**, aplicando leves palmadas en la zona lumbar."
    },

    {
        id: "c_locuras_alto_16", type: "card", category: "locuras", intensity: "alto",
        text: "Ella con el pecho en la cama, piernas sobre una silla; él de pie entre cama y silla la penetra sujetándola por la cintura **16 veces** con fuerza."
    },

    {
        id: "c_locuras_alto_17", type: "card", category: "locuras", intensity: "alto",
        text: "Ella con los brazos en el piso; él le sujeta las piernas como carretilla y la penetra **18 veces**, balanceando el cuerpo al compás."
    },

    {
        id: "c_locuras_alto_18", type: "card", category: "locuras", intensity: "alto",
        text: "Él boca arriba, ella gira su cuerpo hacia un costado de él y se deja penetrar **12 veces**, aumentando la presión cada cuatro penetraciones."
    },

    {
        id: "c_locuras_alto_19", type: "card", category: "locuras", intensity: "alto",
        text: "Posición de **cucharita** – 15 min de penetración continua, sin pausa, manteniendo la presión en el tronco."
    },

    {
        id: "c_locuras_alto_20", type: "card", category: "locuras", intensity: "alto",
        text: "Elijan la posición que deseen y **realicen 30 penetraciones** en total, sin mirar el reloj."
    },

    {
        id: "c_locuras_alto_21", type: "card", category: "locuras", intensity: "alto",
        text: "Pueden acabar ahora si lo desean, pero antes deben **eyacular simultáneamente** en una zona elegida (cara, pecho, vientre, nalgas, etc.)."
    },

    {
        id: "c_locuras_alto_22", type: "card", category: "locuras", intensity: "alto",
        text: "Si deseas, eyacula en cualquier parte de tu cuerpo (cara, boca, manos, vagina, nalgas, senos) y luego **besa la zona** con la lengua."
    },

    {
        id: "c_locuras_alto_23", type: "card", category: "locuras", intensity: "alto",
        text: "Hagan una pausa de **10 seg** y durante esos segundos concéntrense en un gemido profundo antes de continuar."
    },

    {
        id: "c_locuras_alto_24", type: "card", category: "locuras", intensity: "alto",
        text: "Él boca arriba. Acuéstate sobre sus piernas, muestra tus nalgas y **penetráte 8 veces** mientras él te mira fijamente a los ojos."
    },

    {
        id: "c_locuras_alto_25", type: "card", category: "locuras", intensity: "alto",
        text: "Después de completar la posición elegida, **cambien rápidamente de posición** y continúen sin descanso."
    }






];