export const Categories = [
    {
        "name": "Electronic Device",
        "label": "Electronic Device",
        "rank": "1",
        "key_product_information": [
            {
                "field_name": "Battery Capacity (mAh)",
                "field_label": "Battery Capacity (mAh)",
                "field_type": "select",
                "is_required": true,
            }
        ],
        "sku_types": [
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
                "field_name": "Size",
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
                    }
                ]
            },
        ],
        "child_category": [
            {}
        ]
    }
]
