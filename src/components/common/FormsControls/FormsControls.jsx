import { Checkbox, FormControlLabel, TextField, Typography } from '@material-ui/core'
import React from 'react'
import s from './FormsControls.module.css'

// const FormsControl = (Component) => ({ input, meta, ...props }) => {
//     return <div className={s.customTextarea + ' ' + (meta.error && meta.touched ? s.error : '')}>
//         <Component {...input} {...props} />
//         {meta.error && meta.touched && <span>{meta.error}</span>}
//     </div>
// }

// export const Textarea = FormsControl('textarea')

// export const Input = FormsControl('input')

// export const Input = ({ input, meta, ...props }) => {
//     // return <div className={s.customTextarea + ' ' + (meta.error && meta.touched ? s.error : '')}>
//     //     <input {...input} {...props} />
//     //     {meta.error && meta.touched && <span>{meta.error}</span>}
//     // </div>
//     return meta.error && meta.touched
//         ? <TextField {...input} error label="Error" type="password" helperText="Incorrect entry." />
//         : <TextField {...input} label="Password" type="password" />
// }

export const Textarea = ({ input, meta, ...props }) => {

    return <div className={s.customTextarea + ' ' + (meta.error && meta.touched ? s.error : '')}>
        <textarea {...input} {...props} />
        {meta.error && meta.touched && <Typography color='error' variant='caption'>{meta.error}</Typography>}
    </div>
}

export const InputPassword = ({ input, meta, ...props }) => {
    return meta.error && meta.touched
        ? <TextField {...input} error label="Error" type="password" helperText={meta.error} />
        : <TextField {...input} label="Password" type="password" />
}

export const InputEmail = ({ input, meta, ...props }) => {
    return meta.error && meta.touched
        ? <TextField {...input} error label="Error" type="text" helperText={meta.error} />
        : <TextField {...input} label="Email" type="text" />
}

export const Input = ({ input, meta, label, ...props }) => {
    return meta.error && meta.touched
        ? <TextField {...input} {...props} error label='Error' helperText={meta.error} />
        : <TextField {...input} {...props} label={label} />
}

export const InputLoginCheckbox = ({ input, meta, ...props }) => {
    return <FormControlLabel
        label={<Typography variant='subtitle1'>I agree with rules</Typography>}
        control={<Checkbox {...input} color="primary" />}
    />
}

export const InputProfileInfoCheckbox = ({ input, meta }) => {
    return <FormControlLabel
        label={<Typography variant='subtitle1'>Looking for a job?</Typography>}
        control={<Checkbox {...input} color="primary" />} />
}


