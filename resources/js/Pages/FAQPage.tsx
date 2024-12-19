import React from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navigation/Navbar";
import MainLayout from "@/Layouts/MainLayout";

const FAQPage: React.FC = () => {
    const faqs = [
        {
            question: "What is SportNest?",
            answer: "SportNest is an online platform that helps users find sports clubs that match their interests, location, and preferences. It also provides useful information, such as required equipment and club details, making it easier for users to start their sports journey.",
        },
        {
            question: "Is SportNest free to use?",
            answer: "Yes, users can search for sports clubs and take quizzes for free. Clubs may have additional options or subscription plans depending on the features they need.",
        },
        {
            question: "How do I find a sports club?",
            answer: "You can search for clubs using filters such as location, sport type, age range, and more. You can also take a personalized quiz to get tailored recommendations based on your preferences.",
        },
    ];

    return (
        <MainLayout title="FAQ">
            <div className="mt-8">
                <Box sx={{ pb: 8 }}>
                    {" "}
                    <Typography variant="h4" component="h1" gutterBottom>
                        Frequently Asked Questions
                    </Typography>
                    {faqs.map((faq, index) => (
                        <Accordion key={index}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="subtitle1">
                                    {faq.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body2">
                                    {faq.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </div>
        </MainLayout>
    );
};

export default FAQPage;
