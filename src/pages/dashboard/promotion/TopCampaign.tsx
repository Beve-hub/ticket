import { SimpleGrid } from '@mantine/core'
import SidePro1 from './SidePro1'
import SidePro2 from './SidePro2'


const TopCampaign = () => {
    return (
        <SimpleGrid
        cols={{ base: 1, sm: 1,md:2, lg:2  }}
        spacing={{ base: 10, sm: 'md' }}>
            <div>
                <SidePro1/>
            </div>
            <div>
                <SidePro2/>
            </div>
        </SimpleGrid>
    )
}

export default TopCampaign
