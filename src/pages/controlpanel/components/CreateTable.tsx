import React from 'react';
import { Assistenter, Vikarer } from './Interfaces';

//create table takes in header and content and maps the content to a table, 
//header is a string of the table headers and content is an array of objects

const mapToTable = (skoler: Object[]) => {
  return skoler.map((school, index) => (
    <tr key={index.valueOf()} className="even:bg-white odd:bg-table-grey">
      {Object.values(school).map((value, valueIndex) => (
        <td key={`${index}-${valueIndex}`} className="whitespace-nowrap text-xs text-center py-3 px-6">{value}</td>
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
      <div className="w-full p-4 flex justify-center items-center">
        <div className="max-w-full border-2 shadow overflow-x-scroll">
          <table className="w-full">
            <thead>
              <tr className="bg-white">
                {header.map((value, index) => (
                  <th key={index} className="text-center text-xs py-3 px-6 text-vektor-darblue">{value}</th>
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


