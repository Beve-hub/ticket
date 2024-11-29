import { Box, Button, Container,  Modal,  RangeSlider,  SimpleGrid,  Stepper,  Switch,  Text, UnstyledButton } from '@mantine/core';
import React, { useState } from 'react';
import CustomInput from '../util/CustomInput';
import CustomSelect from '../util/CustomSelect';
import { notifications } from '@mantine/notifications';
import { Color } from '../util/Theme';
import CustomTextArea from '../util/CustomTextArea';
import { useMediaQuery } from '@mantine/hooks';
import { MdOutlineBusinessCenter, MdOutlineSportsBaseball } from "react-icons/md";
import { TbNeedleThread } from "react-icons/tb";
import { GiMaterialsScience, GiLifeInTheBalance } from "react-icons/gi";
import { PiFlowerLotus, PiDotsSixVerticalBold } from "react-icons/pi";
import { LuMic2 } from "react-icons/lu";
import { SlGraduation } from "react-icons/sl";
import { FaPeopleRoof } from "react-icons/fa6";
import { RiVidiconLine } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


export const categoryData = [
  { label: 'Business', icon: <MdOutlineBusinessCenter /> },
  { label: 'Fashion & Design', icon: <TbNeedleThread /> },
  { label: 'Technology & Science', icon: <GiMaterialsScience /> },
  { label: 'Music & Art', icon: <LuMic2 /> },
  { label: 'Religion & Spirituality', icon: <PiFlowerLotus /> },
  { label: 'Education', icon: <SlGraduation /> },
  { label: 'Charity & Aid', icon: <GiLifeInTheBalance /> },
  { label: 'Sport', icon: <MdOutlineSportsBaseball /> },
  { label: 'Others', icon: <PiDotsSixVerticalBold /> },
];

export const LocationData = [
  { label: 'Physical event', icon: <FaPeopleRoof /> },
  { label: 'Online event', icon: <RiVidiconLine /> },
];

export const venues = [
  { name: 'GrandHall', price: 500 },
  { name: 'Garden', price: 300 },
  { name: 'Conference Room', price: 700 },
  { name: 'Theater', price: 400 },
  { name: 'Classroom', price: 200 },
  { name: 'Auditorium', price: 1000 },
  { name: 'Meeting Room', price: 500 },
  { name: 'Conference Center', price: 300 },
  { name: 'Civic Center', price: 700 },
  { name: 'Eko Hotel', price: 400 },
  { name: 'Lobby', price: 200 },
];

interface Errors {
    eventName?: string;
    venue?: string;
    description?: string;
    selected?: string;
    startDate?: string;
    endDate?: string;
    startTime?: string;
    endTime?: string;
    selectLocation?: string;
    amount?: string;
    accountName?:string;
    accountNumber?:string;
    bankName?:string;
}



const CreateEvent = () => {
    const isSmall = useMediaQuery('(max-width: 768px)');
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        eventName: '',
        venue: '',            
        description: '',
        eventType: '',
        startTime: '',
        endTime: '',
        startDate: '',
        endDate: '',
        amount:''  ,
        accountName:'',
        accountNumber:'',
        bankName:''   
    });
   const [selected, setSelected] = useState(categoryData[0]);
   const [selectLocation, setSelectLocation] = useState(LocationData[0]);
   const [filterVenue, setFilterVenue]  = useState(venues);
   const [showVenue, setShowVenue] = useState(false);
   const [isFree, setIsFree] = useState(false);
   const [showPrice, setShowPrice] = useState<[number, number]>([500,500]);
   const [errors, setErrors] = useState<Errors>({});
   const [activeStep, setActiveStep ] = useState(0);
  
   const validate = (): boolean => {
    const errors: Errors = {};
    let isValid = true;

    if (activeStep === 0) {
        if (!formData.eventName || formData.eventName.trim().length === 0) {
            errors.eventName = 'Please enter a valid name';
            isValid = false;
        }

        if (!formData.description || formData.description.length < 10) {
            errors.description = 'Description should be at least 10 characters long';
            isValid = false;
        }
        if (!selected ) {
            errors.selected = 'Event type is required';
            isValid = false;
        }
    } else if (activeStep === 1 ) {
        if (!formData.startDate) {
            errors.startDate = 'Start date is required';
            isValid = false;
        }

        if (!formData.endDate) {
            errors.endDate = 'End date is required';
            isValid = false;
        }

        if (!formData.startTime) {
            errors.startTime = 'Start Time is required';
            isValid = false;
        }

        if (!formData.endTime) {
            errors.endTime = 'End Time is required';
            isValid = false;
        }
    } else if (activeStep === 2) {
        if (!formData.venue) {
            errors.venue = 'Venue is required';
            isValid = false;
        }
        if (!selectLocation) {
            errors.selectLocation = 'Location is required';
            isValid = false;
        }
        if (!isFree && !formData.amount  ) {
            errors.amount = 'Ticket amount is required';
            isValid = false;
        }

        if (!isFree) {
            if (!formData.accountName ) {
                errors.accountName = 'Account Name is required';
                isValid = false;
            }
            if (!formData.accountNumber ) {
                errors.description = 'Account Number is required';
                isValid = false;
            }
            if (!formData.bankName ) {
                errors.bankName = 'Bank Name is required';
                isValid = false;
            }
        }
        
    }

    setErrors(errors);
    return isValid;
};

   const handleNext = () => {
    if (validate()) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
   };

   const handleBack = () => {
       setActiveStep((prevActiveStep) => prevActiveStep - 1);
   };

    
   const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.currentTarget.checked
    setIsFree(isChecked);
       if (isChecked) {
        setFormData((prevData) => ({...prevData,
             amount: isChecked ? '' : prevData.amount, }));
       }

       if (isChecked) {
        setErrors((prevErrors) => ({
            ...prevErrors,
            amount: undefined, // Remove error for amount if event is free
        }))
       }
   }; 

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    
    const handleDateChange = (date: string, fieldName: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: date,
        }));
    };
    
    const handleCategory = (item: {label: string; icon: JSX.Element}) => {
        setSelected(item);
        
    };

    const handleLocation = (item: {label: string; icon: JSX.Element}) => {
        setSelectLocation(item);
    };

    const handlePrice = (value: [number,number]) => {
        setShowPrice(value);
       const filtered = venues.filter((venue) => venue.price >= value[0] && venue.price <= value[1])
        setFilterVenue(filtered);
    };

    const handleVenueSelection = (venueName: string) => {
        setShowVenue(false);
        setFormData((prevData) => ({...prevData, venue: venueName }));
    };

    const handleSubmit = async () => {
        if (validate()) {
            try {
                navigate('/myAccount', { state: { item: errors } }); // Pass the current errors state
                // Notify user on successful event creation
                notifications.show({
                    title: 'Registration Successful',
                    message: 'Event has been created successfully.',
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
    

    return (
        <Container 
        size={isSmall ? '90%' : '40rem'}
            style={{
                marginTop: '7rem', // Adds 20rem spacing from the top
                backgroundColor: Color.INFO_COLOR,
                padding: '2rem',
                borderRadius:'5px'
            }}
        >
            <Stepper   active={activeStep}
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
          })}
        >
        
        <Stepper.Step  />
        
        <Stepper.Step />
                <Stepper.Step  />
            </Stepper>


            <Text fz={14}>
                    <span style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold'
                    }}>Create a new event!</span>
                    <br />
                    Please enter your event details below.
                </Text>

               
                {activeStep === 0 && (
                  <>
                    <Box>
                    <Text mt="md" fz={14}>
                    <span style={{
                        fontSize: '1rem',
                        fontWeight: 'bold'
                    }}>Event Details</span>
                    <br />
                    This will be your event’s title. Your title will be used to help create your event’s summary, description, category, and tags – so be specific!
                </Text>
                    <Box mt="md">
                    <CustomInput type="text"
                                  label="Event Name"
                                  name="eventName"
                                  value={formData.eventName}
                                  onChange={handleInputChange}
                                  required
                                  error={errors.eventName}/>
                    </Box>
                  
                     <Box mt="md">
                     <CustomTextArea type="text"
                                  label="Event Description"
                                  name="description"
                                  value={formData.description}
                                  onChange={handleInputChange}
                                  resize="vertical"
                                  required
                    error={errors.eventName}/>     
                     </Box>
                                  
                  
                  </Box>
  
                  <Box mt="md">
                      
                          <Text style={{
                            fontSize: '0.95rem',
                            fontWeight: 'regular'
                          }}>Event Type <span
                          style={{
                            color: Color.ERROR_COLOR
                          }}>*</span></Text>
                           
                          <Text style={{
                            fontSize: '0.9rem',
                            fontWeight: 'regular'
                          }}> Choose the category that best describes your event.</Text>
                          
                         
                      
                      <CustomSelect
                          name="eventType"
                          data={categoryData}
                          value={selected}
                          onChange={handleCategory}
                          required
                          
                      />
                       <Text color={Color.ERROR_COLOR} size="sm">{errors.selected}</Text>
                  </Box>
               
                  </>
                  )}
                 
  
                  {activeStep === 1 && (
                    <>
                       <Box mt="lg">
                      <Text>
                      <span style={{
                              fontSize: '1rem',
                              fontWeight: 'bold'
                          }}>Event Date</span>
                          <br/>
                          When does your event start and end?</Text>
                      <Box style={{display:'flex',}} mt="md">
                        <Box mr="md">
                        <CustomInput
                      type='date'
                      label="Start Date"
                      value={formData.startDate}
                      onChange={(e) => handleDateChange(e.target.value, 'startDate')}                    
                      error={errors.startDate}
                  />
                        </Box>
                      
                        <Box mr="md">
             <CustomInput
             type='time'
             label="Start Time"
             name='startTime'
             value={formData.startTime}
             onChange={handleInputChange}
             error={errors.startDate}
            />
             </Box>
                  
            </Box>
                  </Box>
                    <Box mt="lg">
                   
            <Box style={{display:'flex'}} mt="md">
                
             <Box mr="md">
                  <CustomInput
                      type='date'
                      label="End Date"
                      value={formData.endDate}
                      onChange={(e) => handleDateChange(e.target.value, 'endDate')}
                      error={errors.endDate}                      
                  />
                  </Box>
             <Box>
             <CustomInput
              type='time'
              label="End Time"
              name='endTime'
              value={formData.endTime}
              onChange={handleInputChange}
              error={errors.endDate}
              
           />
             </Box>
  
           </Box>
           </Box>
       
          </>                      
        )}
                 
                  
  
        {activeStep === 2 && (
        <>
            <Box mt="md">
                       <Text>
                           <span style={{
                               fontSize: '1rem',
                               fontWeight: 'bold'
                           }}>Event Location</span>
                           <br />
                           Choose the Location that best describes your event.
                       </Text>
                       <CustomSelect
                           name="eventType"
                           data={LocationData}
                           value={selectLocation}
                           onChange={handleLocation}
                           required                           
                       />
                        <Text color="red" size="sm">{errors.selectLocation}</Text>
            </Box>
                  
            <Box mt="md">
            <Text>
                           <span style={{
                               fontSize: '1rem',
                               fontWeight: 'bold'
                           }}>Event Venue</span>
                           
                       </Text>
                       <CustomInput                           
                           name="venue"
                           value={formData.venue}
                           onChange={handleInputChange}
                           required
                           error={errors.venue}
                       />
                       <Text>                        
                       Don't have a venue yet?{' '} <UnstyledButton onClick={() => setShowVenue(true)} style={{color:Color.PRIMARY, fontWeight:'bold'}}>Check Out</UnstyledButton> </Text>
            </Box>
            <Box mt="md">
            <Box mb="md" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <Text>
             <span style={{
             fontSize: '1rem',
             fontWeight: 'bold'
             }}>Payment</span>
                           
                       </Text>
            <Switch     
             label="Event is free"     
             checked={isFree}
             onLabel="ON" offLabel="OFF" 
             onChange={handleSwitch}
            color={Color.SUCCESS_COLOR}
            size="md"
           
            />

            </Box>
            
                       <CustomInput  
                        type="number"                         
                           name="amount"
                           value={formData.amount}
                           onChange={handleInputChange}
                           leftSection={<BsCurrencyDollar/>}
                           required
                           error={errors.amount}
                           disabled={isFree}
                       />
            
            {!isFree && formData.amount && (
        <SimpleGrid cols={{ base: 1, sm: 2, md:1, lg: 3 }}
        spacing={{ base: 10, sm: 'md' }} mt="md">
          <CustomInput
            type="text"
            name="accountName"
            value={formData.accountName}
            onChange={handleInputChange}
            label="Account Name"
            required
            error={errors.accountName}
          />
          <CustomInput
            type="number"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleInputChange}
            label="Account Number"
            required
            error={errors.accountNumber}
          />
          <CustomInput
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleInputChange}
            label="Bank Name"
            required
            error={errors.bankName}
          />
        </SimpleGrid>
      )}

            </Box>
        </>                    
        )}

        <Box mt="lg" style={{ display: "flex", justifyContent: "space-between" }}>
                  <Button variant='filled' color={Color.PRIMARY} onClick={handleBack} disabled={activeStep === 0}>Back</Button>
                    {activeStep < 2 ? (
                        <Button onClick={handleNext} variant='filled' color={Color.PRIMARY}>Next</Button>
                    ) : (
                        <Button variant='filled' color={Color.PRIMARY} onClick={handleSubmit}>Create Event</Button>
                    )}

        </Box>

        {/* Modal for venue*/}
        <Modal 
           opened={showVenue}
           onClose={() => setShowVenue(false)}
           title="Add a New Venue"
           closeOnClickOutside
           centered
        >
         <Text>Adjust the price range to filter venues:</Text>    
         <RangeSlider
         mt="sm"
         label={(value) => `$${value}`}
         min={200}
         max={5000}
         value={showPrice}
         onChange={handlePrice}
         step={100}
         marks={[
             { value: 500, label: '$500' },
             { value: 1500, label: '$1500' },
             { value: 2500, label: '$2500' },
         ]}         
        />  

    <Box mt="xl">
    <Text style={{
        fontSize: '1rem',
        fontWeight: 'bold',
        marginTop: '50px',
        marginBottom: '20px'
    }}>Available Event</Text>

    <SimpleGrid cols={3} spacing="md">
    {filterVenue.map((venue) => (
      <Box
        key={venue.name}
        style={{
          padding: '1rem',
          border: '1px solid #ccc',
          borderRadius: '5px',
          textAlign: 'center',
          cursor: 'pointer',
        }}
        onClick={() => handleVenueSelection(venue.name)}
      >
        <Text fw={500} fz={isSmall ? 10 : 14}>{venue.name}</Text>
        <Text color="dimmed">${venue.price}</Text>
      </Box>
    ))}
  </SimpleGrid>
        </Box>
        </Modal>
        </Container>
    );
};

export default CreateEvent;
