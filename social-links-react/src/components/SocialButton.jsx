const SocialButton = ({textLabel, url = '#'}) => (
        <div tabIndex={0} className="social-button" onClick={() => window.open(url, "_blank")}>
            {textLabel}
        </div>
)
 
export default SocialButton;