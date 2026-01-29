document.addEventListener('DOMContentLoaded', () => {
    initCamera();
});

async function initCamera() {
    const video = document.getElementById('camera-feed');
    
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { 
                facingMode: 'environment',
                width: { ideal: 1920 },
                height: { ideal: 1080 }
            },
            audio: false 
        });
        
        video.srcObject = stream;
        console.log("Cámara iniciada correctamente");
    } catch (err) {
        console.error("Error al acceder a la cámara:", err);
        alert("No se pudo acceder a la cámara. Asegúrate de usar HTTPS o localhost.");
    }
}
