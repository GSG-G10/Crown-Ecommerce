import React from 'react';
import CardCollection from './CardCollection';
import { man, womn, child } from '../../assets';
import './style.css';

function Collection() {
  return (
    <div className="collection-container">
      <CardCollection
        image={man}
        typeCategory="MEN'S "
        descriptoin="collection men clothes"
      />
      <CardCollection
        image={womn}
        typeCategory="WOMAN'S "
        descriptoin="collection woman clothes"
      />
      <CardCollection
        image={child}
        typeCategory="CHILD'S "
        descriptoin="collection chld clothes"
      />
    </div>
  );
}

export default Collection;
