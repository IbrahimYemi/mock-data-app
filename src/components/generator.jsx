import React, { useState } from "react";
import generateMockDataAndDownloadToCsv from "../functions/csvGenerator";
import generateMockDataAndDownloadTojson from "../functions/generate";
import generateMockDataAndDownloadToTxt from "../functions/txtGenerator";
import generateMockDataAndDownloadToXLSX from "../functions/xlsxGenerator";
import generateMockDataAndCopyToClipboard from "../functions/clipboard";

function InputGenerator({ close }) {
  const [inputs, setInputs] = useState([]);

  const handleAddInput = () => {
    setInputs([...inputs, { id: "", name: "name", type: "names" }]);
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const newInputs = [...inputs];
    newInputs[index] = { ...newInputs[index], [name]: value, id: index + 1 };
    setInputs(newInputs);
  };

  const handleSelectChange = (event, index) => {
    const newInputs = [...inputs];
    newInputs[index] = { ...newInputs[index], type: event.target.value };
    setInputs(newInputs);
  };

  function handleDeleteRow(index) {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  }

  const handleSubmitjson = () => {
    generateMockDataAndDownloadTojson(inputs);
  };

  const handleSubmitcsv = () => {
    generateMockDataAndDownloadToCsv(inputs);
  };

  const handleSubmitxlsx = () => {
    generateMockDataAndDownloadToXLSX(inputs);
  };

  const handleSubmittxt = () => {
    generateMockDataAndDownloadToTxt(inputs);
  };

  const handleSubmitCopy = () => {
    generateMockDataAndCopyToClipboard(inputs)
  }

  return (
    <div className="bg-neutral-700 bg-opacity-80 absolute top-0 right-0 left-0 bottom-0 flex items-center justify-between">
      <div className="fixed top-0 left-0 right-0 bottom-0 m-0 flex flex-col items-center">
        <div className="mt-32 flex flex-col max-h-screen overflow-y-scroll scrollbar-thin scrollbar-blue items-center justify-center md:pr-8">
          {inputs.map((input, index) => (
            <div key={index} className="flex items-center my-2">
              <label className="mr-2 font-bold md:w-24 text-yellow-100">{`Column ${
                index + 1
              }:`}</label>
              <input
                name="id"
                value={index}
                onChange={(event) => handleInputChange(event, index)}
                style={{ display: "none" }}
                required
              />
              <input
                name="name"
                value={input.name}
                onChange={(event) => handleInputChange(event, index)}
                className="w-40 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <select
                name="type"
                value={input.type}
                onChange={(event) => handleSelectChange(event, index)}
                className="mx-2 p-2 w-24 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option className="my-1 p-1" value="names">
                  Name
                </option>
                <option className="my-1 p-1" value="number">
                  Number
                </option>
                <option className="my-1 p-1" value="email">
                  Email
                </option>
                <option className="my-1 p-1" value="gender">
                  Gender
                </option>
                <option className="my-1 p-1" value="age">
                  Age
                </option>
                <option className="my-1 p-1" value="date">
                  Date
                </option>
                <option className="my-1 p-1" value="text">
                  Simple text
                </option>
                <option className="my-1 p-1" value="longtext">
                  Long text
                </option>
                <option className="my-1 p-1" value="phone number">
                  Phone number
                </option>
              </select>
              <i
                onClick={() => handleDeleteRow(index)}
                className="fa fa-trash text-lg leading-lg text-white bg-red-600 cursor-pointer rounded-md p-2 opacity-75"
              ></i>
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <button
            onClick={handleAddInput}
            className="my-4 mx-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Input
          </button>
          <button
            onClick={close}
            className="my-4 mx-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            close
          </button>
        </div>
        {inputs.length > 2 && (
          <div className="flex items-center flex-wrap">
            <button
              onClick={handleSubmitjson}
              className="mx-1 inline w-16 my-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              JSON
            </button>
            <button
              onClick={handleSubmitcsv}
              className="mx-1 inline w-16 my-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              CSV
            </button>
            <button
              onClick={handleSubmitxlsx}
              className="mx-1 inline w-16 my-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              EXCEL
            </button>
            <button
              onClick={handleSubmittxt}
              className="mx-1 inline w-16 my-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              TXT
            </button>
            <button
              onClick={handleSubmitCopy}
              className="mx-1 inline w-16 my-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              COPY
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default InputGenerator;
