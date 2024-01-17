import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:{
      screens: {
        mb: "480px",
        smb: "320px",
      },
  fontFamily:{
    "dmSans":"DM Sans, sans-serif",
    "montserrat":"Montserrat, sans-serif"
  },
  colors:{
    lightblue:"#4A3AFF",
    blue:"#222549",
    titlecolor:"#110462",
    buttoncolor:"#DA3654",
    buttonhover:"#000EE6",
    whitecolor:"#FFF",
    footertextcolor:"#304256",
    skyblue:"#F4FBFF",
    blackcolor:"#000"
  },
  backgroundImage:{
    gradient:"linear-gradient(to right, #4A3AFF33 -19.89%, #4A3AFF00 32.85%),linear-gradient(to right, #F4FBFF, #F3DEE5);",
    boxgradient:"linear-gradient(100deg, #222549 30.71%, #DA3654 179.97%);"
  },
  boxShadow:{
    buttonshdow:"0px 3px 12px 0px rgba(74, 58, 255, 0.18)",
    footerShadow:"1px -8px 30px 5px rgba(0, 0, 0, 0.05)",
    choosedatashdow:"0px 0px 9.128px -0.83px #DA3654",
    starpishadow:"0px 0px 5.835px -0.834px rgba(0, 0, 0, 0.50)",
    hadlessshadow:"0px 0px 7px -1px rgba(0, 0, 0, 0.50)"
    
  },
  borderRadius:{
    radius:" 3.125rem 3.125rem 0rem 3.125rem ",
    hoverradius:"3.125rem 3.125rem 3.125rem 0rem"
  },
    },
  },
  plugins: [],
}
export default config
