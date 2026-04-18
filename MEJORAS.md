## Plan de Mejoras UI/UX para SedPlay - Con Detalles de Implementación

### FASE 1: Optimización de Formularios y Usabilidad Básica (Semanas 1-2)

**Objetivo**: Simplificar la experiencia de configuración y mejorar la usabilidad básica mediante reducción de carga cognitiva y feedback inmediato.

#### Acción 1: Rediseño de GameSetup.jsx
- **Qué vamos a hacer**: Dividir el formulario largo en pasos progresivos (wizard-style), implementar acordeones seccionables para los filtros de posiciones y agregar validación en tiempo real con feedback visual inmediato.
- **Cómo lo vamos a hacer**:
  * Implementar un wizard usando Zustand o Context API para manejar el estado entre pasos (pasoActual: 1-4)
  * Paso 1: Información básica (modo de juego, jugadores)
  * Paso 2: Categorías y duración
  * Paso 3: Filtros de posiciones (solo visible para modos posición/ruleta)
  * Paso 4: Resumen y confirmación
  * Para los acordeones: usar componentes de Headless UI (Disclosure) o implementar manualmente con useState y transiciones CSS de altura

<plan_mode_respond>
<response>
## Plan de Mejoras UI/UX para SedPlay - Con Detalles de Implementación

### FASE 1: Optimización de Formularios y Usabilidad Básica (Semanas 1-2) (IMPLEMENTADO)

**Objetivo**: Simplificar la experiencia de configuración y mejorar la usabilidad básica mediante reducción de carga cognitiva y feedback inmediato.

#### Acción 1: Rediseño de GameSetup.jsx (Implementado)
- **Qué vamos a hacer**: Dividir el formulario largo en pasos progresivos (wizard-style), implementar acordeones seccionables para los filtros de posiciones y agregar validación en tiempo real con feedback visual inmediato.
- **Cómo lo vamos a hacer**:
  * Implementar un wizard usando Zustand (PENDIENTE la versión Zustand) o Context API para manejar el estado entre pasos (pasoActual: 1-4)
  * Paso 1: Información básica (modo de juego, jugadores)
  * Paso 2: Categorías y duración
  * Paso 3: Filtros de posiciones (solo visible para modos posición/ruleta)
  * Paso 4: Resumen y confirmación
  * Para los acordeones: usar componentes de Headless UI (Disclosure) o implementar manualmente con useState y transiciones CSS de altura
  * Validación en tiempo real con react-hook-form + zod/yup: (Pendiente)
    ```javascript
    // Ejemplo de validación para jugadores
    const schema = z.object({
      players: z.array(z.string().min(1, "Nombre requerido")).min(2, "Se necesitan al menos 2 jugadores")
    });
    ```
  * Mostrar errores específicos debajo de cada campo con íconos y colores de alerta
  * Implementar guardado automático de progreso entre pasos usando localStorage temporal

  ⚠️ Pendiente si queremos ser 100% fieles al plan:
Migrar estado del wizard a Zustand/Context.
Migrar validación a react-hook-form + zod

#### Acción 2: Mejorar Estados de Carga (IMPLEMENTADO)
- **Qué vamos a hacer**: Implementar esqueléticos (skeleton screens) durante cargas de datos, agregar spinners sutiles en botones durante envíos de formularios y crear estados de carga para la selección de posiciones e imágenes.
- **Cómo lo vamos a hacer**:
  * Esqueléticos: crear componentes reutilizables SkeletonLoader.js usando CSS animations o la biblioteca @loadingio/react:
    ```jsx
    // SkeletonLoader.js
    export const SkeletonLoader = ({ height, width }) => (
      <div 
        style={{ 
          height, 
          width, 
          background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
          backgroundSize: '200% 100%',
          animation: 'loading 1.5s infinite',
          borderRadius: 'var(--radius)'
        }}
      />
    );
    ```
  * Spinners en botones: crear un wrapper ButtonWithLoader que muestre un spinner interno cuando esté en estado de carga
  * Para cargas de posiciones: mostrar esqueléticos de cuadrícula de imágenes mientras se cargan los datos de positionLogic.js
  * Implementar manejo de estados de carga con useReducer para lógica compleja de carga

#### Acción 3: Microinteracciones Básicas (IMPLEMENTADO)
- **Qué vamos a hacer**: Añadir animaciones de entrada/salida para modales y paneles, feedback visual al seleccionar opciones (pills, checkboxes, radios) y transiciones suaves entre vistas principales.
- **Cómo lo vamos a hacer**:
  * Animaciones de entrada/salida: usar Framer Motion para transiciones entre vistas:
    ```jsx
    // En App.jsx o Home.jsx
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Contenido de la vista */}
    </motion.div>
    ```
  * Feedback visual al seleccionar: mejorar los estilos activos con:
    - Transform scale(1.02) en pills seleccionados
    - Box-shadow dinámico que cambia según estado activo/inactivo
    - Transiciones de 0.2s ease-in-out para todas las propiedades cambiantes
  * Transiciones entre vistas: usar el prop de transición de React Router o implementar un wrapper de vista con useEffect para animaciones de montaje/desmontaje

### FASE 2: Accesibilidad, Internacionalización y Pulido Visual (Semanas 3-4)

**Objetivo**: Mejorar la accesibilidad para usuarios con diferentes necesidades, agregar soporte multiidioma y refinar los detalles visuales para una experiencia premium.

#### Acción 1: Mejoras de Accesibilidad
- **Qué vamos a hacer**: Implementar navegación completa por teclado, mejorar contraste y legibilidad, agregar etiquetas ARIA apropiadas y asegurar compatibilidad con lectores de pantalla.
- **Cómo lo vamos a hacer**:
  * Navegación por teclado: asegurar que todos los elementos interactivos sean alcanzables con Tab y activables con Enter/Space
  * Enfoco visible: mejorar los estilos :focus-visible con contornos más visibles (outline: 2px solid var(--primary))
  * Etiquetas ARIA: agregar aria-label, aria-describedby y roles apropiados:
    ```jsx
    // Ejemplo para pills de modo de juego
    <label 
      role="radio"
      aria-checked={mode === m.value}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setMode(m.value);
        }
      }}
    >
      <input type="radio" ... />
      {m.label}
    </label>
    ```
  * Contraste: auditar y ajustar colores para cumplir con WCAG AA (razón mínima 4.5:1 para texto normal)
  * Tamaño de objetivo táctil: asegurar que todos los botones y elementos interactivos tengan al menos 48x48dp
  * Implementar salto de contenido principal con un enlace "Saltar al contenido" visible solo al enfocar con teclado

#### Acción 2: Soporte para Internacionalización (i18n)
- **Qué vamos a hacer**: Preparar la aplicación para múltiples idiomas comenzando con español e inglés, implementando un sistema de traducción fácil de mantener.
- **Cómo lo vamos a hacer**:
  * Instalar y configurar i18next con react-i18next:
    ```bash
    npm i i18next react-i18next
    ```
  * Crear estructura de archivos de traducción:
    ```
    /locales
      /es
        translation.json
        setup.json
        game.json
      /en
        translation.json
        setup.json
        game.json
    ```
  * Implementar cambio de idioma con un selector en el header:
    ```jsx
    // LanguageSelector.jsx
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => i18n.changeLanguage(lng);
    ```
  * Extraer todas las cadenas de texto estáticas a archivos JSON de traducción
  * Configurar detección automática de idioma basada en navegador con fallback al español
  * Formatear fechas, números y unidades según locale usando Intl API

#### Acción 3: Pulido Visual y Detalles Premium
- **Qué vamos a hacer**: Refinar microinteracciones, agregar efectos de profundidad y movimiento sutil, y crear estados vacíos y de error más atractivos.
- **Cómo lo vamos a hacer**:
  * Efectos de profundidad: usar capas sutiles de box-shadow y transform para crear sensación de jerarquía:
    ```css
    .card-elevated {
      transform: translateY(0);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .card-elevated:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(0,0,0,0.15);
    }
    ```
  * Estados vacíos atractivos: diseñar ilustraciones o íconos significativos para cuando no hay datos (ej: sin posiciones filtradas, sin juegos guardados)
  * Estados de error amigables: reemplazar alert() por modales informativos con opciones de recuperación:
    ```jsx
    // En lugar de alert("Debes tener al menos 2 jugadores");
    setErrorState({
      title: "Configuración incompleta",
      message: "Necesitas agregar al menos 2 jugadores para continuar",
      actionText: "Entendido",
      onAction: () => setErrorState(null)
    });
    ```
  * Animaciones de entrada de lista: usar Framer Motion para animar la aparición de listas de jugadores o filtros:
    ```jsx
    <motion.ul>
      {players.map((player, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          {player}
        </motion.li>
      ))}
    </motion.ul>
    ```

### FASE 3: Funcionalidades Avanzadas y Optimización (Semanas 5-6)

**Objetivo**: Añadir funcionalidades que mejoren el compromiso del usuario y optimizar el rendimiento para una experiencia fluida incluso en dispositivos modestos.

#### Acción 1: Sistema de Tutorial Contextual
- **Qué vamos a hacer**: Implementar un sistema de tips contextuales que guíe a los usuarios primerizos sin ser invasivo.
- **Cómo lo vamos a hacer**:
  * Crear un sistema de tips basado en el contexto actual (vista, paso del wizard, etc.)
  * Usar una biblioteca como shepherd.js o implementar un tooltip personalizado con Portal
  * Ejemplo de tip para GameSetup:
    ```jsx
    // En GameSetup.jsx
    useEffect(() => {
      if (view === 'setup' && !localStorage.getItem('sawPlayerTip')) {
        showTip({
          target: '.setup__players',
          content: "Aquí puedes agregar o eliminar jugadores. El juego requiere mínimo 2 participantes.",
          position: 'bottom'
        });
        localStorage.setItem('sawPlayerTip', 'true');
      }
    }, [view]);
    ```
  * Permitir que los usuarios dismiss tips permanentemente o los vuelvan a ver desde un centro de ayuda
  * Almacenar el estado de tips vistos en localStorage o en el perfil de usuario (si se implementa autenticación)

#### Acción 2: Optimización de Rendimiento
- **Qué vamos a hacer**: Implementar memoización, cargar componentes perezosamente y optimizar cálculos costosos para mantener 60fps en dispositivos de gama media.
- **Cómo lo vamos a hacer**:
  * Memoización de componentes costosos:
    ```jsx
    const OptimizedPositionList = React.memo(({ positions }) => (
      {/* Renderizado de lista de posiciones */}
    ));
    ```
  * Carga perezosa de vistas principales con React.lazy y Suspense:
    ```jsx
    const GameScreen = React.lazy(() => import('./components/GameScreen'));
    const GameSetup = React.lazy(() => import('./components/GameSetup'));
    
    // En App.jsx o Home.jsx
    <Suspense fallback={<SkeletonLoader />}>
      <Route path="/game" element={<GameScreen />} />
      <Route path="/setup" element={<GameSetup />} />
    </Suspense>
    ```
  * Optimizar el algoritmo de filtrado de posiciones usando memoización personalizada:
    ```jsx
    const filteredPositions = useMemo(() => {
      return getAllPositionsWithFilters(filters);
    }, [JSON.stringify(filters)]); // o usar un objeto de dependencias más específico
    ```
  * Implementar virtualización para listas largas (como la galería de posiciones) usando react-window o react-virtualized
  * Auditar y eliminar re-renders innecesarios usando React DevTools Profiler

#### Acción 3: Funcionalidad de Historial y Favoritos
- **Qué vamos a hacer**: Añadir la capacidad de guardar configuraciones favoritas y ver historial de juegos recientes.
- **Cómo lo vamos a hacer**:
  * Implementar almacenamiento persistente usando localStorage o IndexedDB para:
    - Configuraciones guardadas (con nombre y descripción)
    - Historial de juegos jugados (fecha, duración, resultado)
  * Crear una nueva sección "Mi Biblioteca" accesible desde el menú principal
  * Diseñar tarjetas de configuración guardada con:
    - Vista previa resumida (modo, número de jugadores, duración)
    - Botones de jugar, editar, eliminar y favorito
    - Etiquetas de categorías activas
  * Para el historial: mostrar juegos recientes con opción de volver a jugar la misma configuración
  * Implementar sincronización opcional con cuenta (para futura expansión) usando una API simple o Firebase

### Métricas de Éxito para Cada Fase

**FASE 1**:
- Reducción del 40% en tiempo promedio para completar una configuración
- Disminución del 60% en errores de validación durante el setup
- Incremento del 25% en satisfacción medida por encuesta post-configuración

**FASE 2**:
- Lograr puntuación AA en auditoría de accesibilidad WCAG
- Disponibilidad completa en español e inglés sin texto sin traducir
- Incremento del 15% en tiempo promedio de sesión

**FASE 3**:
- Reducción del 30% en tiempo de carga inicial en dispositivos de gama media
- Incremento del 20% en usuarios que guardan configuraciones como favoritas
- Mantener 60fps constante durante interacciones críticas (ruleta, transiciones)

Este plan proporciona un camino claro y accionable para mejorar significativamente la experiencia de usuario de SedPlay, equilibrando mejoras inmediatas de usabilidad con mejoras estratégicas a largo plazo en accesibilidad, rendimiento y funcionalidades avanzadas.