import { Text, Container } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { MdBusinessCenter, MdScience, MdSportsBasketball } from "react-icons/md";
import { IoBusinessSharp } from "react-icons/io5";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { FaMartiniGlassCitrus } from "react-icons/fa6";
import { GiTechnoHeart } from "react-icons/gi";
import { Color } from '../util/Theme';

// Steps data
export const Steps = [
  {
    icon: <IoBusinessSharp size={30} color={Color.PRIMARY} />,
    title: "Business"
  },
  {
    icon: <GiTechnoHeart size={30} color={Color.PRIMARY}/>,
    title: "Technology"
  },
  {
    icon: <MdBusinessCenter size={30} color={Color.PRIMARY}/>,
    title: "Career"
  },
  {
    icon: <MdSportsBasketball size={30} color={Color.PRIMARY}/>,
    title: "Sport"
  },
  {
    icon: <PiMicrophoneStageFill size={30} color={Color.PRIMARY}/>,
    title: "Music"
  },
  {
    icon: <FaMartiniGlassCitrus size={30} color={Color.PRIMARY}/>,
    title: "Food & Art"
  },
  {
    icon: <MdScience size={30} color={Color.PRIMARY}/>,
    title: "Science"
  }
];

const SectionPage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div
        style={{
          overflowX: isMobile ? "auto" : "unset",
          display: "flex",
          justifyContent: isMobile ? "unset" : "center",
          marginTop:40
        }}
      >
        <div
          style={{
            display: "flex",
            gap: isMobile ? "24px" : "25px", 
            whiteSpace: isMobile ? "nowrap" : "normal",
          }}
        >
          {Steps.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "12px", 
                minWidth: isMobile ? "100px" : "120px", 
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "80px",
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #ccc",
                  borderRadius: "50%",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.boxShadow =
                    "0px 4px 15px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {item.icon}
              </div>
              <Text
                fw={500}
                size={isMobile ? "sm" : "md"}
                style={{
                  textAlign: "center",
                  lineHeight: "1.5",
                  color:Color.PRIMARY
                }}
              >
                {item.title}
              </Text>
            </div>
          ))}
        </div>
      </div>
  );
};

export default SectionPage;
