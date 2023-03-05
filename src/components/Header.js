// ___Framer Motion___________________________________________________________________________________________________
import { motion } from "framer-motion";

const Header = () => {
    return ( 
        <motion.header 
            initial={{ width: '0', opacity: 0 }}
            animate={{ width: '100%', opacity: 1 }}
        >
            <h1>My Shop</h1>
        </motion.header>
    );
}

export default Header;