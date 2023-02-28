import React from "react"
import ContentLoader from "react-content-loader"
import { LoaderBoxMob, LoaderBoxTab, LoaderBoxLap } from 'components/LoaderReportsPageSkeleton/LoaderReportsPage.styled';

const Skeleton = (props) => (
    <>
    <LoaderBoxMob>
         <ContentLoader 
    speed={2}
    width={280}
    height={1000}
    viewBox="0 0 320 1200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="90" y="10" rx="10" ry="10" width="114" height="25" /> 
    <rect x="56" y="45" rx="10" ry="10" width="188" height="25" /> 
    <rect x="96" y="90" rx="10" ry="10" width="102" height="25" /> 
    <rect x="53" y="135" rx="10" ry="10" width="197" height="25" /> 
    <rect x="20" y="185" rx="10" ry="10" width="128" height="30" /> 
    <rect x="157" y="185" rx="10" ry="10" width="126" height="30" /> 
    <rect x="70" y="240" rx="10" ry="10" width="166" height="25" /> 
    <rect x="8" y="300" rx="15" ry="15" width="300" height="300" /> 
    <rect x="8" y="620" rx="15" ry="15" width="300" height="300" /> 
  </ContentLoader>
  </LoaderBoxMob>
  <LoaderBoxTab>
    <ContentLoader 
    speed={2}
    width={700}
    height={900}
    viewBox="0 0 700 900"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="4" y="178" rx="15" ry="15" width="690" height="339" /> 
    <rect x="340" y="54" rx="10" ry="10" width="103" height="24" /> 
    <rect x="550" y="16" rx="10" ry="10" width="103" height="24" /> 
    <rect x="530" y="54" rx="10" ry="10" width="142" height="24" /> 
    <rect x="1" y="543" rx="15" ry="15" width="690" height="339" /> 
    <rect x="220" y="54" rx="10" ry="10" width="103" height="24" /> 
    <rect x="22" y="55" rx="10" ry="10" width="103" height="24" /> 
    <rect x="16" y="120" rx="10" ry="10" width="660" height="35" />
  </ContentLoader> 
  </LoaderBoxTab>
  <LoaderBoxLap>
  <ContentLoader 
     speed={2}
     width={1090}
     height={900}
     viewBox="0 0 1090 900"
     backgroundColor="#f3f3f3"
     foregroundColor="#ecebeb"
     {...props}
  >
     <rect x="5" y="230" rx="15" ry="15" width="1080" height="200" />
     <rect x="550" y="54" rx="10" ry="10" width="103" height="30" /> 
     <rect x="940" y="16" rx="10" ry="10" width="103" height="30" /> 
    <rect x="920" y="54" rx="10" ry="10" width="142" height="30" /> 
    <rect x="430" y="54" rx="10" ry="10" width="103" height="30" /> 
    <rect x="30" y="55" rx="10" ry="10" width="103" height="30" /> 
    <rect x="16" y="150" rx="10" ry="10" width="1050" height="40" /> 
    <rect x="5" y="450" rx="15" ry="15" width="1080" height="300" />
  </ContentLoader>
  </LoaderBoxLap>
    </>
    
);

export default Skeleton;