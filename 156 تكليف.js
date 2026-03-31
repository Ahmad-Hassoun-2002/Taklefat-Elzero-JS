// First Refresh
function generateSerial(length = 20) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let serial = '';
    for (let i = 0; i < length; i++) {
        serial += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return serial;
}

let serial = generateSerial();
console.log(serial); // 9cBcrg3kcWF4GZSlWXAM

// Second Refresh
console.log(serial); // vPeu6HXBgiXXj6jpch4P

// Third Refresh
console.log(serial); // RQuHFBjCdnp0Ghhp0544