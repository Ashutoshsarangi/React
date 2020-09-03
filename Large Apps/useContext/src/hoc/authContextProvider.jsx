import React from 'react';
import { CustomContext } from '../context';

export default Component => Props => {
    console.info('[authContextProvider.jsx] Props =====>', Component);
    return <CustomContext><Component {...Props} /></CustomContext>
}