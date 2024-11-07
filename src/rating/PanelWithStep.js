import { Formio } from 'formiojs';
import './PanelWithStep.css';

const Panel = Formio.Components.components.panel;

export default class PanelWithStep extends Panel {
    static schema(...extend) {
        return Panel.schema({
            type: 'panelWithStep',
            label: 'Step Panel',
            key: 'stepPanel',
            stepNumber: 1,
            components: [],
            allowDrop: true,
            ...extend
        });
    }

    static editForm() {
        const editForm = Panel.editForm();
        let displayTab = editForm.components.find(tab => tab.key === 'display');
        if (!displayTab) {
            displayTab = {
                key: 'display',
                components: []
            };
            editForm.components.push(displayTab);
        }
        displayTab.components.push({
            type: 'number',
            label: 'Step Number',
            key: 'stepNumber',
            input: true,
            defaultValue: 1,
            validate: {
                required: true
            }
        });
        return editForm;
    }

    static get builderInfo() {
        return {
            title: 'Collapsible Panel with Step',
            icon: 'list-alt',
            group: 'layout',
            documentation: '/userguide/#panel',
            weight: 0,
            schema: PanelWithStep.schema()
        };
    }

    constructor(component, options, data) {
        super(component, options, data);
        this.isCollapsed = true;
        this.allowDrop = true;
        this.noDragDrop = false;
        this.component.allowDrop = true;
    }

    render(content) {
        const stepNumber = this.component.stepNumber || 1;
        const stepLabel = `
            <div class="step-label">
                <div class="step-number">${stepNumber}</div>
                <span>${this.component.label || "Step Panel"}</span>
            </div>
            <div class="toggle-icon" style="transform: ${this.isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)'};">
                ▼
            </div>
        `;
        const contentDisplay = this.isCollapsed ? 'none' : 'block';
        return super.render(`
            <div class="panel-with-step builder-component">
                <div ref="header" class="header">${stepLabel}</div>
                <div ref="panelContent" class="panel-content" style="display: ${contentDisplay};">
                    <div ref="childContainer" class="child-components-container">
                        ${this.renderComponents(this.component.components.map(comp => Formio.Components.create(comp)))}
                    </div>
                </div>
            </div>
        `);
    }

    attach(element) {
        this.loadRefs(element, {
            header: 'single',
            panelContent: 'single',
            childContainer: 'single'
        });

        this.refs.header.addEventListener('click', () => {
            this.isCollapsed = !this.isCollapsed;
            this.refs.panelContent.style.display = this.isCollapsed ? 'none' : 'block';
            const iconElement = this.refs.header.querySelector('.toggle-icon');
            iconElement.style.transform = this.isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)';
        });

        const childComponentInstances = this.component.components.map(comp => Formio.Components.create(comp));
        const result = super.attach(element);
        this.attachComponents(this.refs.childContainer, childComponentInstances);

        return result;
    }

    addComponent(component, element, data, before, replace) {
        const newComponent = super.addComponent(component, this.refs.childContainer, data, before, replace);
        return newComponent;
    }

    detach() {
        if (this.refs.header) {
            this.refs.header.removeEventListener('click', this.togglePanel);
        }
        return super.detach();
    }
}
