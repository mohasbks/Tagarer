import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    className = '',
    icon: Icon,
    ...props
}) => {
    const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2';

    const variants = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        outline: 'px-6 py-3 border-2 border-primary-500 text-primary-400 hover:bg-primary-500/10 rounded-lg font-semibold',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {Icon && <Icon className="w-5 h-5" />}
            {children}
        </motion.button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    onClick: PropTypes.func,
    className: PropTypes.string,
    icon: PropTypes.elementType,
};

export default Button;
