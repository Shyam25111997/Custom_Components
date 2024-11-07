export default [
    {
        type: 'textfield',
        key: 'label',
        label: 'Panel Label',
        input: true,
        placeholder: 'Enter panel label',
        tooltip: 'The label displayed on the panel header'
    },
    {
        type: 'number',
        key: 'stepNumber',
        label: 'Step Number',
        input: true,
        defaultValue: 1,
        tooltip: 'The step number shown on the panel. This adjusts dynamically in the form'
    },
    {
        type: 'checkbox',
        key: 'collapsible',
        label: 'Collapsible',
        input: true,
        defaultValue: true,
        tooltip: 'Enable to make the panel collapsible'
    },
    {
        type: 'checkbox',
        key: 'collapsed',
        label: 'Initially Collapsed',
        input: true,
        defaultValue: true,
        tooltip: 'Sets the panel to start collapsed if collapsible is enabled'
    },
    {
        type: 'textfield',
        key: 'iconSize',
        label: 'Icon Size',
        input: true,
        defaultValue: '25px',
        tooltip: 'Size of the icon shown on the panel, e.g., "25px"'
    },
    {
        type: 'textfield',
        key: 'filledIconColor',
        label: 'Filled Icon Color',
        input: true,
        placeholder: '#00FF00',
        tooltip: 'Color of the icon when filled (e.g., when a step is completed)'
    },
    {
        type: 'textfield',
        key: 'unfilledIconColor',
        label: 'Unfilled Icon Color',
        input: true,
        placeholder: '#CCCCCC',
        tooltip: 'Color of the icon when unfilled (e.g., when a step is not completed)'
    },
    {
        type: 'textarea',
        key: 'icon',
        label: 'Icon (SVG or Font Awesome)',
        input: true,
        placeholder: '<i class="fa fa-star"></i> or SVG',
        tooltip: 'Specify an SVG or Font Awesome icon for the panel'
    },
    {
        type: 'textfield',
        key: 'customClass',
        label: 'Custom CSS Class',
        input: true,
        placeholder: 'my-custom-panel',
        tooltip: 'Apply custom styling to the panel by specifying a CSS class'
    },
    {
        type: 'textarea',
        key: 'customStyle',
        label: 'Custom Style',
        input: true,
        placeholder: 'background-color: #f5f5f5; padding: 10px;',
        tooltip: 'Apply custom inline styles to the panel'
    },
];
