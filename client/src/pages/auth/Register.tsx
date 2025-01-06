import { Center, Image, SimpleGrid, Box, Group, Text,UnstyledButton} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks'; // Import useMediaQuery
import IMG from '../../asset/arts2.jpg';
import Logo from '../../asset/logo.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { notifications } from '@mantine/notifications';
import { Color } from '../util/Theme';
import CustomInput from '../util/CustomInput';
import CustomButton from '../util/CustomButton';

interface Errors {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[A-Za-z\s]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;


const Register = () => {
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Adjust the breakpoint as needed
  

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState<Errors>({});
    const [serverError, setServerError] = useState('');

    const validate = (): boolean => {
        const errors: Errors = {};
        let isValid = true;

        if (!formData.name || !nameRegex.test(formData.name)) {
            errors.name = 'Please enter a valid name';
            isValid = false;
        }
        if (!formData.email || !emailRegex.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
            isValid = false;
        }

        if (!formData.password || !passwordRegex.test(formData.password)) {
            errors.password = 'Password must be at least 8 characters long and include at least one letter and one number';
            isValid = false;
        }

        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }


        setErrors(errors);
        return isValid;
    };

    useEffect(() => {
        const timer = setTimeout(() => {
           
        }, 2000); // Adjust the duration as needed
        return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, []);

    const handleSubmit = async () => {        
        if (validate()) {
           
            try {
                await login();
                // Notify user on successful registration and email verification
                notifications.show({
                    title: `Login Successful `,
                    message: `Welcome onboard, we are happy to have you`,
                    color: Color.SUCCESS_COLOR,
                    position:'top-right',
                });
            } catch (error) {
                setServerError('Failed to log in. Please try again later.');
                notifications.show({
                    title: 'Login Failed',
                    message: 'Something went wrong. Please try again later.',
                    color: Color.ERROR_COLOR,
                    position:'top-right',
                });
            } 
        }
    };

    const login = async () => {
        try {
            const form = formData;
            console.log(form)
        } catch (error) {
            setServerError('Failed to log in. Please try again later.');
            console.error(error);
        }
    };

    

    const handleRegister = () => {
        navigate('/login');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

   

    return (
        <SimpleGrid cols={{ base: 1, sm: 1, md: 1, lg: 2 }} spacing="xl">
                {!isSmallScreen && (
                    <Box
                        style={{                        
                            width: '100vh',
                            height: '100vh',
                            backgroundColor: Color.TRANSPARENT_WHITE,
                            zIndex: 2,
                           justifyContent: 'center',
                           alignItems:'center',
                           display: 'flex',
                        }}
                    >
                        <Group style={{         
                            display:'grid',           
                            position: 'absolute',
                            backgroundColor: Color.TRANSPARENT_WHITE,
                            padding:5,
                            borderRadius:20,
                            top: '10%',
                            left: '40%',
                            transform: 'translate(-50%, -50%)',
                        }}>
                        <Image src={Logo} style={{
                            width: '2rem',
                            height: '2rem',                           
                        }} />
                        
                        </Group>
                        
                        <Image src={IMG} h="100%" alt='new' />
                    </Box>
                )}
                <Box
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '80vh', 
                    }}
                >
                    <div style={{
                        display: 'grid',
                        gap: '10px',
                        width: '100%',
                        maxWidth: '400px', // Restrict form width
                        padding: '20px',
                    }}>
                        
                        <div style={{marginTop:10,marginBottom:10}}>
                            <Text fz={30} fw={700}>
                               Register
                            </Text>
                            <Text fz={14} color={Color.GRAY}>
                            New here, provide your details
                            </Text>
                        </div>
                        <CustomInput
                                type="text"
                                label="Full Name"
                                name="name"
                                placeholder="john doe"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                error={errors.name}
                            />
                            <CustomInput
                                type="text"
                                label="Email"
                                name="email"
                                placeholder="example@email.com"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                error={errors.email}
                            />

                            <CustomInput
                                type="password"
                                label="Password"
                                name="password"
                                placeholder="********"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                                error={errors.password}
                            />
                            <CustomInput
                                type="password"
                                label="Confrm Password"
                                name="password"
                                placeholder="********"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                required
                                error={errors.password}
                            />
                          {serverError && <Text color="red" size="sm">{serverError}</Text>}
                        <CustomButton variant="filled" color={Color.PRIMARY} onClick={handleSubmit} label="Submit"/>
                        <Text fz={18} style={{ textAlign:'center'}}>
                                Already have an account?
                                <UnstyledButton onClick={handleRegister} style={{color:Color.PRIMARY,textDecoration: 'underline', fontSize:18, marginLeft:10 }}>
                                    Sign In
                                </UnstyledButton>
                            </Text>
                 </div>
                </Box>
            </SimpleGrid>
    )
}

export default Register
