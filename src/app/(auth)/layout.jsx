import Navber from '@/components/Navber';
import { montserrat } from '../layout';
import Section from '@/components/Category';


const Authlayout = ({ children }) => {
    return (
        <div className={`${montserrat}`}>
            <Navber></Navber>

            {children}
        </div>
    );
};

export default Authlayout;