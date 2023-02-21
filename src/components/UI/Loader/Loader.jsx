import { Oval } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

const Spiner = () => {
    return (
        <LoaderBox>
        <Oval ariaLabel='loading-indicator' strokeWidth={5} width={40} height={40} color="#FF751D" secondaryColor='#a2a4b0' />
        </LoaderBox>
    )
};

export default Spiner;