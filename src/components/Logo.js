import ReactLogoPath from '../images/logo512.png'

export default function Logo () {
    return (
        <div className='logo__body'>
            <img className='logo__image' src={ReactLogoPath} alt='react logo'/>
            <p className='logo__heading'>ReactFacts</p>
        </div>
    );
};
