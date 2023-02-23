import styled, { keyframes } from 'styled-components';
import DEVICE from '../../constants/deviceSize';

const cabbage1Mob = keyframes`
0% {
    transform: rotate(0deg);
}
25% {
    top: 40%;
    left: 25%;
  }
 50% {
     top: 40%;
     left: 35%;
   }
   75% {
    top: 40%;
     left: 25%;
   }
   100% {
    top: 40%;
     left: 15%;
     transform: rotate(360deg);
  }
`;
const cabbage1Tab = keyframes`
0% {
    transform: rotate(0deg);
}
25% {
    top: 40%;
    left: 35%;
  }
 50% {
     top: 40%;
     left: 45%;
   }
   75% {
    top: 40%;
     left: 35%;
   }
   100% {
    top: 40%;
     left: 25%;
     transform: rotate(360deg);
  }
`;
const cabbage1Lap = keyframes`
0% {
    transform: rotate(0deg);
}
25% {
    top: 40%;
    left: 40%;
  }
 50% {
     top: 40%;
     left: 50%;
   }
   75% {
    top: 40%;
     left: 40%;
   }
   100% {
    top: 40%;
     left: 30%;
     transform: rotate(360deg);
  }
`;
const cabbage2Mob = keyframes`
0% {
    transform: rotate(0deg);
}
25% {
    top: 40%;
    left: 45%;
  }
 50% {
     top: 40%;
     left: 55%;
   }
   75% {
    top: 40%;
     left: 45%;
   }
   100% {
    top: 40%;
     left: 35%;
     transform: rotate(360deg);
  }
`;
const cabbage2Tab = keyframes`
0% {
    transform: rotate(0deg);
}
25% {
    top: 40%;
    left: 50%;
  }
 50% {
     top: 40%;
     left: 60%;
   }
   75% {
    top: 40%;
     left: 50%;
   }
   100% {
    top: 40%;
     left: 40%;
     transform: rotate(360deg);
  }
`;
const cabbage2Lap = keyframes`
0% {
    transform: rotate(0deg);
}
25% {
    top: 40%;
    left: 50%;
  }
 50% {
     top: 40%;
     left: 60%;
   }
   75% {
    top: 40%;
     left: 50%;
   }
   100% {
    top: 40%;
     left: 40%;
     transform: rotate(360deg);
  }
`;
const cabbage3Mob = keyframes`
0% {
    transform: rotate(0deg);
}
25% {
    top: 40%;
    left: 65%;
  }
 50% {
     top: 40%;
     left: 75%;
   }
   75% {
    top: 40%;
     left: 65%;
   }
   100% {
    top: 40%;
     left: 55%;
     transform: rotate(360deg);
  }
`;
const cabbage3Tab = keyframes`
0% {
    transform: rotate(0deg);
}
25% {
    top: 40%;
    left: 50%;
  }
 50% {
     top: 40%;
     left: 60%;
   }
   75% {
    top: 40%;
     left: 50%;
   }
   100% {
    top: 40%;
     left: 40%;
     transform: rotate(360deg);
  }
`;
const cabbage3Lap = keyframes`
0% {
    transform: rotate(0deg);
}
25% {
    top: 40%;
    left: 60%;
  }
 50% {
     top: 40%;
     left: 70%;
   }
   75% {
    top: 40%;
     left: 60%;
   }
   100% {
    top: 40%;
     left: 50%;
     transform: rotate(360deg);
  }
`;
export const BtnStyle1 = styled.button`
  position: absolute;
  padding: none;
  background-color: transparent;
  cursor: pointer;
  border: none;

  @media ${DEVICE.mobile} {
    top: 40%;
    left: 15%;
    animation: ${cabbage1Mob} 2s linear infinite;
  }

  @media ${DEVICE.tablet} {
    top: 40%;
    left: 25%;
    animation: ${cabbage1Tab} 2s linear infinite;
  }

  @media ${DEVICE.laptop} {
    top: 40%;
    left: 30%;
    animation: ${cabbage1Lap} 2s linear infinite;
  }
`;

export const BtnStyle2 = styled.button`
  position: absolute;
  padding: none;
  background-color: transparent;
  cursor: pointer;
  border: none;

  @media ${DEVICE.mobile} {
    top: 40%;
    left: 35%;
    animation: ${cabbage2Mob} 2s linear infinite;
  }

  @media ${DEVICE.tablet} {
    top: 40%;
    left: 40%;
    animation: ${cabbage2Tab} 2s linear infinite;
  }

  @media ${DEVICE.laptop} {
    top: 40%;
    left: 40%;
    animation: ${cabbage2Lap} 2s linear infinite;
  }
`;

export const BtnStyle3 = styled.button`
  position: absolute;
  padding: none;
  background-color: transparent;
  cursor: pointer;
  border: none;

  @media ${DEVICE.mobile} {
    top: 40%;
    left: 55%;
    animation: ${cabbage3Mob} 2s linear infinite;
  }

  @media ${DEVICE.laptop} {
    top: 40%;
    left: 45%;
    animation: ${cabbage3Tab} 2s linear infinite;
  }

  @media ${DEVICE.laptop} {
    top: 40%;
    left: 50%;
    animation: ${cabbage3Lap} 2s linear infinite;
  }
`;

export const Load = styled.svg`
  z-index: 2;
  cursor: pointer;
`;

export const Loader = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1;
  height: 300px;
`;
