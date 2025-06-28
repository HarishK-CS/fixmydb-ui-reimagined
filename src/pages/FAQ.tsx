import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle } from 'lucide-react';

const faqs = [
    {
        question: "How quickly can you start working on my database project?",
        answer: "We can typically begin assessment within 24-48 hours after initial consultation. For urgent issues, we offer emergency response services with immediate team deployment."
    },
    {
        question: "Do you work with all database systems?",
        answer: "Yes, we have expertise in MySQL, PostgreSQL, MongoDB, Oracle, SQL Server, Redis, Cassandra, and most other major database systems. Our team includes certified professionals for each platform."
    },
    {
        question: "What's included in your 24/7 support?",
        answer: "Our 24/7 support includes continuous monitoring, emergency response, performance optimization, backup management, security patches, and direct access to our expert team via phone, email, or chat."
    },
    {
        question: "How do you ensure data security during projects?",
        answer: "We follow strict security protocols including encrypted connections, VPN access, signed NDAs, SOC 2 compliance, and regular security audits. All our staff are security-certified professionals with background checks."
    },
    {
        question: "What is your pricing model?",
        answer: "We offer flexible pricing including hourly consulting, monthly retainers, and project-based pricing. We provide free initial consultation and detailed cost estimates before starting any work."
    },
    {
        question: "Can you help with database migration?",
        answer: "Absolutely! We specialize in database migrations including cloud migrations (AWS, Azure, GCP), cross-platform migrations, and version upgrades with zero downtime strategies."
    }
];

const FAQ = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-fixmy-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
            <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop"
                alt="Circuit Board Background"
                className="w-full h-full object-cover"
            />
        </div>
        <div className="container mx-auto px-6 relative z-10 py-20">
            <div className="text-center mb-16">
                <div className="flex justify-center mb-6">
                    <svg className="w-12 h-12 text-fixmy-orange-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                    </svg>
                </div>
                <h2 className="text-4xl font-bold mb-4 text-gray-800 animate-fade-in">
                    Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600 animate-fade-in-up">
                    Quick answers to common questions about our services
                </p>
            </div>
            <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="bg-white rounded-xl border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in overflow-hidden"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <AccordionTrigger className="px-8 py-6 text-left hover:no-underline group">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-fixmy-orange-500 to-fixmy-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform shadow-lg">
                                        {index + 1}
                                    </div>
                                    <span className="font-semibold text-gray-800 group-hover:text-fixmy-orange-600 transition-colors text-lg">
                                        {faq.question}
                                    </span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-8 pb-6 animate-accordion-down">
                                <div className="flex items-start space-x-4 ml-14">
                                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                                    <p className="text-gray-600 leading-relaxed text-base">{faq.answer}</p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    </div>
);

export default FAQ;
