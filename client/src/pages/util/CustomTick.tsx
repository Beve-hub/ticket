import { Color } from '@/pages/util/Theme'
import {   Progress, Text, Box } from '@mantine/core'
import { GoDotFill } from "react-icons/go";

const CustomTick = () => {
    return (
        <div>
             <Box style={{ justifyContent:'flex-end',display:'grid' }}>
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
    )
}

export default CustomTick
