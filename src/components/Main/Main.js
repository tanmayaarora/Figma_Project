import "./Main.css";
import { Fields } from "./TableFields";
import Tooltip from "../Tooltip/Tooltip";

const Main = () => {
    return (
        <>
        <div className="main">
        {Fields.map((field, index) => {
                return (
                    <div className="adjust-margin">
                    <div>
                        <b id={index.toString()}>
                            {field.headingName}
                            <Tooltip content={field.headingName}>
                            <span className="info-circle">i</span>
                            </Tooltip>
                        </b>
                    </div>
                    <div className="p-block-10">
                        {field?.pageName1 || field?.designType1 || field?.interAndAnimations1 ||
                        field?.integrationType1 || field?.cost1}
                    </div>
                    <div className="p-block-10">
                        {field?.pageName2 || field?.designType2 || field?.interAndAnimations2 ||
                        field?.integrationType2 || field?.cost2}
                    </div>
                    <div className="p-block-10">
                        {field?.pageName3 || field?.designType3 || field?.interAndAnimations3 ||
                        field?.integrationType3 || field?.cost3}
                    </div>
                    <div className="p-block-10">
                        {field?.pageName4 || field?.designType4 || field?.interAndAnimations4 ||
                        field?.integrationType4 || field?.cost4}
                    </div>
                    <div className="p-block-10">
                        {field?.pageName5 || field?.designType5 || field?.interAndAnimations5 ||
                        field?.integrationType5 || field?.cost5}
                    </div>
                    </div>
                );
            })}
        </div>
        </>
    );
}

export default Main;