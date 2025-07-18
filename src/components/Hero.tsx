import { motion , Variants } from 'framer-motion';

const Hero = ({ title, subTitle }: { title: string, subTitle: string }) => {
    // Animation variants for shapes
    const shapeVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.2,
                duration: 0.8,
                ease: "easeOut"
            }
        }),
        float: (i: number) => ({
            y: [0, -15, 0],
            transition: {
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut"
            }
        })
    };

    // Animation for text
    const textVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className="fancy-hero-three relative overflow-hidden py-20 lg:py-32"
            style={{ background: 'var(--secondry-bg)' }}
            initial="hidden"
            animate="visible"
        >
            {/* Animated shapes */}
            <motion.div 
                className="shapes shape-one" 
                style={{ backgroundColor: 'var(--main-color)' }}
                variants={shapeVariants}
                initial="hidden"
                animate={["visible", "float"]}
                custom={1}
            />
            <motion.div 
                className="shapes shape-two" 
                style={{ backgroundColor: 'var(--main-color)' }}
                variants={shapeVariants}
                initial="hidden"
                animate={["visible", "float"]}
                custom={2}
            />
            <motion.div 
                className="shapes shape-three" 
                style={{ backgroundColor: 'var(--main-color)' }}
                variants={shapeVariants}
                initial="hidden"
                animate={["visible", "float"]}
                custom={3}
            />
            <motion.div 
                className="shapes shape-four" 
                style={{ backgroundColor: 'var(--main-color)' }}
                variants={shapeVariants}
                initial="hidden"
                animate={["visible", "float"]}
                custom={4}
            />
            <motion.div 
                className="shapes shape-five" 
                style={{ backgroundColor: 'var(--main-color)' }}
                variants={shapeVariants}
                initial="hidden"
                animate={["visible", "float"]}
                custom={5}
            />
            <motion.div 
                className="shapes shape-six" 
                style={{ backgroundColor: 'var(--main-color)' }}
                variants={shapeVariants}
                initial="hidden"
                animate={["visible", "float"]}
                custom={6}
            />

            <div className="bg-wrapper relative z-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="w-full xl:w-9/12 lg:w-10/12 mx-auto">
                            <motion.h1 
                                className="heading text-4xl lg:text-5xl font-bold text-center text-gray-900"
                                variants={textVariants}
                            >
                                {title}
                            </motion.h1>
                            <motion.p 
                                className="sub-heading text-lg text-center text-gray-600 mt-4"
                                variants={textVariants}
                                transition={{ delay: 0.2 }}
                            >
                                {subTitle}
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Hero;