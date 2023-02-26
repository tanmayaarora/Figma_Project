import { useState } from "react";
import "./Main.css";
import { Fields } from "./TableFields";
import Tooltip from "../Tooltip/Tooltip";
import { setPageSettingsValue } from "../HelperFunction";

const Main = () => {
    const setting = ["None", "Basic", "Advanced", "Complex"];
    const [pageSettings, setPageSettings] = useState(
        {
            "desType1": 3,
            "desType2": 1,
            "desType3": 2,
            "desType4": 1,
            "desType5": 3,
            "interAndAnim1": 2,
            "interAndAnim2": 1,
            "interAndAnim3": 0,
            "interAndAnim4": 1,
            "interAndAnim5": 0,
            "integType1": 0,
            "integType2": 0,
            "integType3": 1,
            "integType4": 0,
            "integType5": 1,
        });
    const colourClass = {
        "None": "bg-grey font-grey",
        "Basic": "bg-aquamarine",
        "Advanced": "bg-mustard",
        "Complex": "bg-coral"
    }
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
                                    setting[field.integrationType1] ? "bg-white rounded-border p-block-5 p-inline-15" : ""}>
                                    {setting[field.designType1] || setting[field.interAndAnimations1] ||
                                        setting[field.integrationType1] ? (
                                        <button
                                            className="bg-white border-white m-right-20"
                                            id={`${field.headingName}-` + index.toString()}
                                            disabled={(field.designType1 ? pageSettings["desType1"] === 0 : field.interAndAnimations1 ? pageSettings["interAndAnim1"] === 0 : pageSettings["integType1"] === 0)}
                                            onClick={() => setPageSettingsValue(`${field.headingName}-` + index.toString(), pageSettings, setPageSettings )}
                                        >
                                            -
                                        </button>
                                    ) : null}
                                    <span className={setting[field.designType1] ? `${colourClass[setting[pageSettings["desType1"]]]} rounded-border p-block-3 p-inline-15` :
                                    setting[field.interAndAnimations1] ? `${colourClass[setting[pageSettings["interAndAnim1"]]]} rounded-border p-block-3 p-inline-15`:
                                        setting[field.integrationType1] ? `${colourClass[setting[pageSettings["integType1"]]]} rounded-border p-block-3 p-inline-15` : ""}
                                        >
                                        {setting[field.designType1] ? setting[pageSettings["desType1"]] : 
                                            setting[field.interAndAnimations1] ? setting[pageSettings["interAndAnim1"]] :
                                            setting[field.integrationType1] ? setting[pageSettings["integType1"]] :
                                            field?.pageName1 || field?.cost1
                                        }
                                    </span>
                                    {setting[field.designType1] || setting[field.interAndAnimations1] ||
                                        setting[field.integrationType1] ? (
                                        <button
                                            className="bg-white border-white m-left-20"
                                            id={`${field.headingName}-` + (index + 1).toString()}
                                            disabled={(field.designType1 ? pageSettings["desType1"] === setting.length - 1 : field.interAndAnimations1 ? pageSettings["interAndAnim1"] === setting.length - 1 : pageSettings["integType1"] === setting.length - 1)}
                                            onClick={() => setPageSettingsValue(`${field.headingName}-` + (index+1).toString(), pageSettings, setPageSettings )}
                                        >
                                            +
                                        </button>
                                    ) : null}
                                </span>
                            </div>
                            <div className="p-block-10">
                                <span className={setting[field.designType2] || setting[field.interAndAnimations2] ||
                                    setting[field.integrationType2] ? "bg-white rounded-border p-block-5 p-inline-15" : ""}>
                                    {setting[field.designType2] || setting[field.interAndAnimations2] ||
                                        setting[field.integrationType2] ? (
                                        <button
                                            className="bg-white border-white m-right-20"
                                            id={`${field.headingName}-` + (index + 2).toString()}
                                            disabled={(field.designType2 ? pageSettings["desType2"] === 0 : field.interAndAnimations2 ? pageSettings["interAndAnim2"] === 0 : pageSettings["integType2"] === 0)}
                                            onClick={() => setPageSettingsValue(`${field.headingName}-` + (index+2).toString(), pageSettings, setPageSettings )}
                                        >
                                            -
                                        </button>
                                    ) : null}
                                    <span className={setting[field.designType2] ? `${colourClass[setting[pageSettings["desType2"]]]} rounded-border p-block-3 p-inline-15` :
                                    setting[field.interAndAnimations2] ? `${colourClass[setting[pageSettings["interAndAnim2"]]]} rounded-border p-block-3 p-inline-15`:
                                        setting[field.integrationType2] ? `${colourClass[setting[pageSettings["integType2"]]]} rounded-border p-block-3 p-inline-15` : ""}>
                                        {setting[field.designType2] ? setting[pageSettings["desType2"]] : setting[field.interAndAnimations2] ? setting[pageSettings["interAndAnim2"]] :
                                            setting[field.integrationType2] ? setting[pageSettings["integType2"]] : field?.pageName2 || field?.cost2}
                                    </span>

                                    {setting[field.designType2] || setting[field.interAndAnimations2] ||
                                        setting[field.integrationType2] ? (
                                        <button
                                            className="bg-white border-white m-left-20"
                                            id={`${field.headingName}-` + (index + 3).toString()}
                                            disabled={(field.designType2 ? pageSettings["desType2"] === setting.length - 1 : field.interAndAnimations2 ? pageSettings["interAndAnim2"] === setting.length - 1 : pageSettings["integType2"] === setting.length - 1)}
                                            onClick={() => setPageSettingsValue(`${field.headingName}-` + (index+3).toString(), pageSettings, setPageSettings )}
                                        >
                                            +
                                        </button>
                                    ) : null}
                                </span>
                            </div>
                            <div className="p-block-10">
                                <span className={setting[field.designType3] || setting[field.interAndAnimations3] ||
                                    setting[field.integrationType3] ? "bg-white rounded-border p-block-5 p-inline-15" : ""}>
                                    {setting[field.designType3] || setting[field.interAndAnimations3] ||
                                        setting[field.integrationType3] ? (
                                        <button
                                            className="bg-white border-white m-right-20"
                                            id={`${field.headingName}-` + (index + 4).toString()}
                                            disabled={(field.designType3 ? pageSettings["desType3"] === 0 : field.integrationType3 ? pageSettings["integType3"] === 0 : pageSettings["interAndAnim3"] === 0)}
                                            onClick={() => setPageSettingsValue(`${field.headingName}-` + (index+4).toString(), pageSettings, setPageSettings )}
                                        >
                                            -
                                        </button>
                                    ) : null}
                                    <span className={setting[field.designType3] ? `${colourClass[setting[pageSettings["desType3"]]]} rounded-border p-block-3 p-inline-15` :
                                    setting[field.interAndAnimations3] ? `${colourClass[setting[pageSettings["interAndAnim3"]]]} rounded-border p-block-3 p-inline-15`:
                                        setting[field.integrationType3] ? `${colourClass[setting[pageSettings["integType3"]]]} rounded-border p-block-3 p-inline-15` : ""}>
                                        {setting[field.designType3] ? setting[pageSettings["desType3"]] : setting[field.interAndAnimations3] ? setting[pageSettings["interAndAnim3"]] :
                                            setting[field.integrationType3] ? setting[pageSettings["integType3"]] : field?.pageName3  || field?.cost3}
                                    </span>
                                    {setting[field.designType3] || setting[field.interAndAnimations3] ||
                                        setting[field.integrationType3] ? (
                                        <button
                                            className="bg-white border-white m-left-20"
                                            id={`${field.headingName}-` + (index + 5).toString()}
                                            disabled={(field.designType3 ? pageSettings["desType3"] === setting.length - 1 : field.integrationType3 ? pageSettings["integType3"] === setting.length - 1 : pageSettings["interAndAnim3"] === setting.length - 1)}
                                            onClick={() => setPageSettingsValue(`${field.headingName}-` + (index+5).toString(), pageSettings, setPageSettings )}
                                        >
                                            +
                                        </button>
                                    ) : null}
                                </span>
                            </div>
                            <div className="p-block-10">
                                <span className={setting[field.designType4] || setting[field.interAndAnimations4] ||
                                    setting[field.integrationType4] ? "bg-white rounded-border p-block-5 p-inline-15" : ""}>
                                    {setting[field.designType4] || setting[field.interAndAnimations4] ||
                                        setting[field.integrationType4] ? (
                                        <button
                                            className="bg-white border-white m-right-20"
                                            id={`${field.headingName}-` + (index + 6).toString()}
                                            disabled={(field.designType4 ? pageSettings["desType4"] === 0 : field.interAndAnimations4 ? pageSettings["interAndAnim4"] === 0 : pageSettings["integType4"] === 0)}
                                            onClick={() => setPageSettingsValue(`${field.headingName}-` + (index+6).toString(), pageSettings, setPageSettings )}
                                        >
                                            -
                                        </button>
                                    ) : null}
                                    <span className={setting[field.designType4] ? `${colourClass[setting[pageSettings["desType4"]]]} rounded-border p-block-3 p-inline-15` :
                                    setting[field.interAndAnimations4] ? `${colourClass[setting[pageSettings["interAndAnim4"]]]} rounded-border p-block-3 p-inline-15`:
                                        setting[field.integrationType4] ? `${colourClass[setting[pageSettings["integType4"]]]} rounded-border p-block-3 p-inline-15` : ""}>
                                        {setting[field.designType4] ? setting[pageSettings["desType4"]]: setting[field.interAndAnimations4] ? setting[pageSettings["interAndAnim4"]] :
                                            setting[field.integrationType4] ? setting[pageSettings["integType4"]] : field?.pageName4 || field?.cost4}
                                    </span>
                                    {setting[field.designType4] || setting[field.interAndAnimations4] ||
                                        setting[field.integrationType4] ? (
                                        <button
                                            className="bg-white border-white m-left-20"
                                            id={`${field.headingName}-` + (index + 7).toString()}
                                            disabled={(field.designType4 ? pageSettings["desType4"] === setting.length - 1 : field.interAndAnimations4 ? pageSettings["interAndAnim4"] === setting.length - 1 : pageSettings["integType4"] === setting.length - 1)}
                                            onClick={() => setPageSettingsValue(`${field.headingName}-` + (index+7).toString(), pageSettings, setPageSettings )}
                                        >
                                            +
                                        </button>
                                    ) : null}
                                </span>
                            </div>
                            <div className="p-block-10">
                                <span className={setting[field.designType5] || setting[field.interAndAnimations5] ||
                                    setting[field.integrationType5] ? "bg-white rounded-border p-block-5 p-inline-15" : ""}>
                                    {setting[field.designType5] || setting[field.interAndAnimations5] ||
                                        setting[field.integrationType5] ? (
                                        <button
                                            className="bg-white border-white m-right-20"
                                            id={`${field.headingName}-` + (index + 8).toString()}
                                            disabled={(field.designType5 ? pageSettings["desType5"] === 0 : field.integrationType5 ? pageSettings["integType5"] === 0 : pageSettings["interAndAnim5"] === 0)}
                                            onClick={() => setPageSettingsValue(`${field.headingName}-` + (index+8).toString(), pageSettings, setPageSettings )}
                                        >
                                            -
                                        </button>
                                    ) : null}
                                    <span className={setting[field.designType5] ? `${colourClass[setting[pageSettings["desType5"]]]} rounded-border p-block-3 p-inline-15` :
                                    setting[field.interAndAnimations5] ? `${colourClass[setting[pageSettings["interAndAnim5"]]]} rounded-border p-block-3 p-inline-15`:
                                        setting[field.integrationType5] ? `${colourClass[setting[pageSettings["integType5"]]]} rounded-border p-block-3 p-inline-15` : ""}>
                                        {setting[field.designType5] ? setting[pageSettings["desType5"]]: setting[field.interAndAnimations5] ? setting[pageSettings["interAndAnim5"]] :
                                            setting[field.integrationType5] ? setting[pageSettings["integType5"]] : field?.pageName5 || field?.cost5}
                                    </span>
                                    {setting[field?.designType5] || setting[field?.interAndAnimations5] ||
                                        field.integrationType5 ? (
                                        <button
                                            className="bg-white border-white m-left-20"
                                            id={`${field.headingName}-` + (index + 9).toString()}
                                            disabled={(field.designType5 ? pageSettings["desType5"] === setting.length - 1 : field.integrationType5 ? pageSettings["integType5"] === setting.length - 1 : pageSettings["interAndAnim5"] === setting.length - 1)}
                                            onClick={() => setPageSettingsValue(`${field.headingName}-` + (index+9).toString(), pageSettings, setPageSettings )}
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