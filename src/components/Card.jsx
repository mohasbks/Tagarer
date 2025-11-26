import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Card = ({ children, className = '', hover = true, icon: Icon, title, description }) => {
    const baseStyles = 'glass rounded-xl p-6';
    const hoverStyles = hover ? 'hover:shadow-lg hover:border-primary-500/30' : '';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={hover ? { y: -5 } : {}}
            className={`${baseStyles} ${hoverStyles} ${className} transition-all duration-300`}
        >
            {Icon && (
                <div className="w-12 h-12 rounded-lg bg-primary-500 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                </div>
            )}
            {title && <h3 className="text-xl font-bold mb-2 text-primary-500">{title}</h3>}
            {description && <p className="text-neutral-600 mb-4">{description}</p>}
            {children}
        </motion.div>
    );
};

Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    hover: PropTypes.bool,
    icon: PropTypes.elementType,
    title: PropTypes.string,
    description: PropTypes.string,
};

export default Card;
