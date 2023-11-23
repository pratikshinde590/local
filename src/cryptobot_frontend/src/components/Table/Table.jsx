import React from "react";
import { Pagination, Table } from "react-bootstrap";

const Tables = ({ coloumn, row, ...props }) => {
  
  return (
    <>
      <Table striped bordered hover variant="light">
        <thead>
          {coloumn.map((item) => (
            <th>{item}</th>
          ))}
        </thead>
        <tbody>
          <tr>
            {row.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            {row.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            {row.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            {row.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            {row.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            {row.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            {row.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            {row.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            {row.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            {row.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            {row.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            {row.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
        </tbody>
      </Table>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </>
  );
};

export default Tables;
