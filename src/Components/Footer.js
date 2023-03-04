import React from 'react'
import { Container } from 'react-bootstrap';
import "../Components/CSS/Footer.css"
import { motion } from "framer-motion";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaInstagram,
} from "react-icons/fa";


function Footer() {
    const rgbColor = (r, g, b) => `rgb(${r}, ${g}, ${b})`;
    return (
        <footer className="footer py-3">
            <Container>
                <p className="m-0 text-center footerhead">© 2023 GOKUL SUBHASH</p>
                <div className='p-3'>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ duration: 1.2 }}
                        className="d-flex justify-content-center p-2"
                    >
                        <motion.button
                            whileHover={{
                                scale: 1.2,
                                rotate: 30,
                                y: -5,
                                opacity: 0.8,
                                backgroundColor: rgbColor(45, 223, 165),
                                color: rgbColor(15, 23, 42),
                                boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
                                transition: { duration: 0.2, ease: "easeOut" },
                            }}
                            type="button"
                            className="icons  "
                        >
                            <i>
                                <FaFacebookF />
                            </i>
                        </motion.button>
                        <motion.button
                            whileHover={{
                                scale: 1.2,
                                rotate: 30,
                                y: -5,
                                opacity: 0.8,
                                backgroundColor: rgbColor(45, 223, 165),
                                color: rgbColor(15, 23, 42),
                                boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
                                transition: { duration: 0.2, ease: "easeOut" },
                            }}
                            type="button"
                            className="icons  "
                        >
                            <i>
                                <FaTwitter />
                            </i>
                        </motion.button>
                        <motion.button
                            whileHover={{
                                scale: 1.2,
                                rotate: 30,
                                y: -5,
                                opacity: 0.8,
                                backgroundColor: rgbColor(45, 223, 165),
                                color: rgbColor(15, 23, 42),
                                boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
                                transition: { duration: 0.2, ease: "easeOut" },
                            }}
                            type="button"
                            className=" icons  "
                        >
                            <i>
                                <FaLinkedin />
                            </i>
                        </motion.button>
                        <motion.button
                            whileHover={{
                                scale: 1.2,
                                rotate: 30,
                                y: -5,
                                opacity: 0.8,
                                backgroundColor: rgbColor(45, 223, 165),
                                color: rgbColor(15, 23, 42),
                                boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
                                transition: { duration: 0.2, ease: "easeOut" },
                            }}
                            type="button"
                            className=" icons "
                        >
                            <i>
                                <FaGithub />
                            </i>
                        </motion.button>
                        <motion.button
                            whileHover={{
                                scale: 1.2,
                                rotate: 30,
                                y: -5,
                                opacity: 0.8,
                                backgroundColor: rgbColor(45, 223, 165),
                                color: rgbColor(15, 23, 42),
                                boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
                                transition: { duration: 0.2, ease: "easeOut" },
                            }}
                            type="button"
                            className=" icons  "
                        >
                            <i>
                                <FaInstagram />
                            </i>
                        </motion.button>
                    </motion.div>

                </div>
            </Container>
        </footer>
    )
}
export default Footer;
