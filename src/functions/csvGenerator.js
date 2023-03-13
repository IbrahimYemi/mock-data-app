import { saveAs } from "file-saver";

export default function generateMockDataAndDownloadToCsv(columns) {
  const data = [];

  const names = ["John", "Kamal", "Ibrahim", "Adebola", "Tommiwa", "Adegoke"];
  const namesLast = ["Yemi", "Tolu", "Ishola", "Ope", "Shade", "Ola"];
  const gender = ["male", "female"];
  const phoneFormats = ["###-###-####", "(###) ###-####", "1-###-###-####"];
  const longText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam libero risus, sed imperdiet orci malesuada ut. Nam mattis erat et diam ultricies placerat. Nam quis arcu et velit tempor tincidunt non non felis. Donec euismod, lorem vel laoreet posuere, augue justo tincidunt sem, eget laoreet est quam a magna. Etiam vitae fermentum elit. Nulla ultrices elit elit, a sagittis ipsum porttitor vel. Nam volutpat est sapien, at feugiat ex consequat eu. Sed a congue velit.";

  // create headers
  const headers = ["id", ...columns.map((column) => column.name)];

  for (let i = 0; i < 20; i++) {
    // Generate a random index within the bounds of the array
    const genderIndex = Math.floor(Math.random() * gender.length);
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomIndex2 = Math.floor(Math.random() * namesLast.length);

    // Get the name at the random index
    const firstName = names[randomIndex];
    const lastName = namesLast[randomIndex2];
    const row = [i];
    for (let j = 0; j < columns.length; j++) {
      const { type } = columns[j];
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
      row.push(value);
    }
    data.push(row);
  }

  // create CSV content
  let csvContent = "data:text/csv;charset=utf-8," + headers.join(",") + "\n";
  data.forEach((row) => {
    csvContent += row.join(",") + "\n";
  });

  // download CSV file
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "mock-data-csv.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
