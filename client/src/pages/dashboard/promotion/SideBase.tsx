import { Color } from '@/pages/util/Theme'
import { Box,  Image, SimpleGrid, Text } from '@mantine/core'
import React from 'react'
import cutter from '@/asset/cutter.png'
import { BarChart } from '@mantine/charts';
import { useMediaQuery } from '@mantine/hooks';
interface Props {
    
}
export const data = [
    { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
    { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
    { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
    { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
    { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
    { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
  ];

const SideBase: React.FC<Props> = () => {
    const isMobile = useMediaQuery("(min-width: 768px)");
    return (
        <SimpleGrid
        cols={{ base: 1, sm: 1,md:2, lg:2  }}
        spacing={{ base: 10, sm: 'md' }}>
            <div style={{backgroundColor:Color.LIGHT_GRAY, borderRadius:10, padding:20}}>
                <Box style={{display:'flex', gap:20}}>
                    {isMobile && (
                        <Image src={cutter} alt="" width={20} height={150} />
                    )}
                    
                    <div>
                        <Text fz={13} fw={700} mb={10}>Dusin Gospel Concert</Text>
                        <div style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                        <Text fz={12}>StartDate:</Text>
                        <Text fz={12}>17/12/2024</Text>
                        </div>
                        <div style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                        <Text fz={12}>EndDate:</Text>
                        <Text fz={12}>27/12/2024</Text>
                        </div>
                    </div>
                </Box>
                <Text mt={20} style={{
                     backgroundColor: Color.SHADOW_BG_COLOR,
                     display: 'flex',
                     alignItems: 'center',
                     textAlign:'center',
                     justifyContent:'center',
                     borderRadius: 20,
                     padding: '1px 8px',
                     color: Color.PRIMARY,
                     marginTop: 5
                 }}>
                     Deployed
                 </Text>
            </div>


            <div style={{backgroundColor:Color.LIGHT_GRAY, borderRadius:10, padding:20}}>
            <Text fw={500} fz={14} mb={30}>Audience</Text>
            <BarChart
      h={130}
      data={data}
      dataKey="month"
      series={[{ name: 'Smartphones', color: 'blue' }]}
    />
            </div>
        </SimpleGrid>
    )
}

export default SideBase
