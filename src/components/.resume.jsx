import "./component.css"
import { FooterSection } from "./footer"
import { NavSection } from "./nav"
import {BoxArrowUpRight} from 'react-bootstrap-icons'
import Img1 from "./Images/Apple.png"
import Img2 from "./Images/Consumer cell.png"
import Img3 from "./Images/Legacy Health.png"
import Img4 from "./Images/Nike.png"
import Img5 from "./Images/PPS.png"
import Img6 from "./Images/SimpliSafe.png"
import Img7 from "./Images/Supra.png"
import { useState } from "react"

export function ResumePage() {

    return (
        <div className="Container">
            <NavSection />
            <div className="testing-cool-idea">
                <div className="Resume">
                    <div className="ResumeHeader">test Resume idea</div>
                    <div>
                        <div className="img1"><Img1 /></div>
                        <div className="img2"><Img2 /></div>
                        <div className="img3"><Img3 /></div>
                        <div className="img4"><Img4 /></div>
                        <div className="img5"><Img5 /></div>
                        <div className="img6"><Img6 /></div>
                        <div className="img7"><Img7 /></div>
                    </div>
                </div>
            </div>
            <div className="Resume">
                <div className="ResumeHeader">Tyler Smith's Resume</div>
                <div className="AspireQuote"><i>Motivated and detail-oriented individual with a passion for coding and web development. Possessing 7 certificates, 6 months of hands-on experience in HTML, CSS, Javascript, typescript, SQL, JSON, React, and a personal website built from scratch while learning. Committed to delivering high-quality results and eager to bring customer service and tech support background to a new role as a junior web developer.</i></div>
                <hr />
                <div className="SectionProXP">
                    <div className="SectionHeader">Professional Experience</div>
                    {/* Nike job */}
                    <div className="SectionContent">
                        <section className="JobSection">
                            <div className="JobTitle">Deskside Tech</div>
                            <div className="JobCompany">AXA Pro @ Stephanini (@ Nike WHQ)</div>
                            <div className="JobDates">May 2022 - May 2023</div>
                            <div className="JobDescription">
                                <ul>
                                    <li>Provided expert deskside support to Nike employees at the World Head Quarters, troubleshooting and resolving complex technical issues related to hardware, software, and networking in a timely and efficient manner.</li>
                                    <li>Collaborated with other IT support teams to identify and escalate issues, ensuring swift resolution and minimal impact to employee productivity.</li>
                                    <li>Demonstrated advanced knowledge of Windows and macOS operating systems, as well as a variety of hardware, software, and networking technologies</li>
                                </ul>
                            </div>
                        </section>
                        <hr className="HRjobs" />
                        {/* Legacy job */}
                        <section className="JobSection">
                            <div className="JobTitle">Warehouse Tech Worker</div>
                            <div className="JobCompany">TekSystems @ Legacy Health</div>
                            <div className="JobDates">Nov 2021 – May 2022</div>
                            <div className="JobDescription">
                                <ul>
                                    <li>Successfully upgraded computer hardware and software for patient rooms and operating rooms, ensuring compliance with hospital and industry standards, while adhering to strict COVID protocols.</li>
                                    <li>Worked collaboratively with cross-functional teams to manage inventory and track equipment in real-time, ensuring accurate deployment and timely replacement of equipment as needed.</li>
                                    <li>Conducted end-to-end testing of computer systems and peripherals to ensure optimal performance and usability in clinical settings, minimizing any potential disruptions to patient care.</li>
                                    <li>Provided ongoing technical support to end-users, including nurses, doctors, and other medical staff, addressing issues in a timely and efficient manner.</li>
                                    <li>Maintained accurate and up-to-date documentation of all computer hardware and software, ensuring data integrity and compliance with industry and hospital standards.</li>
                                    <li>Proactively identified opportunities for process improvement and recommended solutions to optimize system performance and enhance the user experience.</li>
                                    <li>Demonstrated flexibility and adaptability in a fast-paced and rapidly changing environment, working effectively under pressure to meet tight deadlines and achieve business objectives.</li>
                                </ul>
                            </div>
                        </section>
                        <hr className="HRjobs" />
                        {/* Portland Public Schools IT (deployment and ticketing jobs) job */}
                        <section className="JobSection">
                        <div className="JobTitle">IT Support & Computer Deployment</div>
                        <div className="JobCompany">TekSystem @ Portland Public Schools Otis</div>
                        <div className="JobDates">July 2021 - Nov 2021</div>
                        <div className="JobDescription">
                            <ul>
                                <li>Contracted by TEKsystems to work for Portland Public Schools IT (OTIS) department</li>
                                <li>Supported Parents and Teachers dealing with Account issues using Freshworks Tickets system</li>
                                <li>Deployed around 150+ New and used Computers in schools, Upgrading internal hardware (RAM, and GPUs) and troubleshooting hardware and software problems during the process before the project deadline</li>
                                <li>Helped delegate and organize project materials to efficiently streamline productivity</li>
                                <li>Reimaged Windows PCs from Windows 7 to 10</li>
                                <li>Educated users on the new systems after hardware and software updates to prepare for the new school year</li>
                                <li>Patched network panels in coordination with coworkers to active Ethernet ports throughout a few schools</li>
                                <li>Worked on plans for Teacher Policies in Windows Active Directory and Google Identity Services for Chrome extension force installs</li>
                                <li>Performed cable management for existing computer setups for uniformity and quick access to asset tags for logging what hardware is in what location in an excel spreadsheet</li>
                            </ul>
                        </div>
                        </section>
                        <hr className="HRjobs" />
                        {/* Reboot Computers */}
                        <section className="JobSection">
                        <div className="JobTitle">Store Front HelpDesk</div>
                        <div className="JobCompany">Doctors Of Technology LLC AKA Reboot Computers (Salem, OR)</div>
                        <div className="JobDates">Sep 2020 - Nov 2020</div>
                        <div className="JobDescription">
                            <ul>
                                <li>Supported customers dealing with consumer electronics issues via break/fix services</li>
                                <li>Made sure repairs were scheduled and completed in a timely fashion.</li>
                                <li>Created an SOP for the owner to help create clear guidelines expected from future employees</li>
                                <li>Built rapport with customers, creating repeat service</li>
                                <li>Provided light technical support for phone and computer troubles such as Connectivity troubleshooting, app installation and resetting, factory resetting, and iCloud/Google services account troubleshooting</li>
                            </ul>
                        </div>
                        </section>
                        <hr className="HRjobs" />
                        {/* Consumer Cellular job */}
                        <section className="JobSection">
                        <div className="JobTitle">Tech Support Agent</div>
                        <div className="JobCompany">Consumer Cellular</div>
                        <div className="JobDates">Jan 2020 - Sept 2020</div>
                        <div className="JobDescription">
                            <ul>
                                <li>Assisted customers with their cellular hardware and software issues such as Connectivity troubleshooting, app installation, and resetting, factory resetting, and iCloud/Google services account troubleshooting</li>
                                <li>Used empathy, effective listening skills, and attention to detail to assist customers with billing issues</li>
                                <li>Worked hard to establish rapport with customers, resulting in a more positive experience</li>
                            </ul>
                        </div>
                        </section>
                        <hr className="HRjobs" />
                        {/* Supra LockBox */}
                        <section className="JobSection">
                        <div className="JobTitle">Tech Support Agent</div>
                        <div className="JobCompany">Butler Aerospace @ Carrier under Supra Lockbox</div>
                        <div className="JobDates">April 2019 - Aug 2019</div>
                        <div className="JobDescription">
                            <ul>
                                <li>Built knowledge of Information Technology Solutions to support customer’s needs</li>
                                <li>Assisted with billing issues, leading to quick resolution and customer satisfaction</li>
                                <li>Assisted customers with technical issues with Real Estate specific apps (iOS and Android) and handheld devices</li>
                            </ul>
                        </div>
                        </section>
                        <hr className="HRjobs" />
                        {/* SimpliSafe */}
                        <section className="JobSection">
                        <div className="JobTitle">Tech Support Agent</div>
                        <div className="JobCompany">Aerotek @ SimpliSafe</div>
                        <div className="JobDates">Oct 2018 - Feb 2019</div>
                        <div className="JobDescription">
                            <ul>
                                <li>Provided direct customer support on SimpliSafe products</li>
                                <li>Assisted customers with purchases and technical support with SimpliSafe products</li>
                                <li>Assisted troubleshooting connectivity issues and app issues plus teaching customers on how to use</li>
                            </ul>
                        </div>
                        </section>
                        {/* AppleCare */}
                        <hr className="HRjobs" />
                        <section className="JobSection">
                        <div className="JobTitle">Tech Support Advisor</div>
                        <div className="JobCompany">AppleCare Call Center</div>
                        <div className="JobDates">Jan 2020 - Jan 2020</div>
                        <div className="JobDescription">
                            <ul>
                                <li>Promoted to Apple Support macOS and iOS Tier 1 within three months of starting in the iOS Tier 1 role, due to exceptional performance and consistently exceeding performance metrics</li>
                                <li>Provided high-quality technical support to customers exclusively via phone during the launch of iOS 10 and macOS 10.12 Sierra, demonstrating excellent communication skills and the ability to adapt to different customer communication styles.</li>
                                <li>Utilized advanced diagnostic tools and expert product knowledge to troubleshoot and resolve complex technical issues related to both macOS and iOS operating systems, hardware, and software</li>
                                <li>Demonstrated a deep understanding of Apple products and services, enabling effective customer education and guidance on best practices for product usage and maintenance.</li>
                                <li>Collaborated effectively with cross-functional teams to identify and escalate product issues, ensuring timely resolution and customer satisfaction</li>
                            </ul>
                        </div>
                        </section>
                        {/* job listing template
                        <hr className="HRjobs" />
                        <section className="JobSection">
                        <div className="JobTitle">Job6</div>
                        <div className="JobCompany">Company</div>
                        <div className="JobDates">Jan 2020 - Jan 2020</div>
                        <div className="JobDescription">
                            <ul>
                                <li>Skill1</li>
                                <li>Skill2</li>
                                <li>Skill3</li>
                            </ul>
                        </div>
                        </section> */}
                    </div>
                </div>
                <div>
                    <div className="SectionHeader">Personal Experience</div>
                    <div className="SectionContent">
                        <div className="Certificates">
                            <div className="CertHeader">Certificates</div>
                            <div className="CertSection">
                                <a href=''><div className='CertTitle'>CompTIA A+ Certification – CompTIA Virtual Tech Support Program<BoxArrowUpRight size="16" /></div></a>
                                <div className='CertDate'>Exp April 2024</div>
                            </div>
                            <div className="CertSection">
                                <a href='https://learn.nexthink.com/c/071gGxwWTf6ZEONwZSCsdA' target='_blank'><div className='CertTitle'>NexThink Infinite Fundamentals<BoxArrowUpRight size="16" /></div></a>
                                <div className='CertDate'>Exp Dec 2023</div>
                            </div>
                            <div className="CertSection">
                                <a href='https://www.udemy.com/certificate/UC-4c3d053b-c9b8-4c03-86c0-ba00f74d71e8/' target='_blank'><div className='CertTitle'>Master Prompt Engineering with ChatGPT<BoxArrowUpRight size="16" /></div></a>
                                <div className='CertDate'>Feb 2023</div>
                            </div>
                            <div className="CertSection">
                                <a href='https://freecodecamp.org/certification/atlessc/responsive-web-design' target='_blank'><div className="CertTitle">FreeCodeCamp's Responsive Web Design Certificate<BoxArrowUpRight size="16" /></div></a>
                                <div className='CertDate'>Jan 2023</div>
                            </div>
                            <div className="CertSection">
                                <a href='https://www.sololearn.com/Certificate/1023-61766/pdf/' target='_blank'><div className='CertTitle'>SoloLearn Theoretical Understanding of CSS Certificate<BoxArrowUpRight size="16" /></div></a>
                                <div className='CertDate'>Dec 2022</div>
                            </div>
                            <div className="CertSection">
                                <a href='https://www.sololearn.com/certificates/CT-GGJRCXKJ' target='_blank'><div className='CertTitle'>SoloLearn Theoretical Understanding of HTML Certificate<BoxArrowUpRight size="16" /></div></a>
                                <div className='CertDate'>Dec 2022</div>
                            </div>
                            <div className="CertSection">
                                <a href='https://www.sololearn.com/certificates/course/en/61766/1024/landscape/png' target='_blank'><div className='CertTitle'>SoloLearn Theoretical Understanding of JavaScript Certificate<BoxArrowUpRight size="16" /></div></a>
                                <div className='CertDate'>Dec 2022</div>
                            </div>
                            <div className="CertSection">
                                <a href='https://www.sololearn.com/Certificate/1097-61766/pdf/' target='_blank'><div className='CertTitle'>SoloLearn Theoretical Understanding of React + Redux Certificate<BoxArrowUpRight size="16" /></div></a>
                                <div className='CertDate'>Dec 2022</div>
                            </div>
                            <div className="CertSection">
                                <a href='https://www.sololearn.com/Certificate/1162-61766/pdf/' target='_blank'><div className='CertTitle'>SoloLearn Theoretical Understanding of Responsive Web Design Certificate<BoxArrowUpRight size="16" /></div></a>
                                <div className='CertDate'>Dec 2022</div>
                            </div>
                            <div className="CertSection">
                                <a href='https://www.sololearn.com/Certificate/1141-61766/pdf/' target='_blank'><div className='CertTitle'>SoloLearn Theoretical Understanding of Web Dev Fundamentals Certificate<BoxArrowUpRight size="16" /></div></a>
                                <div className='CertDate'>Exp Dec 2023</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSection />
        </div>
    )
}