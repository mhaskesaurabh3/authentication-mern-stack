import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function UserLocation() {
  const companyLocation = useSelector(
    (state) => state.products?.productData?.company
  );

  useEffect(() => {
    const ifameData = document.getElementById('iframeId');
    const lat = companyLocation?.address?.latitude;
    const lon = companyLocation?.address?.longitude;
    ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
  }, []);
  return (
    <div>
      <iframe id='iframeId'></iframe>
    </div>
  );
}
export default UserLocation;
