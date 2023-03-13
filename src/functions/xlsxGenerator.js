import { saveAs } from "file-saver";
import * as XLSX from "xlsx";


export default function generateMockDataAndDownloadToXLSX(columns) {
  const data = [];
  const names = ["John", "Kamal", "Ibrahim", "Adebola", "Tommiwa", "Adegoke"];
  const namesLast = ["Yemi", "Tolu", "Ishola", "Ope", "Shade", "Ola"];
  const gender = ["male", "female"];
  const phoneFormats = ["###-###-####", "(###) ###-####", "1-###-###-####"];
  const longText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam libero risus, sed imperdiet orci malesuada ut. Nam mattis erat et diam ultricies placerat. Nam quis arcu et velit tempor tincidunt non non felis. Donec euismod, lorem vel laoreet posuere, augue justo tincidunt sem, eget laoreet est quam a magna. Etiam vitae fermentum elit. Nulla ultrices elit elit, a sagittis ipsum porttitor vel. Nam volutpat est sapien, at feugiat ex consequat eu. Sed a congue velit.";

  for (let i = 0; i < 20; i++) {
    // Generate a random index within the bounds of the array
    const genderIndex = Math.floor(Math.random() * gender.length);
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomIndex2 = Math.floor(Math.random() * namesLast.length);

    // Get the name at the random index
    const firstName = names[randomIndex];
    const lastName = namesLast[randomIndex2];
    const row = { id: i + 1 }; // Add id column and value
    for (let j = 0; j < columns.length; j++) {
      const { name, type } = columns[j];
      let value;
      switch (type) {
        case "names":
          value = firstName + " " + lastName;
          break;
        case "gender":
          value = gender[genderIndex];
          break;
        case "text":
          value = "Lorem ipsum dolor sit amet";
          break;
        case "email":
          value = `${firstName}_${lastName}@example.com`;
          break;
        case "phone number":
          const format =
            phoneFormats[Math.floor(Math.random() * phoneFormats.length)];
          value = format.replace(/#/g, () => Math.floor(Math.random() * 10));
          break;
        case "longtext":
          value = longText;
          break;
        case "date":
          const date = new Date();
          const daysAgo = Math.floor(Math.random() * 365);
          date.setDate(date.getDate() - daysAgo);
          value = date.toLocaleDateString();
          break;
        case "number":
          value = Math.floor(Math.random() * 1000) + 1;
          break;
        case "age":
          value = Math.floor(Math.random() * 100) + 1;
          break;
        default:
          value = "";
      }
      row[name] = value;
    }
    data.push(row);
  }

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "binary" });

  const blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
  saveAs(blob, "mock-data-xcel.xlsx");
}


// convert string to ArrayBuffer
function s2ab(s) {
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i < s.length; i++) {
    view[i] = s.charCodeAt(i) & 0xff;
  }
  return buf;
}
