import { Textarea } from '@mantine/core';
import React from 'react'



const CustomTextArea = ({  ...props}) => {
    return (
        <Textarea 
        {...props}
        />
    )
}

export default CustomTextArea;
