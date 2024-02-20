import React, {useState} from 'react';
import SimpleButton from "../../Buttons/SimpleButton";
import User from "./User/User";
import Admin from "./Admin/Admin";
import './Internal.css'


const Internal = () => {

    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleClick = async (component) => {
        setSelectedComponent(component);
    }

    const handleReload = () => {
        window.location.reload();
    }


    return (
        <div className="internal">
            <SimpleButton onClick={() => handleReload()}>Reload</SimpleButton>
            {selectedComponent === null && (
                <div className="internal-buttons">
                    <SimpleButton onClick={() => handleClick('User')}>User</SimpleButton>
                    <SimpleButton onClick={() => handleClick('Admin')}>Admin</SimpleButton>
                </div>
            )}

            {selectedComponent === 'User' && <User />}
            {selectedComponent === 'Admin' && <Admin />}

        </div>
    )
}

export default Internal;