const Header = () => {
    return (
        <div className="App-header">
            <div className="margin-left-right">
                <b className='large-font-size'>5</b> Pages
            </div>
            <div className="margin-left-right">
                <div>
                    <b className='large-font-size'>$300</b>
                </div>
                <div>Page Design</div>
            </div>
            <div className="margin-left-right">
                <div>
                    <b className='large-font-size'>$200</b>
                </div>
                <div>Interactions & Animations</div>
            </div>
            <div className="margin-left-right">
                <div>
                    <b className='large-font-size'>$100</b>
                </div>
                <div>CMS / Dynamic Data / Integrations</div>
            </div>
            <div className="margin-left-right">
                <div>Sub Total</div>
                <div>
                    <b className='large-font-size'>$800</b>
                </div>
            </div>
        </div>
    );
}

export default Header;