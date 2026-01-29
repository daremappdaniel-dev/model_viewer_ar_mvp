# Vanila AR MVP

Prototipo de navegación con Realidad Aumentada usando tecnologías web vanilla.

## 🎯 Objetivo

Demostrar una experiencia de navegación AR inmersiva utilizando únicamente tecnologías web estándar, sin frameworks pesados.

## 🛠️ Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Estilos con Design Tokens (MD3 + Apple Style)
- **JavaScript** - Lógica vanilla ES6+
- **Google Model Viewer** - Renderizado de modelos 3D
- **MediaDevices API** - Acceso a cámara
- **DeviceOrientation API** - Sensores de brújula

## ✨ Características

- 📸 Acceso a cámara trasera del dispositivo
- 🧭 Sensores de orientación (brújula) con fallback para PC
- 🎨 Overlay AR con modelos 3D (flecha direccional + POI)
- 📱 UI Card responsiva estilo Material Design 3
- 🍎 Variante de estilo Apple iOS (glassmorphism)

## 📁 Estructura

```
vanila_ar_mvp/
├── card.html          # Página principal
├── script.js          # Lógica de cámara y sensores
├── style.css          # Estilos Material Design 3
├── apple_style.css    # Estilos alternativos Apple
└── assets/
    ├── arrow.glb      # Modelo 3D de flecha
    └── daremapp_logo.glb  # Logo POI 3D
```

## 🚀 Uso

1. Abre `card.html` en un servidor HTTPS (requerido para acceso a cámara)
2. Acepta los permisos de cámara
3. Orienta el dispositivo para ver la flecha AR rotar

## 📜 Licencia

MIT
