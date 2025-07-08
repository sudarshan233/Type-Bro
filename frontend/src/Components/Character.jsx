import React, { useEffect, useState } from 'react';
export const paraList='Hello I am Pradeep Kumar Ramesh I am a Fullstack Developer I love codingI am learning React'.split('');
const Character = () => {
    return(<div>{paraList.map((para, i) => <span style={{fontSize:40}}key={i}>{paraList[i]}</span>)}</div>)
};
export default Character;