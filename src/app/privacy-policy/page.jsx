import Container from '@/components/container/Container'
import Heading from '@/components/heading/Heading'
import React from 'react'



const page = () => {
  return (
    <Container>
        <section className='py-10'>
            <div className='w-full flex flex-col gap-10'>
                <Heading page={'Privacy Policy'} />

                <div className='w-full flex flex-col'>
                    <h1 class="text-2xl font-bold mb-4 text-secondaryText">Privacy Policy</h1>
                    <p class="mb-4 text-primaryText md:text-sm text-xs">
                        Welcome to Flimify. Your privacy is important to us. This Privacy Policy
                        explains how we collect, use, disclose, and safeguard your information when
                        you visit our website and use our services. By accessing or using Flimify,
                        you agree to the terms of this Privacy Policy.
                    </p>

                    <h2 class="text-xl font-semibold mt-6 mb-2 text-secondaryText">1. Information We Collect</h2>
                    <p class="mb-4 text-primaryText md:text-sm text-xs">
                        We collect information that you provide directly to us when you register an
                        account, update your profile, subscribe to newsletters, participate in
                        discussions, or communicate with us.
                    </p>
                    <ul class="list-disc list-inside mb-4 px-4 flex flex-col gap-3 
                    text-primaryText md:text-sm text-xs">
                        <li><strong>Personal Information:</strong> Name, email address, username, password, and profile picture.</li>
                        <li><strong>Login Information:</strong> Information related to your login credentials and authentication methods.</li>
                        <li><strong>Usage Data:</strong> Information about your interactions with the website, including the pages you visit, the content you view, and your preferences.</li>
                        <li><strong>Technical Data:</strong> IP address, browser type, device type, and operating system used to access Flimify.</li>
                    </ul>

                    <h2 class="text-xl font-semibold mt-6 mb-2 text-secondaryText">2. How We Use Your Information</h2>
                    <p class="mb-4 text-primaryText md:text-sm text-xs">
                        Flimify uses the collected data for various purposes, including:
                    </p>
                    <ul class="list-disc list-inside mb-4 px-4 flex flex-col gap-3 
                    text-primaryText md:text-sm text-xs">
                        <li>To provide, operate, and maintain our website and services.</li>
                        <li>To manage your account and provide you with personalized content and recommendations.</li>
                        <li>To communicate with you, including sending promotional materials, updates, and notifications.</li>
                        <li>To improve our website, services, and user experience through data analysis and feedback.</li>
                        <li>To detect, prevent, and address technical issues, fraudulent activities, and security breaches.</li>
                    </ul>

                    <h2 class="text-xl font-semibold mt-6 mb-2 text-secondaryText">3. How We Share Your Information</h2>
                    <p class="mb-4 text-primaryText md:text-sm text-xs">
                        We do not sell or rent your personal information to third parties. We may
                        share your information with:
                    </p>
                    <ul class="list-disc list-inside mb-4 px-4 flex flex-col gap-3 
                    text-primaryText md:text-sm text-xs">
                        <li>
                        <strong>Service Providers:</strong> Third-party companies and individuals
                        that assist us in operating our website, providing services, and analyzing
                        usage.
                        </li>
                        <li>
                        <strong>Legal Authorities:</strong> When required by law, regulation, or
                        legal process, or to protect the rights, safety, and security of Flimify
                        and its users.
                        </li>
                        <li>
                        <strong>Business Transfers:</strong> In the event of a merger,
                        acquisition, or sale of all or a portion of our assets, your information
                        may be transferred as part of that business deal.
                        </li>
                    </ul>

                    <h2 class="text-xl font-semibold mt-6 mb-2 text-secondaryText">4. Data Security</h2>
                    <p class="mb-4 text-primaryText md:text-sm text-xs">
                        We implement security measures to protect your personal information from
                        unauthorized access, alteration, disclosure, or destruction. However, please
                        be aware that no method of data transmission over the internet is 100%
                        secure, and we cannot guarantee absolute security.
                    </p>

                    <h2 class="text-xl font-semibold mt-6 mb-2 text-secondaryText">5. Your Rights</h2>
                    <p class="mb-4 text-primaryText md:text-sm text-xs">
                        You have the right to access, update, or delete your personal information.
                        You can manage your account settings or contact us directly for assistance.
                        You also have the right to withdraw your consent to data processing or
                        object to the use of your data for certain purposes.
                    </p>

                    <h2 class="text-xl font-semibold mt-6 mb-2 text-secondaryText">6. Cookies and Tracking Technologies</h2>
                    <p class="mb-4 text-primaryText md:text-sm text-xs">
                        Flimify uses cookies and similar tracking technologies to enhance your
                        browsing experience, remember your preferences, and gather usage data. You
                        can manage your cookie settings through your browser options.
                    </p>

                    <h2 class="text-xl font-semibold mt-6 mb-2 text-secondaryText">7. Third-Party Links</h2>
                    <p class="mb-4 text-primaryText md:text-sm text-xs">
                        Our website may contain links to third-party websites or services that are
                        not owned or controlled by Flimify. We are not responsible for the privacy
                        practices of these external sites. We encourage you to review the privacy
                        policies of any third-party sites you visit.
                    </p>

                    <h2 class="text-xl font-semibold mt-6 mb-2 text-secondaryText">8. Changes to This Privacy Policy</h2>
                    <p class="mb-4 text-primaryText md:text-sm text-xs">
                        We may update this Privacy Policy from time to time. We will notify you of
                        any changes by posting the new policy on this page with an updated “Last
                        Updated” date. Your continued use of Flimify after any modifications
                        indicates your acceptance of the updated policy.
                    </p>

                    <h2 class="text-xl font-semibold mt-6 mb-2 text-secondaryText">9. Contact Us</h2>
                    <p class="mb-4 text-primaryText md:text-sm text-xs flex items-center gap-2">
                        If you have any questions or concerns about this Privacy Policy or the
                        practices of Flimify, please contact us at
                        <a href="mailto:support@flimify.com" class="text-main underline">support@flimify.com</a>.
                    </p>
                </div>
            </div>
        </section>
    </Container>
  )
}

export default page