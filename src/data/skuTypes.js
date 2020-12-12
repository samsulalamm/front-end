export const skuTypes = [
    {
        "field_name": "Color",
        "field_label": "Color",
        "field_type": "select",
        "is_required": true,
        "info": "Some details",
        "inputs": [
            {
                "field_name": "Image",
                "field_label": "Image",
                "field_type": "file",
                "is_required": true,
            }
        ]
    },
    {
        "field_name": "Size Type",
        "field_label": "Size",
        "field_type": "select",
        "is_required": true,
        "info": "Some details",
        "inputs": [
            {
                "field_name": "Size",
                "field_label": "Size",
                "field_type": "Multiselect",
                "is_required": true,
                "values": [
                    "EU", "JP", "UK", "CN", "US", "Other"
                ]
            }
        ]
    },
]
