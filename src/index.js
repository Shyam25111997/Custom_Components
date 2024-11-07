import { Formio } from 'formiojs';
import PanelWithStep from './rating/PanelWithStep';

Formio.use([
    {
        components: {
            panelWithStep: PanelWithStep
        }
    }
])

Formio.builder(document.getElementById("builder"), {}, {
    sanitizeConfig: {
        addTags: ["svg", "path"],
        addAttr: ["d", "viewBox"]
    }
}).then(() => {

});


Formio.createForm(document.getElementById('formio'), {
    components: [
        {
            type: 'panelWithStep',
            label: 'Step 1',
            stepNumber: 1,
            components: []
        }
    ]
});


