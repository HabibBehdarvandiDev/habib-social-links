"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import ProfilePic from "@/public/profile-pic.jpg";
import { motion } from "framer-motion";
import {
    Computer,
    Github,
    Linkedin,
    MapPin,
    Send,
    Twitter,
} from "lucide-react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

// Animation Variants
const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
        },
    },
};

const DATA: { label: string; icon: React.ReactNode; href: string }[] = [
    {
        label: "GitHub",
        icon: <Github className="mr-2" />,
        href: "https://github.com/HabibBehdarvandiDev",
    },
    {
        label: "Telegram",
        icon: <Send className="mr-2" />,
        href: "https://t.me/habibetoon",
    },
    {
        label: "Linkedin",
        icon: <Linkedin className="mr-2" />,
        href: "https://ir.linkedin.com/in/habib-behdarvandi-942977276?trk=public_profile_samename-profile",
    },
    {
        label: "Twitter",
        icon: <Twitter className="mr-2" />,
        href: "https://x.com/habibetoonx",
    },
    {
        label: "Repositories",
        icon: <Computer className="mr-2" />,
        href: "https://github.com/HabibBehdarvandiDev?tab=repositories",
    },
];

const CardWrapper = () => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="w-full h-lvh max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto p-4"
        >
            <Card className="relative rounded-2xl overflow-hidden">
                <ThemeSwitcher />
                <CardContent className="flex flex-col items-center justify-center gap-4 py-8">
                    <motion.div variants={item}>
                        <Avatar className="w-[150px] h-[150px] aspect-square shadow-lg">
                            <AvatarImage src={ProfilePic.src} />
                            <AvatarFallback>HB</AvatarFallback>
                        </Avatar>
                    </motion.div>

                    <motion.h1
                        className="text-xl font-semibold"
                        variants={item}
                    >
                        Habib Behdarvandi
                    </motion.h1>

                    <motion.h4
                        className="text-sm text-muted-foreground flex items-center justify-center"
                        variants={item}
                    >
                        <MapPin className="mr-2" width={16} />
                        Tehran, Iran
                    </motion.h4>

                    <motion.div variants={item} whileHover={{ scale: 1.05 }}>
                        <Badge className="text-sm py-1 px-3 bg-green-400/15 text-green-600">
                            Full-Stack Web Developer and Gamer
                        </Badge>
                    </motion.div>

                    <motion.div
                        variants={item}
                        className="w-full flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 mt-6"
                    >
                        {DATA.map((link, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                whileHover={{ scale: 1.05 }}
                                className="w-full sm:w-auto"
                            >
                                <Button
                                    asChild
                                    variant="secondary"
                                    className="w-full"
                                >
                                    <Link href={link.href} target="_blank">
                                        {link.icon}
                                        {link.label}
                                    </Link>
                                </Button>
                            </motion.div>
                        ))}
                    </motion.div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default CardWrapper;
