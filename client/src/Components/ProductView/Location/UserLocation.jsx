import React, { useEffect } from 'react';

function UserLocation() {
  useEffect(() => {
    const ifameData = document.getElementById('iframeId');
    const lat = 50.779729;
    const lon = 6.100367;
    ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
  }, []);
  return (
    <div>
      <iframe id='iframeId'></iframe>
    </div>
  );
}
export default UserLocation;
