import { Box, Container,  Stepper, Text, Button, } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useLocation, useNavigate  } from 'react-router-dom'
import { Color } from '@/pages/util/Theme';
import { useState } from 'react';
import { notifications } from '@mantine/notifications';
import CustomTextArea from '../util/CustomTextArea';


interface Errors {    
    description?: string;
    }
const SingleTicket = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const ticketDetails = location.state;
    const isSmall = useMediaQuery('(max-width: 768px)');
    const [activeStep, setActiveStep ] = useState(0);
    const [errors, setErrors] = useState<Errors>({});
    const [formData, setFormData] = useState({
                     
        description: '',
          
    });
    const validate = (): boolean => {
        const errors: Errors = {};
        let isValid = true;
        
        if (!formData.description || formData.description.length < 10) {
            errors.description = 'Description should be at least 10 characters long';
            isValid = false;
        }
    
        setErrors(errors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) {
            try {
                navigate('/books')
                 notifications.show({
                    title: 'Booking Successful',
                    message: 'Event has been booked successfully.',
                    color: Color.SUCCESS_COLOR,
                    position: 'bottom-right',
                });
                
            } catch (error) {
                notifications.show({
                    title: 'Registration Failed',
                    message: 'Something went wrong. Please try again later.',
                    color: Color.ERROR_COLOR,
                    position: 'bottom-right',
                });
            }
        }
    };
    

    // Fee is fixed for simplicity
  const fee = 1.23;
  const subtotal = Number(ticketDetails.price); 
  const totalPrice = subtotal + fee;   

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
       };
    
  
       const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    return (
        <Container size={isSmall ? '90%' : '40rem'}
        style={{
            marginTop: '7rem', // Adds 20rem spacing from the top
            backgroundColor: Color.INFO_COLOR,
            padding: '2rem',
            borderRadius:'5px'
        }}>
        <Stepper  active={activeStep}
        onStepClick={(stepIndex) => setActiveStep(stepIndex)}
             mt="md"
        mb="lg"
        size={isSmall ? 'xs' : 'md'}
        styles={() => ({
            separator: {
              backgroundColor: Color.PRIMARY, // Change to your desired color
            },
            stepIcon: {
                color: Color.PRIMARY,
                outline:'1px solid Color.PRIMARY ',
                
            },stepCompletedIcon:{
                color: Color.WHITE,
                backgroundColor: Color.PRIMARY,
                borderRadius: 20,
                outline:'1px solid Color.PRIMARY ',
            },stepWrapper:{
                color: Color.PRIMARY, 
            }
          })}>
            <Stepper.Step>
            <Text fz={20} fw={600} > Single Ticket </Text>
            <Box mt={10}>
            <Text style={{
                            fontSize: '0.95rem',
                            fontWeight: 'regular'
                          }}>Ticket Name<span
                          style={{
                            color: Color.ERROR_COLOR
                          }}>*</span></Text>
                        
                        <Text fz={14} style={{border:'1px solid', 
                            padding:'8px 10px', borderRadius:3,
                            borderColor:Color.LIGHT_GRAY, width:'100%',
                            height:'40px', backgroundColor:Color.WHITE  }}>{ticketDetails.name}</Text> 
            </Box>
            <Box mt={10}>
            <Text style={{
                            fontSize: '0.95rem',
                            fontWeight: 'regular'
                          }}>Ticket Price<span
                          style={{
                            color: Color.ERROR_COLOR
                          }}>*</span></Text>
                        
                        <Text fz={14} style={{border:'1px solid', 
                            padding:'8px 10px', borderRadius:3, backgroundColor:Color.WHITE,
                             borderColor:Color.LIGHT_GRAY, width:'100%', height:'40px'  }}>{ticketDetails.price}</Text> 
            </Box>
           
            <Box mt="md">
                     <CustomTextArea type="text"
                                  label="Event Description"
                                  name="description"
                                  value={formData.description}
                                  onChange={handleInputChange}
                                  resize="vertical"
                                  required
                    error={errors.description}/>     
            </Box>
        </Stepper.Step>

        <Stepper.Step>
        
        <Box>
                <Text fz={18} fw={600}>Check Out</Text>
                <Text fz={16} fw={550} mt={10}>{ticketDetails.name}</Text>
                <Box mt={10} style={{display:'flex', justifyContent: 'space-between'}}>
                    <Text fz={15}>Date:</Text>
                    <Text fz={15}>{ticketDetails.date}</Text>
                </Box>
                <Box mt={10} style={{display:'flex', justifyContent: 'space-between'}}>
                    <Text fz={15}>Guest:</Text>
                    <Text fz={15}>1</Text>
                </Box>
                <Box mt={10} style={{display:'flex', justifyContent: 'space-between'}}>
                    <Text fz={15}>Amount:</Text>
                    <Text fz={15}>{ticketDetails.price}</Text>
                </Box>
                <Text fz={12} mt={10} style={{ color:Color.GRAY}}>this payment requires you pay bank charges and no payment is refundable</Text>
            </Box>
            
        </Stepper.Step>

        <Stepper.Step>
        <Box>
                <Text fz={18} fw={600}>Summary</Text>
                <Text fz={15} fw={550} mt={10}>{ticketDetails.name}</Text>
                <Box mt={30} style={{display:'flex', justifyContent: 'space-between'}}>
                    <Text fz={15}>Subtotal:</Text>
                    <Text fz={15}>${subtotal.toFixed(2)}</Text>
                </Box>
                <Box mt={10} style={{display:'flex', justifyContent: 'space-between'}}>
                    <Text fz={15}>Fees:</Text>
                    <Text fz={15}>${fee.toFixed(2)}</Text>
                </Box>
                <Box mt={10} style={{display:'flex', justifyContent: 'space-between'}}>
                    <Text fz={15} fw={600}>Total:</Text>
                    <Text fz={15} fw={600}>${totalPrice.toFixed(2)}</Text>
                </Box>
            </Box>
        </Stepper.Step>
          </Stepper>


          <Box mt="lg" style={{ display: "flex", justifyContent: "space-between" }}>
                  <Button variant='filled' color={Color.PRIMARY} onClick={handleBack} disabled={activeStep === 0}>Back</Button>
                    {activeStep < 2 ? (
                        <Button onClick={handleNext} variant='filled' color={Color.PRIMARY}>Next</Button>
                    ) : (
                        <Button variant='filled' color={Color.PRIMARY} onClick={handleSubmit}>Pay Now</Button>
                    )}

        </Box>


           

        </Container>
    )
}

export default SingleTicket
