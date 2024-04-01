const d = new Date();
let minutes = d.getMinutes();

switch (minutes) {
    case 0:
    case 15: 
    case 30:
    case 45:
        return msg;
    default:
        return null;
}
