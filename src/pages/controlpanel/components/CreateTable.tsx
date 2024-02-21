import React from 'react';
import { Assistenter, Vikarer } from './Interfaces';

const mapToTable = (skoler: Object[]) => {
  return skoler.map((school, index) => (
    <tr key={index.valueOf()} className="even:bg-white odd:bg-table-grey">
      {Object.values(school).map((value, valueIndex) => (
        <td key={`${index}-${valueIndex}`} className="text-center py-3 px-6">{value}</td>
      ))}
    </tr>
  ));
};

interface Props {
  header: string[];
  content: Object[];
}

const CreateTable:React.FC<Props> = ({header, content}) => {
  return (
      <div className="w-full p-10 flex justify-center items-center ml-6">
        <div className="w-10/12 border-2 mt-100 shadow overflow-x-scroll">
          <table className="w-full">
            <thead>
              <tr className="bg-white">
                {header.map((value, index) => (
                  <th key={index} className="text-center w-1/7 py-3 px-6 text-vektor-darblue">{value}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mapToTable(content)}
            </tbody>
          </table>
        </div>
      </div>
  );
}

export default CreateTable;


