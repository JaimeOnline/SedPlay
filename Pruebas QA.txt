plan de pruebas funcionales para QA. Lo organizo por áreas y casos; si quieres luego lo paso a tabla (CSV/Excel) con ID, pasos, esperado, etc.
________________________________________
1. Acceso y flujo general
1.1 Pantalla de advertencia de edad
•	Caso 1.1.1 – Mostrar advertencia
•	Paso: Abrir la web en navegador limpio (sin cache/localStorage).
•	Esperado:
•	Se muestra pantalla “+18 / Solo adultos”.
•	No se ve nada del juego detrás.
•	Caso 1.1.2 – Aceptar edad
•	Paso: Pulsar “Tengo 18 años o más”.
•	Esperado:
•	Desaparece la advertencia.
•	Se muestra la Home (SedPlay, botones “Nuevo juego” y “Gestionar contenido”).
•	Caso 1.1.3 – Persistencia
•	Paso:
•	Aceptar edad.
•	Refrescar la página.
•	Esperado:
•	No vuelve a aparecer la pantalla de edad (según implementación actual; si luego añadís persistencia, re-probar).
________________________________________
2. Pantalla Home
•	Caso 2.1 – Elementos visibles
•	Paso: Tras aceptar +18, revisar Home.
•	Esperado:
•	Título “SedPlay”.
•	Subtítulo “Juego erótico para adultos (+18)”.
•	Botón “Nuevo juego”.
•	Botón “Gestionar contenido”.
•	Caso 2.2 – Navegar a Configurar partida
•	Paso:
•	Pulsar “Nuevo juego”.
•	Esperado:
•	Se abre GameSetup con título “Configurar partida”.
•	Caso 2.3 – Navegar a Gestión de contenido
•	Paso:
•	Volver a Home.
•	Pulsar “Gestionar contenido”.
•	Esperado:
•	Se abre ContentManager.
________________________________________
3. Configuración de partida (GameSetup)
3.1 Jugadores
•	Caso 3.1.1 – Valores por defecto
•	Paso: Abrir “Configurar partida”.
•	Esperado:
•	“Jugadores (2)”.
•	Campos con “Jugador 1” y “Jugador 2”.
•	Caso 3.1.2 – Añadir jugador
•	Paso:
•	Pulsar “+ Añadir jugador” varias veces (hasta 10).
•	Esperado:
•	Se agregan jugadores 3…10.
•	Al llegar a 10, el botón deja de agregar.
•	Caso 3.1.3 – Eliminar jugador
•	Paso:
•	Con 3 o más jugadores, pulsar en la X del jugador 3.
•	Esperado:
•	Jugador 3 se elimina.
•	No permite bajar de 2 (en 2 ya no aparece X).
•	Caso 3.1.4 – Validación mínimo 2 jugadores
•	Paso:
•	Borrar los textos y dejar solo un nombre válido.
•	Pulsar “Iniciar juego”.
•	Esperado:
•	Alerta: “Debes tener al menos 2 jugadores.”.
•	No avanza a la pantalla de juego.
3.2 Modos de juego
•	Caso 3.2.1 – Modos disponibles
•	Paso: Revisar la sección “Modo de juego”.
•	Esperado:
•	Pills: “Cartas”, “Posiciones”, “Ruleta”, “Verdad o Reto”.
•	Que se pueda seleccionar cada uno.
•	Caso 3.2.2 – Cambiar modo sin errores
•	Paso:
•	Seleccionar cada modo uno a uno.
•	Esperado:
•	No errores en consola.
•	El valor de mode en configuración (ver log de “Configuración de partida”) cambia acorde.
3.3 Categorías
•	Caso 3.3.1 – Categorías activas por defecto
•	Paso: Abrir Setup.
•	Esperado:
•	Todas las categorías marcadas:
•	Rompehielos, Romántico, Picante, Extremo, Locuras / Random.
•	Caso 3.3.2 – Activar/desactivar categoría
•	Paso:
•	Desmarcar “Picante”.
•	Pulsar “Iniciar juego” con modo Ruleta o Verdad o Reto.
•	Esperado:
•	En GameScreen las categorías activas listadas no incluyen “Picante”.
3.4 Filtros de posiciones
•	Caso 3.4.1 – Visibilidad
•	Paso: Ver sección “Filtros de posiciones”.
•	Esperado:
•	Clasificaciones:
•	Todas las posiciones
•	Tipo de posición sexual
•	Estimulación
•	Acariciamiento extra
•	Penetración
•	Ubicación
•	Actividad
•	Complejidad
•	Cada una con:
•	Botón desplegable ▸/▾.
•	Botón “Seleccionar todo”.
•	Caso 3.4.2 – Desplegar/plegar
•	Paso:
•	Pulsar en “Tipo de posición sexual”.
•	Esperado:
•	Se despliegan los filtros (acostados, ángulo recto, etc.).
•	Al volver a pulsar, se pliega.
•	Caso 3.4.3 – Seleccionar todo / Deseleccionar todo
•	Paso:
•	En “Tipo de posición sexual”, pulsar “Seleccionar todo”.
•	Esperado:
•	Todos los subfiltros marcados.
•	Botón cambia a “Deseleccionar todo” y se ve resaltado.
•	Al pulsar de nuevo, todos se desmarcan y el botón deja de estar resaltado.
•	Caso 3.4.4 – Persistencia de filtros
•	Paso:
•	Marcar algunas subcategorías (p.ej. acostados, cara_a_cara).
•	Iniciar juego en modo Posiciones.
•	Volver a Configuración desde GameScreen (botón “← Configuración”).
•	Esperado:
•	Los filtros marcados se conservan.
3.5 Duración
•	Caso 3.5.1 – Sin límite
•	Paso:
•	Seleccionar “Sin límite”.
•	Iniciar juego.
•	Esperado:
•	En GameScreen se ve “Tiempo: sin límite”.
•	Caso 3.5.2 – Preset
•	Paso:
•	Seleccionar “Tiempo predefinido” y “30 minutos”.
•	Iniciar juego.
•	Esperado:
•	En GameScreen, tiempo comienza en 30:00 y decrementa cada segundo.
•	Caso 3.5.3 – Personalizado (válido)
•	Paso:
•	Seleccionar “Personalizado”, escribir “45”.
•	Iniciar juego.
•	Esperado:
•	Tiempo inicia en 45:00.
•	Caso 3.5.4 – Personalizado (inválido)
•	Paso:
•	Seleccionar “Personalizado”, dejar vacío o poner 0.
•	Iniciar juego.
•	Esperado:
•	Alerta: duración no válida.
•	No entra al juego.
________________________________________
4. Pantalla de juego común (GameScreen – elementos generales)
•	Caso 4.1 – Encabezado
•	Paso: Iniciar partida en cualquier modo.
•	Esperado:
•	Botón “← Configuración”.
•	Badge con el modo (“Cartas”, “Posiciones”, etc.).
•	Badge con “X jugador(es)”.
•	Caso 4.2 – Turno y rotación de jugadores
•	Paso:
•	Tener 3 jugadores.
•	En cualquier modo, realizar 5 acciones que cambien turno (p.ej. Robar carta).
•	Esperado:
•	Se muestra “Turno de Jugador 1, 2, 3, 1, 2…” en orden circular.
•	Caso 4.3 – Terminar partida
•	Paso:
•	Pulsar “Terminar partida”.
•	Confirmar.
•	Esperado:
•	Se muestra pantalla de “Partida finalizada”.
•	Botón “Volver al menú” lleva a Home.
________________________________________
5. Modo Cartas
•	Caso 5.1 – Robar carta
•	Paso:
•	Crear partida en modo Cartas.
•	Pulsar “Robar carta” varias veces.
•	Esperado:
•	En “Carta” aparece un texto diferente (cuando hay suficientes cartas).
•	El “Turno de” cambia de jugador en cada “Robar carta”.
•	Caso 5.2 – Cambiar por otro (Cartas vía ruleta no aplica; aquí solo botón global)
•	Paso:
•	Verificar que el botón “Cambiar por otro” no aparece en modo Cartas (actualmente solo aparece para ruleta, verdad/reto y posición).
________________________________________
6. Modo Verdad o Reto
•	Caso 6.1 – Seleccionar Verdad
•	Paso:
•	Modo “Verdad o Reto”.
•	Pulsar botón “Verdad”.
•	Esperado:
•	Muestra “Pregunta de verdad” y un texto.
•	Caso 6.2 – Seleccionar Reto
•	Paso:
•	Modo “Verdad o Reto”.
•	Pulsar botón “Reto”.
•	Esperado:
•	Muestra “Reto” y un texto.
•	Caso 6.3 – Cambiar por otro
•	Paso:
•	Tras ver una verdad, pulsar “Cambiar por otro”.
•	Esperado:
•	El texto cambia por otro item del mismo tipo (truth/dare).
•	No cambia el jugador (solo cambia el contenido).
________________________________________
7. Modo Ruleta
•	Caso 7.1 – Girar ruleta
•	Paso:
•	Modo “Ruleta”.
•	Pulsar “Girar ruleta” varias veces.
•	Esperado:
•	Se ve animación y luego un resultado.
•	El turno pasa al siguiente jugador después de cada giro.
•	Caso 7.2 – Segmentos según categoría
•	Paso:
•	En Setup, activar solo Rompehielos (categoría suave).
•	Jugar y girar la ruleta varias veces.
•	Esperado:
•	La ruleta NO muestra “Posición” (solo Trago / Verdad / Reto / Carta).
•	Caso 7.3 – Posición aparece desde Picante
•	Paso:
•	En Setup, activar categorías hasta Picante.
•	Subir nivel de categoría actual hasta Picante en GameScreen.
•	Girar hasta que salga el segmento “Posición”.
•	Esperado:
•	Segmento “Posición” aparece en la ruleta a partir de Picante.
•	Cuando cae en “Posición”:
•	Se elige una imagen random según filtros de Setup.
•	Se muestra texto según categoría actual:
•	Picante: “Realicen esta posición sexual con ropa o sin penetración.”
•	Extremo/Locuras: “sin ropa y con penetración.”
•	El texto incluye (clasificación: Tipo De Posicion Sexual / …) sin guiones bajos.
•	Se muestra la imagen.
•	Caso 7.4 – Cambiar por otro (ruleta posición)
•	Paso:
•	Después de que la ruleta caiga en “Posición”, pulsar “Cambiar por otro”.
•	Esperado:
•	Se cambia la imagen de posición manteniendo filtros y categoría.
________________________________________
8. Modo Posiciones
•	Caso 8.1 – Mostrar posición random
•	Paso:
•	Modo “Posiciones”.
•	Marcar algunos filtros (o dejar todos).
•	Iniciar y pulsar “Mostrar posición”.
•	Esperado:
•	Aparece una imagen acorde a los filtros.
•	Texto: “Realicen esta posición sexual sin ropa y con penetración.” (+ clasificación

