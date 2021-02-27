function sendEmail(emiter, receiver, callback) {
    console.log(`Hola ${receiver}.\nTe envío este email para que tengas mi dirección.\nAtentamente, ${emiter}.`);
    callback(emiter, receiver);
}
 
sendEmail('Daniel', 'Marcos', function(emit, rec) {
    const date = new Date();
    console.log(`${date.getDate()} - ${date.getUTCHours() + 1}:${date.getMinutes()}:${date.getSeconds()} ${emit} :: ${rec}`);
});