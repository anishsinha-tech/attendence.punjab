document.getElementById('btnStartScan').addEventListener('click', async () => {
    console.log("Start Scan Button Clicked");
    if (html5QrCode) return;
    html5QrCode = new Html5Qrcode('reader');
    try {
        const devices = await Html5Qrcode.getCameras();
        if (!devices || devices.length === 0) {
            alert('No camera found');
            html5QrCode = null;
            return;
        }
        const camId = devices[0].id;
        await html5QrCode.start(camId, { fps: 10, qrbox: 250 }, qrSuccess, qrError);
        console.log('Scanner started');
    } catch (e) {
        console.error("Error starting scanner:", e);
        alert('Camera error: ' + e);
        html5QrCode = null;
    }
});
