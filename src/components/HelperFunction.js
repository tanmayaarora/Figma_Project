export const setPageSettingsValue = (id, pageSettings, setPageSettings) => {
    let settings = pageSettings;
    console.log("Id in setPageSettingsValue ", id);
    switch (id) {
        case "Design-1":
            let updatedValue1 = { "desType1": settings["desType1"] - 1 };
            setPageSettings(pageSetting => ({
                ...pageSetting,
                ...updatedValue1
            }));
            break;
        case "Design-2":
            let updatedValue2 = { "desType1": settings["desType1"] + 1 };
            setPageSettings(pageSetting => ({
                ...pageSetting,
                ...updatedValue2
            }));
            break;
        case "Design-3":
            let updatedValue3 = { "desType2": settings["desType2"] - 1 };
            setPageSettings(pageSetting => ({
                ...pageSetting,
                ...updatedValue3
            }));
            break;
        case "Design-4":
            let updatedValue4 = { "desType2": settings["desType2"] + 1 };
            setPageSettings(pageSetting => ({
                ...pageSetting,
                ...updatedValue4
            }));
            break;
        case "Design-5":
            let updatedValue5 = { "desType3": settings["desType3"] - 1 };
            setPageSettings(pageSetting => ({
                ...pageSetting,
                ...updatedValue5
            }));
            break;
        case "Design-6":
            let updatedValue6 = { "desType3": settings["desType3"] + 1 };
            setPageSettings(pageSetting => ({
                ...pageSetting,
                ...updatedValue6
            }));
            break;
        case "Design-7":
            let updatedValue7 = { "desType4": settings["desType4"] - 1 };
            setPageSettings(pageSetting => ({
                ...pageSetting,
                ...updatedValue7
            }));
            break;
        case "Design-8":
            let updatedValue8 = { "desType4": settings["desType4"] + 1 };
            setPageSettings(pageSetting => ({
                ...pageSetting,
                ...updatedValue8
            }));
            break;
        case "Design-9":
            let updatedValue9 = { "desType5": settings["desType5"] - 1 };
            setPageSettings(pageSetting => ({
                ...pageSetting,
                ...updatedValue9
            }));
            break;
        case "Design-10":
            let updatedValue10 = { "desType5": settings["desType5"] + 1 };
            setPageSettings(pageSetting => ({
                ...pageSetting,
                ...updatedValue10
            }));
            break;
        case "Interactions & Animations-2":
            let updatedValue11 = { "interAndAnim1": settings["interAndAnim1"] - 1 };
            setPageSettings(pageSetting => ({
                ...pageSetting,
                ...updatedValue11
            }));
            break;
            case "Interactions & Animations-3":
                let updatedValue12 = { "interAndAnim1": settings["interAndAnim1"] + 1 };
                setPageSettings(pageSetting => ({
                    ...pageSetting,
                    ...updatedValue12
                }));
                break;
                case "Interactions & Animations-4":
            let updatedValue13 = { "interAndAnim2": settings["interAndAnim2"] - 1 };
            setPageSettings(pageSetting => ({
                ...pageSetting,
                ...updatedValue13
            }));
            break;
            case "Interactions & Animations-5":
                let updatedValue14 = { "interAndAnim2": settings["interAndAnim2"] + 1 };
                setPageSettings(pageSetting => ({
                    ...pageSetting,
                    ...updatedValue14
                }));
                break;
                case "Interactions & Animations-6":
            let updatedValue15 = { "interAndAnim3": settings["interAndAnim3"] - 1 };
            setPageSettings(pageSetting => ({
                ...pageSetting,
                ...updatedValue15
            }));
            break;
            case "Interactions & Animations-7":
                let updatedValue16 = { "interAndAnim3": settings["interAndAnim3"] + 1 };
                setPageSettings(pageSetting => ({
                    ...pageSetting,
                    ...updatedValue16
                }));
                break;
                case "Interactions & Animations-8":
            let updatedValue17 = { "interAndAnim4": settings["interAndAnim4"] - 1 };
            setPageSettings(pageSetting => ({
                ...pageSetting,
                ...updatedValue17
            }));
            break;
            case "Interactions & Animations-9":
                let updatedValue18 = { "interAndAnim4": settings["interAndAnim4"] + 1 };
                setPageSettings(pageSetting => ({
                    ...pageSetting,
                    ...updatedValue18
                }));
                break;
                case "Interactions & Animations-10":
            let updatedValue19 = { "interAndAnim5": settings["interAndAnim5"] - 1 };
            setPageSettings(pageSetting => ({
                ...pageSetting,
                ...updatedValue19
            }));
            break;
            case "Interactions & Animations-11":
                let updatedValue20 = { "interAndAnim5": settings["interAndAnim5"] + 1 };
                setPageSettings(pageSetting => ({
                    ...pageSetting,
                    ...updatedValue20
                }));
                break;
        case "Integration-3":
            let updatedValue21 = { "integType1": settings["integType1"] - 1 };
            setPageSettings(pageSetting => ({
                ...pageSetting,
                ...updatedValue21
            }));
            break;
        case "Integration-4":
            let updatedValue22 = { "integType1": settings["integType1"] + 1 };
            setPageSettings(pageSetting => ({
                ...pageSetting,
                ...updatedValue22
            }));
            break;
            case "Integration-5":
            let updatedValue23 = { "integType2": settings["integType2"] - 1 };
            setPageSettings(pageSetting => ({
                ...pageSetting,
                ...updatedValue23
            }));
            break;
        case "Integration-6":
            let updatedValue24 = { "integType2": settings["integType2"] + 1 };
            setPageSettings(pageSetting => ({
                ...pageSetting,
                ...updatedValue24
            }));
            break;
            case "Integration-7":
            let updatedValue25 = { "integType3": settings["integType3"] - 1 };
            setPageSettings(pageSetting => ({
                ...pageSetting,
                ...updatedValue25
            }));
            break;
        case "Integration-8":
            let updatedValue26 = { "integType3": settings["integType3"] + 1 };
            setPageSettings(pageSetting => ({
                ...pageSetting,
                ...updatedValue26
            }));
            break;
            case "Integration-9":
            let updatedValue27 = { "integType4": settings["integType4"] - 1 };
            setPageSettings(pageSetting => ({
                ...pageSetting,
                ...updatedValue27
            }));
            break;
        case "Integration-10":
            let updatedValue28 = { "integType4": settings["integType4"] + 1 };
            setPageSettings(pageSetting => ({
                ...pageSetting,
                ...updatedValue28
            }));
            break;
            case "Integration-11":
            let updatedValue29 = { "integType5": settings["integType5"] - 1 };
            setPageSettings(pageSetting => ({
                ...pageSetting,
                ...updatedValue29
            }));
            break;
        case "Integration-12":
            let updatedValue30 = { "integType5": settings["integType5"] + 1 };
            setPageSettings(pageSetting => ({
                ...pageSetting,
                ...updatedValue30
            }));
    }
}