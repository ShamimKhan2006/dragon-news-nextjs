import Navber from '@/components/Navber';
import { montserrat } from '../layout';



const Authlayout = ({ children }) => {
    return (
        <div className={`${montserrat}`}>
            <Navber></Navber>

            {children}
        </div>
    );
};

export default Authlayout;