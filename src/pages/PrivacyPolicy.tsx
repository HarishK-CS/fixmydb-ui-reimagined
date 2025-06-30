import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PHONE, SUPPORT_EMAIL } from '@/constants';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | FixMyDB</title>
        <meta name="description" content="Read the FixMyDB Privacy Policy to learn how we collect, use, and protect your personal and business data. Your privacy and security are our top priorities." />
        <meta name="keywords" content="FixMyDB privacy policy, data protection, database privacy, data security, user privacy" />
        <link rel="canonical" href="https://fixmydb.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | FixMyDB – Data Protection & Security" />
        <meta property="og:description" content="Learn how FixMyDB protects your data and privacy. Read our privacy policy for details on data collection, use, and security." />
        <meta property="og:url" content="https://fixmydb.com/privacy-policy" />
        <meta property="og:type" content="website" />
      </Helmet>
      <main>
        <div className="min-h-screen ">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br pt-20 from-gray-50 via-orange-50 to-fixmy-orange-100">
            <div className="container mx-auto px-6 text-center">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-fixmy-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-fade-in">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
                Your privacy is important to us. Learn how we collect, use, and protect your data.
              </p>
            </div>
          </section>

          {/* Content */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-fixmy-orange-600">Information We Collect</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p>We collect information you provide directly to us, such as when you:</p>
                    <ul>
                      <li>Fill out contact forms or request consultations</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Create an account or use our services</li>
                      <li>Communicate with us via email, phone, or chat</li>
                    </ul>
                    <p>This may include your name, email address, phone number, company information, and any other information you choose to provide.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-fixmy-orange-600">How We Use Your Information</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p>We use the information we collect to:</p>
                    <ul>
                      <li>Provide, maintain, and improve our services</li>
                      <li>Process transactions and send related information</li>
                      <li>Send you technical notices, updates, and support messages</li>
                      <li>Respond to your comments, questions, and customer service requests</li>
                      <li>Communicate with you about products, services, and events</li>
                      <li>Monitor and analyze trends, usage, and activities</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-fixmy-orange-600">Information Sharing</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:</p>
                    <ul>
                      <li>With service providers who assist us in operating our website and conducting business</li>
                      <li>When required by law or to respond to legal process</li>
                      <li>To protect our rights, property, or safety, or that of others</li>
                      <li>In connection with a merger, acquisition, or sale of assets</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-fixmy-orange-600">Data Security</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-fixmy-orange-600">Contact Us</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                    <ul>
                      <li>Email: {SUPPORT_EMAIL}</li>
                      <li>Phone: {PHONE}</li>
                      <li>Address: 123 Database Street, Tech City, TC 12345</li>
                    </ul>
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

export default PrivacyPolicy;
