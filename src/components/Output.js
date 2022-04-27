import React from 'react';
import Outputrow from './Outputrow';

const Output = (props) => {
    return (
        <div>
            <Outputrow value={props.answer} testsize={{fontsize:'20px'}}/>
            <Outputrow value={props.user} />
        </div>
    )
}
export default Output;