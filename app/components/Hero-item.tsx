"use client"
import { Hero } from "./Hero"
import { motion } from "framer-motion";
import React from "react";
import { FloatingNavDemo } from "./floating-navbar";



export function Heros() {
    return (
        <div className="bg-dark-blue">
            <Hero>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <div className="text-3xl md:text-7xl font-bold text-dark-blue text-center">
                        I am Praveenkumar Ellaikkarasu
                    </div>
                    <div className="font-extralight text-base md:text-4xl font-serif text-dark-blue py-4">
                        Enthusiastic {"Software Developer"}
                    </div>

                </motion.div>
            </Hero>
        </div>
    );
}