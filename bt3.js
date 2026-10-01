const rawData = "BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302";
const data = rawData.split("-");
let doctor = data[0];
let department = data[1];
let time = data[2];
let room = data[3];
doctor = doctor.replace("BS.", "");
doctor = doctor.replaceAll("_", " ");
doctor = doctor.toLowerCase();
let words = doctor.split(" ");
doctor = words[0].slice(0, 1).toUpperCase() + words[0].slice(1) + " "+ words[1].slice(0, 1).toUpperCase() + words[1].slice(1) + " "+ words[2].slice(0, 1).toUpperCase() + words[2].slice(1);
department = department.replaceAll("_", " ");
department = department.toLowerCase();
department = department.slice(0, 1).toUpperCase() + department.slice(1);
room = room.replace("PHONG_", "Phòng ");
console.log(`
BẢNG PHÂN CÔNG CA KHÁM
------------------------
Bác sĩ: ${doctor}
Chuyên khoa: ${department}
Giờ khám: ${time}
Phòng khám: ${room}
------------------------
`);