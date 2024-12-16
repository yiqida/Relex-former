export const TypeSchema = {
    ruleType: 'Type',
    label: '类型',
    type: '',
    message: '',
    checked: true,
    trigger: ['blur', 'change']
}
export const RequiredSchema = {
    ruleType: 'Required',
    label: '必选',
    required: true,
    message: '',
    checked: true,
    trigger: ['blur', 'change']
}

export const PatternSchema = {
    ruleType: 'Pattern',
    label: '正则',
    pattern: '',
    message: '',
    checked: false,
    trigger: ['blur', 'change']
}

export const RangeSchema = {
    ruleType: 'Range',
    label: '范围',
    min: 0,
    max: 0,
    message: '',
    checked: false,
    trigger: ['blur', 'change']
}

export const LengthSchema = {
    ruleType: 'Length',
    label: '固定长度',
    len: 0,
    message: '',
    checked: false,
    trigger: ['blur', 'change']
}

export const validatorSchema = {
    ruleType: 'validator',
    label: '函数',
    validator: '',
    checked: false,
    trigger: ['blur', 'change']
}

export const ruleArr = [
    RequiredSchema,
    TypeSchema,
    PatternSchema,
    RangeSchema,
    LengthSchema,
    validatorSchema
]
