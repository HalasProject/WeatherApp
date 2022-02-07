
import dataimpact from '../../assets/dataimpact.png';
import facebook from "../../assets/social-media/facebook.svg";
import twitter from '../../assets/social-media/twitter.svg';
import github from '../../assets/social-media/github.svg';
import './Footer.scss';

export default function Footer() {

    const socials = [
        {
            title:"Facebook",
            img: facebook,
            link: 'http://www.facebook.com/BentayebSalah'
        },
        {
            title:"Twitter",
            img: twitter,
            link: 'http://www.twitter.com/bentayexbsalah'
        },{
            title:"GitHub",
            img: github,
            link: 'http://www.github.com/halasproject'
        }
    ]
        
    
    return (
        <div className="footer-app w-full mx-16 p-6 bg-slate-50 xs:flex-col md:flex rounded-md justify-around drop-shadow-md flex-nowrap justify-items-center items-start">
            <div className="self-center justify-self-center items-center flex flex-row mb-4 md:mb-0 justify-center">
                {socials.map(social => <a target="_blank" href={social.link} key={social.title} className="flex items-center justify-center mr-6 focus:bg-white w-5"><img src={social.img}/></a>)}
            </div>
            <div className="self-center justify-self-center text-center text-sm mb-4 md:mb-0 ">
                © {new Date().getFullYear()} Salah Bentayeb. All rights reserved.
            </div>
            <div className="self-center justify-self-center flex justify-center">
                <a href="https://dataimpact.io/" target="_blank"><img src={dataimpact} /></a>
            </div>
        </div>)
}

