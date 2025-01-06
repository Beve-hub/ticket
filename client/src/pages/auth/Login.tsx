import { Center, Image, SimpleGrid, Box, Group, Text, Checkbox, UnstyledButton} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks'; // Import useMediaQuery
import IMG from '../../asset/Group 215.jpg';
import Logo from '../../asset/logo.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { notifications } from '@mantine/notifications';
import { Color } from '../util/Theme';
import CustomInput from '../util/CustomInput';
import CustomButton from '../util/CustomButton';


interface Errors {
    email?: string;
    password?: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Login = () => {
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Adjust the breakpoint as needed
  

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState<Errors>({});
    const [serverError, setServerError] = useState('');

    const validate = (): boolean => {
        const errors: Errors = {};
        let isValid = true;

        if (!formData.email || !emailRegex.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
            isValid = false;
        }

        if (!formData.password) {
            errors.password = 'Please enter your password';
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
                navigate('/dashboard'); // Redirect to dashboard after successful login
                // Notify user on successful registration and email verification
                notifications.show({
                    title: `Login Successful `,
                    message: `Welcome onboard, we are happy to have you`,
                    color: Color.SUCCESS_COLOR,
                    position:'bottom-right',
                });
            } catch (error) {
                setServerError('Failed to log in. Please try again later.');
                notifications.show({
                    title: 'Login Failed',
                    message: 'Something went wrong. Please try again later.',
                    color: Color.ERROR_COLOR,
                    position:'bottom-right',
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

    const handleForgot = () => {
       
        navigate('/recover');
    };

    const handleRegister = () => {
        navigate('/register');
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
                            backgroundColor:Color.LIGHT_GRAY,
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
                        
                        <Image src={IMG} h="100%"  />
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
                                Sign In
                            </Text>
                            <Text fz={14} color={Color.GRAY}>
                            Welcome back, pls provide your details.
                            </Text>
                        </div>
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
                        
                        <Box mb={15} style={{display: 'flex', justifyContent:'space-between'}}>
                            <Group>
                                <Checkbox
                                    label="Remember Me"
                                    variant="outline"
                                    size="sm"
                                />                            
                            </Group>
                            <UnstyledButton onClick={handleForgot} style={{color:Color.PRIMARY}}>Forgot Password?</UnstyledButton>
                        </Box>
                        {serverError && <Text color="red" size="sm">{serverError}</Text>}
                        <CustomButton variant="filled" color={Color.PRIMARY} onClick={handleSubmit} label="Submit"/>
                        <Text fz={18} style={{ textAlign:'center'}}>
                                Don’t have an account?
                                <UnstyledButton onClick={handleRegister} style={{color:Color.PRIMARY,textDecoration: 'underline', fontSize:18, marginLeft:10 }}>
                                    Sign Up
                                </UnstyledButton>
                            </Text>
                 </div>
                </Box>
            </SimpleGrid>
    );
};

export default Login;