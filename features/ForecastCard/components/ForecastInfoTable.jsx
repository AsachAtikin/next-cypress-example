import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Table = styled.table`
  margin-top: 12px;

  border-collapse: collapse;

  display: block;
`;

export const ForecastInfoTable = ({ data }) => {
  return (
    <Table>
      <tbody>
        <tr>
          <td>
            Sunrise
          </td>
          <td>
            {moment(data.sunrise * 1000).format('HH:MM A')}
          </td>
          </tr>
        <tr>
          <td>
            Sunset
          </td>
          <td>
            {moment(data.sunset * 1000).format('HH:MM A')}
          </td>
        </tr>
      </tbody>
    </Table>
  )
}
