import React from 'react'

const CardStandings = ({team, w, l, pct}) => {
  return (
    <>
      <tr className="border-b">
        <td className="py-2 px-4">{team}</td>
        <td className="py-2 px-4 text-center">{w}</td>
        <td className="py-2 px-4 text-center">{l}</td>
        <td className="py-2 px-4 text-center">{pct}</td>
      </tr>
    </>
  );
}

export default CardStandings
