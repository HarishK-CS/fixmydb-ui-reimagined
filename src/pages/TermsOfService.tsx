import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { COMPANY_NAME } from '@/constants';
import { Helmet } from 'react-helmet';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | FixMyDB </title>
        <meta name="description" content="Read the FixMyDB Terms of Service to understand your rights and responsibilities when using our database consulting, optimization, and support services." />
        <meta name="keywords" content="FixMyDB terms of service, database consulting terms, database support terms, user agreement, service terms" />
        <link rel="canonical" href="https://fixmydb.com/terms-of-service" />
        <meta property="og:title" content="Terms of Service | FixMyDB – Database Consulting & Support" />
        <meta property="og:description" content="Review the terms and conditions for using FixMyDB's database services, support, and consulting." />
        <meta property="og:url" content="https://fixmydb.com/terms-of-service" />
        <meta property="og:type" content="website" />
      </Helmet>
      <main>
        <div className="min-h-screen ">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br pt-20 from-gray-50 via-orange-50 to-fixmy-orange-100">
            <div className="container mx-auto px-6 text-center">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-fixmy-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-fade-in">
                Terms of Service
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
                Please read these terms carefully before using our services.
              </p>
            </div>
          </section>

          {/* Content */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-fixmy-orange-600">Acceptance of Terms</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p>By accessing and using {COMPANY_NAME} services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-fixmy-orange-600">Service Description</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p>{COMPANY_NAME} provides database management, optimization, and consulting services including but not limited to:</p>
                    <ul>
                      <li>Database performance optimization</li>
                      <li>Cloud migration services</li>
                      <li>Security auditing and implementation</li>
                      <li>24/7 monitoring and support</li>
                      <li>Database design and architecture consulting</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-fixmy-orange-600">User Responsibilities</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p>As a user of our services, you agree to:</p>
                    <ul>
                      <li>Provide accurate and complete information</li>
                      <li>Maintain the security of your account credentials</li>
                      <li>Use our services in compliance with applicable laws</li>
                      <li>Not interfere with or disrupt our services</li>
                      <li>Respect intellectual property rights</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-fixmy-orange-600">Payment Terms</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p>Payment terms for our services:</p>
                    <ul>
                      <li>All fees are due as specified in your service agreement</li>
                      <li>Late payments may incur additional charges</li>
                      <li>Refunds are subject to our refund policy</li>
                      <li>Prices are subject to change with notice</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-fixmy-orange-600">Limitation of Liability</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p>{COMPANY_NAME} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-fixmy-orange-600">Termination</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p>We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-fixmy-orange-600">Changes to Terms</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p>We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default TermsOfService;
