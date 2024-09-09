import Container from '@/components/container/Container'
import Heading from '@/components/heading/Heading'
import React from 'react'



const page = () => {
  return (
    <Container>
        <section className='py-10'>
            <div className='w-full flex flex-col gap-10'>
                <Heading page={'DMCA'} />

                <div className='w-full flex flex-col gap-8'>
                    <h1 class="text-2xl font-bold mb-4 text-secondaryText">DMCA Compliance Notice</h1>
                    <p class="md:text-sm text-xs text-primaryText">
                        Flimify is committed to complying with the Digital Millennium Copyright Act
                        (“DMCA”) and respecting the intellectual property rights of others. Our
                        policy is to respond promptly to any infringement notices and take the
                        appropriate actions under the DMCA and other relevant intellectual property
                        laws.
                    </p>
                    <p class="md:text-sm text-xs text-primaryText">
                        If your copyrighted material has been posted on Flimify, or if links to your
                        copyrighted material are returned through our search engine and you wish to
                        have this material removed, you must provide a written notice containing the
                        details outlined below.
                    </p>
                    <p class="md:text-sm text-xs text-primaryText">
                        Please be advised that you may be held liable for damages (including costs
                        and attorneys’ fees) if you knowingly misrepresent that information on our
                        site is infringing your copyrights. It is recommended that you consult with
                        a legal advisor before proceeding with any action.
                    </p>
                    <h2 class="md:text-xl text-lg font-semibold text-secondaryText">
                        Requirements for a Valid DMCA Notice:
                    </h2>
                    <ul class="list-decimal list-inside md:text-sm text-xs text-primaryText 
                    flex flex-col gap-3 px-4">
                        <li>
                        Provide evidence that the person filing the complaint is authorized to act
                        on behalf of the owner of the copyrighted work that is allegedly
                        infringed.
                        </li>
                        <li>Include sufficient contact information for us to reach you.</li>
                        <li>Provide a valid email address.</li>
                        <li>
                        Identify in sufficient detail the copyrighted work claimed to have been
                        infringed, including at least one search term under which the material
                        appears in Flimify search results.
                        </li>
                        <li>
                        Include a statement that the complaining party has a good faith belief
                        that the use of the material in the manner complained of is not authorized
                        by the copyright owner, its agent, or the law.
                        </li>
                        <li>
                        Include a statement that the information in the notification is accurate
                        and, under penalty of perjury, that the complaining party is authorized to
                        act on behalf of the owner of an exclusive right that is allegedly
                        infringed.
                        </li>
                        <li>
                        The notice must be signed by the authorized person acting on behalf of the
                        owner of the copyrighted work that is allegedly being infringed.
                        </li>
                    </ul>
                    <p class="md:text-sm text-xs text-primaryText flex items-center gap-2">
                        Send your infringement notice to us at the following email address:
                        <a href="mailto:dmca@flimify.com" class="text-main underline">
                        dmca@flimify.com
                        </a>.
                    </p>
                    <p class="md:text-sm text-xs text-primaryText">
                        Please allow up to 48 hours for us to review and respond to your notice.
                    </p>
                    <p class="md:text-sm text-xs text-primaryText">
                        Note that sending your complaint to other parties, such as our Internet
                        Service Provider, will not expedite your request and may result in delays in
                        addressing the issue.
                    </p>
                </div>
            </div>
        </section>
    </Container>
  )
}

export default page