import React from 'react'
import { SiGoogleads } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { Box, Card, Text } from '@mantine/core';
import { Color } from '@/pages/util/Theme';


const PromoIcon = [
    {
        icon: <SiGoogleads size={18} color={Color.SUCCESS_COLOR}/>
    },
    {
        icon: <ImFacebook2 size={18} color={Color.PRIMARY}/>
    },
    {
        icon: <RiTwitterXFill size={18} color={Color.BLACK}/>
    },
    {
        icon: <FaInstagramSquare size={18} color={Color.ERROR_COLOR}/>
    }
]

const PromoCard = () => {
    return (
        <Card  style={{
            backgroundColor: Color.BLACK,
            padding: 10,
            borderRadius: 10,
            width: '100%',
            height: '120px',
           }}>
            <Box style={{display:'flex',
              justifyContent:'space-between',
              alignItems:'center',}}>
            <Text style={{color:Color.WHITE, fontWeight: 'bold', fontSize: 16, }}>
                Promotion
            </Text>
            <Text fz={12} style={{color:Color.WHITE, }}>
              Engagement: 83
            </Text>
            </Box>

           <Box style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
           <Box mt={40}
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {PromoIcon.map((item, index) => (
          <Box
          key={index}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
            borderRadius: '50%',
            backgroundColor: Color.WHITE,
          }}
        >
          {item.icon}
        </Box>
        ))}
              </Box>

              <Box mt={30} style={{
          display: 'grid',
          alignItems: 'flex-end',
        }}>
                <Text
                 style={{
                backgroundColor:Color.WHITE,
                 color:Color.SUCCESS_COLOR,
                  fontSize: 10, 
                  borderRadius: 25,
                  textAlign: 'center',
                }}>
                  $Paid
                </Text>
                <Text mt={5} style={{
                backgroundColor:Color.WHITE,
                 color:Color.PRIMARY,
                  fontSize: 10, 
                  borderRadius: 25,
                  textAlign: 'center',
                  paddingLeft:10,
                  paddingRight:10,
                }}>
                 Deployed
                </Text>
              </Box>
           </Box>
          

            
        </Card>
    )
}

export default PromoCard
