import { Center, SimpleGrid, UnstyledButton } from '@mantine/core'
import { useNavigate } from 'react-router-dom';
import { Color } from '../util/Theme';
import { BsTicketPerforated } from 'react-icons/bs';


const BuyTicket = () => {
    const navigate = useNavigate();
    return (
        <Center h={800}>
             <SimpleGrid
                cols={{ base: 1, sm: 1, md: 1, lg: 2 }}
                spacing={{ base: 10, sm: 'xl' }}
            >
                <UnstyledButton
                    style={{
                        backgroundColor: Color.INFO_COLOR,
                        padding: '2rem',
                        borderRadius: '5px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '0.5rem',
                    }}
                    onClick={() => {
                        navigate('/single');
                      }}
                >
                    <BsTicketPerforated size={24} color={Color.PRIMARY} />
                    <span style={{ fontSize: '1rem', fontWeight: 'bold', color: Color.PRIMARY, }}>Single Ticket </span>
                </UnstyledButton>
                <UnstyledButton
                    style={{
                        border: '1px solid',
                        padding: '2rem',
                        borderRadius: '5px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '0.5rem',
                        borderColor: Color.PRIMARY,
                    }}
                    onClick={() => {
                        navigate('/double');
                      }}
                >
                    <BsTicketPerforated size={24} color={Color.PRIMARY} />
                    <span style={{ fontSize: '1rem', fontWeight: 'bold', color: Color.PRIMARY, }}>Multiple Ticket</span>
                </UnstyledButton>
            </SimpleGrid>
        </Center>
    )
}

export default BuyTicket
