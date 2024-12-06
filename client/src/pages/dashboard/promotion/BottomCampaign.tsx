import { SimpleGrid, Card, Text, Box, UnstyledButton, Progress, Modal, NativeSelect, Group } from "@mantine/core";
import { Color } from '@/pages/util/Theme';
import { SiGoogleads } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import CustomButton from "@/pages/util/CustomButton";
import { BsCurrencyDollar } from "react-icons/bs";
import SideBase from "./SideBase";
import { LineChart } from "@mantine/charts";

export const CampaignData = [
    { value: 'Social media Campaign', label: 'Social media Campaign' },
    { value: 'Email Campaign', label: 'Email Campaign' },
];

export const data = [
  {
    date: 'Mar 22',
    Media: 2890,
    Email: 2338,
    
  },
  {
    date: 'Mar 23',
    Media: 2756,
    Email: 2103,
    
  },
  {
    date: 'Mar 24',
    Media: 3322,
    Email: 986,
   
  },
  {
    date: 'Mar 25',
    Media: 3470,
    Email: 2108,
    
  },
  {
    date: 'Mar 26',
    Media: 3129,
    Email: 1726,
    
  },
];

export const Budget = [
    { price: '3', reach: '100 - 300', visit: '2000 - 6000', days: '1' },
    { price: '5', reach: '150 - 600', visit: '8000 - 12000', days: '3' },
    { price: '10', reach: '300 - 800', visit: '10000 - 18000', days: '7' },
    { price: '15', reach: '500 - 1000', visit: '12000 - 20000', days: '10' },
    { price: '20', reach: '700 - 1200', visit: '14000 - 40000', days: '15' },
    { price: '30', reach: '1000 - 1600', visit: '1600 - 60000', days: '20' },
    { price: '50', reach: '1200 - 2000', visit: '1800 - 80000', days: '25' },
    { price: '100', reach: '2000 - 2500', visit: '20000 - 100000', days: '30' },
];

export const socialPlatforms = [
    { value: "Google Ads", label: "Google Ads", icon: <SiGoogleads size={20} color={Color.SUCCESS_COLOR} /> },
    { value: "Facebook", label: "Facebook", icon: <ImFacebook2 size={20} color={Color.PRIMARY} /> },
    { value: "Twitter", label: "Twitter", icon: <RiTwitterXFill size={20} color={Color.BLACK} /> },
    { value: "Instagram", label: "Instagram", icon: <FaInstagramSquare size={20} color={Color.ERROR_COLOR} /> }
];

interface Campaign {
    campaign: string;
    platform: string;
    budget: string;
    reach: string;
    visit: string;
    days: string;
}

const BottomCampaign = () => {
    const [promote, setPromote] = useState<Campaign[]>([]);
    const [formOpened, { open: openForm, close: closeForm }] = useDisclosure(false);
    const [cardOpened, { open: openCard, close: closeCard }] = useDisclosure(false);
    const [selected, setSelected] = useState<Campaign | null>(null);
    const [formValue, setFormValue] = useState<Campaign>({
        campaign: '',
        platform: '',
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
                const budgetItem = Budget.find(({ price }) => price === value);
                if (budgetItem) {
                    return { ...updatedForm, ...budgetItem };
                }
            }
            return updatedForm;
        });
    };

    const handleCardClick = (campaign: Campaign) => {
        setSelected(campaign);
        openCard();
    };

    const handleSubmit = () => {
        setPromote((prev) => [...prev, formValue]);
        setFormValue({ campaign: '', platform: '', budget: '', reach: '', visit: '', days: '' });
        closeForm();
    };

    return (
        <div style={{ marginTop: '30px', marginBottom: 20 }}>
            <Box  style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text style={{ fontWeight: 'bold', fontSize: '24px' }}>Recent Campaign</Text>
                <UnstyledButton onClick={openForm} style={{
                    backgroundColor: Color.PRIMARY,
                    padding: '5px 15px',
                    borderRadius: 10,
                    color: Color.WHITE,
                }}>+ Add</UnstyledButton>
            </Box>

            <SimpleGrid mt={30} cols={{ base: 1, sm: 1, md: 2, lg: 3 }} spacing={{ base: 10, sm: 'md' }}>
                {promote.map((campaign, index) => (
                    <Card key={index} onClick={() => handleCardClick(campaign)} style={{
                        backgroundColor: Color.SECONDARY,
                        padding: 20,
                        borderRadius: 10,
                        height: '200px',
                        justifyContent: 'space-between',
                    }}>
                        <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 5,
                                borderRadius: '50%',
                                backgroundColor: Color.WHITE,
                                width: 40,
                                height: 40,
                            }}>
                                {socialPlatforms.find(({ value }) => value === campaign.platform)?.icon}
                            </div>
                            <div>
                                <Text fz={12} style={{
                                    backgroundColor: Color.SHADOW_COLOR,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 20,
                                    padding: '1px 4px',
                                    color: Color.SUCCESS_COLOR
                                }}>$Paid</Text>
                                <Text fz={12} style={{
                                    backgroundColor: Color.PRIMARY,
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderRadius: 20,
                                    padding: '1px 8px',
                                    color: Color.WHITE,
                                    marginTop: 5
                                }}>Deployed</Text>
                            </div>
                        </Box>
                        <Box>
                            <Text fz={14}>{campaign.reach}</Text>
                            <Progress size="xl" radius="xl" value={60} color={Color.PRIMARY} />
                        </Box>
                        <Box style={{ display: 'flex', textAlign: 'center', justifyContent: 'space-between' }}>
                            <Text fz={12}>Start Date: Nov 4, 2024</Text>
                            <Text fz={12}>End Date: Nov 24, 2024</Text>
                        </Box>
                    </Card>
                ))}
            </SimpleGrid>

        <Modal opened={formOpened} onClose={closeForm} title="Authentication">
            <Box >
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
            <Box mt={10}>
                    <Text>Choose Platform</Text>
                    <NativeSelect
                        name="platform"
                        data={socialPlatforms.map(({ value, label }) => ({ value, label }))}
                        value={formValue.platform}
                        onChange={handleSelect}
                        required
                    />
                </Box>

            <Box mt={10}>
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

            <Box mt={10}>
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

            <Box mt={10}>
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
    <div style={{display:'flex', justifyContent:'space-between', marginBottom:20}}>
        <Text fz={12}>Estimated Profile visit:</Text>
        <Text fz={12} style={{color:Color.GRAY}}>{formValue.visit}</Text>
    </div>
    <CustomButton label="Submit" variant="filled" color={Color.PRIMARY} onClick={handleSubmit} fullWidth />
</Box>

        </Modal>

        <Modal opened={cardOpened} size="xl" onClose={closeCard} >
                {selected && (
                    <Box style={{ padding: 20,  }}>
                      <Group >
                      <Box style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 5,
                    borderRadius: '50%',
                    backgroundColor: Color.LIGHT_GRAY,
                    width: 40,
                    height: 40,
                }}>
                    { socialPlatforms.find(({ value }) => value === selected.platform)?.icon                 }
                      </Box>
                        <Text>{selected.platform}</Text>
                      </Group>  

                  <Box mt={50}>
                    <div>
                      <SideBase/>
                    </div>
                    <div style={{backgroundColor:Color.LIGHT_GRAY, padding:20, borderRadius:10, marginTop:20}}>
                      <Text mb={20}>Growth Insight</Text>
                      <div>
                      <LineChart
      h={200}
      data={data}
      dataKey="date"
  
      series={[
        { name: 'Media', color: 'indigo.6' },
        { name: 'Email', color: 'blue.6' },
      ]}
      curveType="natural"
      withDots={false}

    />
                      </div>
                    </div>
                  </Box>
                    </Box>
                )}
            </Modal>






        </div>
        
    )
}

export default BottomCampaign
