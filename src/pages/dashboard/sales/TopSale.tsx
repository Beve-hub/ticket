import { Box,  Group, SimpleGrid, Text, Progress,} from '@mantine/core'
import { BsCurrencyDollar } from "react-icons/bs";
import { Color } from '@/pages/util/Theme'
import { GoDotFill } from "react-icons/go";

const TopSale = () => {
    return (
        <div>
             <SimpleGrid
      cols={{ base: 1, sm: 1,md:2, lg:2  }}
      spacing={{ base: 10, sm: 'md' }}
    >
        <div style={{display:'grid', gap:10}}>
        <Box  style={{
            backgroundColor: Color.SECONDARY,
            padding: 20,
            borderRadius: 10,
            width: '100%',
            height: '90px',
            display:'flex',
            justifyContent: 'space-between',
           }}>
            <Group>
            <Group style={{
            backgroundColor: Color.PRIMARY,
            padding: 2,
            borderRadius: 30,
            color: Color.WHITE,
            width:'40px',
            height:'40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
           }}>
                < BsCurrencyDollar size={24}/>
                
           </Group>
           <Text>Total Revenue</Text>
            </Group>
           
            <Group style={{display:'grid'}}>
                            
                <Text fw={800} fz={24}>$6,240.28</Text>                
            </Group>
      </Box>
      <Box  style={{
            backgroundColor: Color.SECONDARY,
            padding: 20,
            borderRadius: 10,
            width: '100%',
            height: '90px',
            display:'flex',
            justifyContent: 'space-between',
           }}>
            <Group>
            <Group style={{
            backgroundColor: Color.PRIMARY,
            padding: 2,
            borderRadius: 30,
            color: Color.WHITE,
            width:'40px',
            height:'40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
           }}>
                < BsCurrencyDollar size={24}/>
                
           </Group>
           <Text>Total Revenue</Text>
            </Group>
           
            <Group style={{display:'grid'}}>
                            
                <Text fw={800} fz={24}>$6,240.28</Text>                
            </Group>
      </Box>
      <Box  style={{
            backgroundColor: Color.SECONDARY,
            padding: 20,
            borderRadius: 10,
            width: '100%',
            height: '90px',
            display:'flex',
            justifyContent: 'space-between',
           }}>
            <Group>
            <Group style={{
            backgroundColor: Color.PRIMARY,
            padding: 2,
            borderRadius: 30,
            color: Color.WHITE,
            width:'40px',
            height:'40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
           }}>
                < BsCurrencyDollar size={24}/>
                
           </Group>
           <Text>Total Revenue</Text>
            </Group>
           
            <Group style={{display:'grid'}}>
                            
                <Text fw={800} fz={24}>$6,240.28</Text>                
            </Group>
      </Box>
        </div>
      
      <div  style={{
            backgroundColor: Color.SECONDARY,
            padding: '20px 40px',
            borderRadius: 10,
            width: '100%',
            height: '300px',
            flexDirection: 'column',
            justifyContent: 'space-between',
           }}>
            <Text mb={30}>
            Ticket Analysis
            </Text>

            <div>
             <Box mb={30} style={{ justifyContent:'flex-end',display:'grid' }}>
            <Text style={{alignItems:'center', justifyContent:'flex-end',display:'flex',fontSize:12}}>
            <GoDotFill color={Color.ACCENT}/>
            <span>New</span>
            </Text>
            <Text style={{alignItems:'center', justifyContent:'flex-end',display:'flex',fontSize:12}}>
            <GoDotFill color={Color.INFO_BG_COLOR} />
            <span>Confirm</span>
            </Text>
            <Text style={{alignItems:'center', justifyContent:'flex-end',display:'flex',fontSize:12}}>
            <GoDotFill color={Color.ERROR_COLOR} />
            <span>Cancelled</span>
            </Text>
           </Box>
           <div style={{
            marginTop:20,
           }}>
           <Progress size="xl" radius="xl" value={60} color={Color.ACCENT}/>
            </div>
            <div style={{
            marginTop:20,
          
           }}>
           <Progress size="xl" radius="xl" value={60} color={Color.INFO_BG_COLOR}/>
            </div>
            <div style={{
            marginTop:20,
          
           }}>
           <Progress size="xl" radius="xl" value={60} color={Color.ERROR_COLOR}/>
            </div>
        </div>
      </div>
    </SimpleGrid>
   
        </div>
    )
}

export default TopSale
