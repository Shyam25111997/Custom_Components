// import { Formio } from "formiojs";
import PanelWithStepEditDisplay from "./editForm/PanelWithStep.edit.display.js";

export default function (...extend) {
    return Formio.Components.baseEditForm([
        {
            key: 'data',
            ignore: true,
        },
        {
            key: 'display',
            components: PanelWithStepEditDisplay
        },
        {
            key: 'validation',
            ignore: true
        }
    ], ...extend);
}
