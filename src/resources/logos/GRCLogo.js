import logo from './GRC_Logo-Green.webp';
import '../../styles/GRCLogo.css';

export default function GRCLogo({ className = '' }) {
  return (
    <a href='https://www.greenriver.edu/' target='_blank' rel='noreferrer' title='Green River College'>
      <img className={"grc-logo" + className} src={logo} alt='Green River College Logo' />
    </a>
  );
}