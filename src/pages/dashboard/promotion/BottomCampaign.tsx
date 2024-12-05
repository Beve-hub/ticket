import { SimpleGrid,Card, Text, Box,UnstyledButton,Progress,Modal, NativeSelect} from "@mantine/core"
import { Color } from '@/pages/util/Theme';
import { SiGoogleads } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import CustomButton from "@/pages/util/CustomButton";
import { BsCurrencyDollar } from "react-icons/bs";



export const CampaignData = [
    { value: 'Social media Campaign', label: 'Social media Campaign' },
    { value: 'Email Campaign', label: 'Email Campaign' },
];

  export const Budget = [
    { price: '3', reach: '100 - 300', visit:'2000 - 6000',days:'1' },
    { price: '5', reach: '150 - 600', visit:'8000 - 12000',days:'3'},
    { price: '10', reach: '300 - 800', visit:'10000 - 18000',days:'7'},
    { price: '15', reach: '500 - 1000', visit:'12000 - 20000',days:'10'},
    { price: '20', reach: '700 - 1200', visit:'14000 - 40000',days:'15' },
    { price: '30', reach: '1000 - 1600', visit:'1600 - 60000',days:'20'},
    { price: '50', reach: '1200 - 2000', visit:'1800 - 80000',days:'25' },
    { price: '100', reach: '2000 - 2500', visit:'20000 - 100000',days:'30' },
  ];

export const socialPlatforms = [
    { value: "Google Ads", label: "Google Ads", icon: <SiGoogleads size={14} color={Color.SUCCESS_COLOR} /> },
    { value: "Facebook", label: "Facebook", icon: <ImFacebook2 size={14} color={Color.PRIMARY} /> },
    { value: "Twitter", label: "Twitter", icon: <RiTwitterXFill size={14} color={Color.BLACK} /> },
    { value: "Instagram", label: "Instagram", icon: <FaInstagramSquare size={14} color={Color.ERROR_COLOR} /> }
];

interface Campaign {
    campaign: string;
    plateform: string;
    budget: string;
    reach: string;
    visit: string;
    days: string;
}

const BottomCampaign = () => {
    const [promote, setPromote] = useState([]);
    const [opened, { open, close }] = useDisclosure(false);
    const [formValue, setFormValue] = useState<Campaign>({
        campaign: '',
        plateform: '',
        budget: '',
        reach: '',
        visit: '',
        days: '',
    });    
    

    
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
    
        setFormValue((prev) => {
            const updatedForm = { ...prev, [name]: value };
    
            if (name === "budget") {
                switch (value) {
                    case '3':
                        return { ...updatedForm, reach: '100 - 300', visit: '2000 - 6000', days: '1' };
                    case '5':
                        return { ...updatedForm, reach: '150 - 600', visit: '8000 - 12000', days: '3' };
                    case '10':
                        return { ...updatedForm, reach: '300 - 800', visit: '10000 - 18000', days: '7' };
                    case '15':
                        return { ...updatedForm, reach: '500 - 1000', visit: '12000 - 20000', days: '10' };
                    case '20':
                        return { ...updatedForm, reach: '700 - 1200', visit: '14000 - 40000', days: '15' };
                    case '30':
                        return { ...updatedForm, reach: '1000 - 1600', visit: '1600 - 60000', days: '20' };
                    case '50':
                        return { ...updatedForm, reach: '1200 - 2000', visit: '1800 - 80000', days: '25' };
                    case '100':
                        return { ...updatedForm, reach: '2000 - 2500', visit: '20000 - 100000', days: '30' };
                    default:
                        return { ...updatedForm, reach: '', visit: '', days: '' };
                }
            }
    
            return updatedForm;
        });
    };
    
    
    const handleSubmit = () => {
        // Add your logic here to save form values to the campaign state
        setPromote([...promote]);
        close();
    }; 
    
    return (
        <div style={{marginTop: '30px',marginBottom:20}} >
            <Box style={{display:'flex',justifyContent: 'space-between',}}>
            <Text style={{fontWeight:'bold',fontSize: '24px',}}>
            Recent Campaign
            </Text>
            <UnstyledButton onClick={open}> +Add</UnstyledButton>
            </Box>
            
            <SimpleGrid
        cols={{ base: 1, sm: 1,md:2, lg:3  }}
        spacing={{ base: 10, sm: 'md' }}>

            <Card  style={{
            backgroundColor: Color.SECONDARY,
            padding: 20,
            borderRadius: 10,
            width: '100%',
            height: '200px',
            flexDirection: 'column',
            justifyContent: 'space-between',
           }}>
            <Box style={{display:'flex', justifyContent:'space-between'}}>
            <div        
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
            borderRadius: '50%',
            backgroundColor: Color.WHITE,
            width: 40,
            height: 40,
            }}>
       
          <ImFacebook2 size={24} color={Color.PRIMARY}/>
        </div>
        <div >
        <Text fz={14} style={{backgroundColor: Color.SHADOW_COLOR,
             display:'flex',alignItems:'center',justifyContent:'center', borderRadius:20,
              padding:'1px 4px', color:Color.SUCCESS_COLOR}}>
                $Paid</Text>
        <Text fz={14} mt={5} style={{backgroundColor: Color.PRIMARY,
             display:'flex',alignItems:'center', borderRadius:20,
              padding:'1px 8px', color:Color.WHITE}}>
            Deployed</Text>
        </div>
            
            </Box>

            <Box>
            <Text>40%</Text>            
            <Progress size="xl" radius="xl" value={60} color={Color.PRIMARY}/>
            </Box>
            <Box style={{display:'flex',textAlign:'center', justifyContent:'space-between'}}>
            <Text fz={10}>Start Date: Nov 4,2024 </Text>
            <Text fz={10}>End Date: Nov 24,2024</Text>
            </Box>
            
            </Card>

            <Card  style={{
            backgroundColor: Color.SECONDARY,
            padding: 20,
            borderRadius: 10,
            width: '100%',
            height: '200px',
            flexDirection: 'column',
            justifyContent: 'space-between',
           }}>
            <Box style={{display:'flex', justifyContent:'space-between'}}>
            <div        
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
            borderRadius: '50%',
            backgroundColor: Color.WHITE,
            width: 40,
            height: 40,
            }}>
       
          <SiGoogleads size={24} color={Color.SUCCESS_COLOR}/>
        </div>
        <div >
        <Text fz={14} style={{backgroundColor: Color.SHADOW_COLOR,
             display:'flex',alignItems:'center',justifyContent:'center', borderRadius:20,
              padding:'1px 4px', color:Color.SUCCESS_COLOR}}>
                $Paid</Text>
        <Text fz={14} mt={5} style={{backgroundColor: Color.PRIMARY,
             display:'flex',alignItems:'center', borderRadius:20,
              padding:'1px 8px', color:Color.WHITE}}>
            Deployed</Text>
        </div>
            
            </Box>

            <Box>
            <Text>40%</Text>            
            <Progress size="xl" radius="xl" value={60} color={Color.SUCCESS_COLOR}/>
            </Box>
            <Box style={{display:'flex',textAlign:'center', justifyContent:'space-between'}}>
            <Text fz={10}>Start Date: Nov 4,2024 </Text>
            <Text fz={10}>End Date: Nov 24,2024</Text>
            </Box>
            
            </Card>

            <Card  style={{
            backgroundColor: Color.SECONDARY,
            padding: 20,
            borderRadius: 10,
            width: '100%',
            height: '200px',
            flexDirection: 'column',
            justifyContent: 'space-between',
           }}>
            <Box style={{display:'flex', justifyContent:'space-between'}}>
            <div        
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
            borderRadius: '50%',
            backgroundColor: Color.WHITE,
            width: 40,
            height: 40,
            }}>
       
          <FaInstagramSquare size={24} color={Color.ERROR_COLOR}/>
        </div>
        <div >
        <Text fz={14} style={{backgroundColor: Color.SHADOW_COLOR,
             display:'flex',alignItems:'center',justifyContent:'center', borderRadius:20,
              padding:'1px 4px', color:Color.SUCCESS_COLOR}}>
                $Paid</Text>
        <Text fz={14} mt={5} style={{backgroundColor: Color.PRIMARY,
             display:'flex',alignItems:'center', borderRadius:20,
              padding:'1px 8px', color:Color.WHITE}}>
            Deployed</Text>
        </div>
            
            </Box>

            <Box>
            <Text>40%</Text>            
            <Progress size="xl" radius="xl" value={60} color={Color.ERROR_COLOR}/>
            </Box>
            <Box style={{display:'flex',textAlign:'center', justifyContent:'space-between'}}>
            <Text fz={10}>Start Date: Nov 4,2024 </Text>
            <Text fz={10}>End Date: Nov 24,2024</Text>
            </Box>
            
            </Card>
            
        </SimpleGrid>

        <Modal opened={opened} onClose={close} title="Authentication">
            <Box>
            <Text style={{
                            fontSize: '0.95rem',
                            fontWeight: 'regular'
                          }}>Choose Campaign <span
                          style={{
                            color: Color.ERROR_COLOR
                          }}>*</span></Text>
                           <NativeSelect
                               name="campaign"
                               data={CampaignData}
                               value={formValue.campaign}
                               onChange={ handleSelect}
                               required                         
                           />

            </Box>
            <Box>
            <Text style={{
                            fontSize: '0.95rem',
                            fontWeight: 'regular'
                          }}>Choose Plateform<span
                          style={{
                            color: Color.ERROR_COLOR
                          }}>*</span></Text>
            <NativeSelect
              name="eventType"
              data={socialPlatforms}
              value={formValue.plateform}
              onChange={handleSelect}
              required                           
            />
            </Box>
            <Box>
            <Text style={{
                            fontSize: '0.95rem',
                            fontWeight: 'regular'
                          }}>Daily Budget<span
                          style={{
                            color: Color.ERROR_COLOR
                          }}>*</span></Text>
                          <NativeSelect
                              name="budget"
                              leftSection={<BsCurrencyDollar/>}
                              data={Budget.map(({ price }) => ({ value: price, label: price }))}
                              value={formValue.budget}
                              onChange={handleSelect}
                          />
            </Box>
            <Box>
            <Text style={{
                            fontSize: '0.95rem',
                            fontWeight: 'regular'
                          }}>Estimated  Reach<span
                          style={{
                            color: Color.ERROR_COLOR
                          }}>*</span></Text>
                        
                        <Text fz={14} style={{border:'1px solid', 
                            padding:'8px 10px', borderRadius:3,
                             borderColor:Color.LIGHT_GRAY, width:'100%', height:'40px'  }}>{formValue.reach}</Text> 
            </Box>
            <Box>
            <Text style={{
                   fontSize: '0.95rem',
                   fontWeight: 'regular'
                 }}>Duration<span
                 style={{
                   color: Color.ERROR_COLOR
                 }}>*</span></Text>
                
                <Text fz={14} style={{border:'1px solid', 
                   padding:'8px 10px', borderRadius:3,
                    borderColor:Color.LIGHT_GRAY, width:'100%', height:'40px' }} >
                       {formValue.days}days</Text> 
            </Box>
           
          
            <Box mt={30}>
    <div style={{display:'flex', justifyContent:'space-between'}}>
        <Text fz={16} fw={500}>Ad Budget:</Text>
        <Text>${formValue.budget && formValue.days ? (Number(formValue.budget) * Number(formValue.days)) : 0} over {formValue.days || 0} days</Text>
    </div>
    <div style={{display:'flex', justifyContent:'space-between', marginBottom:10}}>
        <Text fz={12}>Estimated Profile visit:</Text>
        <Text fz={12} style={{color:Color.GRAY}}>{formValue.visit}</Text>
    </div>
    <CustomButton label="Submit" variant="filled" color={Color.PRIMARY} onClick={handleSubmit} fullWidth />
</Box>

        </Modal>
        </div>
        
    )
}

export default BottomCampaign
