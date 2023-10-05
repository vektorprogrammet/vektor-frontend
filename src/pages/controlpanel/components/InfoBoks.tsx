import React from 'react';

interface InfoBoksProps {
  column1: string | undefined;
  column2: string | undefined;
  column3: string | undefined;
  column4: string | undefined;
  column5: string | undefined;
  column6: string | undefined;
  column7: string | undefined;
  column8: string | undefined;
}

const InfoBoks = ({ column1, column2, ...rest }: InfoBoksProps) => {

  return (
    <div>
      <p> Heisann</p>
    </div>

  )

}

export default InfoBoks;