import "./Main.css";
import { Fields } from "./TableFields";
import Tooltip from "../Tooltip/Tooltip";

const Main = () => {
    const setting = ["None", "Basic", "Advanced", "Complex"];
    return (
        <>
        <div className="main">
        {Fields.map((field, index) => {
                return (
                    <div className="adjust-margin">
                    <div>
                        <b id={index.toString()}>
                            {field?.headingName}
                            <Tooltip content={field?.headingName}>
                            <span className="info-circle">i</span>
                            </Tooltip>
                        </b>
                    </div>
                    <div className="p-block-10">
                        <span className={setting[field.designType1] || setting[field.interAndAnimations1] ||
                        setting[field.integrationType1] ? "bg-white rounded-border" : ""}>
                            {setting[field.designType1] || setting[field.interAndAnimations1] ||
                        setting[field.integrationType1] ? (
                        <button
                        className="bg-white border-white m-right-25"
                        id={`${field.headingName}-`+index.toString()}
                        disabled={!(field?.designType1 || field?.interAndAnimations1 || field?.integrationType1)}
                        >
                            -
                        </button> 
        ) : null}
                        {field?.pageName1 || setting[field.designType1] || setting[field.interAndAnimations1] ||
                        setting[field.integrationType1] || field?.cost1}
                        {setting[field.designType1] || setting[field.interAndAnimations1] ||
                        setting[field.integrationType1] ? (
                        <button
                        className="bg-white border-white m-left-25"
                        id={`${field.headingName}-`+(index+1).toString()}
                        disabled={(field?.designType1 === setting.length - 1 || field?.interAndAnimations1 === setting.length - 1 || field?.integrationType1 === setting.length - 1)}
                        >
                            +
                        </button> 
        ) : null}
                        </span>
                    </div>
                    <div className="p-block-10">
                        <span className={setting[field.designType2] || setting[field.interAndAnimations2] ||
                        setting[field.integrationType2] ? "bg-white rounded-border" : ""}>
                            {setting[field.designType2] || setting[field.interAndAnimations2] ||
                        setting[field.integrationType2] ? (
                        <button
                        className="bg-white border-white m-right-25"
                        id={`${field.headingName}-`+(index+2).toString()}
                        disabled={!(field?.designType2 || field?.interAndAnimations2 || field?.integrationType2)}
                        >
                            -
                        </button>
        ) : null}
                        {field?.pageName2 || setting[field.designType2] || setting[field.interAndAnimations2] ||
                        setting[field.integrationType2] || field?.cost2}
                        {setting[field.designType2] || setting[field.interAndAnimations2] ||
                        setting[field.integrationType2] ? (
                        <button
                        className="bg-white border-white m-left-25"
                        id={`${field.headingName}-`+(index+3).toString()}
                        disabled={(field?.designType2 === setting.length - 1 || field?.interAndAnimations2 === setting.length - 1 || field?.integrationType2 === setting.length - 1)}
                        >
                            +
                        </button>
        ) : null}
                        </span>
                    </div>
                    <div className="p-block-10">
                        <span className={setting[field.designType3] || setting[field.interAndAnimations3] ||
                        setting[field.integrationType3] ? "bg-white rounded-border" : ""}>
                            {setting[field.designType3] || setting[field.interAndAnimations3] ||
                        setting[field.integrationType3] ? (
                        <button
                        className="bg-white border-white m-right-25"
                        id={`${field.headingName}-`+(index+4).toString()}
                        disabled={!(field?.designType3 || field?.interAndAnimations3 || field?.integrationType3)}
                        >
                            -
                        </button>
        ) : null}
                        {field?.pageName3 || setting[field.designType3] || setting[field.interAndAnimations3] ||
                        setting[field.integrationType3] || field?.cost3}
                        {setting[field.designType3] || setting[field.interAndAnimations3] ||
                        setting[field.integrationType3] ? (
                        <button
                        className="bg-white border-white m-left-25"
                        id={`${field.headingName}-`+(index+5).toString()}
                        disabled={(field?.designType3 === setting.length - 1 || field?.interAndAnimations3 === setting.length - 1 || field?.integrationType3 === setting.length - 1)}
                        >
                            +
                        </button>
        ) : null}
                        </span>
                    </div>
                    <div className="p-block-10">
                        <span className={setting[field.designType4] || setting[field.interAndAnimations4] ||
                        setting[field.integrationType4] ? "bg-white rounded-border" : ""}>
                            {setting[field.designType4] || setting[field.interAndAnimations4] ||
                        setting[field.integrationType4] ? (
                        <button
                        className="bg-white border-white m-right-25"
                        id={`${field.headingName}-`+(index+6).toString()}
                        disabled={!(field?.designType4 || field?.interAndAnimations4 || field?.integrationType4)}
                        >
                            -
                        </button>
        ) : null}
                        {field?.pageName4 || setting[field.designType4] || setting[field.interAndAnimations4] ||
                        setting[field.integrationType4] || field?.cost4}
                        {setting[field.designType4] || setting[field.interAndAnimations4] ||
                        setting[field.integrationType4] ? (
                        <button
                        className="bg-white border-white m-left-25"
                        id={`${field.headingName}-`+(index+7).toString()}
                        disabled={(field?.designType4 === setting.length - 1 || field?.interAndAnimations4 === setting.length - 1 || field?.integrationType4 === setting.length - 1)}
                        >
                            +
                        </button>
        ) : null}
                        </span>
                    </div>
                    <div className="p-block-10">
                        <span className={setting[field.designType5] || setting[field.interAndAnimations5] ||
                        setting[field.integrationType5] ? "bg-white rounded-border" : ""}>
                            {setting[field.designType5] || setting[field.interAndAnimations5] ||
                        setting[field.integrationType5] ? (
                        <button
                        className="bg-white border-white m-right-25"
                        id={`${field.headingName}-`+(index+8).toString()}
                        disabled={!(field?.designType5 || field?.interAndAnimations5 || field?.integrationType5)}
                        >
                            -
                        </button>
        ) : null}
                        {field?.pageName5 || setting[field.designType5] || setting[field.interAndAnimations5] ||
                        setting[field.integrationType5] || field?.cost5}
                        {setting[field?.designType5] || setting[field?.interAndAnimations5] ||
                        field.integrationType5 ? (
                        <button
                        className="bg-white border-white m-left-25"
                        id={`${field.headingName}-`+(index+9).toString()}
                        disabled={(field?.designType5 === setting.length - 1 || field?.interAndAnimations5 === setting.length - 1 || field?.integrationType5 === setting.length - 1)}
                        >
                            +
                        </button>
        ) : null}
                        </span>
                    </div>
                    </div>
                );
            })}
        </div>
        </>
    );
}

export default Main;