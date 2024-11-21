import { Box, Container, Group, Text } from '@mantine/core';
import React, { useState } from 'react';
import CustomInput from '../util/CustomInput';
import { notifications } from '@mantine/notifications';
import { Color } from '../util/Theme';


interface Errors {
    eventName?: string;
    location?: string;
    description?: string;
    eventType?: string;
}
const CreateEvent = () => {
    const [formData, setFormData] = useState({
        eventName: '',
        location: '',            
        description: '',
        eventType: '',
    });
    const [errors, setErrors] = useState<Errors>({});
  

    const validate = (): boolean => {
        const errors: Errors = {};
        let isValid = true;

        if (!formData.eventName || test(formData.eventName)) {
            errors.eventName = 'Please enter a valid name';
            isValid = false;
        }

       

        setErrors(errors);
        return isValid;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        if (validate()) {
           
            try {
                         
                // Notify user on successful registration and email verification
                notifications.show({
                    title: `Registration Successful `,
                    message: `A verification email has been sent to your email address. Please check your inbox.`,
                    color: Color.SUCCESS_COLOR,
                    position:'top-right',
                });
                
            } catch (error) {
                notifications.show({
                    title: 'Registration Failed',
                    message: 'Something went wrong. Please try again later.',
                    color: Color.ERROR_COLOR,
                    position:'top-right',
                });
            }
        }
    };
    return (
        <Container size="40rem" 
            style={{
                marginTop: '7rem', // Adds 20rem spacing from the top
                backgroundColor: Color.INFO_COLOR,
                padding: '2rem',
                borderRadius:'5px'
            }}
        >
            <Box>
                <Text>
                    <span style={{
                        fontSize: '2rem',
                        fontWeight: 'bold'
                    }}>Create a new event!</span>
                    <br />
                    Please enter your event details below.
                </Text>

                <Group>
                <Text mt="md">
                    <span style={{
                        fontSize: '1rem',
                        fontWeight: 'bold'
                    }}>Event Details</span>
                    <br />
                    This will be your event’s title. Your title will be used to help create your event’s summary, description, category, and tags – so be specific!
                </Text>
                <Box>
                <CustomInput type="text"
                                label="Event Name"
                                name="name"
                                value={formData.eventName}
                                onChange={handleInputChange}
                                required
                                error={errors.eventName}/>
                 <CustomInput type="text"
                                label="Event Description"
                                name="description"
                                value={formData.eventName}
                                onChange={handleInputChange}
                                required
                                error={errors.eventName}/>
                  <CustomInput type="text"
                                label="Event Type"
                                name="name"
                                value={formData.eventName}
                                onChange={handleInputChange}
                                required
                                error={errors.eventName}/>                               
                
                </Box>
                </Group>
            </Box>
        </Container>
    );
};

export default CreateEvent;
